// Import utilities from `astro:content`
import { z } from "astro:content";
import { generalParametersUser } from "@/data/general.config";
// Base schema
export const tag = z.object({
  id: z.enum(Object.keys(generalParametersUser["tags"]) as [string, ...string[]]), // Restricting to certain values taken from the user defined list
  include: z.boolean(),
}).strict(); // Enforce a specific set of keys and prevent additional unknown keys (strict mode)
