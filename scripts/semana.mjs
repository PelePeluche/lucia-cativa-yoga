// Baja las métricas de Cloudflare Web Analytics de una semana (lunes a domingo)
// y las guarda en los CSV de datos/. También escribe el informe en informes/.
//
// Uso:
//   node scripts/semana.mjs                 -> la última semana completa
//   node scripts/semana.mjs 2026-10-12      -> la semana que empieza ese lunes
//   node scripts/semana.mjs 2026-08-31 2026-10-05  -> todas las semanas entre esos lunes
//
// Si se vuelve a correr una semana, sus filas se reemplazan (no se duplican).
// Necesita CLOUDFLARE_API_TOKEN y CLOUDFLARE_ACCOUNT_ID (variables de entorno;
// en Windows también las busca en las variables de usuario).

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATOS = join(ROOT, 'datos');
const INFORMES = join(ROOT, 'informes');

function secret(name) {
  if (process.env[name]) return process.env[name].trim();
  if (process.platform === 'win32') {
    const v = execSync(
      `powershell.exe -NoProfile -Command "[Environment]::GetEnvironmentVariable('${name}','User')"`,
    ).toString().trim();
    if (v) return v;
  }
  throw new Error(`Falta la variable ${name}`);
}

const TOKEN = secret('CLOUDFLARE_API_TOKEN');
const ACCOUNT = secret('CLOUDFLARE_ACCOUNT_ID');

// ---------- fechas ----------
const addDays = (d, n) => {
  const x = new Date(d + 'T00:00:00Z');
  x.setUTCDate(x.getUTCDate() + n);
  return x.toISOString().slice(0, 10);
};
const mondayOf = (d) => {
  const day = new Date(d + 'T00:00:00Z').getUTCDay(); // 0 = domingo
  return addDays(d, -((day + 6) % 7));
};
const today = new Date().toISOString().slice(0, 10);
const lastCompleteMonday = addDays(mondayOf(today), -7);

// ---------- Cloudflare ----------
async function gql(query, variables) {
  const r = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const j = await r.json();
  if (j.errors) throw new Error('Cloudflare: ' + JSON.stringify(j.errors));
  return j.data.viewer.accounts[0];
}

const DIMS = ['requestPath', 'refererHost', 'countryName', 'deviceType'];
const QUERY = `query($acc:String!,$s:Date!,$e:Date!){viewer{accounts(filter:{accountTag:$acc}){
total:rumPageloadEventsAdaptiveGroups(limit:1,filter:{date_geq:$s,date_leq:$e}){count sum{visits} avg{sampleInterval}}
${DIMS.map((d) => `${d}:rumPageloadEventsAdaptiveGroups(limit:1000,filter:{date_geq:$s,date_leq:$e}){count sum{visits} dimensions{${d}}}`).join('\n')}
perf:rumPerformanceEventsAdaptiveGroups(limit:10,filter:{date_geq:$s,date_leq:$e}){count quantiles{pageLoadTimeP50 pageLoadTimeP75} dimensions{deviceType}}
}}}`;

// Agrupa el sitio de origen en nombres simples.
function origen(host) {
  if (!host) return 'Directo';
  const h = host.toLowerCase();
  if (h.includes('luciacativayoga.com') || h.endsWith('.pages.dev')) return 'Navegación interna';
  if (h.includes('google.')) return 'Google';
  if (h.includes('instagram.')) return 'Instagram';
  if (h === 'l.wl.co' || h.includes('whatsapp.')) return 'WhatsApp';
  if (h.includes('facebook.') || h === 'fb.me' || h === 'l.facebook.com') return 'Facebook';
  if (h.includes('tiendup.com')) return 'Tienda online';
  if (h.includes('bing.') || h.includes('duckduckgo.') || h.includes('yahoo.')) return 'Otros buscadores';
  return 'Otros sitios';
}

