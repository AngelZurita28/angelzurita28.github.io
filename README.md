# Portfolio — Angel Zurita

Portafolio profesional construido con Astro 7 y Vite. La interfaz es estática por defecto y usa JavaScript mínimo para revelar contenido al entrar en el viewport.

## Comandos

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Estructura

- `src/data/projects.ts`: contenido estructurado de los cinco casos.
- `src/components/`: visuales de dominio y tarjetas de proyecto.
- `src/styles/global.css`: sistema visual Japandi-tech, responsive y accesible.
- `DESIGN.md`: decisiones, tokens y crítica de la dirección visual.

## Privacidad pública

Nombres de proyecto en `src/data/projects.ts` son aliases públicos. No sustituirlos por nombres de clientes, empresas, repositorios o productos internos.

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
