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
 *   photoSource  optional — photo credit line shown below the hero image.
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
    photoSource: z.string().optional(),
  }),
});

export const collections = { people, posts };
