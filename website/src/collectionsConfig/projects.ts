// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { collectionBase } from "./collectionBase.ts";
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
      subtitle: z.string().optional(),
      description: z.string(),
      descriptionShort: z.string().optional(),
      authors: z.array(z.string()),
      repository: z.string().optional(),
      externalLink: z.string().optional(),
      datePublication: z.date().optional(),
      finished: z.boolean().optional(),
      opensource: z.boolean().optional(),
      public: z.boolean().optional(),
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
        .optional(),
      techstack: z
        .array(
          z.object({
            name: z.string(),
            include: z.boolean(),
          })
        )
        .optional(),
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
    .strict(), //  enforce a specific set of keys and prevent additional unknown keys (strict mode),
});
