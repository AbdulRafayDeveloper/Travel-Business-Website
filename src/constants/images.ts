/**
 * Local photo assets (public/images). All files are optimized JPEGs sourced
 * from Unsplash (free for commercial use, no attribution required).
 */
const PRODUCT_IDS = [
  // non-ferrous metals
  "aluminum-scrap",
  "copper-scrap",
  "zinc",
  "recyclable-metals",
  // steel products
  "steel-sheets",
  "steel-bars",
  "steel-beams",
  "steel-coils",
  "steel-pipes",
  "angles-channels",
  "chequered-plate",
  "purlins",
  "wire-mesh",
  "scaffolding",
  // fabrication & services
  "cable-tray",
  "roof-sheets",
  "racks",
  "shuttering-plate",
  "grating",
  "perforated-plate",
  "pallet",
  "solar-stands",
  "peb",
  "petrol-pump-canopy",
  "mezzanine",
  "railings",
  "steel-gates",
  "water-tanks",
  "poles",
  "cnc-cutting",
  "welding",
  "galvanizing",
] as const;

export type ProductId = (typeof PRODUCT_IDS)[number];

/** One photo per product category id (used on home, products and footer links). */
export const productImages: Record<ProductId, string> = Object.fromEntries(
  PRODUCT_IDS.map((id) => [id, `/images/products/${id}.jpg`]),
) as Record<ProductId, string>;

export function productImageFor(id: string): string | undefined {
  return (productImages as Record<string, string>)[id];
}

export const siteImages = {
  homeHero: "/images/site/home-hero.jpg",
  aboutHero: "/images/site/about-hero.jpg",
  aboutOverview: "/images/site/about-overview.jpg",
  detailHero: "/images/site/aluminum-detail-hero.jpg",
  sourcing: "/images/site/sourcing.jpg",
  logistics: "/images/site/logistics.jpg",
  pebHero: "/images/site/peb-hero.jpg",
  pebWarehouse: "/images/site/peb-warehouse.jpg",
  canopyHero: "/images/products/petrol-pump-canopy.jpg",
  canopyNight: "/images/site/canopy-night.jpg",
  careersHero: "/images/site/careers-hero.jpg",
  /** Aluminum scrap detail page gallery, in display order. */
  aluminumShowcase: [
    "/images/products/aluminum-scrap.jpg",
    "/images/site/aluminum-extrusions.jpg",
    "/images/site/shredded-aluminum.jpg",
    "/images/site/aluminum-cans.jpg",
  ],
  /** About page scrolling gallery, in display order. */
  aboutGallery: [
    "/images/site/ingots.jpg",
    "/images/site/furnace.jpg",
    "/images/site/cargo-ship.jpg",
    "/images/site/quality-lab.jpg",
    "/images/site/logistics.jpg",
  ],
};
