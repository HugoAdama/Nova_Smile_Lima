import type { Specialist } from '../types';

export const specialists: Specialist[] = [
  {
    id: 'valeria-montes',
    name: 'Dra. Valeria Montes',
    role: 'Directora Clínica · Estética y Rehabilitación',
    cop: 'COP 28419',
    rne: 'RNE 01422 (Rehabilitación Oral)',
    bio: 'Especialista en odontología mínimamente invasiva y diseño estético en San Isidro con más de 12 años de trayectoria. Miembro de la Academia Iberoamericana de Estética Dental.',
    specialties: ['Diseño Digital de Sonrisa', 'Carillas Cerámicas', 'Odontología Restauradora Biomimética'],
    photo: '/images/doctor-valeria.jpg'
  },
  {
    id: 'andres-salazar',
    name: 'Dr. Andrés Salazar',
    role: 'Especialista en Implantología y Cirugía Guiada',
    cop: 'COP 31904',
    rne: 'RNE 01895 (Cirugía Bucal y Maxilofacial)',
    bio: 'Pionero en planificación tomográfica 3D y carga inmediata en Lima. Docente universitario de postgrado enfocado en técnicas atraumáticas y regeneración ósea.',
    specialties: ['Implantes Guiados 3D', 'Carga Inmediata', 'Regeneración Ósea Guiada'],
    photo: '/images/doctor-andres.jpg'
  },
  {
    id: 'camila-ferrer',
    name: 'Dra. Camila Ferrer',
    role: 'Especialista en Ortodoncia Invisible',
    cop: 'COP 34512',
    rne: 'RNE 02210 (Ortodoncia y Ortopedia)',
    bio: 'Certificada Platinum en sistemas de alineadores transparentes. Dedicada a tratamientos ortodóncicos para adultos, priorizando la salud periodontal y la comodidad.',
    specialties: ['Alineadores Transparentes', 'Ortodoncia Digital', 'Oclusión y ATM'],
    photo: '/images/doctor-camila.jpg'
  }
];
