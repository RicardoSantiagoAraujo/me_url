// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const videoBase = z.object({
  title: z.string(),
  id: z.string(),
  include: z.boolean(),
  caption: z.string(),
  url: z.string(),
  alt: z.string(),
});
