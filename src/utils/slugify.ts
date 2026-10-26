/**
 * "Prof. Dr. Christian Puta" → "prof-dr-christian-puta" — a URL-fragment id
 * for headings rendered by components. Markdown headings get theirs from
 * Astro; these ids give the header search (Pagefind) per-section anchors.
 * Inline HTML (e.g. a <br> in a research-card title) is stripped first.
 */
export const slugify = (text: string) =>
  text
    .replace(/<[^>]*>/g, " ")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
