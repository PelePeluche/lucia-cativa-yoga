# Instrucciones para Configurar SEO y Google Search Console

## ✅ Cambios Implementados

1. **Dominio actualizado en `astro.config.mjs`**: `https://luciacativayoga.com`
2. **Archivo `_redirects` creado**: Redirige automáticamente `.pages.dev` → `luciacativayoga.com`
3. **Structured Data actualizado**: Usa el dominio correcto
4. **robots.txt actualizado**: Apunta al sitemap correcto

## 🚀 Pasos Siguientes (IMPORTANTE)

### 1. Desplegar los Cambios
```bash
npm run build
git add .
git commit -m "fix: Update domain to luciacativayoga.com for SEO"
git push
```

### 2. Verificar Redirecciones en Cloudflare
- Ve a tu dashboard de Cloudflare Pages
- Verifica que el archivo `_redirects` esté funcionando
- Prueba accediendo a `https://lucia-cativa-yoga.pages.dev` → debe redirigir a `luciacativayoga.com`

### 3. Configurar Google Search Console

#### A. Agregar el nuevo dominio
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz clic en "Agregar propiedad"
3. Selecciona "Prefijo de URL"
4. Ingresa: `https://luciacativayoga.com`
5. Verifica la propiedad usando uno de estos métodos:
   - **Archivo HTML** (más fácil): Descarga el archivo y súbelo a `/public/`
   - **Etiqueta HTML**: Agrega el meta tag en `Layout.astro`
   - **Google Analytics**: Si ya lo tienes configurado
   - **DNS**: Agrega un registro TXT en Cloudflare

#### B. Enviar el sitemap
1. Una vez verificado, ve a "Sitemaps" en el menú lateral
2. Ingresa: `sitemap.xml`
3. Haz clic en "Enviar"

#### C. Solicitar cambio de dirección (Change of Address)
1. En Search Console, selecciona la propiedad antigua (`lucia-cativa-yoga.pages.dev`)
2. Ve a "Configuración" → "Cambio de dirección"
3. Selecciona la nueva propiedad (`luciacativayoga.com`)
4. Sigue los pasos de validación

### 4. Forzar Re-indexación

#### A. Solicitar indexación de páginas principales
1. En Search Console, ve a "Inspección de URLs"
2. Ingresa cada URL importante:
   - `https://luciacativayoga.com/`
   - `https://luciacativayoga.com/en/`
   - Otras páginas importantes
3. Haz clic en "Solicitar indexación"

#### B. Usar la herramienta de eliminación (opcional)
1. Ve a "Eliminaciones" en el menú
2. Solicita eliminar las URLs antiguas de `.pages.dev`
3. Esto acelera el proceso de actualización

### 5. Actualizar Enlaces Externos

Actualiza los enlaces en:
- ✅ Instagram bio → `https://luciacativayoga.com`
- ✅ Facebook página → `https://luciacativayoga.com`
- ✅ Cualquier directorio o listado donde estés registrada
- ✅ Tarjetas de presentación digitales
- ✅ Firma de email

### 6. Monitorear el Progreso

En Google Search Console, revisa:
- **Cobertura**: Verifica que las páginas se indexen correctamente
- **Rendimiento**: Monitorea las impresiones y clics
- **Experiencia**: Revisa Core Web Vitals

## ⏱️ Tiempo Estimado

- **Redirecciones**: Inmediato después del deploy
- **Google re-crawl**: 1-7 días
- **Actualización en resultados**: 2-4 semanas
- **Transferencia completa de ranking**: 4-8 semanas

## 🔍 Verificación

Para verificar que todo funciona:

1. **Redirección**:
   ```bash
   curl -I https://lucia-cativa-yoga.pages.dev
   # Debe mostrar: 301 Moved Permanently
   # Location: https://luciacativayoga.com
   ```

2. **Canonical URL**:
   - Abre el código fuente de tu sitio
   - Busca: `<link rel="canonical" href="https://luciacativayoga.com/"/>`

3. **Sitemap**:
   - Visita: `https://luciacativayoga.com/sitemap.xml`
   - Verifica que todas las URLs usen `luciacativayoga.com`

## 📝 Notas Importantes

- ⚠️ **NO elimines el dominio antiguo** de Cloudflare hasta que Google complete la migración
- ✅ Las redirecciones 301 preservan el SEO ranking
- 📊 Monitorea Search Console semanalmente durante el primer mes
- 🔄 El proceso es gradual, ten paciencia

## 🆘 Solución de Problemas

### Si Google sigue mostrando el dominio antiguo después de 2 semanas:

1. Verifica que las redirecciones 301 funcionen correctamente
2. Confirma que el sitemap esté accesible
3. Solicita indexación manual de las páginas principales
4. Revisa que no haya errores en Search Console
5. Asegúrate de que el canonical URL esté correcto en todas las páginas

### Si las redirecciones no funcionan:

1. Verifica que el archivo `_redirects` esté en `/public/`
2. Confirma que se haya desplegado correctamente
3. Revisa la configuración de DNS en Cloudflare
4. Contacta al soporte de Cloudflare Pages si persiste el problema
