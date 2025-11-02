// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionObjects/collectionBase.ts";
import { imageBase } from "./collectionObjects/image.ts";
import { excludedFolder } from "@/options.config.ts";
import { tag } from "./collectionObjects/tag.ts";
import { uniqueArray } from "./utils/utils.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "collectionTemplate";
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
      pubDate: z.date(),
      description: z.string(),
      descriptionShort: z.string(),
      author: z.string(),
      idMainImg: z.string().nullable().optional(),
      idBgImg: z.string().nullable().optional(),
      images: uniqueArray(imageBase).nullable().optional(),
      tags: uniqueArray(tag).nullable().optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
