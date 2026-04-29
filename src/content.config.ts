import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * `people` — one markdown file per lab member under src/content/people/.
 *
 * Frontmatter schema:
 *   name      required — full display name. Also used as the sort key
 *             (alphabetical by first name, via locale-aware compare).
 *   role      optional — short role / affiliation label
 *   image     optional — path to a portrait photo (e.g. "/people/puta.jpg")
 *   alt       optional — alt text for the photo (defaults to the name)
 *   featured  optional — if true, the person is pinned to the top of the
 *             People page. Among featured people, normal alphabetical
 *             sorting applies.
 *   hidden    optional — if true, the person is omitted from the People
 *             page. Useful for draft entries or alumni we want to keep on
 *             file but not display.
 *
 * The body of the .md file is the biography and is rendered inside the
 * <Person> component.
 */
const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    mail: z.union([z.string(), z.array(z.string())]).optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false),
  }),
});

/**
 * `posts` — one markdown file per news post under src/content/news/.
 *
 * Frontmatter schema:
 *   title        required — post title, shown on overview and post page.
 *   date         required — publication date (ISO 8601, e.g. "2026-04-23").
 *   image        optional — path to a header image (e.g. "/news/my-post.jpg")
 *   description  optional — short teaser shown on the news overview.
 *   sourceType   optional — type label for the image credit (e.g. "Foto").
 *   source       optional — credit/rights holder (e.g. "Unsplash").
 *   language     optional — "de" or "en". When set, a small flag badge is
 *                shown in the top-right of the post card on the news
 *                overview, indicating the language of the post.
 *
 * The body of the .md file is the post text rendered on the post page.
 */
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    description: z.string().optional(),
    sourceType: z.string().optional(),
    source: z.string().optional(),
    language: z.enum(["de", "en"]).optional(),
  }),
});

/**
 * `dashboards` — one MDX file per dashboard under src/content/dashboards/.
 *
 * A dashboard is either a self-hosted HTML document (e.g. under
 * /public/dashboards/foo.html) or an externally hosted Shiny / streamlit app
 * that is embedded via iframe.
 *
 * Frontmatter schema:
 *   title         required — dashboard title.
 *   description   optional — short blurb shown on the teaching overview card
 *                 and as meta-description on the dashboard subpage.
 *   publishDate   optional — ISO date string (used for sorting).
 *   iframeSrc     required — URL or site-relative path embedded in the
 *                 <iframe>. Site-relative paths should begin with "/".
 *   iframeWidth   optional — intrinsic width of the embedded app (px). When
 *                 set together with iframeHeight, the dashboard renders in
 *                 fixed-size mode with CSS scaling.
 *   iframeHeight  optional — intrinsic height of the embedded app (px).
 *   iframeScale   optional — scale factor applied to the fixed-size iframe.
 *                 Defaults to 1.
 *   thumbnail     optional — path to a preview image shown on the teaching
 *                 overview card.
 *   thumbnailAlt  optional — alt text for the thumbnail.
 *   draft         optional — if true, the dashboard is omitted from the
 *                 teaching overview AND no subpage is generated. Defaults to
 *                 false, so dashboards are included by default.
 *   order         optional — explicit sort index; lower numbers come first.
 *                 When absent, dashboards are sorted by publishDate
 *                 (newest first) and then by title.
 *
 * The MDX body is rendered below the iframe on the dashboard subpage.
 */
const dashboards = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/dashboards" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    iframeSrc: z.string(),
    iframeWidth: z.number().optional(),
    iframeHeight: z.number().optional(),
    iframeScale: z.number().default(1),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

/**
 * `research` — one markdown file per project under src/content/research/.
 *
 * Frontmatter schema:
 *   title       required — project title.
 *   label       required — "Active project" | "Former project"
 *   duration    optional — e.g. "2022–2025". The start year is extracted for sorting.
 *   image       optional — path to a project image.
 *   imageAlt    optional — alt text for the image.
 *   imageFit    optional — "cover" | "contain" (default "cover").
 *   sourceType  optional — image credit type (e.g. "Photo").
 *   source      optional — image credit name.
 *   href        optional — external project page URL.
 *   ctaLabel    optional — CTA link label (default "Visit project page").
 *   downloads   optional — list of downloadable files, each with a label and href.
 *
 * The body of the .md file is the project description rendered inside
 * the <ResearchCard> slot.
 */
const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    label: z.enum(["Active project", "Former project"]),
    duration: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageFit: z.enum(["cover", "contain"]).optional(),
    sourceType: z.string().optional(),
    source: z.string().optional(),
    href: z.string().optional(),
    ctaLabel: z.string().optional(),
    downloads: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
  }),
});

export const collections = { people, posts, dashboards, research };