// ---------- CSV ----------
const esc = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
function readCsv(file) {
  if (!existsSync(file)) return [];
  const [head, ...lines] = readFileSync(file, 'utf8').trim().split('\n');
  const cols = head.split(',');
  return lines.filter(Boolean).map((l) => {
    const vals = l.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map((s) => s.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'));
    return Object.fromEntries(cols.map((c, i) => [c, vals[i] ?? '']));
  });
}
function upsertCsv(name, cols, week, rows) {
  const file = join(DATOS, name);
  const kept = readCsv(file).filter((r) => r.semana !== week);
  const all = [...kept, ...rows].sort((a, b) => a.semana.localeCompare(b.semana));
  writeFileSync(file, [cols.join(','), ...all.map((r) => cols.map((c) => esc(r[c] ?? '')).join(','))].join('\n') + '\n');
}

// ---------- una semana ----------
async function semana(week) {
  const end = addDays(week, 6);
  const a = await gql(QUERY, { acc: ACCOUNT, s: week, e: end });
  const t = a.total[0] || { count: 0, sum: { visits: 0 }, avg: { sampleInterval: 1 } };
  const exacto = t.avg.sampleInterval <= 1 ? 'si' : 'no (estimado)';
  const devices = Object.fromEntries(a.deviceType.map((r) => [r.dimensions.deviceType, r.count]));
  const perfMobile = a.perf.find((p) => p.dimensions.deviceType === 'mobile');
  const perfDesktop = a.perf.find((p) => p.dimensions.deviceType === 'desktop');
  const secs = (us) => (us == null ? '' : (us / 1e6).toFixed(2));

  upsertCsv('visitas_semanales.csv',
    ['semana', 'hasta', 'paginas_vistas', 'visitas', 'vistas_celular', 'vistas_computadora',
      'carga_celular_mediana_seg', 'carga_computadora_mediana_seg', 'dato_exacto'],
    week, [{
      semana: week, hasta: end, paginas_vistas: t.count, visitas: t.sum.visits,
      vistas_celular: devices.mobile ?? 0, vistas_computadora: devices.desktop ?? 0,
      carga_celular_mediana_seg: secs(perfMobile?.quantiles.pageLoadTimeP50),
      carga_computadora_mediana_seg: secs(perfDesktop?.quantiles.pageLoadTimeP50),
      dato_exacto: exacto,
    }]);

  upsertCsv('paginas_semanales.csv', ['semana', 'pagina', 'vistas', 'visitas_que_entraron_aca'], week,
    a.requestPath.map((r) => ({ semana: week, pagina: r.dimensions.requestPath, vistas: r.count, visitas_que_entraron_aca: r.sum.visits }))
      .sort((x, y) => y.vistas - x.vistas));

  const byOrigen = {};
  for (const r of a.refererHost) {
    const o = origen(r.dimensions.refererHost);
    if (o === 'Navegación interna') continue;
    const k = `${o}|${r.dimensions.refererHost || ''}`;
    byOrigen[k] = (byOrigen[k] || 0) + r.sum.visits;
  }
  upsertCsv('origen_semanal.csv', ['semana', 'origen', 'sitio', 'visitas'], week,
    Object.entries(byOrigen).filter(([, v]) => v > 0).map(([k, v]) => {
      const [o, h] = k.split('|');
      return { semana: week, origen: o, sitio: h, visitas: v };
    }).sort((x, y) => y.visitas - x.visitas));

  upsertCsv('paises_semanales.csv', ['semana', 'pais', 'vistas', 'visitas'], week,
    a.countryName.map((r) => ({ semana: week, pais: r.dimensions.countryName || '?', vistas: r.count, visitas: r.sum.visits }))
      .sort((x, y) => y.vistas - x.vistas));

  console.log(`${week}..${end}: ${t.count} páginas vistas, ${t.sum.visits} visitas, exacto: ${exacto}`);
}

// ---------- informe ----------
function informe(week) {
  const sem = readCsv(join(DATOS, 'visitas_semanales.csv'));
  const cur = sem.find((r) => r.semana === week);
  if (!cur) return;
  const prev = sem.filter((r) => r.semana < week).slice(-4);
  const avg = (k) => (prev.length ? prev.reduce((s, r) => s + Number(r[k]), 0) / prev.length : null);
  const cmp = (v, a) => (a == null ? '' : a === 0 ? '' : ` (promedio de las 4 semanas anteriores: ${a.toFixed(0)}, ${v >= a ? '+' : ''}${(((v - a) / a) * 100).toFixed(0)}%)`);

  const orig = readCsv(join(DATOS, 'origen_semanal.csv')).filter((r) => r.semana === week);
  const totO = {};
  for (const r of orig) totO[r.origen] = (totO[r.origen] || 0) + Number(r.visitas);
  const sumO = Object.values(totO).reduce((s, v) => s + v, 0);
  const pags = readCsv(join(DATOS, 'paginas_semanales.csv')).filter((r) => r.semana === week).slice(0, 5);

  const lines = [
    `# Semana del ${week} al ${cur.hasta}`,
    '',
    cur.dato_exacto === 'si' ? '' : '> Números estimados por Cloudflare (semana vieja): tomalos como aproximados.\n',
    `- **Visitas:** ${cur.visitas}${cmp(Number(cur.visitas), avg('visitas'))}`,
    `- **Páginas vistas:** ${cur.paginas_vistas}${cmp(Number(cur.paginas_vistas), avg('paginas_vistas'))}`,
    `- **Celular / computadora:** ${cur.vistas_celular} / ${cur.vistas_computadora} páginas vistas`,
    cur.carga_celular_mediana_seg ? `- **Velocidad en celular:** la mitad de las cargas tardó menos de ${cur.carga_celular_mediana_seg} s` : '',
    '',
    '## De dónde llegó la gente',
    '',
    '| Origen | Visitas | % |',
    '|---|---|---|',
    ...Object.entries(totO).sort((x, y) => y[1] - x[1]).map(([o, v]) => `| ${o} | ${v} | ${sumO ? Math.round((v / sumO) * 100) : 0}% |`),
    '',
    '## Páginas más vistas',
    '',
    '| Página | Vistas |',
    '|---|---|',
    ...pags.map((p) => `| ${p.pagina} | ${p.vistas} |`),
    '',
  ];
  mkdirSync(INFORMES, { recursive: true });
  writeFileSync(join(INFORMES, `${week}.md`), lines.filter((l, i, arr) => !(l === '' && arr[i - 1] === '')).join('\n'));
}

// ---------- main ----------
mkdirSync(DATOS, { recursive: true });
const [from = lastCompleteMonday, to = from] = process.argv.slice(2).map(mondayOf);
for (let w = from; w <= to; w = addDays(w, 7)) {
  await semana(w);
  informe(w);
}
