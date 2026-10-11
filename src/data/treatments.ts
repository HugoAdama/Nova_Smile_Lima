import type { TreatmentItem } from '../types';

export const treatments: TreatmentItem[] = [
  {
    id: 'odontologia-general',
    title: 'Odontología general y preventiva',
    shortDesc: 'Limpiezas ultrasónicas, controles minuciosos y restauraciones biológicas con mínima invasión.',
    fullDesc: 'Enfocada en preservar al máximo la estructura natural del diente. Utilizamos magnificación clínica y tecnología de remoción suave para que cada sesión sea confortable.',
    duration: '45 - 60 min por sesión',
    idealFor: 'Mantenimiento anual, prevención de caries y salud periodontal.',
    icon: 'tooth',
    highlight: false
  },
  {
    id: 'estetica-dental',
    title: 'Estética dental mínimamente invasiva',
    shortDesc: 'Carillas cerámicas ultradelgadas y recontorneo estético que respetan tus rasgos.',
    fullDesc: 'Diseño analítico que busca la naturalidad, sin dientes artificialmente planos ni sobre-blanqueados. Armonía con la línea labial y el tono de piel.',
    duration: '2 a 3 citas con maqueta previa (mockup)',
    idealFor: 'Bordes desgastados, asimetrías leves, manchas profundas.',
    icon: 'sparkle',
    highlight: true
  },
  {
    id: 'implantes-guiados',
    title: 'Implantología digital guiada',
    shortDesc: 'Planificación 3D por tomografía para colocar implantes de titanio o circonio con alta precisión.',
    fullDesc: 'Procedimiento asistido por férulas quirúrgicas impresas en 3D, reduciendo inflamación postoperatoria, tiempos quirúrgicos y aumentando la predictibilidad.',
    duration: 'Cirugía planificada en 40 - 60 min',
    idealFor: 'Reposición de una o múltiples piezas dentales perdidas.',
    icon: 'implant',
    highlight: true
  },
  {
    id: 'ortodoncia-invisible',
    title: 'Ortodoncia invisible con alineadores',
    shortDesc: 'Placas transparentes removibles, diseñadas a medida para tu rutina ejecutiva.',
    fullDesc: 'Alineación dental progresiva sin brackets metálicos ni molestias en mejillas. Visualización virtual de cada etapa del tratamiento antes de iniciar.',
    duration: 'De 6 a 18 meses según complejidad',
    idealFor: 'Profesionales y adultos que buscan discreción e higiene sin restricciones.',
    icon: 'aligner',
    highlight: true
  },
  {
    id: 'blanqueamiento-laser',
    title: 'Blanqueamiento con control de sensibilidad',
    shortDesc: 'Aclarado seguro con activación lumínica controlada y desensibilizantes de última generación.',
    fullDesc: 'Protocolo clínico personalizado con barrera gingival fotopolimerizada y aplicación de geles con pH neutro para proteger el esmalte dental.',
    duration: '1 a 2 sesiones de 45 min',
    idealFor: 'Dientes oscurecidos por café, té o envejecimiento natural del esmalte.',
    icon: 'glow',
    highlight: false
  },
  {
    id: 'diseno-de-sonrisa',
    title: 'Diseño digital de sonrisa (DSD)',
    shortDesc: 'Planificación fotográfica y videográfica previa para ver el resultado antes de comenzar.',
    fullDesc: 'Simulación digital en 3D que te permite probar una maqueta real en tu propia boca (mockup) antes de autorizar cualquier cambio definitivo.',
    duration: 'Evaluación y sesión de maqueta diagnóstica',
    idealFor: 'Casos integrales que combinan estética, función masticatoria y salud articular.',
    icon: 'smile',
    highlight: false
  }
];
