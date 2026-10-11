import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("hero is fully visible without scrolling", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const hero = page.locator("section[aria-labelledby='hero-title']");
    await expect(hero).toBeVisible();
    const box = await hero.boundingBox();
    const viewport = page.viewportSize();
    expect(box, "hero bounding box").not.toBeNull();
    expect(viewport).not.toBeNull();
    if (!box || !viewport) return;
    // Hero must start at the top (just under the fixed header) and end inside the first viewport.
    expect(box.y).toBeLessThanOrEqual(120);
    expect(box.y + box.height, `hero bottom (${Math.round(box.y + box.height)}) vs viewport ${viewport.height}`).toBeLessThanOrEqual(viewport.height + 1);
    // Its headline and primary buttons are inside the viewport too.
    await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
    await expect(page.getByRole("link", { name: /see packages|see all packages/i }).first()).toBeInViewport();
  });

  test("key sections are present in order", async ({ page }) => {
    await page.goto("/");
    const labels = await page.locator("main section[aria-label], main section[aria-labelledby]").evaluateAll((els) =>
      els.map((el) => el.getAttribute("aria-label") ?? el.getAttribute("aria-labelledby") ?? ""),
    );
    const expected = ["hero-title", "Featured packages", "How it works", "Why Raahi", "Hotels", "Departures", "Reviews", "Visa assistance", "Guides", "Common questions and call back"];
    let cursor = -1;
    for (const label of expected) {
      const idx = labels.indexOf(label);
      expect(idx, `section ${label} present`).toBeGreaterThan(cursor);
      cursor = idx;
    }
  });

  test("stats never render as zero placeholders", async ({ page }) => {
    await page.goto("/");
    const stats = page.locator("section[aria-label='Raahi at a glance'] dd");
    await expect(stats).toHaveCount(4);
    for (const text of await stats.allTextContents()) expect(text).not.toMatch(/^0\+?$/);
  });

  test("quick planner hands off to the planner page with choices", async ({ page }) => {
    await page.goto("/");
    // Two planners exist on the home page (desktop hero and phone card); use the visible one.
    const form = page.getByTestId("quick-planner").locator("visible=true").first();
    await form.getByLabel("Departure city").selectOption("Karachi");
    await form.getByLabel("Duration").selectOption("14");
    await form.getByLabel("Hotel category").selectOption("premium");
    await form.getByRole("button", { name: /continue to my free quote/i }).click();
    await expect(page).toHaveURL(/\/plan-your-umrah\?city=Karachi&duration=14&tier=premium/);
    await expect(page.getByLabel("Departure city")).toHaveValue("Karachi");
    await expect(page.getByLabel("Duration")).toHaveValue("14");
    await expect(page.getByLabel("Hotel category")).toHaveValue("premium");
  });

  test("FAQ accordion toggles and keeps answers in the DOM", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("section[aria-label='Common questions and call back']");
    const buttons = section.getByRole("button", { name: /\?$/ });
    await expect(buttons.first()).toHaveAttribute("aria-expanded", "true");
    await buttons.nth(1).scrollIntoViewIfNeeded();
    await buttons.nth(1).click();
    await expect(buttons.nth(1)).toHaveAttribute("aria-expanded", "true");
    await expect(buttons.first()).toHaveAttribute("aria-expanded", "false");
    // Hidden answers still exist for crawlers.
    expect(await section.locator("[role='region'][hidden]").count()).toBeGreaterThan(0);
  });
});

test.describe("navigation", () => {
  test("mobile drawer opens, scroll-locks, navigates and closes", async ({ page, isMobile, browserName }) => {
    const viewport = page.viewportSize();
    test.skip(!!viewport && viewport.width >= 1024, "desktop layout has no drawer");
    await page.goto("/");
    const openButton = page.getByRole("button", { name: "Open menu" });
    await expect(openButton).toBeVisible();
    await openButton.click();
    const drawer = page.getByRole("dialog", { name: "Site navigation" });
    await expect(drawer).toBeVisible();
    await expect(drawer.getByRole("link", { name: /umrah packages/i })).toBeVisible();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, "no horizontal overflow with drawer open").toBeLessThanOrEqual(1);

    await drawer.getByRole("link", { name: /^hotels/i }).click();
    await expect(page).toHaveURL(/\/hotels$/);
    await expect(drawer).toBeHidden();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
    test.info().annotations.push({ type: "browser", description: `${browserName} mobile=${isMobile}` });
  });

  test("sticky contact bar shows on phones and WhatsApp pill on desktop", async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize();
    const bar = page.getByRole("navigation", { name: "Quick contact" });
    const pill = page.getByRole("link", { name: /plan your umrah on whatsapp/i });
    if (viewport && viewport.width < 1024) {
      await expect(bar).toBeVisible();
      await expect(pill).toBeHidden();
      await expect(bar.getByRole("link", { name: /call now/i })).toHaveAttribute("href", /^tel:/);
      await expect(bar.getByRole("link", { name: /whatsapp/i })).toHaveAttribute("href", /wa\.me/);
    } else {
      await expect(bar).toBeHidden();
      await expect(pill).toBeVisible();
    }
  });

  test("desktop navigation links and footer links work", async ({ page }) => {
    const viewport = page.viewportSize();
    test.skip(!!viewport && viewport.width < 1024, "desktop only");
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    for (const [label, path] of [
      ["Umrah Packages", "/umrah-packages"],
      ["Hotels", "/hotels"],
      ["Umrah Visa", "/umrah-visa"],
      ["Departures", "/departures"],
      ["Guides", "/umrah-guide"],
      ["About", "/about"],
    ] as const) {
      await nav.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(nav.getByRole("link", { name: label, exact: true })).toHaveAttribute("aria-current", "page");
    }
    await page.locator("footer").getByRole("link", { name: "Refund Policy" }).click();
    await expect(page).toHaveURL(/\/refund-policy$/);
  });
});
