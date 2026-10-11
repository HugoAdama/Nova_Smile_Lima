# Nova Smile Lima — Documentación Técnica del Sistema

Bienvenido a la documentación técnica y operativa de **Nova Smile Lima**, plataforma web boutique construida sobre **Astro 7.x** (`^7.3.8`), TypeScript y CSS nativo modular.

Esta carpeta contiene las guías de arquitectura, mantenimiento, diseño y operaciones diseñadas para que cualquier desarrollador o mantenedor pueda iterar de forma ordenada, escalable y sin introducir regresiones visuales o de rendimiento.

---

## Estructura de la Documentación

| Documento | Enfoque Principal | Audiencia |
| :--- | :--- | :--- |
| **[1. Arquitectura & Separación de Responsabilidades](./ARCHITECTURE.md)** | Capas del sistema, flujo de datos, modularidad de componentes y taxonomía de páginas. | Desarrolladores Frontend / Arquitectos |
| **[2. Guía de Mantenimiento Operativo](./MAINTENANCE_GUIDE.md)** | Cómo actualizar médicos, tratamientos, testimonios, FAQs, íconos y formularios sin tocar la vista. | Mantenedores / Desarrolladores |
| **[3. Sistema de Diseño & Estilo Visual](./STYLE_GUIDE.md)** | Tokens de diseño, tipografía, paleta cromática de lujo, accesibilidad y política cero-emojis. | UI/UX Designers / Desarrolladores |
| **[4. Operaciones, Compilación & Despliegue](./DEPLOYMENT_OPERATIONS.md)** | Comandos de desarrollo en segundo plano, compilación estática, validaciones pre-deploy y SEO. | DevOps / Desarrolladores |
| **[5. Tecnologías & Aprendizajes de Ingeniería](./TECNOLOGIAS_Y_APRENDIZAJES.md)** | Stack tecnológico completo, retos técnicos superados, lecciones de Astro y diseño de conversión. | Desarrolladores / Mantenedores / Líderes Técnicos |

---

## Principios Fundamentales del Proyecto

1. **Separación de Responsabilidades (SoC):** Los datos clínicos residen en `src/data/`, las estructuras en `src/components/`, los contratos en `src/types/` y la estética en `src/styles/`.
2. **Cero Dependencias Pesadas en Runtime:** Renderizado estático puro con Astro (SSG), cero frameworks JS pesados en el cliente para lograr puntuaciones perfectas en Core Web Vitals (LCP, INP, CLS).
3. **Cero Emojis:** Toda la iconografía utiliza trazados vectoriales SVG limpios vía `Icon.astro` para preservar la identidad boutique de alta gama.
4. **Respeto a las Normativas Peruanas:** Cumplimiento con la **Ley N° 29733** (Protección de Datos Personales), Código Deontológico del **Colegio Odontológico del Perú (COP)** y directivas del **Libro de Reclamaciones (Indecopi)**.
