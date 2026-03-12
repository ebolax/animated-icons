## Animated Icons

CSS‑only animated icons for **Lucide**, **Heroicons** and **Iconoir**. Icons are rendered as plain `<i>` tags with utility‑style classes and animated on hover using custom properties – no JavaScript required in production.

The `/dist` folder contains everything you need to consume the library in your own project.

---

## Getting started

**Install and build**

Install from npm
You can install this package from npm and use the built CSS and icons in your project.

```
npm i @ebolax/animated-icons
```
After installing, link the stylesheet from  `node_modules/ebolax-animated-icons/dist/animated-icons.css` (or the minified `animated-icons.min.css`) and use the icon classes as shown below.

```html
<link rel="stylesheet" href="node_modules/@ebolax/animated-icons/dist/animated-icons.min.css">
```

If you prefer an even simpler setup with no dependency on the `aic-icons` directory, you can use the bundled CSS file:

```html
<link rel="stylesheet" href="/path/to/animated-icons.bundle.min.css">
```

This includes all icons and necessary styles as embedded assets (using data URLs), so you **do not need to copy or serve the `aic-icons` folder**. Just use the icon classes in your HTML as usual, and everything will work out of the box.


You can also copy the `animated-icons.css` file and the `aic-icons` directory from the `dist/` folder to any location in your project. Once copied, update the `<link>` tag `href` and the icon asset paths accordingly, and the icons will work independently from your `node_modules` directory.

You can also import the CSS directly in your JavaScript or TypeScript project.  
For example, with modern bundlers (like Vite, Webpack, or esbuild):

```js
import "@ebolax/animated-icons";
```

Or, if you are using CommonJS:

```js
require("@ebolax/animated-icons");
```

This will automatically bundle and apply the icon CSS to your project, without manually adding a `<link>` tag.


**Manual Install**

```bash
npm install
npm run build
```

This generates:

- `dist/animated-icons.css`
- `dist/animated-icons.min.css`
- `dist/animated-icons.bundle.min.css`
- `dist/aic-icons/` (individual SVGs, one per icon)
- `dist/icons.json` (metadata used by the docs)

**Include the CSS in your app**

```html
<link rel="stylesheet" href="/path/to/animated-icons.css">
```

You can also copy the contents of `animated-icons.css` and `aic-icons` directory into your own bundle.

If you prefer an even simpler setup with no dependency on the `aic-icons` directory, you can use the bundled CSS file:

```html
<link rel="stylesheet" href="/path/to/animated-icons.bundle.min.css">
```

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

The actual list of available icons depends on the versions of `heroicons`, `iconoir` and `lucide-static`. You can browse them in `dist/icons.json`.

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

## Advanced Parameters

Icons use CSS custom properties

- `--aic-animation`: aic-fade;
- `--aic-size`: 1em;
- `--aic-duration`: 600ms;
- `--aic-ease`: cubic-bezier(0.34, 1.56, 0.64, 1);
- `--aic-origin`: center;

To change the animation or size for example:

```html
<i class="aic aic-hero-arrow-path" style="--aic-animation: aic-bar;"></i>
```
```html
<i class="aic aic-hero-arrow-path" style="--aic-size: 32px;"></i>
```

### Available Animation Names

You can control the animation applied to any icon by setting the `--aic-animation` CSS variable. The following animation names are available:

- **bar**: Grows or pulses upwards from the bottom, suitable for progress, charts, or similar icons.
- **bell-ring**: Mimics a ringing bell; a subtle shaking from the top, great for notification or alert icons.
- **dot-appear**: Fades & scales a dot in/out; best for indicators and "active" states.
- **fade**: Simple fade-in/out effect.
- **gear**: Rotates as a gear; useful for settings, cog, or machinery icons.
- **heart-beat**: Pulseslike a beating heart. Use with heart or favorite icons.
- **mail-flap**: Flips/flaps on the Y axis like an envelope; works best with mail/envelope icons.
- **nudge-up, nudge-down, nudge-left, nudge-right, nudge-right-up, nudge-right-down, nudge-left-up, nudge-left-down**: Nudges the icon quickly in a given direction. Great for arrows, navigation, or "movement" cues.
- **page-turn**: Simulates the corner of a page being turned; ideally used with book or document-related icons.
- **pulse-element**: Scales and pulses the icon, perfect for "live," "online," or attention-grabbing effects.
- **rocket-lift**: Lifts/launches like a rocket; fun for rocket, navigation, or launch-related icons.
- **scale-pop**: Quick scale in/out ("pop"); the default, suitable for most icons.
- **shake**: Vigorous left-right shake, communicating "no," a warning, or error.
- **spin**: Continuous rotation, as with spinners/loaders or refresh icons.

**Example usage:**
```html
<i class="aic aic-luc-bell" style="--aic-animation: aic-bell-ring;"></i>
```

You can interactively cycle through available animations in the docs (`dist/index.html`) under the "If you want to change the animation" section.

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