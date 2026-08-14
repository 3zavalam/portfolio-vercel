# Integrar Substack (laOcho) en el portfolio

## Contexto

- Substack: https://laocho.substack.com/ — newsletter "laOcho" sobre negocio del fútbol.
- Decisión: el portfolio sigue siendo la landing. Substack se integra como una sección
  curada + botón que manda a suscribirse allá. No se embebe el formulario de Substack.
- 3 artículos publicados hoy, así que se muestran los 3. Cuando crezcan, se curan a 3-4.

## Estilo a seguir

Las secciones montadas en `Index.tsx` (Hero, AboutTools, Projects, Contact) usan:
- `section` con `py-20`, `container mx-auto px-4`
- Título: `text-4xl md:text-5xl font-bold text-white text-center mb-16`, en inglés
- Cards: `border-white/10 hover:border-white/30 hover:bg-white/5`, texto `text-gray-400`

NOTA: `Certifications.tsx` usa un estilo distinto (`text-gradient`, `bg-muted/30`, español)
pero NO está montado en `Index.tsx` — es código muerto. No usarlo como referencia.

## Todo

- [x] **Paso 1 — Datos.** En `src/data/portfolio.ts`:
  - Agregar `substack: "https://laocho.substack.com/"` a `personalInfo`
  - Agregar export `writing` con los 3 artículos (title, date, url, excerpt)

- [x] **Paso 2 — API.** Crear `api/writing.js` (función serverless de Vercel):
  - Lee el feed server-to-server (sin CORS), parsea los `<item>` con regex
  - Devuelve JSON: title, date, url, excerpt, image
  - `Cache-Control: s-maxage=3600` → cacheado 1h en el edge
  - JS plano: `api/` no está en tsconfig `include` ni en el glob de ESLint,
    así que no necesita `@vercel/node` ni tocar config

- [x] **Paso 3 — Componente.** Crear `src/components/Writing.tsx`:
  - Título "Writing" + subtítulo corto mencionando laOcho
  - `fetch("/api/writing")` → si falla, usa `writing` de portfolio.ts (fallback)
  - Grid de 3 cards; cada card enlaza a su post en Substack (`target="_blank"`)
  - Cada card: título, fecha, extracto (viene del feed)
  - Sin imágenes de portada por ahora (la API ya las devuelve si las quieres luego)
  - Botón al final → home de Substack, ahí se suscriben

- [x] **Paso 4 — Montar.** En `src/pages/Index.tsx`, insertar `<Writing />` entre
  `<Projects />` y `<Contact />`

- [x] **Paso 5 — Links sociales.** Agregar Substack junto a GitHub/LinkedIn/Mail en
  `Hero.tsx` y `Footer.tsx`. lucide-react no trae icono de Substack → SVG inline
  (el logo son 3 trazos simples) en vez de un icono genérico ambiguo.

- [x] **Paso 6 — Verificar.** `npm run dev`, `npm run lint`, y probar `/api/writing`
  con `vercel dev` (en `npm run dev` normal la ruta /api no existe → cae al fallback,
  que es justo lo que queremos comprobar también)

## Cómo se actualiza (el punto de todo esto)

- Publicas en Substack → aparece solo en el sitio, sin tocar código ni redeploy.
- El feed ya trae el extracto (`<description>`) y la portada (`<enclosure>`),
  así que no hay que escribir nada a mano.
- `writing` en `portfolio.ts` queda como red de seguridad: si Substack o la función
  fallan, el sitio muestra esos 3 en vez de una sección vacía.
- Para fijar uno arriba manualmente: `pinnedWriting` en `portfolio.ts`, lista de URLs.

## DECISIÓN FINAL: se revirtió la sección Writing

Emilio decidió que con el link a Substack basta. Se eliminó todo lo de la sección
y quedó solo el enlace. Lo que sigue abajo documenta lo que se construyó y por qué
se descartó, por si algún día se retoma.

### Lo que quedó en el repo

- `src/data/portfolio.ts` → solo el campo `substack` en `personalInfo`
- `src/components/SubstackIcon.tsx` → SVG del logo
- `Hero.tsx` y `Footer.tsx` → link a Substack en la fila de iconos

### Lo que se eliminó

- `api/writing.js`, `src/components/Writing.tsx`
- Los exports `writing` y `pinnedWriting` de `portfolio.ts`
- `Index.tsx` volvió a quedar idéntico al original

