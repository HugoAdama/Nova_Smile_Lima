import type { FaqItem } from '../types';

export const faqs: FaqItem[] = [
  {
    id: 'duele',
    question: '¿Los tratamientos dentales son dolorosos?',
    answer: 'No. En Nova Smile Lima priorizamos tu tranquilidad aplicando técnicas de anestesia localizada suave y dosificada, geles tópicos desensibilizantes y magnificación óptica que reduce la invasión en los tejidos. Siempre coordinamos una señal para pausar de inmediato si sientes la menor molestia.',
    category: 'dolor'
  },
  {
    id: 'costo-evaluacion',
    question: '¿Cuánto cuesta un tratamiento y qué incluye la primera cita?',
    answer: 'La cita de evaluación incluye la consulta con el especialista, escaneo intraoral 3D de alta resolución y la presentación de tu plan de tratamiento con presupuesto cerrado. Cada paciente recibe opciones escalonadas según su necesidad clínica.',
    category: 'costos'
  },
  {
    id: 'seguros-reembolso',
    question: '¿Aceptan seguros médicos o emiten documentación para reembolso?',
    answer: 'Sí. Emitimos comprobantes electrónicos oficiales (factura o boleta) con códigos de procedimiento CIE-10 / CPT y emitimos informes odontológicos detallados firmados por el especialista con su número de colegiatura (COP y RNE) para que tramites tu reembolso con Pacífico, Rímac, Mapfre, Sanitas u otras EPS.',
    category: 'seguros'
  },
  {
    id: 'duracion-tratamientos',
    question: '¿Cuánto tiempo dura un tratamiento estético o de ortodoncia?',
    answer: 'Tratamientos como profilaxis o blanqueamiento se completan en 1 a 2 citas. Las carillas cerámicas requieren habitualmente 3 sesiones (incluyendo la prueba de maqueta o mockup). La ortodoncia invisible con alineadores oscila entre 6 y 14 meses en casos promedio, con revisiones mensuales presenciales o virtuales.',
    category: 'general'
  },
  {
    id: 'tecnologia-scanner',
    question: '¿Qué ventajas tiene el escáner intraoral 3D sobre los moldes tradicionales?',
    answer: 'El escáner digital 3D reemplaza completamente las incómodas pastas de alginato y silicona que causaban reflejo nauseoso. Genera una réplica digital exacta de tus dientes en colores reales en menos de 5 minutos, con una precisión de micras.',
    category: 'tecnologia'
  },
  {
    id: 'agenda-urgencia',
    question: '¿Cómo programan citas para personas con agendas laborales complejas?',
    answer: 'Contamos con horarios extendidos de lunes a viernes hasta las 20:00 horas y sábados por la mañana. Además, nuestro sistema digital permite reprogramaciones con 24 horas de anticipación vía WhatsApp.',
    category: 'general'
  }
];
