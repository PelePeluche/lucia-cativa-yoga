# Métricas de luciacativayoga.com

Esta rama (`metricas`) guarda **solo datos**, semana por semana. No tiene el código del sitio
y nunca se mezcla con `main`: lo que pase acá no cambia nada de la página publicada.

Todos los lunes se agregan automáticamente los números de la semana anterior (lunes a domingo).

## Qué hay en cada archivo

| Archivo | Qué muestra | Una fila por… |
|---|---|---|
| `datos/visitas_semanales.csv` | Visitas, páginas vistas, celular vs computadora, velocidad de carga | semana |
| `datos/paginas_semanales.csv` | Qué páginas se vieron y cuánto | semana y página |
| `datos/origen_semanal.csv` | De dónde llegó la gente (Google, Instagram, WhatsApp, directo…) | semana y origen |
| `datos/paises_semanales.csv` | Desde qué país | semana y país |
| `informes/AAAA-MM-DD.md` | Resumen de la semana que empieza ese lunes, comparado con las 4 anteriores | semana |

Los `.csv` se ven como tabla directamente en GitHub, o se abren con Excel / Google Sheets
(en Sheets: *Archivo → Importar → Subir*).

## Cómo leer los números

- **Visita:** una persona que entra al sitio desde afuera (Google, Instagram, un link…).
  Si después recorre 3 páginas, es 1 visita y 3 páginas vistas.
- **Directo:** escribió la dirección, la tenía guardada, o la app de donde venía no avisa el origen.
- **WhatsApp** aparece en Cloudflare como `l.wl.co`; **Instagram** como `l.instagram.com`.
- **Velocidad:** "la mitad de las cargas tardó menos de X segundos". Menos de 2,5 s es bueno.
- **`dato_exacto = no (estimado)`:** Cloudflare guarda exacta solo la última semana; lo más viejo
  lo guarda por muestra (redondea de a 10). Desde el 19/10/2026 cada semana se guarda exacta.

## Reglas para no sacar conclusiones apuradas

- Con ~30 visitas por semana, **una semana sola no dice nada**. Mirar tendencias de 4 semanas.
- Decidir cambios **una vez por mes**, eligiendo una sola acción por vez.
- El cambio de SEO se publicó el **18/10/2026**. Comparar antes/después recién a fines de noviembre.

## Para quien mantenga esto

```bash
node scripts/semana.mjs              # última semana completa
node scripts/semana.mjs 2026-10-12   # una semana puntual (lunes)
```

Necesita las variables `CLOUDFLARE_API_TOKEN` (permiso *Account Analytics: Read*) y
`CLOUDFLARE_ACCOUNT_ID`. Nunca se guardan en este repo.
