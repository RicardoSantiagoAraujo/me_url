// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const tech = z.object({
  id: z.string(),
  include: z.boolean(),
});
