import { expect, test } from "@playwright/test";
import { staticRoutes } from "./routes";

test.describe("SEO plumbing", () => {
  test("sitemap lists every route and robots points to it", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    // The sitemap host comes from NEXT_PUBLIC_SITE_URL, which may differ from the test target; match paths only.
    for (const route of staticRoutes) {
      const pattern = route === "/" ? /<loc>https?:\/\/[^/<]+<\/loc>/ : new RegExp(`<loc>https?://[^/<]+${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>`);
      expect(xml, `sitemap contains ${route}`).toMatch(pattern);
    }
    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("/sitemap.xml");
  });

  test("manifest, icons and social images respond", async ({ request }) => {
    for (const path of ["/manifest.webmanifest", "/icon", "/apple-icon", "/opengraph-image", "/twitter-image", "/favicon.ico", "/favicon-32x32.png", "/icon-192x192.png", "/icon-512x512.png", "/maskable-icon-512x512.png", "/monochrome-icon-512x512.png", "/safari-pinned-tab.svg", "/logo-mark.svg", "/apple-touch-icon.png"]) {
      const res = await request.get(path);
      expect(res.status(), path).toBe(200);
    }
    const manifest = (await (await request.get("/manifest.webmanifest")).json()) as { name: string; theme_color: string; icons: Array<{ sizes: string; purpose?: string }> };
    expect(manifest.name).toContain("Raahi");
    expect(manifest.theme_color).toBe("#0E4D45");
    expect(manifest.icons.map((i) => i.sizes)).toEqual(expect.arrayContaining(["192x192", "512x512", "144x144", "96x96"]));
    expect(manifest.icons.some((i) => i.purpose === "maskable")).toBe(true);
  });

  test("branded social card renders for any page and falls back safely", async ({ request }) => {
    const card = await request.get("/og?t=Umrah%20packages&e=Test&s=Subtitle&p=packagesHero");
    expect(card.status()).toBe(200);
    expect(card.headers()["content-type"]).toContain("image/jpeg");
    expect(card.headers()["cache-control"]).toContain("max-age");
    const bytes = (await card.body()).length;
    expect(bytes).toBeGreaterThan(10_000);
    expect(bytes, "social card must stay small enough for WhatsApp previews").toBeLessThan(300_000);
    const fallback = await request.get("/og?p=does-not-exist");
    expect(fallback.status()).toBe(200);
    expect(fallback.headers()["content-type"]).toContain("image/jpeg");
  });

  test("home page carries organisation, website and FAQ structured data", async ({ page }) => {
    await page.goto("/");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const types = blocks.flatMap((b) => {
      const parsed = JSON.parse(b) as { "@type"?: string | string[] } | Array<{ "@type"?: string | string[] }>;
      return (Array.isArray(parsed) ? parsed : [parsed]).flatMap((p) => (Array.isArray(p["@type"]) ? p["@type"] : [p["@type"] ?? ""]));
    });
    expect(types).toEqual(expect.arrayContaining(["TravelAgency", "WebSite", "FAQPage", "WebPage"]));
  });

  test("package page exposes offers for all three room types", async ({ page }) => {
    await page.goto("/umrah-packages/economy-umrah-10-nights");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const trip = blocks.map((b) => JSON.parse(b) as { "@type"?: string | string[]; offers?: Array<{ price: number }> }).find((p) => Array.isArray(p["@type"]) && p["@type"].includes("TouristTrip"));
    expect(trip?.offers?.map((o) => o.price)).toEqual([165000, 185000, 215000]);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Economy Umrah/);
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(ogImage, "branded social card carrying the package photo").toMatch(/\/og\?.*p=tawaf/);
  });

  test("every page has unique title and description", async ({ request }) => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();
    for (const route of staticRoutes) {
      const html = await (await request.get(route)).text();
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
      const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "";
      expect(title, `title on ${route}`).not.toBe("");
      expect(description, `description on ${route}`).not.toBe("");
      expect(titles.has(title), `duplicate title: ${title}`).toBe(false);
      expect(descriptions.has(description), `duplicate description on ${route}`).toBe(false);
      titles.add(title);
      descriptions.add(description);
    }
  });
});
