// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const imageBase = z.object({
  title: z.string(),
  id: z.string(),
  include: z.boolean(),
  url: z.string(),
  caption: z.string().nullable().optional(),
  alt: z.string().nullable().optional(),
  style: z.string().nullable().optional(), // e.g., "padding: 10px; border-radius: 8px;" - use double quotes
  styleAsBg: z.string().nullable().optional(), // e.g., "padding: 10px; border-radius: 8px;" - use double quotes
});
