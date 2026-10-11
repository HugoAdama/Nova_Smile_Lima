# Tecnologías, Stack & Aprendizajes de Ingeniería

Este documento recopila el **stack tecnológico integral** utilizado en **Nova Smile Lima**, las decisiones de arquitectura que fundamentaron su elección y los **aprendizajes clave** adquiridos durante el diseño, optimización y refactorización del proyecto.

---

## 1. Stack Tecnológico Integral

| Área | Tecnología | Versión / Tipo | Justificación de Elección |
| :--- | :--- | :--- | :--- |
| **Framework Base** | **[Astro](https://astro.build)** | `^7.3.8` | Generación estática pura (SSG), compilador ultrarrápido sobre Node 22+, cero JavaScript innecesario enviado al cliente, carga instantánea y excelente puntuación en Core Web Vitals (LCP < 1.0s). |
| **Tipado & Lógica** | **[TypeScript](https://www.typescriptlang.org/)** | `^5.x` (Strict) | Contratos de datos rigurosos para entidades médicas (doctores, tratamientos, testimonios, iconos) que previenen errores de compilación antes del despliegue. |
| **Estilos & Diseño** | **Vanilla CSS Nativo** | Modern CSS | Control total de animaciones, transiciones cúbicas y variables de diseño (Tokens). Evita la sobrecarga y clases rígidas de librerías como Tailwind o Bootstrap. |
| **Capacidades CSS** | CSS Variables, Grid & Flexbox | Modern CSS | `clamp()` para tipografía fluida responsiva, `backdrop-filter: blur()` para efecto glassmorphism, y `:focus-visible` para accesibilidad. |
| **Iconografía** | **SVG Vectorial Nativo** | Inline SVGs | Cero dependencias de fuentes de iconos externas (evita saltos de maquetación FOUT y peticiones HTTP adicionales). |
| **Tipografía** | **Google Fonts CDN** | Preconnect | `Cormorant Garamond` (Elegancia clásica editorial en títulos), `Inter` (Claridad de lectura médica en párrafos) y `Montserrat` (Firmeza en botones y etiquetas). |
| **Datos Estructurados** | **Schema.org JSON-LD** | `Dentist` / `MedicalClinic` | Indexación enriquecida en Google Search con horarios, dirección en San Isidro, teléfono y acreditaciones clínicas. |
| **Empaquetador** | **Vite** | Integrado en Astro | HMR instantáneo en desarrollo y optimización/minificación eficiente en el bundle estático de producción. |

---

## 2. Aprendizajes Clave de Ingeniería & Soluciones Aplicadas

A lo largo del desarrollo y refinamiento de la plataforma se enfrentaron diversos retos técnicos y de diseño. A continuación se documentan las lecciones y soluciones implementadas:

---

### Aprendizaje 1: El Aislamiento de Estilos de Astro (*Scoped CSS*) y los Componentes Hijos
- **El Reto:** Se intentó crear una flecha hacia la izquierda reutilizando el icono derecho con una clase CSS rotatoria (`<Icon name="arrow-right" class="icono-reversa" />` con `transform: rotate(180deg)`). En el navegador, ambas flechas seguían apuntando hacia la derecha (`→` `→`).
- **Causa Raíz:** Astro aísla los estilos CSS agregando atributos `[data-astro-cid-xxxx]` a cada etiqueta HTML generada por el componente actual. Como `<svg>` está dentro del componente hijo [`Icon.astro`](file:///e:/NOVA_SMILE_LIMA/src/components/common/Icon.astro), la regla con hash del componente padre nunca llegó a aplicarse al SVG.
- **Lección & Solución:**
  - **No usar hacks CSS de transformación para iconos direccionales.**
  - Se implementó un trazado SVG nativo independiente para `arrow-left` (`<path d="M19 12H5M12 19l-7-7 7-7" />`) y se tipó formalmente en `IconName`. De esta forma, el renderizado es directo, determinista y libre de desajustes de rotación.

---

### Aprendizaje 2: Filosofía "Zero Emojis" para Identidad de Lujo
- **El Reto:** Los emojis tradicionales de los sistemas operativos (🦷, ✨, 📍, ⭐, 📞) varían según el dispositivo (iOS, Android, Windows), pierden definición en pantallas oscuras y transmiten una imagen informal propia de aplicaciones de mensajería.
- **Causa Raíz:** Inconsistencia de renderizado y degradación de la identidad visual de una clínica odontológica de alta gama en San Isidro.
- **Lección & Solución:**
  - Se erradicaron todos los emojis del código fuente.
  - Se reemplazaron por iconos vectoriales SVG limpios con color corporativo (`--oro`, `--azul`), escalables y uniformes en cualquier sistema operativo.

---

### Aprendizaje 3: Simetría Visual y Equilibrio de Cuadrículas
- **El Reto:** Inicialmente, algunas secciones presentaban desequilibrio visual:
  - La barra de confianza (`TrustBar`) tenía 3 elementos con anchos variables que dejaban espacios vacíos asimétricos.
  - El catálogo de tratamientos tenía tarjetas con alturas de texto dispares que quebraban la línea de base.
- **Lección & Solución:**
  - **Cuadrículas Simétricas:** `TrustBar` se reestructuró a una grilla balanceada de 2x2 columnas idénticas.
  - **Distribución 50 / 50 en Hubs:** `SolutionsHub` se balanceó con la columna izquierda para texto explicativo y CTAs, y la derecha para la fotografía clínica más una ficha médica de especificaciones técnicas.
  - **Flexbox con `margin-top: auto`:** Los botones y pies de tarjetas siempre se alinean perfectamente en la base inferior sin importar la longitud de la descripción médica.

---

### Aprendizaje 4: Calibración de Micro-textos y Accesibilidad Visual
- **El Reto:** Varios elementos informativos (chips de colegiatura, tags de especialistas, sellos éticos y referencias) utilizaban tamaños entre `0.65rem` y `0.74rem` (~10px - 11px), lo cual generaba fatiga visual y no cumplía con los estándares recomendados de legibilidad en pantallas de alta densidad.
- **Lección & Solución:**
  - Se estableció una regla de **piso mínimo tipográfico:** ningún micro-texto debe ser menor a `0.78rem` – `0.84rem`.
  - Los párrafos generales se fijaron en `1.0625rem` (17px) con `line-height: 1.65`, garantizando una lectura cómoda y relajada que transmite la promesa de serenidad de la clínica.

---

### Aprendizaje 5: Unificación de Canales Flotantes en un Único Concierge FAB
- **El Reto:** La coincidencia de un botón flotante verde de WhatsApp más un chatbot independiente y badges flotantes generaba "ruido de conversión" (*conversion clutter*), tapaba textos del footer y saturaba al paciente en móviles.
- **Lección & Solución:**
  - Se unificó toda la asistencia en un **Concierge Flotante Único** con los colores sobrios de la clínica (Azul Profundo & Oro), eliminando colores que rompían la paleta.
  - El modal ofrece triaje clínico interactivo y deriva las consultas complejas directamente al WhatsApp oficial con el mensaje pre-redactado, mejorando la tasa de contacto efectivo.

---

### Aprendizaje 6: Separación Estricta de Datos vs. Presentación
- **El Reto:** En proyectos sin arquitectura definida, cambiar un número de contacto, un médico o un precio requiere editar múltiples archivos `.astro`, arriesgando romper clases CSS o etiquetas HTML.
- **Lección & Solución:**
  - Se creó la capa `src/data/` como **Fuente Única de Verdad**.
  - Los componentes de la vista son meros consumidores de datos tipados. Modificar `site.ts`, `team.ts` o `treatments.ts` actualiza toda la plataforma de forma automática y segura.
