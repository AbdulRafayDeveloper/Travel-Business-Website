import { expect, test } from "@playwright/test";

test.describe("packages explorer", () => {
  test("filters, sorts and compares packages", async ({ page }) => {
    await page.goto("/umrah-packages");
    const count = page.getByText(/of 8 packages/);
    await expect(count).toContainText("8 of 8");

    await page.getByRole("button", { name: "Economy 3★" }).click();
    await expect(count).toContainText("2 of 8");
    await expect(page.locator("article")).toHaveCount(2);

    await page.getByRole("button", { name: "All categories" }).click();
    await page.getByLabel("Departure city").selectOption("Multan");
    await expect(count).toContainText("2 of 8");

    await page.getByLabel("Departure city").selectOption("all");
    await page.getByLabel("Sort", { exact: true }).selectOption("price-desc");
    const firstPrice = page.locator("article").first().locator("dd").first();
    await expect(firstPrice).toContainText("465,000");

    // Compare two packages.
    await page.getByLabel(/^Compare Economy Umrah/).check();
    await page.getByLabel(/^Compare Standard Umrah/).check();
    await page.getByRole("button", { name: /compare 2/i }).click();
    const dialog = page.getByRole("dialog", { name: /compare packages/i });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("row")).toHaveCount(14);
    await expect(dialog.getByText("Quad / person")).toBeVisible();
    await dialog.getByRole("button", { name: "Close", exact: true }).click();
    await expect(dialog).toBeHidden();
  });

  test("empty result state offers a reset", async ({ page }) => {
    await page.goto("/umrah-packages");
    await page.getByRole("button", { name: "VIP 5★" }).click();
    await page.getByLabel("Duration").selectOption("long");
    await expect(page.getByText(/no package matches/i)).toBeVisible();
    await page.getByRole("button", { name: /clear filters/i }).click();
    await expect(page.getByText(/of 8 packages/)).toContainText("8 of 8");
  });
});

test.describe("package detail", () => {
  test("shows prices, hotels, itinerary and CTAs", async ({ page }) => {
    await page.goto("/umrah-packages/standard-umrah-12-nights");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Standard Umrah");
    const aside = page.getByRole("complementary", { name: /prices and booking/i });
    await expect(aside).toContainText("215,000");
    await expect(aside).toContainText("245,000");
    await expect(aside).toContainText("295,000");
    await expect(aside.getByRole("link", { name: /ask on whatsapp/i })).toHaveAttribute("href", /wa\.me.*Standard%20Umrah/);
    await expect(aside.getByRole("link", { name: /request this package/i })).toHaveAttribute("href", "/plan-your-umrah?package=standard-umrah-12-nights");
    await expect(page.getByText("voco Makkah").first()).toBeVisible();
    await expect(page.getByText(/Day 13/)).toBeVisible();
  });
});

