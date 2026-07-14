# Dirección visual — Angel Zurita

## Sujeto, audiencia y trabajo de la página

- **Sujeto:** ingeniería de producto para operaciones comerciales reales.
- **Audiencia:** equipos técnicos, líderes de producto y clientes que necesitan modernizar o construir software operativo.
- **Trabajo único:** demostrar criterio y profundidad mediante cinco casos verificables, y abrir una conversación profesional.

## Sistema de tokens

### Color

- **Koke / tinta:** `#17241D` — texto principal y superficies de máxima jerarquía.
- **Terra verde:** `#526B5B` — señal de acción, selección y estructura.
- **Cedro:** `#B17D5D` — material cálido con contraste AA frente a la tinta.
- **Arcilla:** `#C7835B` — acento de contacto y estados interactivos.
- **Tatami:** `#D8D7C5` — fondo mineral/vegetal, deliberadamente no crema.
- **Papel:** `#F1F0E7` — superficie de lectura.

### Tipo

- **Display:** Dela Gothic One; anchura extrema y peso de portada japonesa, sólo en tesis y numerales.
- **Texto:** Manrope; técnico pero humano, con métricas limpias para lectura larga.
- **Utilidad:** IBM Plex Mono; estados, tecnologías y metadatos verificables.

### Layout

La página se comporta como una mesa de trabajo editorial: hero sobre retícula estricta y obra en masonry de tres columnas. Cada pieza conserva altura propia según profundidad y visual; líneas parecen juntas de carpintería.

```text
desktop
┌─ marca/nav ─────────────────────────────────────┐
│ tesis tipográfica 7 cols │ mapa full-stack 5c  │
├──────────────────────────┴──────────────────────┤
│ proyecto alto │ proyecto medio │ proyecto alto  │
│ proyecto medio│ proyecto alto  │ proyecto medio │
│ flujo masonry continuo, sin filas forzadas      │
├─────────────────────────────────────────────────┤
│ método / perfil / contacto                      │
└─────────────────────────────────────────────────┘

mobile
┌─ marca / menú mínimo ─┐
│ tesis                 │
│ mapa de capas compacto│
│ proyecto              │
│ proyecto              │
│ método                │
│ contacto              │
└───────────────────────┘
```

## Firma

Un mapa personal de cuatro capas —datos, sistemas, interfaz e IA— construido como piezas de madera ensambladas. Explica cómo trabaja Angel sin convertir su nombre en un logotipo gigante. Las líneas del ensamble reaparecen en cada visual abstracto: lotes, estantes, carriles, rutas y nodos.

En obra, ritmo Pinterest se vuelve propio: no tarjetas sociales redondeadas, sino fichas técnicas ensambladas. Tres alturas (`standard`, `wide`, `tall`) codifican profundidad del caso y rompen filas sin romper identidad.

Los títulos de casos son aliases editoriales. Comunican función del sistema sin revelar cliente, empresa o nombre interno.

## Voz e idioma

La interfaz habla en primera persona. Español carga por defecto; switch ES/EN cambia contenido, atributo `lang` y etiquetas accesibles, y conserva preferencia localmente. Nombre **Angel Zurita** ocupa tesis principal del hero.

## Autocrítica y ajuste

La primera recomendación automática proponía monocromo con azul y una cuadrícula de portfolio convencional. Se descartó porque podría pertenecer a cualquier desarrollador y contradecía madera/terra verde/Japandi. También se evitó la fórmula crema + serif + terracota: aquí el fondo es tatami verdoso, la voz es una sans japonesa muy ancha y el cedro sólo describe estructura/material. El gesto expresivo fuerte es el mapa de capas; el resto permanece disciplinado.
