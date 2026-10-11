import { getAssetPath } from '../utils/path';

export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { href: getAssetPath('/#tratamientos'), label: 'Tratamientos' },
  { href: getAssetPath('/#experiencia'), label: 'Especialistas & Experiencia' },
  { href: getAssetPath('/#contacto'), label: 'Citas & Ubicación' }
];

export const footerClinicLinks: NavLink[] = [
  { href: getAssetPath('/#tratamientos'), label: 'Estética Dental & Carillas' },
  { href: getAssetPath('/#tratamientos'), label: 'Ortodoncia Invisible' },
  { href: getAssetPath('/#tratamientos'), label: 'Implantología Digital 3D' },
  { href: getAssetPath('/#experiencia'), label: 'Especialistas & Filosofía Serena' },
  { href: getAssetPath('/blog'), label: 'Blog & Educación Clínica' }
];

export const footerLegalLinks: NavLink[] = [
  { href: getAssetPath('/politica-privacidad'), label: 'Política de Privacidad (Ley N° 29733)' },
  { href: getAssetPath('/politica-cookies'), label: 'Política de Cookies' },
  { href: getAssetPath('/libro-de-reclamaciones'), label: 'Libro de Reclamaciones' }
];
