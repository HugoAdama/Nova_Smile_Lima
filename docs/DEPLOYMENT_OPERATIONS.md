# Operaciones, Compilación & Despliegue

Este documento contiene las instrucciones operativas para ejecutar el entorno local, verificar la compilación y desplegar el proyecto a producción.

---

## 1. Comandos de Desarrollo

El proyecto utiliza Astro con soporte para ejecución en segundo plano:

### Iniciar el servidor local en segundo plano:
```bash
astro dev --background
```
El servidor se iniciará en `http://127.0.0.1:4321`.

### Gestión del proceso en segundo plano:
- **Verificar estado:** `astro dev status`
- **Revisar registros (logs):** `astro dev logs`
- **Detener el servidor:** `astro dev stop`

### Ejecución estándar (foreground):
```bash
npm run dev
# o con host explícito:
npm run dev -- --host 127.0.0.1
```

---

## 2. Compilación de Producción (Build)

Para generar la versión estática de alto rendimiento:

```bash
npm run build
```

### Proceso de generación:
1. **Generación de Tipos de Astro:** Sincroniza `.astro/types.d.ts`.
2. **Optimización con Vite:** Minifica CSS y empaqueta scripts de cliente.
3. **Generación de Rutas Estáticas (SSG):**
   - `dist/index.html` (Landing principal)
   - `dist/blog/index.html` (Listado del blog)
   - `dist/gracias/index.html` (Confirmación de cita)
   - `dist/libro-de-reclamaciones/index.html` (Libro oficial)
   - `dist/politica-privacidad/index.html` (Privacidad)
   - `dist/politica-cookies/index.html` (Cookies)

### Vista previa local del bundle final:
```bash
npm run preview
```

---

## 3. Checklist de Control de Calidad Pre-Despliegue

Antes de subir cambios a producción o a un repositorio remoto, ejecutar las siguientes validaciones:

- [ ] **Compilación limpia:** `npm run build` debe terminar con `exit code 0` sin errores de compilación ni advertencias de módulos no resueltos.
- [ ] **Sincronización de TypeScript:** `npx astro sync` debe resolver todos los tipos sin errores en `tsconfig.json`.
- [ ] **Cero emojis:** Ningún texto o código debe contener emojis; verificar que los íconos se rendericen vía `Icon.astro`.
- [ ] **Enlaces de navegación:** Comprobar que los anclajes (`/#tratamientos`, `/#equipo`, `/#contacto`) y enlaces internos (`/blog`, `/libro-de-reclamaciones`) funcionen fluidamente.
- [ ] **Formularios & WhatsApp:** Verificar que los enlaces `wa.me` incluyan el número limpio `51987654321` y los textos codificados correctamente.
- [ ] **Responsive Design:** Probar el comportamiento en anchos de pantalla móvil (`360px`, `414px`), tablet (`768px`) y escritorio (`1200px+`).

---

## 4. Estrategia de Despliegue en Producción

Al ser un sitio web puramente estático (SSG), el directorio `dist/` puede desplegarse en cualquier red global CDN con coste de infraestructura casi nulo y máxima velocidad:

### Opciones recomendadas:
1. **Cloudflare Pages:**
   - Comando de compilación: `npm run build`
   - Directorio de salida: `dist`
   - Ventaja: Caché perimetral global gratuita y protección DDoS automática.
2. **Vercel / Netlify:**
   - Detección automática de framework Astro.
   - Directorio de salida: `dist`.
3. **Servidor Nginx / Apache Tradicional:**
   - Copiar el contenido de `dist/` a la raíz del servidor web (ej. `/var/www/html/`).

---

## 5. SEO & Metadatos Clínicos

El sitio incluye en [`src/layouts/Layout.astro`](file:///e:/NOVA_SMILE_LIMA/src/layouts/Layout.astro):
- **Metaetiquetas OpenGraph & Twitter Cards:** Para compartición rica en WhatsApp, Facebook y LinkedIn.
- **Datos Estructurados Schema.org:**
  - Tipo: `Dentist` / `MedicalClinic`
  - Incluye: Geolocalización en San Isidro, teléfono internacional, horarios de atención y especialidades.
- **Canónicas limpias:** Para evitar duplicidad de contenido indexado.
