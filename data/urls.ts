const baseHref = process.env.BASE_URL;

if (baseHref === undefined) {
    throw new Error("Environment variable BASE_URL not defined.");
}

const base = new URL(baseHref);
const sitemap = new URL("sitemap.xml", base.href);

export { base, sitemap };
