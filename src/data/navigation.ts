export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { href: '/#tratamientos', label: 'Tratamientos' },
  { href: '/#experiencia', label: 'Especialistas & Experiencia' },
  { href: '/#contacto', label: 'Citas & Ubicación' }
];

export const footerClinicLinks: NavLink[] = [
  { href: '/#tratamientos', label: 'Estética Dental & Carillas' },
  { href: '/#tratamientos', label: 'Ortodoncia Invisible' },
  { href: '/#tratamientos', label: 'Implantología Digital 3D' },
  { href: '/#experiencia', label: 'Especialistas & Filosofía Serena' },
  { href: '/blog', label: 'Blog & Educación Clínica' }
];

export const footerLegalLinks: NavLink[] = [
  { href: '/politica-privacidad', label: 'Política de Privacidad (Ley N° 29733)' },
  { href: '/politica-cookies', label: 'Política de Cookies' },
  { href: '/libro-de-reclamaciones', label: 'Libro de Reclamaciones' }
];
