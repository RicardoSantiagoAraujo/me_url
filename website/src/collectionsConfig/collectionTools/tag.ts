// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const tag = z.object({
  name: z.string(), 
  include: z.boolean()
});
