# mia-llm-architecture

Dos exploraciones interactivas, en español, sobre cómo se sirven modelos de lenguaje a escala.

- **Constelación de inferencia** (`inference-constelation/`): atlas espacial y anidado de una flota de inferencia, desde la nube hasta la GPU.
- **Servir modelos de frontera: del gateway al bloque KV** (`llm-architecture-explainer/`): explicador lineal con simuladores, más una pizarra con zoom (`architecture-zoom.html`).

La página raíz (`index.html`) enlaza a ambas.

## Publicación

El sitio se publica con GitHub Pages en <https://darkthrone.github.io/mia-llm-architecture/>. Cada push a `main` lo despliega automáticamente mediante `.github/workflows/pages.yml`.

Todo es HTML, CSS y JavaScript estático: también funciona abriendo `index.html` en el navegador, sin servidor.
