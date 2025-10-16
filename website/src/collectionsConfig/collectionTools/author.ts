// Import utilities from `astro:content`
import { z } from "astro:content";

// Base schema
export const author = z.object({
  name: z.string(),
  surname: z.string(),
  include: z.boolean(),
});
