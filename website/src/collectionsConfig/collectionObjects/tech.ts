// Import utilities from `astro:content`
import { z } from "astro:content"; 
import { valuesFromGlossary } from "../utils/utils";
// Base schema
export const tech = z.object({
  id: valuesFromGlossary("techstack"), // Use valuesFromGlossary to restrict to certain values taken from the user defined list
  include: z.boolean(),
}).strict(); // Enforce a specific set of keys and prevent additional unknown keys (strict mode)
