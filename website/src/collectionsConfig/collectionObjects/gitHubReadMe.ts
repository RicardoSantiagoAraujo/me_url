// Import utilities from `astro:content`
import { z } from "astro:content";
import { generalParametersUser } from "@/data/general.config";
// Base schema
export const gitHubReadMe = z.object({
    username: z.string().nullable().optional().default(generalParametersUser["githubUsername"] || null),
    branch: z.string().nullable().optional().default("main"),
    repoName: z.string().nullable().optional(),
    filename: z.string().nullable().optional().default("README.md")
}).strict(); // Enforce a specific set of keys and prevent additional unknown keys (strict mode)
