import { dev } from "astro";
import type { Tag } from "../../types/Tag";

// DEFAULT AVAILABLE VALUES
export const tagsDefault: Record<string, Tag> = {
  personal: {
    name: "Personal",
  },
  work: {
    name: "Work",
  },
  hobbies: {
    name: "Hobbies",
  },
  projects: {
    name: "Projects",
  },
};
