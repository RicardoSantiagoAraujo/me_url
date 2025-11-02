// Import utilities from `astro:content`
import { z } from "astro:content";
import { generalParametersUser } from "@/data/general.config";

// Base schema
export const author = z.object({
  name: z.string().default(generalParametersUser["surname"]),
  surname: z.string().default(generalParametersUser["name"]),
  include: z.boolean(),
});
