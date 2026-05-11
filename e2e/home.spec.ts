import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("h1 is visible and contains 'Stockport'", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Stockport");
});

test("94% pass rate badge is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("94% first-time pass rate").first()).toBeVisible();
});

test("phone CTA links to first-pass number", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a[href='tel:01610000007']").first()).toBeVisible();
});

test("DVSA badge is visible in trust bar", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("DVSA Approved ADI")).toBeVisible();
});

test("3 testimonial blockquotes are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("blockquote")).toHaveCount(3);
});

test("home page has no critical a11y violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((v) => v.impact === "critical" || v.impact === "serious")).toHaveLength(0);
});