test.describe("forms", () => {
  test("callback form validates then succeeds", async ({ page }) => {
    await page.goto("/hotels");
    const form = page.getByRole("form", { name: /request a call back/i });
    await form.scrollIntoViewIfNeeded();
    await form.getByRole("button", { name: /call me back/i }).click();
    await expect(form.getByText(/please enter your name/i)).toBeVisible();
    await form.getByLabel(/your name/i).fill("Test Pilgrim");
    await form.getByLabel(/mobile number/i).fill("12345");
    await form.getByRole("button", { name: /call me back/i }).click();
    await expect(form.getByText(/valid pakistani mobile/i)).toBeVisible();
    await form.getByLabel(/mobile number/i).fill("0300 1234567");
    await form.getByLabel(/your city/i).selectOption("Karachi");
    await form.getByRole("button", { name: /call me back/i }).click();
    const status = page.getByRole("status");
    await expect(status).toContainText(/request received · RB-/i);
    await expect(status.getByRole("link", { name: /continue on whatsapp/i })).toHaveAttribute("href", /wa\.me.*Test%20Pilgrim/);
  });

  test("planner walks three steps with a live estimate and succeeds", async ({ page }) => {
    await page.goto("/plan-your-umrah");
    const estimate = page.getByRole("complementary", { name: /estimated cost/i });
    await expect(estimate).toContainText(/PKR [\d,]+ – PKR [\d,]+/);

    await page.getByLabel("Departure city").selectOption("Islamabad");
    await page.getByLabel("Hotel category").selectOption("premium");
    const before = await estimate.textContent();
    await page.getByLabel("Duration").selectOption("20");
    await expect(estimate).not.toHaveText(before ?? "");
    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page.getByText("Adults", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "More Adults" }).click();
    await page.getByRole("button", { name: "More Children" }).click();
    await expect(estimate).toContainText("3 adults, 1 child");
    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByRole("button", { name: /send my request/i }).click();
    await expect(page.getByText(/please enter your name/i)).toBeVisible();
    await page.getByLabel("Your name").fill("Ayesha Test");
    await page.getByLabel(/mobile \/ whatsapp number/i).fill("03001234567");
    await page.getByRole("button", { name: /send my request/i }).click();
    const status = page.getByRole("status");
    await expect(status).toContainText(/your reference is/i);
    await expect(status).toContainText("RH-");
    await expect(status).toContainText("3 adult(s), 1 child(ren)");
  });

  test("contact form succeeds with a reference", async ({ page }) => {
    await page.goto("/contact");
    const form = page.getByRole("form", { name: "Contact form" });
    await form.getByLabel("Your name").fill("Contact Test");
    await form.getByLabel("Mobile number").fill("+92 301 1234567");
    await form.getByLabel("Topic").selectOption("visa");
    await form.getByLabel("Your message").fill("Please tell me about visa processing for a family of four.");
    await form.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByRole("status")).toContainText(/message received · RC-/i);
  });

  test("agent form succeeds with a reference", async ({ page }) => {
    await page.goto("/agents");
    const form = page.getByRole("form", { name: /travel agent partnership form/i });
    await form.getByLabel("Agency name").fill("Test Travels");
    await form.getByLabel("Your name").fill("Agent Test");
    await form.getByLabel(/mobile \/ whatsapp/i).fill("03211234567");
    await form.getByLabel(/^City/).fill("Gujranwala");
    await form.getByRole("button", { name: /apply for a partner account/i }).click();
    await expect(page.getByRole("status")).toContainText(/application received · RA-/i);
  });
});

test.describe("visa page", () => {
  test("checklist progress, tracker lookup and consultation form", async ({ page }) => {
    await page.goto("/umrah-visa");
    const progress = page.getByRole("progressbar", { name: /required documents ready/i });
    await expect(progress).toHaveAttribute("aria-valuenow", "0");
    await page.getByLabel(/^Passport/).check();
    await page.getByLabel(/^Photograph/).check();
    await expect(progress).toHaveAttribute("aria-valuenow", "2");

    const tracker = page.getByRole("form", { name: /track a visa application/i });
    await tracker.getByLabel("Booking reference").fill("nonsense");
    await tracker.getByRole("button", { name: "Track" }).click();
    await expect(page.getByText(/looks like RH-2026-1042/i)).toBeVisible();
    await tracker.getByLabel("Booking reference").fill("RH-2026-1042");
    await tracker.getByRole("button", { name: "Track" }).click();
    await expect(page.getByText("In progress")).toBeVisible();
    await expect(page.getByText(/Standard Umrah · 12 Nights · updated/)).toBeVisible();

    const form = page.getByRole("form", { name: /visa consultation request/i });
    await form.getByLabel(/full name/i).fill("Visa Test");
    await form.getByLabel(/mobile \/ whatsapp/i).fill("03001234567");
    await form.getByRole("button", { name: /start my visa consultation/i }).click();
    await expect(form.getByText(/please confirm the statement/i)).toBeVisible();
    await form.getByRole("checkbox").check();
    await form.getByRole("button", { name: /start my visa consultation/i }).click();
    await expect(page.getByRole("status").filter({ hasText: /RV-/ })).toBeVisible();
  });
});
