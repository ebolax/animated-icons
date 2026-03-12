import ejs from "ejs";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const docsDir = path.join(rootDir, "docs");
const iconsDir = path.join(distDir, "aic-icons");
const baseCssPath = path.join(rootDir, "base.css");
const templatePath = path.join(rootDir, "index.ejs");
const heroiconsDir = path.join(rootDir, "node_modules", "heroicons", "24", "outline");
const iconoirDir = path.join(rootDir, "node_modules", "iconoir", "icons", "regular");
const lucideDir = path.join(rootDir, "node_modules", "lucide-static", "icons");

const categories = ["all", "arrows", "communication", "media", "files", "ui", "status", "weather", "objects", "editing", "people", "navigation", "data", "security", "development"];

const animations = {
    bar: { name: "bar", origin: "50% 100%" },
    "bell-ring": { name: "bell-ring", origin: "50% 12%" },
    "dot-appear": { name: "dot-appear", origin: "center" },
    fade: { name: "fade", origin: "center" },
    gear: { name: "gear", origin: "center" },
    "heart-beat": { name: "heart-beat", origin: "50% 60%" },
    "mail-flap": { name: "mail-flap", origin: "50% 18%" },
    "nudge-up": { name: "nudge-up" },
    "nudge-down": { name: "nudge-down" },
    "nudge-left": { name: "nudge-left" },
    "nudge-right": { name: "nudge-right" },
    "nudge-right-up": { name: "nudge-right-up" },
    "nudge-right-down": { name: "nudge-right-down" },
    "nudge-left-up": { name: "nudge-left-up" },
    "nudge-left-down": { name: "nudge-left-down" },
    "page-turn": { name: "page-turn", origin: "0% 50%" },
    "pulse-element": { name: "pulse-element", origin: "center" },
    "rocket-lift": { name: "rocket-lift" },
    "scale-pop": { name: "scale-pop", origin: "center" },
    shake: { name: "shake", origin: "center" },
    spin: { name: "spin", origin: "center" }
};

function ensureDir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

function readSvg(filePath) {
    return fs.readFileSync(filePath, "utf8").trim();
}

function normalizeSvg(svg) {
    return svg
        .replace(/\r\n/g, "\n")
        .replace(/<\?xml[^>]*>\s*/g, "")
        .replace(/<!--([\s\S]*?)-->/g, "")
        .trim();
}

function directionVars(iconName) {
    const isRight = /(^|-)right($|-)|redo|next|forward/.test(iconName);
    const isLeft = /(^|-)left($|-)|undo|prev|backward/.test(iconName);
    const isUp = /(^|-)up($|-)|upload|rise|ascending/.test(iconName);
    const isDown = /(^|-)down($|-)|download|descending/.test(iconName);

    if (isRight && isUp) return "right-up";
    if (isRight && isDown) return "right-down";
    if (isLeft && isUp) return "left-up";
    if (isLeft && isDown) return "left-down";
    if (isRight) return "right";
    if (isLeft) return "left";
    if (isUp) return "up";
    if (isDown) return "down";
    return "up";
}

