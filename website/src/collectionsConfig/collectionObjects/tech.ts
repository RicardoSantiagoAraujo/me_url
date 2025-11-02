// Import utilities from `astro:content`
import { z } from "astro:content";
import { techstackUser } from "@/data/techstack.config";
import { generalParametersUser } from "@/data/general.config";
// Base schema
export const tech = z.object({
  id: z.enum(Object.keys(generalParametersUser["techstack"]) as [string, ...string[]]), // Restricting to certain values taken from the user defined tech list,
  include: z.boolean(),
});
