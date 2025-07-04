import { definition as blog } from "./collectionsConfig/blog";
import { definition as projects  } from "./collectionsConfig/projects";
import { definition as collectionTemplate } from "./collectionsConfig/collectionTemplate";
import { definition as experience} from "./collectionsConfig/experience";

// Switch debug mode for more printouts to console
export const debugMode: boolean = false;

// Export a single `collections` object to register your collection(s)
export const collections = {
  // Template collection that can be used as base to create new collections:
  collectionTemplate: collectionTemplate.collectionTemplate ,
  // My collections:
  blog: blog.blog,
  projects: projects.projects ,
  experience: experience.experience
};
 