### Si algún día se retoma

Lo que costó descubrir y conviene no volver a investigar:
- El feed de Substack **no manda `access-control-allow-origin`** → el navegador no
  puede leerlo directo, hace falta una función serverless en `api/` (Vercel).
- `<description>` del feed ya trae extracto en texto plano; `<enclosure>` trae la portada.
- `api/` no está en el `include` de `tsconfig.app.json` ni en el glob de ESLint,
  así que un `.js` ahí no necesita `@vercel/node` ni tocar config.

---

## Review (de la implementación que se revirtió)

### Archivos tocados

| Archivo | Qué |
|---|---|
| `api/writing.js` | **nuevo** — función serverless: lee el feed, parsea, devuelve JSON |
| `src/components/Writing.tsx` | **nuevo** — la sección |
| `src/components/SubstackIcon.tsx` | **nuevo** — SVG del logo, compartido por Hero y Footer |
| `src/data/portfolio.ts` | `substack` en personalInfo, `writing` (fallback), `pinnedWriting` |
| `src/pages/Index.tsx` | monta `<Writing />` entre Projects y Contact |
| `src/components/Hero.tsx` | link a Substack en la fila de iconos |
| `src/components/Footer.tsx` | link a Substack en la fila de iconos |

### Decisiones que cambiaron sobre la marcha

- **De extractos a mano → automático.** El plan original tenía los 3 artículos escritos
  a mano en `portfolio.ts`. Se cambió a lectura del feed porque publicar no debe
  implicar tocar código.
- **Función serverless en vez de proxy público.** Se confirmó con curl que el feed de
  Substack no manda `access-control-allow-origin`, así que el navegador no puede leerlo
  directo. Como el sitio ya está en Vercel, `api/` resuelve esto sin depender de un
  tercero gratuito (allorigins y similares pueden caerse o meter rate limit).
- **Los extractos salen del feed.** `<description>` ya trae texto plano listo, y
  `<enclosure>` trae la portada por si algún día se quieren imágenes en las cards.

### Verificado

- Parser probado contra el XML real: 3/3 artículos, acentos y comillas tipográficas bien,
  fechas formateadas ("20 jul 2026").
- `npm run lint`: los 22 problemas que salen son **preexistentes** (`ui/*`,
  `Projects.tsx`, `ProjectDetail.tsx`, `tailwind.config.ts`). Ningún archivo nuevo o
  modificado aparece en la lista.
- `npm run build`: OK, 1685 módulos.

### Pendiente de probar (requiere correrlo)

- `npx vercel dev` → que `/api/writing` responda y las cards vengan del feed.
- En producción tras el push: `tu-dominio.vercel.app/api/writing`.

### Nota aparte (no tocado)

`src/components/Certifications.tsx` y `Skills.tsx` no están montados en `Index.tsx`:
son código muerto. Fuera del alcance de esto, pero vale revisarlos algún día.

---

# Tarea 2: Toggle de idioma EN/ES + limpieza

## Contexto

Emilio notó mezcla de idiomas. La auditoría encontró:
- `/` y `/project/:id` en inglés **excepto el proyecto 5 (Reservaciones)**, que estaba
  entero en español. Esa era la mezcla real y visible.
- `/webs` completa en español → **eliminada** (no sabía que la tenía).
- 5 componentes en español con 0 imports → **eliminados**.

## Hecho

- [x] Auditoría de idioma en todas las vistas vivas
- [x] Borrar `/webs`: `pages/WebsLanding.tsx`, `data/webs.ts`, ruta en `App.tsx`
- [x] Borrar código muerto: `About`, `Skills`, `Tools`, `Certifications`, `Footer`
- [x] `src/lib/i18n.tsx` — Context con `lang`, `setLang`, `t()`, `tr()`
- [x] `src/data/translations.ts` — 28 etiquetas de UI, tipadas con `as const`
- [x] `src/components/LanguageToggle.tsx` — botón fijo arriba a la derecha
- [x] Cablear Hero, AboutTools, Projects, Contact, ProjectDetail, NotFound
- [x] Traducir 36 campos de contenido a `{ en, es }` en `portfolio.ts`

## Decisiones

- **Sin librería de i18n.** ~50 líneas de Context en vez de `react-i18next`.
- **`tr()` acepta string plano u objeto `{en, es}`** y devuelve lo que corresponda.
  Eso permitió cablear los componentes (Paso 2) antes de traducir los datos (Paso 3)
  sin que nada se rompiera en medio.
