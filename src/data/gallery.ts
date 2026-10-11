import type { GalleryCaseItem } from '../types';

export const galleryCases: GalleryCaseItem[] = [
  {
    id: 'caso-estetica-biomimetica',
    title: 'Restauración Estética Biomimética de Incisivos',
    treatment: '4 carillas cerámicas de estratificación natural',
    timeframe: '3 sesiones clínicas en 18 días',
    clinicalObjective: 'Corrección de microdoncia y desgaste incisal asimétrico respetando la vitalidad pulpar sin tallado agresivo.',
    ethicalNote: 'Fotografía clínica estandarizada sin retoques digitales de color ni filtros de piel. Consentimiento informado suscrito bajo Ley N° 29733.',
    consentVerified: true,
    category: 'estetica'
  },
  {
    id: 'caso-ortodoncia-digital',
    title: 'Alineación de Apiñamiento Anterior Moderado',
    treatment: 'Alineadores transparentes digitales',
    timeframe: '9 meses de tratamiento activo',
    clinicalObjective: 'Expansión de arco leve y resolución de apiñamiento anteroinferior facilitando el control de higiene y la oclusión céntrica.',
    ethicalNote: 'Registro fotográfico intraoral verificado. Sin promesas de tiempos milagrosos; resultado obtenido con fidelidad al plan virtual 3D.',
    consentVerified: true,
    category: 'ortodoncia'
  },
  {
    id: 'caso-implante-unitario',
    title: 'Rehabilitación de Incisivo Central con Implante Guiado',
    treatment: 'Implante cónico de titanio + corona de circonio atornillada',
    timeframe: '4 meses desde colocación guiada hasta corona definitiva',
    clinicalObjective: 'Preservación de la papila interdental y perfil de emergencia biológico idéntico al diente contralateral.',
    ethicalNote: 'Consentimiento para fines docentes y divulgación clínica. Evolución radiográfica y clínica documentada en historia clínica electrónica.',
    consentVerified: true,
    category: 'implantes'
  }
];