function pickAnimation(iconName) {
    const name = iconName.toLowerCase();
    const dir = directionVars(name);

    if (/chart-bar|presentation-chart-bar|stats-up|stats-down|bar-chart/.test(name)) {
        return { animation: animations.bar.name, origin: animations.bar.origin };
    }

    if (/bell/.test(name)) {
        return { animation: animations["bell-ring"].name, origin: animations["bell-ring"].origin };
    }

    if (/dot-appear|pin|location|locate|map-pin/.test(name)) {
        return { animation: animations["dot-appear"].name, origin: animations["dot-appear"].origin };
    }

    if (/play|pause|stop|radio|music|audio|speaker|volume/.test(name)) {
        return { animation: animations.fade.name, origin: animations.fade.origin };
    }

    if (/settings|cog|gear|sun|moon|clock|scissor|scissors/.test(name)) {
        return { animation: animations.gear.name, origin: animations.gear.origin };
    }

    if (/heart/.test(name)) {
        return { animation: animations["heart-beat"].name, origin: animations["heart-beat"].origin };
    }

    if (/mail|envelope/.test(name)) {
        return { animation: animations["mail-flap"].name, origin: animations["mail-flap"].origin };
    }

    if (/arrow|chevron|redo|undo|forward|backward|trending|u-turn|turn-/.test(name)) {
        return { animation: animations["nudge-" + dir].name };
    }

    if (/book/.test(name)) {
        return { animation: animations["page-turn"].name, origin: animations["page-turn"].origin };
    }

    if (/wifi|signal|alert|warning|bolt|spark|zap|notification/.test(name)) {
        return { animation: animations["pulse-element"].name, origin: animations["pulse-element"].origin };
    }

    if (/rocket|navigation/.test(name)) {
        return { animation: animations["rocket-lift"].name };
    }

    if (/search|magnifying-glass|camera|video|eye|face|chat|message|phone|mic|microphone|cloud|globe|shield|star|key|wrench|archive/.test(name)) {
        return { animation: animations["scale-pop"].name, origin: animations["scale-pop"].origin };
    }

    if (/menu|bars|trash|lock|cart|shopping|flag|paper-airplane|send|compass/.test(name)) {
        return { animation: animations.shake.name, origin: animations.shake.origin };
    }

    if (/refresh|reload|rotate|spinner|loader|restart|path|sync/.test(name)) {
        return { animation: animations.spin.name, origin: animations.spin.origin };
    }

    return { animation: animations["scale-pop"].name, origin: animations["scale-pop"].origin };
}

function pickCategory(iconName) {
    const name = iconName.toLowerCase();

    if (/arrow|chevron|caret|redo|undo|forward|backward|next|prev|trend|u-turn|turn-/.test(name)) return "arrows";
    if (/chat|message|mail|envelope|phone|bubble|comment|send|reply|share|telegram|whatsapp|twitter|rss/.test(name)) return "communication";
    if (/play|pause|stop|radio|music|audio|speaker|volume|video|camera|image|photo|film|microphone|podcast/.test(name)) return "media";
    if (/file|folder|document|archive|book|clipboard|paper|receipt|newspaper|note|page|copy|save|download|upload|print/.test(name)) return "files";
    if (/menu|home|grid|more|ellipsis|settings|cog|dashboard|layout|panel|window|sidebar|filter|search|magnifying-glass|command|app|widget/.test(name)) return "ui";
    if (/check|xmark|x-|minus|plus|warning|alert|info|question|help|bell|notification|star|heart|badge|favorite/.test(name)) return "status";
    if (/sun|moon|cloud|rain|snow|storm|wind|temperature|umbrella|weather|fog/.test(name)) return "weather";
    if (/bag|cart|gift|box|cube|package|key|lock|unlock|wrench|tool|hammer|scissor|scissors|pen|pencil|brush|ruler|lamp|rocket|car|truck|train|airplane|bicycle|glasses|watch|wallet|tag/.test(name)) return "objects";
    if (/edit|pencil|pen|eraser|crop|text|bold|italic|underline|strikethrough|align|list|quote|code|paint|palette|type/.test(name)) return "editing";
    if (/user|users|person|people|face|profile|account|group|child|male|female|non-binary|hand/.test(name)) return "people";
    if (/map|pin|location|globe|compass|navigate|navigation|route|direction|road|planet|world/.test(name)) return "navigation";
    if (/chart|graph|stats|table|pie|bar|analytics|database|server|cpu|activity|signal|wifi|presentation|calculator/.test(name)) return "data";
    if (/shield|security|safe|fingerprint|scan|eye-slash|privacy|password|key|lock|firewall|protection/.test(name)) return "security";
    if (/code|terminal|bug|git|github|gitlab|api|bracket|binary|cursor|component|sdk|html|css|javascript|npm|vue|linux|windows|mac|developer/.test(name)) return "development";

    return "objects";
}