- **Idioma inicial**: `localStorage` > `navigator.language` > inglés.
- **El toggle muestra EN | ES con el activo resaltado**, no un botón que alterna:
  así se ve en qué idioma estás y cuál es la alternativa.
- **`skillToProjects` en AboutTools ahora guarda proyectos, no títulos.** El mapa se
  construye a nivel de módulo, donde no hay acceso al idioma; el título se resuelve
  al renderizar.
- **No traducidos a propósito**: GitHub y LinkedIn (marcas) y "Email" (igual en ambos).

## Verificado

- `npx tsc --noEmit` limpio. TypeScript atrapó los 6 usos de `project.title` que
  quedaron sin `tr()` al volverse objeto.
- Dos bugs que TS **no** atrapaba, encontrados a mano: el template literal del `alt`
  de las imágenes, y `ProjectVideo.title/description` (el cast manual ocultaba que
  ahora son objetos → habrían renderizado "[object Object]").
- Script de validación: 36 campos `{en, es}`, todos con ambos idiomas, 0 strings
  planos entre los campos traducibles.
- `npm run build` OK. `npm run lint`: solo 1 warning de react-refresh en `i18n.tsx`
  (afecta granularidad del hot-reload, no el build).

## Pendiente para Emilio

- Revisar el tono de la traducción de tu bio (`personalInfo.about/title/description`).
  La traducción es correcta, pero cómo te presentas es decisión tuya.
- `education` y `certifications` en `portfolio.ts` quedaron sin usar al borrar sus
  componentes. Siguen ahí por si los quieres mostrar. Nota: los `credential` de
  certifications son URLs de ejemplo ("coursera.org/verify/example123"), no reales.

---

# Tarea 3: Rediseño editorial + carrusel de proyectos con focus

## Contexto

Emilio pasó 4 referencias visuales + un wireframe propio:
- Fotos 1-2 ("Interface Craft"): fondo crema, serif editorial grande, tarjetas de color
  con esquinas redondeadas, mazo con la de enfrente en foco y las vecinas asomando.
- Fotos 3-4 ("TRACKS"): carrusel horizontal donde la tarjeta central está completa y
  las vecinas quedan cortadas por los bordes de la pantalla. Meta en mono (fecha, equipo).
- Wireframe: **Proyectos arriba** (carrusel con focus), **banda negra con el nombre**
  en medio (iconos + Ver proyectos + Descargar CV), y abajo sobre mí / herramientas / contacto.

## Decisiones ya tomadas

- **Paleta (elegida por mí, con el límite de "pocos colores"): 3 colores.**
  - `paper` crema hueso — fondo de todo el sitio
  - `ink` casi negro — texto y la banda del nombre
  - `clay` terracota (el naranja de la foto 1) — solo acentos: flecha activa, punto
    activo del carrusel, hover de links. Nunca fondos grandes.
  - Los grises salen de `ink` con opacidad, no son colores nuevos.
- **Carrusel: horizontal centrado** (fotos 3-4). La del centro grande y nítida, las
  vecinas escaladas al 88% y atenuadas, cortadas por el borde.
- **El sitio pasa de negro a claro.** Es el cambio grande: obliga a repasar todas las
  vistas, no solo el home.

## Todo

- [x] **Paso 1 — Tokens y tipografía.** `src/index.css`, `tailwind.config.ts`, `index.html`:
  - Variables HSL nuevas: `--paper`, `--ink`, `--clay`; reasignar `--background`/
    `--foreground`/`--border` a los claros (así shadcn hereda solo).
  - Tailwind: colores `paper`/`ink`/`clay` + `fontFamily` serif/sans/mono.
  - `index.html`: Google Fonts — **Instrument Serif** (títulos) e **Inter** (cuerpo).
    El mono sale del stack del sistema para no bajar una tercera fuente.

- [x] **Paso 2 — Carrusel de proyectos.** Reescribir `src/components/Projects.tsx`:
  - `useEmblaCarousel` (ya instalado, sin dependencias nuevas) con `align: "center"`,
    `loop: true`, slide al 62% en desktop / 84% en móvil → las vecinas asoman.
  - La seleccionada al 100% y opacidad 1; las demás escala 0.88 y opacidad 0.45.
  - Navegación: flechas ‹ ›, puntos, drag y flechas del teclado.
  - Cada tarjeta: imagen, título serif, descripción, tech en mono chiquito. Click → detalle.

