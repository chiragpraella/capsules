# Tailwind + GSAP HTML Starter

Minimal HTML project scaffolded with Tailwind CSS and GSAP.

## Prerequisites
- Node.js 18+

## Install
```bash
cd /Users/chirag/Documents/work/capsules/html
npm install
```

## Develop
Build Tailwind and serve the site with live reload:
```bash
npm run dev
```
- App served at `http://localhost:5173/public/`
- Tailwind CSS is built to `public/styles/tailwind.css`

## Build CSS for production
```bash
npm run build
```

## Structure
```
public/
  index.html
  js/
    main.js
  styles/
    tailwind.css         # generated output
src/
  styles/
    tailwind.css         # Tailwind input
tailwind.config.js
postcss.config.js
package.json
README.md
```

## Notes
- GSAP is loaded from local `assets/` per workspace state; swap to CDN if needed.
- Adjust `tailwind.config.js` `content` globs if you add more directories.
