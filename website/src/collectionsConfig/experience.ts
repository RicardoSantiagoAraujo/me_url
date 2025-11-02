// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionObjects/collectionBase.ts";
import { imageBase } from "./collectionObjects/image.ts";
import { excludedFolder } from "@/options.config.ts";
import { tag } from "./collectionObjects/tag.ts";
import { tech } from "./collectionObjects/tech.ts";
import { field } from "./collectionObjects/field.ts";
import { uniqueArray } from "./utils/utils.ts";

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
      descriptionList: z
        .array(
          z.object({
            item: z.string(),
          })
        )
        .nullable()
        .optional(),
      externalLink: z.string().nullable().optional(),
      dateStart: z.date().nullable().optional(),
      dateEnd: z.date().nullable().optional(),
      finished: z.boolean().nullable().optional(),
      employer: z.string().nullable().optional(),
      contract: z.string().nullable().optional(),
      location: z.string().nullable().optional(),
      images: uniqueArray(imageBase).nullable().optional(),
      idMainImg: z.string().nullable().optional(),
      idBgImg: z.string().nullable().optional(),
      tags: uniqueArray(tag).nullable().optional(),
      fields: uniqueArray(field).nullable().optional(),
      techstack: uniqueArray(tech).nullable().optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
