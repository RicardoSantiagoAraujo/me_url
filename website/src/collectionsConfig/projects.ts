// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import {collectionBase} from './collectionBase.ts';

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "projects";
definition[collection] = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./src/collections/${collection}` }),
  schema: collectionBase.extend({
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
  })
  .strict() //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
