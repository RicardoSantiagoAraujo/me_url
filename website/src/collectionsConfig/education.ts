// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionTools/collectionBase.ts";
import { imageBase } from "./collectionTools/image.ts";
import { excludedFolder } from "../options.config.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "education";
definition[collection] = defineCollection({
  loader: glob({
    pattern: [
      "**/[^_]*.md",
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
      ),
      externalLink: z.string().nullable().optional(),
      dateStart: z.date().nullable().optional(),
      dateEnd: z.date().nullable().optional(),
      degree: z.string().nullable().optional(),
      institution: z.string().nullable().optional(),
      location: z.string().nullable().optional(),
      finished: z.boolean().nullable().optional(),
      images: z.array(imageBase),
      tags: z.array(
        z.object({
          name: z.string(),
          include: z.boolean(),
        })
      ),
      fields: z
        .array(
          z.object({
            name: z.string(),
            include: z.boolean(),
          })
        )
        .nullable()
        .optional(),
      techstack: z
        .array(
          z.object({
            id: z.string(),
            include: z.boolean(),
          })
        )
        .nullable()
        .optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
