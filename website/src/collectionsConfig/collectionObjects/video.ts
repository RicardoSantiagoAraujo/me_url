// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const videoBase = z.object({
  title: z.string(),
  id: z.string(),
  include: z.boolean(),
  url: z.string(),
  caption: z.string().nullable().optional(),
  alt: z.string().nullable().optional(),
}).strict(); // Enforce a specific set of keys and prevent additional unknown keys (strict mode)