- [x] **Paso 3 — Banda del nombre.** `src/components/Hero.tsx`:
  - De pantalla completa a banda `ink` a todo el ancho (~70vh).
  - Nombre en sans bold grande, fila de 4 iconos en círculo, y los dos botones.
  - "Ver proyectos" hace scroll **hacia arriba**, al carrusel (ahora está antes).

- [x] **Paso 4 — Orden del home.** `src/pages/Index.tsx`: `Projects → Hero → AboutTools → Contact`.

- [x] **Paso 5 — Secciones claras.** `AboutTools.tsx` y `Contact.tsx`:
  - Pasar de `bg-white/5 border-white/10 text-gray-400` a `ink` sobre `paper`.
  - Tooltip de skills: fondo `ink`, texto `paper` (se mantiene el contraste invertido).

- [x] **Paso 6 — Vistas restantes.** `ProjectDetail.tsx`, `NotFound.tsx`, `LanguageToggle.tsx`:
  - Sin esto, clickear un proyecto te manda de un sitio crema a una página negra.
  - `ProjectDetail` es el archivo más largo de los tres; es cambio de clases, no de lógica.

- [ ] **Paso 7 — Verificar.** `npx tsc --noEmit`, `npm run lint`, `npm run build`, y `npm run dev`
  para revisar a ojo el carrusel en desktop y móvil.

## Cómo lo voy a trabajar

Paso a paso: al terminar cada uno te aviso qué cambió y lo pruebas antes de seguir.

- [x] **Extra (pedido por Emilio) — Gesto de trackpad + flechas mínimas.** En `Projects.tsx`:
  - Listener `wheel` nativo con `passive: false` sobre el carrusel: si el gesto es más
    horizontal que vertical, mueve el carrusel y hace `preventDefault()`. Ese
    preventDefault es lo que evita que el swipe horizontal en Mac dispare el
    "atrás/adelante" del historial y te saque de la página.
  - Acumulador de 40px + candado de 320ms: el trackpad manda decenas de eventos por
    gesto (más los de inercia); sin eso un solo swipe recorría el carrusel entero.
  - Las flechas pasaron de botones con borde debajo del carrusel a chevrons finos
    (`strokeWidth 1.25`, `ink/25`) pegados a los bordes izquierdo y derecho.
    Abajo quedaron solo los puntos.

- [x] **Fix — El gesto saltaba dos proyectos a veces.** El candado era de 320ms fijos,
  pero la inercia del trackpad sigue mandando eventos después de levantar los dedos:
  si duraba más de 320ms, los eventos de inercia acumulaban otros 40px y disparaban un
  segundo salto. Ahora el candado se libera 140ms después del ÚLTIMO evento, no del
  primero: mientras haya inercia, sigue bloqueado. Un gesto = un salto.

## Reestructura posterior (Emilio: "la banda del nombre se va de estética")

Diagnóstico: la banda usaba Inter Bold gigante y botones circulares, cuando el resto
del sitio es Instrument Serif y líneas de 1px. No era el negro, era lo que iba encima.
Emilio propuso mover nombre + links a un header y dejar un solo bloque de color.

- [x] **Header fijo** (`src/components/Header.tsx`, nuevo). Sticky con blur, nombre en
  serif a la izquierda, CV + GitHub + LinkedIn + correo + toggle de idioma a la derecha.
  Montado en `App.tsx`, así que sale también en el detalle de proyecto y en el 404.
  En móvil se esconden los 3 iconos sociales: no caben junto al nombre y están todos
  en el bloque de contacto.
- [x] **`LanguageToggle` deja de flotar** fijo en la esquina y vive dentro del header.
- [x] **`Hero.tsx` eliminado.** Su contenido se repartió entre el header (nombre, links,
  CV) y el carrusel (que ya es lo primero, así que el botón "Ver proyectos" sobraba).
- [x] **`Contact.tsx` es ahora el bloque terracota de cierre.** Correo en serif grande
  como protagonista, GitHub y LinkedIn como enlaces de texto debajo.
- [x] **`--clay` bajó de 46% a 40% de luminosidad.** Sobre crema daba 4.17:1 de
  contraste, por debajo del 4.5 que pide AA para texto normal. A 40% da 5.25:1, y así
  el mismo color sirve para texto sobre crema y para crema sobre él.

