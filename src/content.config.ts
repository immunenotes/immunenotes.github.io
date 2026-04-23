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

export const collections = { people };
