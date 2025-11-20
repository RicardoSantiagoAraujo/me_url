// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionObjects/collectionBase.ts";
import { imageBase } from "./collectionObjects/image.ts";
import { videoBase } from "./collectionObjects/video.ts";
import { excludedFolder } from "@/options.config.ts";
import { tag } from "./collectionObjects/tag.ts";
import { tech } from "./collectionObjects/tech.ts";
import { field } from "./collectionObjects/field.ts";
import { author } from "./collectionObjects/author.ts";
import { uniqueArray } from "./utils/utils.ts";
import { gitHubReadMe } from "./collectionObjects/gitHubReadMe.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "projects";
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
      subtitle: z.string().nullable().optional(),
      description: z.string(),
      descriptionShort: z.string().nullable().optional(),
      authors: uniqueArray(author).nullable().optional(),
      repository: z.string().nullable().optional(),
      gitHubReadMe: gitHubReadMe.nullable().optional(),
      externalLink: z.string().nullable().optional(),
      documentation: z.string().nullable().optional(),
      datePublication: z.date().nullable().optional(),
      finished: z.boolean().nullable().optional(),
      opensource: z.boolean().nullable().optional(),
      public: z.boolean().nullable().optional(),
      tags: uniqueArray(tag).nullable().optional(),
      fields: uniqueArray(field).nullable().optional(),
      techstack: uniqueArray(tech).nullable().optional(),
      images: uniqueArray(imageBase).nullable().optional(),
      idMainImg: z.string().nullable().optional(),
      idBgImg: z.string().nullable().optional(),
      videos: uniqueArray(videoBase).nullable().optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
