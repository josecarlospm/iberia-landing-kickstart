/**
 * Single brand surface for this kickstart.
 * Change these values first when remixing for a new product.
 */
export const brand = {
  /** Product name — must dominate the first viewport */
  name: "Atlas",
  /** One-letter mark in the header disc */
  mark: "A",
  /** Contact / CTA mailto */
  email: "hello@atlas.example",
  /** Demo subdomain shown in the interactive panel */
  demoHost: "cafeonda.atlas.example",
  /** Open Graph siteName */
  siteName: "Atlas",
} as const;

export type Brand = typeof brand;
