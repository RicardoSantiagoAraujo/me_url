// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionBase.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "experience";
definition[collection] = defineCollection({
  loader: glob({
    pattern: ["**/[^_]*.md"],
    base: `./src/collections/${collection}`,
  }),
  schema: collectionBase
    .extend({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
