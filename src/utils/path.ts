/**
 * Normaliza cualquier ruta con el BASE_URL configurado en Astro (e.g. /Nova_Smile_Lima/).
 * Funciona de manera determinista tanto en local como en GitHub Pages.
 */
export function getAssetPath(path: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') {
    return base ? `${base}/` : '/';
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
