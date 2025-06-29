// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for collection
export const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/collections/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    descriptionShort: z.string().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    fields: z.array(z.string()).optional(),
    techstack: z.array(z.string()).optional(),
    repository: z.string().optional(),
    href: z.string().optional(),
    datePublication: z.date().optional(),
    include: z.boolean(),
    finished: z.boolean().optional(),
    opensource: z.boolean().optional(),
    images: z
      .array(
        z.object({
          title: z.string(),
          caption: z.string(),
          url: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
    videos: z
      .array(
        z.object({
          title: z.string(),
          caption: z.string(),
          url: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
  }),
});
