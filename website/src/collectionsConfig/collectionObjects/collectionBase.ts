// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const collectionBase = z.object({
    include: z.boolean(),
  });