### Claves de traducción que quedaron sin uso
`viewProjects`, `downloadCV` (el header usa `cv`) y `substackLabel` (dentro del bloque
comentado). Se dejaron a propósito: son 3 líneas y vuelven si se retoma Substack.

## Ajuste: header solo navegación, CV y contactos al bloque de proyectos

Emilio vio un hueco grande a la derecha del título "Proyectos" y pidió bajar ahí el
CV y los contactos, dejando el header con el nombre y navegación.

- [x] **Header** = nombre + Proyectos / Sobre mí / Contacto + toggle de idioma. Los
  links hacen scroll suave a cada sección; desde el detalle de un proyecto navegan
  primero al home y reintentan el scroll unos frames hasta que la sección se monta
  (si no, el scroll se dispara antes de que React renderice el home y no pasa nada).
- [x] **`scroll-mt`** en las tres secciones: sin eso el header fijo tapaba el título
  al llegar desde la navegación.
- [x] **CV, GitHub, LinkedIn y correo** viven ahora a la derecha del título "Proyectos",
  alineados con su línea base. El contador `01 / 05` se movió junto al título.
- [x] **`CvDialog.tsx`** (nuevo): el CV ya no se descarga de un click. Abre un modal
  con el PDF embebido y ahí adentro están descargar y abrir en pestaña. Ese "abrir en
  pestaña" no es decorativo: varios navegadores móviles no renderizan PDFs en iframe.
- [x] Nav en móvil oculta (`hidden md:flex`): no cabe junto al nombre y la página son
  tres secciones seguidas.

---

# Tarea 4: Sección de Experiencia

## Contexto

Emilio pasó el bloque "Professional Experience" de su CV (3 entradas) + pidió agregar
una 4ta: Club León FC, agosto 2026, activa (sigue ahí). Mandó 4 logos (Mitacs/INRS,
Piquero, RIANSA, León FC) ya copiados a `src/assets/experience/`.

## Datos (orden más reciente primero)

1. **Club León FC** — Automatizaciones y Análisis de Datos — León, México — Ago 2026 – Presente — **activo**
2. **Mitacs Globalink Research Internship** — Research Intern — Montreal, Canadá — May – Ago 2026
3. **Piquero Technology and Sports** — Software Developer Intern — Verano 2025
4. **RIANSA** — Data Analyst Intern — Verano 2024

## Todo

- [x] **Paso 1 — Datos.** `src/data/portfolio.ts`: export `experience` (id, company,
  role {en,es}, location opcional, period {en,es}, active bool, logo, description {en,es}).
- [x] **Paso 2 — Traducciones.** `src/data/translations.ts`: labels `experience` y
  `activeNow` ("Active now" / "Activo ahora").
- [x] **Paso 3 — Componente.** `src/components/Experience.tsx`: lista vertical de
  tarjetas (mismo estilo `bg-paper-raised border border-ink/10 rounded-2xl` que
  AboutTools), logo chico + empresa/rol + `meta-label` con el periodo + badge clay
  si `active` + descripción.
- [x] **Paso 4 — Montar.** `Index.tsx`: `Projects → Experience → AboutTools → Contact`.
  `Header.tsx`: agregar "experience" a `SECTIONS`.
