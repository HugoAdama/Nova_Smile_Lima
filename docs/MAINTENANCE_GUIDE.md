# Guía de Mantenimiento Operativo

Esta guía detalla el procedimiento paso a paso para realizar las tareas de mantenimiento más frecuentes en la plataforma **Nova Smile Lima**.

---

## 1. Actualización de Datos de la Clínica

Toda la información institucional está centralizada en:
📁 **[`src/data/site.ts`](file:///e:/NOVA_SMILE_LIMA/src/data/site.ts)**

```typescript
export const siteConfig = {
  name: 'Nova Smile Lima',
  phone: '+51 987 654 321',           // Teléfono público
  phoneClean: '51987654321',          // Para enlaces wa.me y tel:
  address: 'Av. Conquistadores 450, San Isidro, Lima - Perú',
  hours: 'Lunes a Viernes 8:30 am - 7:30 pm | Sábados 9:00 am - 2:00 pm',
  cop: 'COP 28419',                   // Registro Colegio Odontológico
  ruc: '20608945231',                 // RUC tributario
  // ...
};
```
> **Efecto:** Al editar este archivo, se actualizan automáticamente:
> - El encabezado y pie de página.
> - La ficha de sede en `BookingLocation.astro`.
> - El botón de WhatsApp del asistente concierge.
> - Los datos estructurados de Google (Schema.org JSON-LD).

---

## 2. Gestión del Equipo Médico

Ubicación:
📁 **[`src/data/team.ts`](file:///e:/NOVA_SMILE_LIMA/src/data/team.ts)**

Para agregar o modificar un especialista:
```typescript
{
  name: 'Dr. Andrés Salazar',
  role: 'Especialista en Rehabilitación Oral & Estética',
  cop: 'COP 28419',
  rne: 'RNE 14205',                   // Registro Nacional de Especialista
  image: '/images/doctor-andres.jpg', // Ruta en public/images/
  bio: 'Más de 14 años diseñando sonrisas naturales con porcelana bio-compatible...',
  tags: ['Carillas Feldespáticas', 'DSD', 'Sedación Consciente']
}
```
> **Requisito Ético:** Verificar que todo doctor consignado cuente con número de colegiatura COP válido y RNE si se menciona especialidad, en estricto apego a las normas del Colegio Odontológico del Perú.

---

## 3. Gestión de Tratamientos y Fichas Técnicas

Ubicación:
📁 **[`src/data/treatments.ts`](file:///e:/NOVA_SMILE_LIMA/src/data/treatments.ts)**

Cada tratamiento contiene tanto la descripción comercial como las especificaciones médicas:
```typescript
{
  id: 'ortodoncia-invisible',
  title: 'Ortodoncia Invisible & Alineadores',
  subtitle: 'Alineación precisa sin alambres, planificada digitalmente en 3D',
  icon: 'aligner',
  specSession: 'Revisiones cada 6-8 semanas',
  specDuration: '6 a 14 meses promedio',
  specWarranty: 'Refinamiento incluido',
  bullets: [
    'Escaneo intraoral 3D sin pastas molestas.',
    'Simulación del resultado final antes de iniciar.',
    'Removibles para comer y cepillarte con total libertad.'
  ]
}
```

---

## 4. Gestión de Testimonios Reales

Ubicación:
📁 **[`src/data/testimonials.ts`](file:///e:/NOVA_SMILE_LIMA/src/data/testimonials.ts)**

```typescript
{
  name: 'Jorge T.',
  initials: 'J',
  quote: 'Como ejecutivo tengo reuniones continuas y no podía usar brackets tradicionales...',
  treatment: 'Ortodoncia invisible con alineadores',
  consentVerified: true               // Muestra el chip "Verificado" con ícono check
}
```

---

## 5. Incorporación o Modificación de Íconos

El sistema no utiliza librerías de fuentes de íconos externas para maximizar el rendimiento. Los íconos son trazados SVG nativos gestionados mediante 2 pasos:

### Paso A: Registrar el nombre en el contrato de TypeScript
Editar [`src/types/index.ts`](file:///e:/NOVA_SMILE_LIMA/src/types/index.ts):
```typescript
export type IconName =
  | 'check'
  | 'x'
  | 'arrow-left'
  | 'arrow-right'
  | 'tu-nuevo-icono'; // <-- Agregar aquí
```

### Paso B: Incorporar el trazado SVG en el componente
Editar [`src/components/common/Icon.astro`](file:///e:/NOVA_SMILE_LIMA/src/components/common/Icon.astro):
```astro
{name === 'tu-nuevo-icono' && (
  <path d="M...Z" />
)}
```
> **Regla de Diseño:** Los íconos deben utilizar una cuadrícula base de `viewBox="0 0 24 24"` con `stroke-width="1.8"`, `stroke-linecap="round"` y `stroke-linejoin="round"`.

---

## 6. Acordeón de Preguntas Frecuentes (FAQs)

Ubicación:
📁 **[`src/data/faqs.ts`](file:///e:/NOVA_SMILE_LIMA/src/data/faqs.ts)**

Para agregar una nueva pregunta:
```typescript
{
  id: 'faq-nueva',
  question: '¿Qué formas de pago y financiamiento aceptan?',
  answer: 'Aceptamos todas las tarjetas de crédito y débito, transferencias bancarias y planes de financiamiento sin intereses con bancos seleccionados.',
  category: 'inversion' // Opciones: 'primera-cita' | 'alineadores' | 'implantes' | 'diseno-sonrisa' | 'inversion'
}
```
> El acordeón filtra automáticamente por categoría en tiempo real sin recargar la página.

---

## 7. Mantenimiento del Formulario y Canales de Cita

El formulario de citas se encuentra en [`src/components/sections/BookingLocation.astro`](file:///e:/NOVA_SMILE_LIMA/src/components/sections/BookingLocation.astro):
- **Envío local / simulación:** Su atributo `action` redirige a [`/gracias`](file:///e:/NOVA_SMILE_LIMA/src/pages/gracias.astro).
- **Integración con CRM / Webhook:** Para conectar con HubSpot, Salesforce o WhatsApp Business API, configurar el listener `submit` en el `<script>` de `BookingLocation.astro` mediante `fetch('/api/leads', ...)`.
