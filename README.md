# Nova Smile Lima — Clínica Dental Boutique

> [!NOTE]
> **Proyecto Demo Funcional:** Esta plataforma es una **demostración funcional y prototipo interactivo de alta fidelidad** diseñado para exhibir arquitectura web moderna, rendimiento estático y experiencia de usuario (UX/UI) en el sector de salud boutique. Los formularios de agendamiento, el asistente Concierge, el libro de reclamaciones y las interacciones son 100% operativos a nivel de interfaz de usuario con fines demostrativos.
> 
> 🌐 **Demo en vivo (GitHub Pages):** [https://hugoadama.github.io/Nova_Smile_Lima/](https://hugoadama.github.io/Nova_Smile_Lima/)

Sitio web corporativo y plataforma de captación de pacientes para **Nova Smile Lima**, concepto de clínica odontológica boutique en San Isidro, Lima, Perú.

Desarrollado con **Astro 7.x** (`^7.3.8`), TypeScript estricto y CSS nativo de alta gama sin sobrecarga de librerías en tiempo de ejecución.

---

## 📚 Documentación Técnica & Mantenimiento

Toda la documentación arquitectónica, guías de estilo y manuales operativos se encuentran organizados en la carpeta **[`docs/`](./docs/README.md)**:

1. **[Arquitectura & Separación de Responsabilidades (`docs/ARCHITECTURE.md`)](./docs/ARCHITECTURE.md)**
   - Estructura de 8 capas (Datos, Tipos, Estilos, Comunes, Layout, Secciones, Cascarón, Enrutamiento).
   - Componentes activos vs componentes modulares de reserva.
2. **[Guía de Mantenimiento Operativo (`docs/MAINTENANCE_GUIDE.md`)](./docs/MAINTENANCE_GUIDE.md)**
   - Procedimiento para editar doctores, tratamientos, testimonios, FAQs y números de contacto sin tocar el código visual.
   - Creación y registro de nuevos íconos vectoriales SVG.
3. **[Sistema de Diseño & Guía de Estilo (`docs/STYLE_GUIDE.md`)](./docs/STYLE_GUIDE.md)**
   - Tokens cromáticos (Azul Marino `#0A2540`, Oro `#C6A15B`, Marfil `#F7F3EC`).
   - Escala tipográfica calibrada y política estricta "Zero Emojis".
4. **[Operaciones, Compilación & Despliegue (`docs/DEPLOYMENT_OPERATIONS.md`)](./docs/DEPLOYMENT_OPERATIONS.md)**
   - Flujo de trabajo con Astro Dev en segundo plano (`astro dev --background`).
   - Compilación estática (`npm run build`) y checklist de despliegue.
5. **[Tecnologías & Aprendizajes de Ingeniería (`docs/TECNOLOGIAS_Y_APRENDIZAJES.md`)](./docs/TECNOLOGIAS_Y_APRENDIZAJES.md)**
   - Stack tecnológico completo (Astro, TypeScript, Vanilla CSS, Vite).
   - Retos técnicos superados (Scoped CSS de Astro, Zero Emojis, Grillas Simétricas, Optimización de micro-textos y Concierge FAB).

---

## 🚀 Inicio Rápido

### Instalación de dependencias:
```bash
npm install
```

### Ejecutar el servidor de desarrollo:
```bash
npm run dev
# o en segundo plano:
astro dev --background
```
El sitio se servirá en `http://127.0.0.1:4321`.

### Generar bundle de producción:
```bash
npm run build
```

---

## ⚖️ Marco Legal & Cumplimiento Normativo
- **Ley N° 29733:** Protección de Datos Personales del Perú.
- **Colegio Odontológico del Perú (COP):** Respeto a los códigos deontológicos de publicidad médica veraz y acreditaciones profesionales (COP / RNE).
- **Indecopi:** Implementación del Libro de Reclamaciones Virtual en [`/libro-de-reclamaciones`](./src/pages/libro-de-reclamaciones.astro).