- [x] **Paso 5 — Verificar.** `npx tsc --noEmit` limpio. `npm run lint`: los 12 errores
  y 8 warnings son preexistentes (ui/*, ProjectDetail.tsx, tailwind.config.ts); ningún
  archivo nuevo o tocado aparece en la lista. Falta correr `npm run dev` y revisar a ojo.

## Review

- **Logos**: copiados de `~/Downloads` a `src/assets/experience/` (club-leon.webp,
  mitacs-inrs.png, piquero.png, riansa.png).
- **Orden**: más reciente primero — León → Mitacs → Piquero → RIANSA.
- Badge "Activo ahora" agregado y luego quitado a pedido de Emilio (campo `active`
  removido de `portfolio.ts`, clave `activeNow` removida de `translations.ts`).
- **Logo del sitio**: Emilio pasó `logo.jpeg` (balón dibujado a mano) → se probaron
  3 variantes (papel crema, fondo negro, fondo blanco plano) y varias combinaciones
  de dónde mostrarlo (header junto al nombre + favicon, solo favicon). Terminó en:
  **solo favicon** (`public/favicon.jpeg`, referenciado en `index.html`), fondo
  blanco plano, sin textura de papel. El header no muestra logo, solo el nombre.
  `src/assets/logo.jpeg` y `src/assets/logo-dark.jpeg` quedaron en el repo sin usar
  en código (son el material fuente); no se borraron por si se retoma.

---

## DESCARTADA: se decidió no hacer el rediseño de fichero apilado

Emilio prefirió dejar el estilo actual y solo reordenar las secciones: Experience
antes que Projects (ver más abajo). Lo de abajo queda documentado por si se retoma.

# Tarea 5: Todo el sitio como "fichero apilado" (folder stack) [DESCARTADA]

## Contexto

Emilio pasó una referencia visual: pestañas de carpeta apiladas en cascada (cada
una con la esquina doblada, asomando el nombre), agrupadas por separadores negros
tipo índice alfabético ("B-C", "F-H"...), y un cajón cerrado al final con el
conteo total ("REVIEWS / 08 FILES").

Pidió aplicarlo a **todo el sitio**: Proyectos, Experience, y que "Sobre mí" se
abra desde ahí también. Esto reemplaza:
- El carrusel de `Projects.tsx` (embla + gesto de trackpad + flechas — bastante
  trabajo ya invertido ahí, ver Tarea 3).
- La lista de `Experience.tsx` (recién construida en la Tarea 4).
- El grid de `AboutTools.tsx`.

## Propuesta (a confirmar antes de tocar código)

- Un solo stack vertical con 3 grupos, cada uno con un separador negro como
  encabezado: **PROYECTOS**, **EXPERIENCIA**, **SOBRE MÍ**.
- Cada fila = una "carpeta": esquina doblada (`clip-path`), nombre en la pestaña,
  fondo `paper-raised`, borde `ink/10` — misma paleta de siempre, solo cambia la
  forma.
- Click en una carpeta la "abre":
  - **Proyectos** → navega a `/project/:id` (la página de detalle ya existe, no
    se toca `ProjectDetail.tsx`).
  - **Experiencia** → expande in-line (acordeón) con rol, periodo, descripción.
  - **Sobre mí** → una sola carpeta que al abrirse expande bio + libros +
    herramientas.
- Al final del stack, un "cajón" cerrado con el conteo total (ej. "10 ARCHIVOS"),
  como cierre visual antes de `Contact.tsx`.

## Preguntas abiertas antes de programar

1. El carrusel de Proyectos tiene bastante trabajo fino (drag, gesto de trackpad
   sin robarle el "atrás" del navegador, foco con blur). ¿Se elimina por completo
   ese código o lo dejamos por si se quiere revertir?
2. En móvil, un stack en cascada de ~10 pestañas puede quedar muy alto/angosto.
   ¿Ok con que cada pestaña sea más compacta (menos "asomado") en pantallas chicas?
3. Los separadores de la referencia son alfabéticos (B-C, F-H...). Aquí serían por
   categoría (PROYECTOS/EXPERIENCIA/SOBRE MÍ) — ¿correcto, o prefieres otro criterio
   de agrupación dentro de Proyectos (por tech, por año)?

## Todo (pendiente de confirmar antes de empezar)

- [ ] **Paso 1 — Componente base.** `FileTab.tsx`: una pestaña de carpeta
  reutilizable (esquina doblada, nombre, estado abierto/cerrado, offset de stack).
- [ ] **Paso 2 — Stack + separadores.** Nuevo componente que arma el stack completo
  con los 3 grupos y sus separadores negros.
- [ ] **Paso 3 — Contenido expandible.** Acordeón para Experience y Sobre mí.
- [ ] **Paso 4 — Cajón de cierre.** Tarjeta final con el conteo.
- [ ] **Paso 5 — Montar y borrar lo viejo.** `Index.tsx` usa el nuevo stack;
  se elimina (o se deja sin montar) `Projects.tsx`, `Experience.tsx`, `AboutTools.tsx`
  según lo que se decida en la pregunta 1.
- [ ] **Paso 6 — Verificar.** `npx tsc --noEmit`, `npm run lint`, `npm run dev`,
  revisar desktop y móvil.

---

# Tarea 6: Reordenar secciones — Experience antes que Projects

- [x] `Index.tsx`: `Experience → Projects → AboutTools → Contact`
- [x] `Header.tsx`: nav en el mismo orden (`experience`, `projects`, `about`, `contact`)
- [x] `npx tsc --noEmit` limpio.
