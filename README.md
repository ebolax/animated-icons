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
- `dist/aic-icons/` (individual SVGs, one per icon)
- `dist/icons.json` (metadata used by the docs)
- `dist/index.html` (demo / playground)

2. **Include the CSS in your app**

```html
<link rel="stylesheet" href="/path/to/animated-icons.css">
```

You can also copy the contents of `animated-icons.css` `and aic-icons` directory into your own bundle.

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

## Change Parameters

Icons use CSS custom properties

- `--aic-animation`: aic-fade;
- `--aic-size`: 1em;
- `--aic-duration`: 600ms;
- `--aic-ease`: cubic-bezier(0.34, 1.56, 0.64, 1);
- `--aic-origin`: center;

To change the animation or size for example:

```
<i class="aic aic-hero-arrow-path" style="--aic-animation: aic-bar;"></i>

<i class="aic aic-hero-arrow-path" style="--aic-size: 32px;"></i>
```

You can also start a dev server:

```bash
npm run start
# or
npm run dev   # nodemon + serve
```

This will rebuild CSS when sources change (EJS template, base CSS, build script) and serve `dist/` locally.

---

## License & credits

- **Library license**: ISC (see `package.json`).
- **Icon licenses**: The underlying icon sets (Lucide, Heroicons, Iconoir) use their own open‑source licenses (ISC / MIT). Refer to their official repos/sites for details.

Built on [Lucide](https://lucide.dev), [Heroicons](https://heroicons.com) and [Iconoir](https://iconoir.com).