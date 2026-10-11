# Guía de Estilo & Sistema de Diseño (Design System)

**Nova Smile Lima** proyecta una imagen de odontología boutique de lujo, serenidad y excelencia científica. Este documento establece los estándares visuales que deben regir cualquier cambio en la interfaz.

---

## 1. Paleta Cromática Institucional

Los colores están definidos en variables CSS dentro de [`src/styles/tokens.css`](file:///e:/NOVA_SMILE_LIMA/src/styles/tokens.css):

| Nombre de Token | Código Hexadecimal | Propósito & Aplicación |
| :--- | :--- | :--- |
| **`--azul`** | `#0A2540` | Color primario de marca. Inspira autoridad médica, estabilidad y elegancia. |
| **`--azul-suave`** | `#14395E` | Variación para degradados y encabezados secundarios. |
| **`--azul-profundo`** | `#061626` | Fondo nocturno para pie de página y tarjetas en contraste. |
| **`--oro`** | `#C6A15B` | Color acento boutique. Inspira calidez, distinción y sofisticación. |
| **`--oro-hover`** | `#D4B373` | Estado hover de botones y elementos interactivos dorados. |
| **`--marfil`** | `#F7F3EC` | Fondo base del sitio. Proporciona una lectura cálida, libre de la frialdad del blanco puro hospitalario. |
| **`--marfil-fuerte`** | `#EFE8DA` | Fondo de tarjetas y secciones alternas. |
| **`--salvia`** | `#8FA99B` | Tono de serenidad clínica; avatares de pacientes y detalles botánicos. |
| **`--piedra`** | `#D9D6D0` | Bordes sutiles de tarjetas y divisores. |
| **`--carbon`** | `#1C1C1C` | Texto de lectura principal en párrafos. |
| **`--turquesa`** | `#2EC4B6` | Micro-acentos de tecnología digital y foco de accesibilidad. |

---

## 2. Tipografía & Jerarquía de Texto

El sitio emplea 3 familias tipográficas complementarias cargadas desde Google Fonts:

```css
--f-titulo: "Cormorant Garamond", Georgia, serif;
--f-cuerpo: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--f-acento: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
```

### Escala Tipográfica Calibrada
- **`h1` (Títulos Principales):** `clamp(2.6rem, 5.5vw, 4.4rem)` — Cormorant Garamond, peso 600.
- **`h2` (Títulos de Sección):** `clamp(2.0rem, 3.8vw, 3.2rem)` — Cormorant Garamond, peso 600.
- **`h3` (Subtítulos de Tarjetas / Hubs):** `clamp(1.4rem, 2.4vw, 1.85rem)` — Cormorant Garamond / Montserrat.
- **`h4` (Encabezados Menores):** `1.22rem` – `1.25rem`.
- **`.kicker` (Subtítulo Dorado Previo):** `0.88rem` — Montserrat, peso 600, mayúsculas, `letter-spacing: 0.16em`.
- **`p` (Párrafos de Lectura):** `1.0625rem` (17px) — Inter, `line-height: 1.65`.
- **`.btn` (Botones de Acción):** `0.98rem` — Montserrat, peso 600.
- **Micro-textos & Chips (`.doc-tag`, `.consent-chip`, `.sede-chip`):** Mínimo `0.78rem` – `0.86rem` para garantizar legibilidad en pantallas retina.

---

## 3. Política Estricta "Zero Emojis"

> **REGLA MANDATORIA:** Queda terminantemente prohibido el uso de emojis en cualquier parte del código fuente, textos de datos, atributos HTML, documentación o etiquetas de accesibilidad.

- **Razón:** Los emojis desentonan con la estética de una clínica boutique de alta gama, lucen inconsistentes entre plataformas (iOS, Android, Windows) y degradan la percepción de autoridad clínica.
- **Solución:** Utilizar siempre el componente [`<Icon name="..." />`](file:///e:/NOVA_SMILE_LIMA/src/components/common/Icon.astro), el cual renderiza trazados vectoriales SVG limpios y consistentes en color corporativo.

---

## 4. Radios de Borde & Elevaciones (Sombras)

- **`--radio-sm`:** `8px` (etiquetas, tags de médicos, inputs).
- **`--radio-md`:** `14px` (tarjetas secundarias, marcos de fotos).
- **`--radio-lg`:** `24px` (tarjetas principales, columnas de contraste, modales).
- **`--radio-pill`:** `9999px` (botones, chips de filtro, insignias).

### Elevaciones:
- `--sombra-sm`: `0 2px 8px rgba(10, 37, 64, 0.06)`
- `--sombra-md`: `0 8px 24px -4px rgba(10, 37, 64, 0.08)`
- `--sombra-lg`: `0 20px 40px -12px rgba(10, 37, 64, 0.14)`
- `--sombra-oro`: `0 10px 30px -8px rgba(198, 161, 91, 0.38)`

---

## 5. Accesibilidad (a11y) & Estándares WCAG AA

1. **Foco Teclado Visible:**
   ```css
   :focus-visible {
     outline: 3px solid var(--turquesa);
     outline-offset: 3px;
     border-radius: 4px;
   }
   ```
2. **Atributos ARIA:** Todos los botones de control (carrusel, modal de concierge, toggles) deben incluir `aria-label` descriptivos.
3. **Contrastes de Color:** Los textos en gris suave sobre marfil o sobre azul marino cumplen con la relación de contraste mínima de 4.5:1 exigida por WCAG 2.1 AA.
