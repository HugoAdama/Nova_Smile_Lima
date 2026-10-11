import type {
  Requirement,
  MetricComparison,
  ProjectPhase,
  KeyLearning,
  PortfolioDeliverable
} from '../types';

export const caseStudyNarrative = {
  problem: {
    title: 'El Problema',
    text: 'Nova Smile Lima tenía excelente reputación offline, pero su presencia digital no reflejaba su nivel. La web era genérica, sin agenda online, con mensajes centrados en precio y baja captación de pacientes de alto valor.'
  },
  process: {
    title: 'El Proceso',
    text: 'Se realizó research de mercado, benchmark de clínicas premium en Lima, entrevistas a pacientes, definición de arquetipo, naming, identidad verbal/visual, arquitectura UX, wireframes, copies y prototipo en Figma.'
  },
  solution: {
    title: 'La Solución',
    text: 'Se creó una marca boutique premium, con landing page enfocada en confianza, tecnología y estética natural. Se integró agenda online, WhatsApp, CRM y SEO local con una arquitectura modular y performante en Astro.'
  },
  learnings: {
    title: 'Aprendizajes Estratégicos',
    text: 'Premium no es lujo visual superficial, es claridad y confianza. El CTA correcto es "reservar evaluación", no "comprar". La ética médica es parte de la experiencia de marca. Medir citas efectivas, no solo clics.'
  },
  closing: {
    title: 'Cierre del Caso',
    text: 'Nova Smile Lima demuestra que una clínica dental puede atraer más pacientes sin competir por precio. La clave está en construir una marca premium desde la confianza, la innovación, la claridad y una experiencia digital que convierta visitas en citas.'
  }
};

export const functionalRequirements: Requirement[] = [
  { id: 'RF-09', name: 'Blog/educación', priorityOrMetric: 'Media', description: 'Artículos con categorías y SEO' },
  { id: 'RF-10', name: 'Testimonios', priorityOrMetric: 'Media', description: 'Módulo editable con consentimiento explícito' },
  { id: 'RF-11', name: 'Galería antes/después', priorityOrMetric: 'Media', description: 'Solo con consentimiento y sin retoques engañosos' },
  { id: 'RF-12', name: 'Multi-idioma', priorityOrMetric: 'Baja', description: 'Español/inglés preparado para localización' },
  { id: 'RF-13', name: 'Chatbot', priorityOrMetric: 'Baja', description: 'FAQ automatizadas y asistente de citas' },
  { id: 'RF-14', name: 'Panel de roles', priorityOrMetric: 'Media', description: 'Admin, editor, recepción' },
  { id: 'RF-15', name: 'Backups', priorityOrMetric: 'Alta', description: 'Copias automáticas semanales' }
];

export const nonFunctionalRequirements: Requirement[] = [
  { id: 'RNF-01', name: 'Rendimiento', priorityOrMetric: 'LCP < 2.5s, CLS < 0.1, PageSpeed > 90', description: 'Optimización de Core Web Vitals y activos estáticos' },
  { id: 'RNF-02', name: 'Accesibilidad', priorityOrMetric: 'WCAG 2.1 AA, contraste, teclado', description: 'Navegación accesible, contraste cromático y focus visible' },
  { id: 'RNF-03', name: 'Seguridad', priorityOrMetric: 'HTTPS, SSL, WAF, anti-DDoS', description: 'Canales cifrados y protección de datos médicos' },
  { id: 'RNF-04', name: 'Disponibilidad', priorityOrMetric: 'Uptime 99.9%', description: 'Infraestructura estática distribuida globalmente en Edge' },
  { id: 'RNF-05', name: 'Escalabilidad', priorityOrMetric: 'Picos de tráfico en campañas', description: 'Arquitectura desacoplada sin sobrecarga de base de datos' },
  { id: 'RNF-06', name: 'Mantenibilidad', priorityOrMetric: 'Código limpio, CMS intuitivo', description: 'División de responsabilidades (SoC) en componentes Astro' },
  { id: 'RNF-07', name: 'Compatibilidad', priorityOrMetric: 'Chrome, Safari, Edge, Firefox, iOS, Android', description: 'Soporte cross-browser y diseño adaptativo mobile-first' },
  { id: 'RNF-08', name: 'Legal', priorityOrMetric: 'Ley N° 29733 de Datos Personales', description: 'Consentimiento informado en formularios peruanos' },
  { id: 'RNF-09', name: 'Cookies', priorityOrMetric: 'Banner de consentimiento y privacidad', description: 'Aviso de cookies transparente con enlace a políticas' },
  { id: 'RNF-10', name: 'Publicidad responsable', priorityOrMetric: 'Sin promesas absolutas', description: 'Comunicación clínica basada en evidencia y ética' }
];

