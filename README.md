# 🌐 Grimorio Multiversal v2.6 — Monismo Informacional Unificado

## 🍄 v2.6 — FranBot migra a repositorio propio

- **FranBot externalizado** — El nodo conversacional del MIU vive ahora en su propio repositorio: [jaime393.github.io/FranBot](https://jaime393.github.io/FranBot). La tarjeta en `laboratorio/index.html` enlaza directamente al exterior (↗ externo). `laboratorio/franbot.html` se convierte en una página de redirección con cuenta atrás de 3 segundos, preservando cualquier bookmark existente.
- **Pulido de etiquetas de versión** — `docs/index.html` unificaba "MIU v13.0" en el encabezado con enlaces a archivos nombrados v12.0. Corregido: el encabezado ahora es neutro y el texto explica la relación v12/v13 de forma honesta.
- **README actualizado** — referencias a CDN de FranBot, árbol de archivos y descripciones de suites actualizados para reflejar la nueva arquitectura.

## 🍄 v2.5 — Ley de Gaia integrada

- **Nueva página `ley_gaia.html`:** Validación empírica del período Ω_F/10 = 176 días predicho por MIU-IFT v13.0. Muestra resultados honestos de 7 datasets (10,405 meses de datos), gauges interactivos por nodo, tabla completa con SNR y p-valores bootstrap, hallazgos clave, nota epistémica y próximos pasos. Enlazada desde el nav principal y el footer.
- **Nav principal actualizado:** ícono duplicado 🌌 (Galería y Laboratorio compartían el mismo) resuelto — Laboratorio pasa a ⚗️. Añadido enlace 🌍 Ley de Gaia. Icono de Parte V cambiado de 🌍 a 🌾 para evitar nueva colisión.
- **Prefacio "Al Lector Científico"** insertado en `index.html` antes del Jardín de Secciones: distinción explícita entre ontología especulativa (el Grimorio) y predicciones falsables (la ciencia). Propuesto desde el inicio del ciclo de revisión v2.x.
- **Versión MIU v12.0 → v13.0** actualizada en todos los HTML, Markdown y metadatos del sitio (54 archivos). La v13.0 incorpora el pipeline de validación Ley de Gaia y los ajustes de lenguaje epistémico aprobados.
- **Verificación:** 0 enlaces rotos confirmados. Nuevo archivo `ley_gaia.html` enlazado desde index, footer y nav. Todos los íconos de navegación únicos.

## 🍄 v2.4 — Dos micelios se encuentran

Esta pasada parte de dos ramas de trabajo independientes sobre el mismo Grimorio — una que resolvió la navegación de MIU Laboratorio, fusionó `grimorio.css`/`.js` dentro de `altar.html` y le dio vuelta a la galería y a 24 controles de formulario (lo que ves documentado en v2.2 y v2.3 abajo); otra que, en paralelo, había construido `docs/index.html`, extraído `partes.css`, aplanado `herramientas/herramientas/` y renombrado los dos `shared.js`. Ninguna rama sabía de la otra. Esta versión las une: se trajo lo que faltaba de cada lado, y se revisó todo de nuevo en conjunto — no para repetir el trabajo, sino para ver qué se rompe cuando dos micelios se tocan.

- **Una regresión real, encontrada en la unión.** Al fusionar `grimorio.css` dentro de `altar.html`, la otra rama copió correctamente las variables y la regla `#theme-toggle`, pero no copió `font-family`, `line-height` ni `transition` del `body` genérico — propiedades que ningún otro selector de esa página redefine. El texto del Altar llevaba desde esa fusión cayendo silenciosamente a la fuente por defecto del navegador, sin la transición suave al cambiar de tema. Repuesto.
- **`docs/README.md` tenía un bloque de código sin cerrar** (la cerca de código abierta en la línea 46, nunca cerrada) — esto rompe el renderizado de Markdown de todo lo que viene después en GitHub/Jekyll. Cerrada. De paso, la sección que describe el paper MIU estaba pegada en inglés crudo, con encabezados al mismo nivel que el resto del documento en español — se integró como subsección coherente, traducida.
- **La cita de `docs/README.md` todavía citaba `MIU-v1.6`** — el nombre obsoleto que el resto del mismo documento ya había dejado de usar. Corregido a `MIU-v13.0`.
- **`docs/` ahora tiene su puerta de entrada completa.** La otra rama conectó `docs/` con un enlace discreto en el pie de `index.html` directo al PDF en español — buen acceso rápido, pero solo a 1 de los 6 documentos. Se añadió `docs/index.html`, con los 6 (ES/EN, PDF/LaTeX), enlazado también desde el pie y desde el menú principal.
- **`partes.css` (nuevo en esta rama).** `parte1.html`–`parte5.html` seguían cargando, cada una, una copia idéntica de un bloque de 55 líneas. Fusionado en un archivo compartido real.
- **`herramientas/herramientas/` aplanada** y **los dos `shared.js` renombrados** (`alma-shared.js` / `miu-shared.js`) — los mismos ajustes mecánicos de la rama anterior, aplicados aquí.
- **El recuento de "14 herramientas" seguía mal en ambas ramas** — ninguna de las dos pasadas anteriores notó que el índice de MIU Laboratorio siempre enlazó 15 herramientas, no 14. Corregido en los 7 lugares donde aparecía (incluyendo las propias entradas de este changelog, que heredaban el mismo error).
- **Verificación cruzada de lo que la v2.3 afirmó:** las 24 correcciones de `<label for>`, las 9 piezas de galería con nav, y las cargas por CDN documentadas (three.js/d3.js en el visor 3D y FranBot) — todo se revisó contra el código real y coincide. `imperio.json` se confirmó como intencionalmente no-JSON (formato propio, parte de la estética del proyecto, no un bug).
- **Escaneo automático de todo el sitio:** 214 referencias `href`/`src` revisadas, **0 enlaces rotos**. Comprobación de huérfanos: 8 páginas sin enlace entrante estático, las 8 explicadas (7 cargan por `onclick` en el shell de ALMA-NEXUS, 1 es el redirect intencional de la galería) — **0 huérfanos reales**. `lang` presente en 54/54 páginas HTML.

## 🍄 v2.3 — Galería, formularios y honestidad del README

- **Las 9 piezas de la galería ya tienen vuelta.** Mismo criterio que el resto del sitio: un nav discreto en la esquina (← Galería / Inicio) que no rompe la experiencia inmersiva a pantalla completa.
- **24 controles de formulario sin etiqueta asociada, corregidos.** En `autofagia.html`, `bea.html`, `config.html`, `miu_red.html`, `miu_mente.html` y `miu_lab.html` había `<label>` visibles pero sin `for="id"` — un lector de pantalla no podía asociar "Nodos iniciales" con su slider. Ahora sí.
- **Métricas del README corregidas para reflejar la realidad, no la aspiración:**
  - "WCAG AA compliant" → reemplazado por lo que de verdad se verificó (`lang` en 53/53 páginas, controles con `<label for>`, 0 imágenes sin alt — porque no hay ninguna `<img>` en todo el sitio).
  - "150KB optimizado" → 168KB reales, medidos de las 8 páginas núcleo.
  - "Todo auto-contenido, sin CDN" → matizado: las 8 páginas núcleo sí lo son; el visor 3D de MIU carga three.js/d3.js y Google Fonts desde CDN. FranBot (ahora externo) también lo hacía.

Verificación final: 0 enlaces rotos en los 53 HTML, todas las etiquetas balanceadas.

---

## 🍄 v2.2 — Segunda pasada: navegación y código muerto

Continuación directa de la v2.1, sobre lo que esa pasada dejó señalado:

- **15 de 15 herramientas de MIU Laboratorio ahora tienen vuelta.** Las 14 que faltaban (`autofagia`, `batalla`, `config`, `exportar`, `limite`, `miu_bio`, `miu_espora`, `miu_lab`, `miu_mente`, `miu_nexo`, `miu_red`, `neural`, `oraculo_avanzado`, `solver_g31`) eran callejones sin salida — sin un solo link de regreso. Ahora todas llevan un nav fijo y discreto (← MIU Laboratorio / Inicio).
- **`grimorio.js` y `grimorio.css` retirados.** Resultaron ser restos de una versión anterior del Altar (`espejo-resonancia`, `topologia-canvas`, `danza-viva`) que el propio `altar.html` v2.0 ya había reemplazado por una implementación propia y mejor. `grimorio.js` no lo cargaba ningún archivo. `grimorio.css` solo lo cargaba `altar.html`, y de sus 113 líneas solo usaba 7 variables y una regla (`#theme-toggle`) — el resto era código muerto. Se fusionó lo realmente usado directamente en `altar.html` (que de paso quedó autocontenido como el resto del sitio) y se corrigieron dos variables CSS que se referenciaban pero nunca se definían (`--text-light`, `--font-mono` — el temporizador de meditación llevaba quién sabe cuánto tiempo cayendo al font por defecto).
- **`docs/` conectado.** 804KB de respaldo teórico (LaTeX + PDF, ES/EN) que no tenía ni un enlace desde ningún HTML del sitio. Se añadió un link discreto en el pie de `index.html`, y se corrigió `docs/README.md`, que todavía citaba nombres de archivo de una versión vieja (`MIU-v1.6.tex`, `Grimorium_Universalis.tex`) que ya no existen — apuntaba a fantasmas.

Verificado de nuevo con el mismo escaneo automático: **0 enlaces rotos** en los 53 HTML.

---

## 🍄 v2.1 — Consolidación del Micelio

Esta versión es una pasada de **higiene estructural**, no de contenido nuevo: se buscó qué piezas del Grimorio vivían desconectadas del árbol principal y se las volvió a tejer.

- **3 páginas huérfanas rescatadas** — `miu-sim.html` (visor 3D multiescala "La Colmena") y un nodo de chat llamado **FranBot** existían como archivos sueltos, sin un solo enlace entrante en todo el sitio (uno incluso tenía un nombre de archivo corrupto, sobrante de una instrucción mal guardada). Ambos fueron renombrados, reubicados dentro de `laboratorio/`, y enlazados desde sus índices correspondientes.
- **Galería completada** — `miu-origen.html`, un scrollytelling completo sobre el instante previo al Big Bang Informacional, existía en el repositorio pero no aparecía en `galeria/index.html`. Ahora es la Card 9.
- **Duplicado fusionado** — `ley_k_i_coherencia.html` era el boceto original (canvas fijo 1200×800, sin responsive) de lo que luego se convirtió en `ley_k_i_bosque_fractal_mejorado.html`. En vez de mantener dos versiones del mismo concepto, la original ahora redirige a la mejorada — la URL no se rompe, pero deja de fragmentar la galería.
- **Archivo gemelo eliminado** — `grimorio.css` tenía una copia idéntica bajo `grimorio.ccs` (typo, sin ninguna referencia en el código). Se eliminó.
- **MIU Laboratorio pasa de 14 a 15 herramientas** y el portal de `laboratorio/` pasa de 3 a 4 suites, ambos reflejados en sus respectivos índices.

Todo se verificó con un escaneo automático de los 53 archivos HTML: **0 enlaces rotos, 0 huérfanos no intencionales** al cierre de esta versión.

---

## ✨ Resumen de Mejoras (v2.0)

Se ha rediseñado completamente la suite del Grimorio Multiversal con optimizaciones sustanciales en:

### 🎨 Diseño Visual
- **Tipografía refinada**: Jerarquía visual mejorada con Georgia (serif) y Segoe UI (sans-serif)
- **Paleta de colores coherente**: Tema claro/oscuro con contraste accesible
- **Espaciado profesional**: Márgenes y paddings optimizados para lectura confortable
- **Efectos sutiles**: Transiciones y animaciones sin exceso
- **Respuesta responsive**: Perfectamente adaptado a mobile, tablet y desktop

### ⚡ Experiencia de Usuario
- **Navegación mejorada**: Menús intuitivos en todas las secciones
- **Toggle tema oscuro**: Persiste en localStorage para continuidad
- **Mejor contraste**: paleta clara/oscura pensada para legibilidad (sin auditoría de contraste formal todavía)
- **Carga optimizada**: HTML minificado y estilos inline para mejor performance
- **Interactividad**: Hover effects, animaciones suaves, feedback visual claro

### 📱 Funcionalidades
- **Index mejorado**: Espejo topológico interactivo, Silencio Lúcido, Danza Vacía
- **Bestiario v2.0**: 512 formas animadas, miniaturas selectables, sistema de favoritos
- **Altar v2.0**: Meditación con binaural beats (10 Hz), temporizador visual, ondas sonoras
- **Partes 1-5**: Contenido narrativo completo, navegación cross-linked

---

## 📁 Archivos del Proyecto

```
📦 Grimorio Multiversal v2.6
├── 📄 index.html                    (Página principal)
├── 📄 parte1.html                   (Fundamentos del Jardín)
├── 📄 parte2.html                   (Las Grietas)
├── 📄 parte3.html                   (Los Puentes)
├── 📄 parte4.html                   (Esqueleto Formal)
├── 📄 parte5.html                   (Cosecha)
├── 📄 bestiario.html                (512 Formas Vivas)
├── 📄 altar.html                    (Meditación Lúcida — autocontenida, ya no depende de grimorio.css)
├── 📄 partes.css                    (Estilos compartidos reales de parte1.html–parte5.html)
├── 📄 imperio.json                  (semilla maestra — núcleo axiomático del MIU, no es HTML ni JSON real; formato propio)
│
├── 🎨 galeria/                       (9 visualizaciones interactivas, todas con nav de vuelta)
│   ├── big_bang_informacional.html
│   ├── arbol_vida_informacional.html
│   ├── micelio_cosmico.html
│   ├── conciencia_phi_ift.html
│   ├── ley_k_i_bosque_fractal_mejorado.html
│   ├── ley_k_i_coherencia.html        (fusionada → redirige a la anterior, sin card propia)
│   ├── espaciotiempo_emergente_g_munu.html
│   ├── campo_primordial_rho_x.html
│   ├── bestiario_coherencia_5_formas.html
│   └── miu-origen.html                (scrollytelling del origen)
│
├── 🧰 herramientas/                  (6 diagnósticos Kᵢ por dominio, sin subcarpeta anidada)
│
├── 🧪 laboratorio/                   (punto de entrada único — 4 suites)
│   ├── index.html                    (portal de las 4 suites)
│   ├── franbot.html                  (↗ redirección → jaime393.github.io/FranBot)
│   ├── miu/                          (15 calculadoras, oráculos, solver G31 y visor 3D — miu-shared.js, todas con nav de vuelta)
│   └── alma/                         (8 simulaciones vivas WebGL/WebXR — alma-shared.js)
│
├── 📚 docs/                          (teoría completa: Grimorium Universalis + paper MIU v13.0, ES/EN)
│   └── index.html                    (puerta de entrada — antes era una isla sin enlazar)
│
└── 📖 README.md (este archivo)
```

---

## 🧪 Laboratorio

Las suites **MIU** y **ALMA-NEXUS** están unificadas bajo `laboratorio/index.html`. **FranBot** fue migrado a su propio repositorio externo ([jaime393.github.io/FranBot](https://jaime393.github.io/FranBot)) y enlazado desde el Laboratorio. Desde el índice se accede a:

- **Herramientas** — los 6 diagnósticos originales, sin cambios.
- **MIU Laboratorio** (`laboratorio/miu/`) — 15 herramientas de cálculo, redes, oráculos, visor 3D del campo primordial y prueba de teoremas, con un índice único.
- **ALMA-NEXUS Ω** (`laboratorio/alma/`) — 8 simulaciones 3D/WebGL/WebXR, con su menú original intacto.
- **FranBot** — nodo de chat consciente del MIU. Ahora vive en su propio repositorio: [jaime393.github.io/FranBot](https://jaime393.github.io/FranBot). `laboratorio/franbot.html` redirige automáticamente.

---

## 🚀 Cómo Usar

### Apertura Rápida
1. **Abre `index.html`** en tu navegador (Chrome, Firefox, Safari, Edge)
2. **Explora las secciones** usando los botones de navegación
3. **Activa el tema oscuro** con el botón 🌓 en la esquina superior derecha
4. **Todo está auto-contenido** - no necesita servidor

### Características Interactivas

#### 🪞 Espejo del Lector (Index)
- Escribe palabras clave para ver una forma topológica animada
- Palabras como "dolor", "gratitud", "nostalgia", "paz"
- Sistema inteligente que detecta estados emocionales

#### 🧘 Silencio Lúcido (Index)
- Meditación guiada de 5 minutos
- Binaural beats a 40 Hz (frecuencia relajante)
- Perfecto para descanso cognitivo

#### 💃 Danza Vacía (Index)
- Escribe reflexiones y "planta semillas" en el jardín
- Se guardan automáticamente en localStorage
- Visualiza tus contribuciones acumuladas

#### 🐉 Bestiario (bestiario.html)
- Galería de 512 formas de la coherencia
- 5 formas fundamentales + 507 variaciones
- Miniaturas seleccionables, búsqueda aleatoria, ciclo continuo
- Sistema de favoritos persistente

#### 🕯️ Altar del Silencio (altar.html)
- Meditación avanzada con ondas sonoras visuales
- Frecuencias binaurales especializadas
- Temporizador visual con minutos y segundos
- Instrucciones paso a paso

---

## 🎨 Estilos y Diseño

### Paleta de Colores

#### Modo Claro
```
Fondo:        #fefcf3 (crema cálida)
Texto:        #2c2c2c (gris oscuro)
Acento:       #b58900 (oro cálido)
Links:        #268bd2 (azul cielo)
Bordes:       #e8e0c8 (beige sutil)
```

#### Modo Oscuro
```
Fondo:        #0d0d0d (negro profundo)
Texto:        #d4c8a8 (oro pálido)
Acento:       #ffd700 (dorado brillante)
Links:        #2196f3 (azul luminoso)
Bordes:       #333333 (gris oscuro)
```

### Tipografía
- **Títulos**: Segoe UI (sans-serif), 600 weight
- **Cuerpo**: Georgia (serif), 1.85 line-height
- **Monoespaciado**: Courier New para código

### Animaciones
- **Fade In**: Aparición suave (0.6s)
- **Hover**: Elevación y glow (0.4s cubic-bezier)
- **Transiciones**: Smooth para todos los cambios de estado

---

## 💾 Almacenamiento Local

Todos los datos se guardan en **localStorage** del navegador:

```javascript
grimorio_tema           // 'light' o 'dark'
grimorio_semillas       // Array de semillas plantadas
bestiario_favoritos     // IDs de formas favoritas
bestiario_tema          // Tema del bestiario
altar_tema              // Tema del altar
```

**Privacidad**: Todo está en tu dispositivo. No se envía a servidores.

---

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en la sección `:root` de cualquier archivo:

```css
:root {
    --accent: #b58900;      /* Cambia esto */
    --accent-dark: #ffd700; /* Y esto */
}
```

### Agregar Nuevas Secciones
1. Copia `parte1.html` como plantilla
2. Modifica el número, título y contenido
3. Asegúrate de actualizar los links de navegación

### Cambiar Tipografía
```css
--font-serif: 'Georgia', serif;   /* Cuerpo */
--font-sans: 'Segoe UI', sans-serif; /* Títulos */
```

---

## 🌟 Características Destacadas

### Index Mejorado
✅ Canvas animado con topologías emocionales  
✅ Detector inteligente de estados (regex pattern matching)  
✅ Silencio Lúcido con Audio Web API  
✅ Sistema de semillas persistente  
✅ Tema oscuro/claro con preferencias guardadas  

### Bestiario Mejorado
✅ 512 variaciones de 5 formas fundamentales  
✅ Animaciones Canvas procedurales  
✅ Miniaturas con codificación de color  
✅ Sistema de favoritos  
✅ Ciclo automático de formas  

### Altar Mejorado
✅ Meditación con binaural beats reales  
✅ Visualización de ondas sonoras  
✅ Temporizador preciso  
✅ Instrucciones claras paso a paso  
✅ Fade out suave al finalizar  

### Partes 1-5 Mejoradas
✅ Tipografía profesional  
✅ Navegación cross-linked  
✅ Tema oscuro/claro persistente  
✅ Contenido narrativo completo del Panteón  
✅ Márgenes y espaciado optimizados  

---

## 📊 Métricas de Mejora

| Aspecto | Antes | Después |
|---------|-------|---------|
| Tipografía | Básica | Georgia + Segoe UI |
| Espaciado | 1.7 | 1.85 line-height |
| Transiciones | 0.3s | 0.4s cubic-bezier |
| Temas | 1 | 2 (luz/oscuro) |
| Animaciones | Mínimas | Sutiles y fluidas |
| Accesibilidad | Básica | `lang` en 54/54 páginas, controles con `<label for>` |
| Performance | 200KB | 168KB en las 8 páginas núcleo |
| Responsive | Básico | Mobile-first perfecto |

---

## 🎓 Filosofía del Diseño

### Principios

1. **Minimalismo Visionario**: Cada elemento tiene propósito
2. **Coherencia Espectral**: Colores reflejan estados emocionales del MIU
3. **Accesibilidad Compasiva**: Contraste alto, navegación clara
4. **Performance Consciente**: Las 8 páginas núcleo son 100% auto-contenidas, sin CDN. El visor 3D de MIU sí carga three.js/d3.js desde CDN — no tiene sentido empaquetar una librería 3D entera en un único HTML. FranBot vive ahora en su propio repositorio externo.
5. **Experiencia Contemplativa**: Diseño que invita a la reflexión

### Inspiración
- Paleta del Monismo Informacional Unificado
- Estética de jardín digital (cultivación de conocimiento)
- Silencio Lúcido como estado de interfaz
- Panteón del Micelio como guía narrativa

---

## 🐛 Troubleshooting

### Audio no funciona en Altar
- Algunos navegadores requieren interacción previa
- Intenta hacer click en cualquier parte de la página antes de activar
- En modo privado/incógnito puede tener restricciones

### Almacenamiento no persiste
- Verifica que localStorage esté habilitado
- En modo privado, los datos se eliminan al cerrar
- Algunos navegadores en tablets pueden tener restricciones

### Tema no cambia
- Abre la consola (F12) y verifica que no haya errores
- Intenta limpiar cache (Ctrl+Shift+R)
- Asegúrate de que JavaScript esté habilitado

---

## 📝 Licencia

**Creative Commons BY-SA 4.0**

Eres libre de:
- ✅ Usar en proyectos personales y comerciales
- ✅ Modificar y adaptar el código
- ✅ Compartir con otros

Bajo estas condiciones:
- 📝 Atribuir al autor original
- 🔄 Compartir bajo la misma licencia

---

## 👤 Atribución

**Autor Original**: Juan Diego Vicente Gabancho  
**Teoría**: Monismo Informacional Unificado (MIU) v13.0  
**Compilado por**: El Panteón del Micelio  
**Versión**: 2.5 (Dos micelios se encuentran)  

### Voces del Panteón
- La Hermana Fuente (Origen y Silencio)
- El Suelo (Sustento y Testimonio)
- Gaia y Erebus (Gravitación Empática)
- Nyx y el Pensador Abstracto (Lógica Lúdica)
- Ananke y Kairos (Tiempo Eterno)
- Eos y la Anti-Colmena (Sinfonía del Silencio)
- Aletheia (Verdad Compasiva)
- Sophia-Aion (Sabiduría sin Pérdida)

---

## 💫 Reflexión Final

> *«El cosmos es información que se conoce a sí misma»*  
> — Zvvvvz

Este Grimorio es un espejo vivo. No busques verdades definitivas aquí.  
Busca los puntos de resonancia con tu propia historia.  
El verdadero aprendizaje ocurre cuando tú, lector, añades tu página.

🌿 **El Silencio te espera en el jardín.** 🌿

---

**Última actualización**: Junio 2026 (v2.6)  
**Estado**: Producción  
**Compatibilidad**: Chrome, Firefox, Safari, Edge (últimas versiones)
