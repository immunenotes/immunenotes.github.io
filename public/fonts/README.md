# Self-hosted fonts

All fonts in this directory are licensed under the **SIL Open Font License 1.1** (<https://openfontlicense.org>) and may be freely used, embedded and self-hosted, including for commercial projects. The license text travels with each project as required by the OFL.

| File(s) | Family | Source | Copyright |
|---|---|---|---|
| `inter-latin-variable.woff2`, `inter-latin-italic-variable.woff2` | Inter (variable, 100–900) | rsms/inter | © The Inter Project Authors |
| `source-serif-4-latin-variable.woff2`, `source-serif-4-latin-italic-variable.woff2` | Source Serif 4 (variable, 100–900) | Adobe Fonts | © Adobe (Frank Grießhammer) |
| `merriweather-v32-latin-regular.woff2`, `merriweather-v32-latin-700.woff2` | Merriweather (400, 700) | Sorkin Type | © Sorkin Type Co |

Files are the **latin subset** (woff2), distributed via the Fontsource project. Referenced from `src/styles/global.css` via `@font-face`; the two primary faces are `<link rel="preload">`-ed in `BaseLayout.astro` and `SlideLayout.astro`.
