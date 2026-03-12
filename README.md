## Animated Icons

CSS‑only animated icons for **Lucide**, **Heroicons** and **Iconoir**. Icons are rendered as plain `<i>` tags with utility‑style classes and animated on hover using custom properties – no JavaScript required in production.

The `/dist` folder contains everything you need to consume the library in your own project.

---

## Getting started

1. **Install and build**

```bash
npm install
npm run build
```

This generates:

- `dist/animated-icons.css`
- `dist/animated-icons.min.css`
- `dist/icons/` (individual SVGs, one per icon)
- `dist/icons.json` (metadata used by the docs)
- `dist/index.html` (demo / playground)

2. **Include the CSS in your app**

```html
<link rel="stylesheet" href="/path/to/animated-icons.css">
```

You can also copy the contents of `animated-icons.css` into your own bundle.

---

## Basic usage

Each icon is a combination of the base `aic` class and a library‑specific class:

- **Heroicons**: `aic aic-hero-icon-name`
- **Iconoir**: `aic aic-io-icon-name`
- **Lucide**: `aic aic-luc-icon-name`

```html
<!-- Heroicons -->
<i class="aic aic-hero-academic-cap"></i>

<!-- Iconoir -->
<i class="aic aic-io-mail"></i>

<!-- Lucide -->
<i class="aic aic-luc-home"></i>
```

The actual list of available icons depends on the versions of `heroicons`, `iconoir` and `lucide-static`. You can browse them in `dist/index.html` (search, filter, pagination) or inspect `dist/icons.json`.

---

## Using icons inside buttons / links (`aic-wrapper`)

When an icon lives inside a clickable parent (button, link, nav item, etc.), wrap the icon with a container that has the `aic-wrapper` class. This keeps the hover area and animation attached to the parent element, not only to the glyph itself.

```html
<button class="aic-wrapper">
  <i class="aic aic-luc-accessibility"></i>
  Settings
</button>

<a href="#" class="aic-wrapper">
  <i class="aic aic-hero-home"></i>
  Dashboard
</a>
```

In the docs (`dist/index.html`), all sidebar items, tabs and icon buttons use this pattern.

---

## Colors and theming

Icons use CSS custom properties for color and animation:

- `--aic-icon` – URL of the SVG
- `--aic-animation` – keyframe name (e.g. `aic-scale-pop`, `aic-nudge`)
- `--aic-size` – icon size (defaults to `24px` – overridden in the docs)
- `--aic-preview-primary` – main accent color used in the demo

To change the accent color globally (like the color picker in the demo), override `--aic-preview-primary` on `:root` or on any container:

```css
:root {
  --aic-preview-primary: #14b8a6; /* teal */
}

.my-card {
  --aic-preview-primary: #6366f1; /* per-card override */
}
```

---

## Demo / playground

After running `npm run build`, open:

- `dist/index.html` – full demo UI with:
  - Heroicons, Iconoir and Lucide tabs
  - Search box + category filters
  - Pagination for large icon sets
  - Color picker that live‑updates the accent color
  - Modal that shows copy‑paste snippets for each icon
  - “See Lucide in action” section with sidebar, tabs and buttons wired up to real icons

You can also start a dev server:

```bash
npm run start
# or
npm run dev   # nodemon + serve
```

This will rebuild CSS when sources change (EJS template, base CSS, build script) and serve `dist/` locally.

---

## Build pipeline

The build script (`build-css-icons.mjs`) does the following:

- Reads SVGs from:
  - `node_modules/heroicons/24/outline`
  - `node_modules/iconoir/icons/regular`
  - `node_modules/lucide-static/icons`
- Normalises them and writes a copy into `dist/icons/`.
- Categorises icons (arrows, communication, media, files, UI, status, weather, objects, editing, people, navigation, data, security, development).
- Picks an appropriate animation per icon (spin, nudge, shake, heart‑beat, rocket‑lift, etc.) and exposes it via CSS variables.
- Renders `base.css` + generated rules into `dist/animated-icons.css` and a minified `dist/animated-icons.min.css`.
- Generates `dist/index.html` from `index.ejs` using EJS.

You rarely need to touch this unless you are adding a new icon source or changing how animations are assigned.

---

## License & credits

- **Library license**: ISC (see `package.json`).
- **Icon licenses**: The underlying icon sets (Lucide, Heroicons, Iconoir) use their own open‑source licenses (ISC / MIT). Refer to their official repos/sites for details.

Built on [Lucide](https://lucide.dev), [Heroicons](https://heroicons.com) and [Iconoir](https://iconoir.com).  
Source: [`ebolax/animated-icons`](https://github.com/ebolax/animated-icons).

# Animated Icons

CSS tabanlı animated icon çıktısı üretir.

## Build

```bash
npm run build
```

Üretilen dosyalar:

- `dist/animated-icons.css`
- `dist/icons/*.svg`
- `dist/icons.json`
- `dist/index.html`

Şablon dosyası:

- `index.ejs` → build sırasında render edilerek `dist/index.html` üretilir.
- `base.css` → build sırasında okunur ve icon kurallarıyla birleştirilerek `dist/animated-icons.css` üretilir.

## Kullanım

```html
<link rel="stylesheet" href="./dist/animated-icons.css" />

<i class="aic-hero aic-chat-bubble-left"></i>
<i class="aic-hero aic-bell"></i>
<i class="aic-hero aic-arrow-right"></i>

<i class="aic-io aic-xbox-a"></i>
<i class="aic-io aic-archive"></i>

<button class="aic-wrapper">
  <i class="aic-hero aic-chat-bubble-left"></i>
  Mesajlar
</button>
```

## Notlar

- Heroicons kaynağı: `heroicons/24/outline`
- Iconoir kaynağı: `iconoir/icons/regular`
- Heroicons kullanımı: `aic-hero aic-{ikon-adi}`
- Iconoir kullanımı: `aic-io aic-{ikon-adi}`
- Hover/focus sırasında animasyon çalışır.
- Bir kapsayıcıya `aic-wrapper` verirsen, kapsayıcı hover/focus/focus-within olduğunda içindeki ikonlar da animasyon oynatır.
- Renk `currentColor` üzerinden gelir.

## Boyut ve renk

```html
<i class="aic-hero aic-archive-box" style="font-size: 32px; color: #2563eb;"></i>
```

veya

```css
.big-icon {
  --aic-size: 32px;
  color: #2563eb;
}
```
