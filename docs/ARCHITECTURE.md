# Arquitectura del Sistema & Separación de Responsabilidades

Este documento define la estructura de capas de **Nova Smile Lima** y las directrices para mantener el código desacoplado, legible y de bajo costo de mantenimiento.

---

## 1. Mapa de Capas Arquitectónicas

```
e:\NOVA_SMILE_LIMA\src\
├── types/          ──> [Capa 1: Contratos & Tipado Estricto]
├── data/           ──> [Capa 2: Fuente Única de Verdad (Single Source of Truth)]
├── styles/         ──> [Capa 3: Tokens de Diseño & Utilidades Globales]
├── components/
│   ├── common/     ──> [Capa 4: Componentes Atómicos Reutilizables]
│   ├── layout/     ──> [Capa 5: Estructura Global y Soporte]
│   └── sections/   ──> [Capa 6: Hubs & Secciones de Alto Impacto]
├── layouts/        ──> [Capa 7: Cascarón Base HTML & Metaetiquetas]
└── pages/          ──> [Capa 8: Enrutamiento Estático (SSG)]
```

---

## 2. Detalle de Responsabilidades por Capa

### Capa 1: Contratos & Tipado (`src/types/`)
- **Propósito:** Definir interfaces y tipos TypeScript rigurosos para toda la entidad del dominio clínico.
- **Archivo principal:** [`src/types/index.ts`](file:///e:/NOVA_SMILE_LIMA/src/types/index.ts)
- **Regla:** Ningún componente o archivo de datos debe inventar estructuras al vuelo (`any`). Si se agrega un nuevo campo (ej. `rne` o `whatsapp`), primero debe declararse en la interfaz correspondiente (`Doctor`, `Treatment`, `Testimonial`, `IconName`).

### Capa 2: Datos de Negocio (`src/data/`)
- **Propósito:** Alojar exclusivamente los datos de contenido (textos, médicos, precios referenciales, preguntas frecuentes, configuración general).
- **Archivos:**
  - `site.ts`: Nombre, teléfonos, dirección, RUC, enlaces sociales globales.
  - `team.ts`: Médicos especialistas, credenciales COP/RNE, biografías y fotos.
  - `treatments.ts`: Procedimientos dentales, detalles y especificaciones técnicas.
  - `testimonials.ts`: Historias clínicas de pacientes reales y consentimientos.
  - `faqs.ts`: Base de conocimiento de preguntas frecuentes agrupadas por categoría.
  - `navigation.ts`: Enlaces de navegación del menú superior y pie de página.
- **Regla de Oro:** **Nunca escribir copys clínicos directamente en el HTML de los componentes**. Modificar siempre el archivo de datos correspondiente para que las vistas se actualicen de manera declarativa.

### Capa 3: Estilos & Tokens (`src/styles/`)
- **`tokens.css`**: Define las variables CSS universales (`--azul`, `--oro`, `--marfil`, radios de borde, tipografías, transiciones).
- **`global.css`**: Define el reset, tipografía base (`html`, `body`, encabezados `h1`-`h4`), botones (`.btn`), insignias (`.insignia`) y utilidades de espaciado (`.seccion`, `.contenedor`).
- **Regla:** Los componentes no deben declarar valores hexadecimales repetidos; deben consumir tokens CSS para asegurar coherencia visual.

### Capa 4: Componentes Atómicos Comunes (`src/components/common/`)
- **Archivos:** `Icon.astro`, `Badge.astro`, `Logo.astro`, `SectionHeader.astro`.
- **Propósito:** Elementos de UI sin dependencias complejas de estado.
- **Ejemplo clave (`Icon.astro`):** Contiene todos los trazados vectoriales nativos en SVG sin dependencias de fuentes de íconos externas, asegurando carga instantánea y cero desajustes de renderizado.

### Capa 5: Layout Estructural (`src/components/layout/`)
- **Archivos:** `Header.astro`, `Footer.astro`, `ConciergeModal.astro`, `CookieBanner.astro`.
- **Propósito:** Marco persistente de la experiencia de usuario:
  - `Header`: Navegación responsive con burger menu accesible.
  - `Footer`: Pie de página simétrico de 4 columnas con compromisos deontológicos y Libro de Reclamaciones.
  - `ConciergeModal`: Botón flotante único (FAB) y modal interactivo de triaje con derivación directa a WhatsApp.
  - `CookieBanner`: Banner de consentimiento legal conforme a la Ley N° 29733.

### Capa 6: Secciones de la Landing (`src/components/sections/`)
Para optimizar el flujo de conversión y evitar la sobrecarga cognitiva del usuario, las secciones se organizan en **Hubs Unificados**:

| Sección Activa en `index.astro` | Rol Clínico & Conversión | Componentes Integrados |
| :--- | :--- | :--- |
| **`Hero.astro`** | Propuesta de valor, autoría, credenciales rápidas y CTA principal. | Formulario rápido y fichas flotantes de excelencia. |
| **`TrustBar.astro`** | Cuadrícula simétrica 2x2 con garantías clínicas de alto impacto. | Diagnóstico 3D, sedación serena, COP y puntualidad. |
| **`Contrast.astro`** | Tabla comparativa "Odontología Convencional vs. Experiencia Nova Smile". | Listado de valor diferencial y lema de bienvenida. |
| **`SolutionsHub.astro`** | Soluciones clínicas en pestañas interactivas 50/50. | Ficha médica técnica + fotografía clínica + beneficios clave. |
| **`AuthorityExperience.astro`** | Autoridad médica, metodología y prueba social. | Cuerpo médico colegiado + 4 pasos Serene Flow + Carrusel auto-deslizante de testimonios. |
| **`BookingLocation.astro`** | Punto central de conversión y visita presencial. | Pabellón Sede San Isidro + Formulario de Evaluación + Acordeón de FAQs categorizado. |

> **Nota para mantenedores:** Existen componentes modulares independientes de respaldo en `src/components/sections/` (`Treatments.astro`, `Testimonials.astro`, `Process.astro`, `Team.astro`, `Location.astro`, `FaqSection.astro`). Estos pueden utilizarse en páginas dedicadas o de aterrizaje específico si se requiere mayor extensión temática.

### Capa 7 & 8: Cascarón & Enrutamiento (`src/layouts/` y `src/pages/`)
- **`Layout.astro`**: Inyecta fuentes de Google (`Cormorant Garamond`, `Inter`, `Montserrat`), Favicons, Schema.org de tipo `Dentist / MedicalClinic`, y metaetiquetas SEO canónicas.
- **`src/pages/`**:
  - `/`: Página de inicio comercial y clínica.
  - `/blog`: Blog educativo de salud dental y estética.
  - `/gracias`: Pantalla de confirmación y seguimiento post-reserva de cita.
  - `/libro-de-reclamaciones`: Formulario oficial de reclamaciones según directivas de Indecopi.
  - `/politica-privacidad`: Marco legal de privacidad de datos personales.
  - `/politica-cookies`: Transparencia técnica sobre cookies y analítica.

---

## 3. Beneficios de Esta Arquitectura

1. **Facilidad de Actualización:** Un cambio en el teléfono o dirección en `src/data/site.ts` se propaga de forma instantánea al Header, Footer, Sede, Modal de Concierge y Rich Snippets de Schema.org.
2. **Prevención de Errores Visuales:** Modificar un token en `tokens.css` mantiene la armonía cromática y tipográfica sin romper la identidad de marca.
3. **Escalabilidad Multi-Página:** Permite agregar páginas de servicios específicos (ej. `/alineadores-invisibles`) reutilizando directamente componentes de `src/components/` y datos de `src/data/`.