export const projectPhases: ProjectPhase[] = [
  {
    phase: 'Descubrimiento',
    duration: '2 semanas',
    activities: 'Research de mercado, benchmark de clínicas premium en Lima, entrevistas a pacientes',
    deliverables: 'Brief estratégico, insights, buyer personas'
  },
  {
    phase: 'Estrategia',
    duration: '1 semana',
    activities: 'Misión, visión, valores, definición de arquetipo de marca',
    deliverables: 'Plataforma de marca'
  },
  {
    phase: 'Identidad verbal',
    duration: '1 semana',
    activities: 'Naming, tagline, pilares de mensajes, tono de voz',
    deliverables: 'Manual verbal'
  },
  {
    phase: 'Identidad visual',
    duration: '2 semanas',
    activities: 'Paleta cromática, tipografía, logo, iconografía, elementos gráficos',
    deliverables: 'Manual de identidad visual'
  },
  {
    phase: 'UX/UI',
    duration: '2 semanas',
    activities: 'Arquitectura de información, wireframes, prototipo interactivo, copys',
    deliverables: 'Landing page y componentes en Figma'
  },
  {
    phase: 'Desarrollo',
    duration: '2 semanas',
    activities: 'Implementación modular en Astro, optimización CWV, integraciones de agenda',
    deliverables: 'Sitio web funcional ultra-rápido y testeado'
  },
  {
    phase: 'Medición',
    duration: 'Continua',
    activities: 'Analítica web, SEO local, optimización de conversión, campañas',
    deliverables: 'Reportes de performance y retención'
  }
];

export const simulatedMetrics: MetricComparison[] = [
  { metric: 'Leads calificados / mes', before: '40', after: '66', variation: '+65%' },
  { metric: 'Citas agendadas / mes', before: '25', after: '35', variation: '+40%' },
  { metric: 'Tasa conversión landing', before: '3.2%', after: '7.8%', variation: '+4.6 pts' },
  { metric: 'Costo por lead', before: 'S/ 85', after: 'S/ 60', variation: '-30%' },
  { metric: 'Tiempo medio en página', before: '1:20 min', after: '1:45 min', variation: '+25%' },
  { metric: 'Consultas directas por WhatsApp', before: '30', after: '45', variation: '+50%' }
];

export const keyLearnings: KeyLearning[] = [
  {
    learning: 'La confianza se construye con transparencia',
    application: 'Mostrar proceso detallado, equipo certificado y precios/presupuestos claros sin costos ocultos.'
  },
  {
    learning: 'El miedo al dolor es una barrera real',
    application: 'Comunicar calma, anestesia suave, tecnología 3D y acompañamiento en cada paso.'
  },
  {
    learning: 'WhatsApp es canal crítico en Lima',
    application: 'CTA flotante visible en todo momento, mensaje predeterminado y respuesta rápida.'
  },
  {
    learning: 'Premium no es frío',
    application: 'Calidez en el diseño, luz natural, tonos marfil y salvia, y lenguaje humano sin tecnicismos distantes.'
  },
  {
    learning: 'La ética médica vende más que la exageración',
    application: 'Sin promesas absolutas de sonrisas irreales; casos mostrados con consentimiento explícito.'
  },
  {
    learning: 'Medir citas, no solo leads',
    application: 'Optimizar la landing para pacientes nuevos que asisten a la consulta, no por clics vacíos.'
  }
];

export const portfolioDeliverables: PortfolioDeliverable[] = [
  { name: 'Brief estratégico', format: 'PDF / Notion', description: 'Investigación de mercado, competencia y arquetipo' },
  { name: 'Manual de marca', format: 'PDF / Figma', description: 'Lineamientos visuales, colores y tipografía' },
  { name: 'Identidad verbal', format: 'Documento', description: 'Tono de voz, mensajes clave y narrativa' },
  { name: 'Identidad visual', format: 'Figma', description: 'Logotipo, monograma y activos gráficos' },
  { name: 'Wireframes UX', format: 'Figma', description: 'Estructura de contenido y jerarquía visual' },
  { name: 'Landing page UI', format: 'Figma', description: 'Diseño de alta fidelidad desktop y mobile' },
  { name: 'Prototipo interactivo', format: 'Figma', description: 'Flujo completo de reserva y navegación' },
  { name: 'Copies finales', format: 'Documento', description: 'Textos orientados a conversión y confianza' },
  { name: 'Requerimientos técnicos', format: 'Documento', description: 'Especificación de arquitectura y RF/RNF' },
  { name: 'Caso de estudio web', format: 'Astro / Markdown / Web', description: 'Documentación viva integrada en la plataforma' }
];
