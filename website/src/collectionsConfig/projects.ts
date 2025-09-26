// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionTools/collectionBase.ts";
import { imageBase } from "./collectionTools/image.ts";
import { videoBase } from "./collectionTools/video.ts";
import { excludedFolder } from "../options.config.ts";

// Define a `loader` and `schema` for collection
export const definition: Record<string, any> = {};
const collection = "projects";
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
      subtitle: z.string().nullable().optional(),
      description: z.string(),
      descriptionShort: z.string().nullable().optional(),
      authors: z
        .array(
          z.object({
            name: z.string(),
            surname: z.string(),
            include: z.boolean(),
          })
        )
        .nullable()
        .optional(),
      repository: z.string().nullable().optional(),
      externalLink: z.string().nullable().optional(),
      datePublication: z.date().nullable().optional(),
      finished: z.boolean().nullable().optional(),
      opensource: z.boolean().nullable().optional(),
      public: z.boolean().nullable().optional(),
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
      images: z.array(imageBase).nullable().optional(),
      idMainImg: z.string().nullable().optional(),
      idBgImg: z.string().nullable().optional(),
      videos: z.array(videoBase).nullable().optional(),
    })
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
