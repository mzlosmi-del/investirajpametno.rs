/**
 * Turn a human category label into a URL-safe slug.
 * Serbian Latin diacritics are transliterated (č/ć→c, š→s, ž→z, đ→dj) so the
 * resulting slugs are clean ASCII, e.g. "Štednja" → "stednja",
 * "Lične finansije" → "licne-finansije".
 */
export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/č|ć/g, 'c')
    .replace(/š/g, 's')
    .replace(/ž/g, 'z')
    .replace(/đ/g, 'dj')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Absolute (site-relative) URL for a category hub page, with trailing slash. */
export function categoryHref(category: string): string {
  return `/blog/kategorija/${categorySlug(category)}/`;
}
