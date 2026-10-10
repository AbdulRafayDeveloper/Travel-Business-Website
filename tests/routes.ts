/** Every indexable route on the site. Keep in sync with src/app/sitemap.ts. */
export const staticRoutes = [
  "/",
  "/umrah-packages",
  "/umrah-packages/standard-umrah-12-nights",
  "/umrah-packages/ramadan-umrah-15-nights",
  "/ramadan-umrah",
  "/hotels",
  "/departures",
  "/umrah-visa",
  "/plan-your-umrah",
  "/umrah-guide",
  "/umrah-guide/how-to-perform-umrah-step-by-step",
  "/about",
  "/reviews",
  "/faqs",
  "/contact",
  "/agents",
  "/payment-safety",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
] as const;

/**
 * Console messages we tolerate: dev-only noise from Next.js, and Firefox reporting font downloads
 * that were aborted (status 2152398850 = NS_BINDING_ABORTED) when the dev server hot-reloads a page.
 */
export function isIgnorableConsoleError(text: string): boolean {
  return /Download the React DevTools|hydration|favicon|net::ERR_|Failed to load resource.*fonts\.googleapis|downloadable font: download failed.*status=2152398850/i.test(text);
}
