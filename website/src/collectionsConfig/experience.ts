// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionTools/collectionBase.ts";
import { imageBase } from "./collectionTools/image.ts";
import { excludedFolder } from "../options.config.ts";
import { tag } from "./collectionTools/tag.ts";
import { tech } from "./collectionTools/tech.ts";
import { field } from "./collectionTools/field.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "experience";
definition[collection] = defineCollection({
  loader: glob({
    pattern: [
      "**/[^_]*.{md,mdx}",
      ...excludedFolder
        .filter((item) => item !== "")
        .map((item) => `!**/${item}/**`),
    ],
    base: `./src/collections/${collection}`,
  }),
  schema: collectionBase
    .extend({
      title: z.string(),
      description: z.string(),
      descriptionShort: z.string().optional(),
      descriptionList: z.array(
        z.object({
          item: z.string(),
        })
      ).nullable().optional(),
      externalLink: z.string().nullable().optional(),
      dateStart: z.date().nullable().optional(),
      dateEnd: z.date().nullable().optional(),
      employer: z.string().nullable().optional(),
      contract: z.string().nullable().optional(),
      location: z.string().nullable().optional(),
      finished: z.boolean().nullable().optional(),
      images: z.array(imageBase).nullable().optional(),
      tags: z.array(tag).nullable().optional(),
      fields: z.array(field).nullable().optional(),
      techstack: z.array(tech).nullable().optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
