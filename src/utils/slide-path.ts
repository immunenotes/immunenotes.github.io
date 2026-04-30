/**
 * Utilities for working with slide entry IDs from the `slidedeckSlides`
 * content collection.
 *
 * Background:
 *   The collection is loaded with
 *     glob({ pattern: "**\/slides/*.{md,mdx}", base: "./src/content/slidedecks" })
 *   so each entry.id has the shape "<slidedeck>/slides/<slide>" (without
 *   extension) — for example "server-sign-up/slides/slide-1-intro".
 *
 *   `parseSlideId` splits that into { slidedeck, slide } so route files
 *   can build URL params and lookups without doing string surgery
 *   inline.
 */

export type SlideIdParts = {
  slidedeck: string;
  slide: string;
};

const SLIDE_ID_RE = /^([^/]+)\/slides\/([^/]+)$/;

export function parseSlideId(id: string): SlideIdParts {
  const match = SLIDE_ID_RE.exec(id);
  if (!match) {
    throw new Error(
      `Unexpected slide id: ${id}. Expected "<slidedeck>/slides/<slide>".`,
    );
  }
  return { slidedeck: match[1], slide: match[2] };
}