function titleCase(value) {
    if (value === "ui") return "UI";
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function toRuleBlock(selectors, vars) {
    const selectorList = Array.isArray(selectors) ? selectors.join(",\n") : selectors;
    const lines = [selectorList + " {"];

    lines.push(`  --aic-icon: url("${vars.iconPath}");`);
    lines.push(`  --aic-animation: aic-${vars.animation};`);

    if (vars.origin) lines.push(`  --aic-origin: ${vars.origin};`);

    lines.push("}");
    return lines.join("\n");
}

function buildCss(iconMeta) {
    const baseCss = fs.readFileSync(baseCssPath, "utf8").trim();

    const rules = iconMeta.map((icon) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        toRuleBlock(icon.selectors, {
            iconPath: `./aic-icons/${icon.fileName}`,
            ...icon.animation
        })
    );

    return `${baseCss}\n\n${rules.join("\n\n")}\n`;
}

function buildHtmlPreview(iconMeta) {
    const template = fs.readFileSync(templatePath, "utf8");
    const heroMeta = iconMeta.filter((icon) => icon.source === "heroicons");
    const iconoirMeta = iconMeta.filter((icon) => icon.source === "iconoir");
    const lucideMeta = iconMeta.filter((icon) => icon.source === "lucide");

    return ejs.render(
        template,
        {
            categories,
            heroMeta,
            iconMeta,
            iconoirMeta,
            lucideMeta,
            titleCase,
            animations
        },
        {
            filename: templatePath
        }
    );
}

function collectIcons() {
    const icons = [];
    const seen = new Set();

    const heroFiles = fs
        .readdirSync(heroiconsDir)
        .filter((file) => file.endsWith(".svg"))
        .sort();
    for (const file of heroFiles) {
        const name = file.replace(/\.svg$/, "");
        const sourcePath = path.join(heroiconsDir, file);
        const fileName = `hero-${name}.svg`;
        const manifestKey = `heroicons:${name}`;

        if (seen.has(manifestKey)) continue;
        seen.add(manifestKey);

        icons.push({
            source: "heroicons",
            name,
            category: pickCategory(name),
            fileName,
            sourcePath,
            selectors: [`.aic.aic-hero-${name}`],
            className: `aic aic-hero-${name}`,
            svg: normalizeSvg(readSvg(sourcePath)),
            animation: pickAnimation(name)
        });
    }

    const iconoirFiles = fs
        .readdirSync(iconoirDir)
        .filter((file) => file.endsWith(".svg"))
        .sort();
    for (const file of iconoirFiles) {
        const originalName = file.replace(/\.svg$/, "");
        const sourcePath = path.join(iconoirDir, file);
        const fileName = `io-${originalName}.svg`;
        const manifestKey = `iconoir:${originalName}`;

        if (seen.has(manifestKey)) continue;
        seen.add(manifestKey);

        icons.push({
            source: "iconoir",
            name: originalName,
            category: pickCategory(originalName),
            fileName,
            sourcePath,
            selectors: [`.aic.aic-io-${originalName}`],
            className: `aic aic-io-${originalName}`,
            svg: normalizeSvg(readSvg(sourcePath)),
            animation: pickAnimation(originalName)
        });
    }

    const lucideFiles = fs
        .readdirSync(lucideDir)
        .filter((file) => file.endsWith(".svg"))
        .sort();
    for (const file of lucideFiles) {
        const originalName = file.replace(/\.svg$/, "");
        const sourcePath = path.join(lucideDir, file);
        const fileName = `luc-${originalName}.svg`;
        const manifestKey = `lucide:${originalName}`;

        if (seen.has(manifestKey)) continue;
        seen.add(manifestKey);

        icons.push({
            source: "lucide",
            name: originalName,
            category: pickCategory(originalName),
            fileName,
            sourcePath,
            selectors: [`.aic.aic-luc-${originalName}`],
            className: `aic aic-luc-${originalName}`,
            svg: normalizeSvg(readSvg(sourcePath)),
            animation: pickAnimation(originalName)
        });
    }

    return icons.sort((a, b) => `${a.source}:${a.name}`.localeCompare(`${b.source}:${b.name}`));
}

function build() {
    ensureDir(distDir);
    ensureDir(iconsDir);

    const icons = collectIcons();

    for (const icon of icons) {
        fs.writeFileSync(path.join(iconsDir, icon.fileName), icon.svg + "\n");
    }

    const css = buildCss(icons);
    fs.writeFileSync(path.join(distDir, "animated-icons.css"), css);

    const manifest = icons.map((icon) => ({
        source: icon.source,
        name: icon.name,
        category: icon.category,
        className: icon.className,
        fileName: icon.fileName,
        animation: icon.animation.animation
    }));
    fs.writeFileSync(path.join(distDir, "icons.json"), JSON.stringify(manifest, null, 2) + "\n");
    fs.writeFileSync(path.join(docsDir, "index.html"), buildHtmlPreview(icons));

    console.log(`Built ${icons.length} icons.`);
}

build();
