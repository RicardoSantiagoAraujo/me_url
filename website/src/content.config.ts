import { blogCollection } from "./collectionsConfig/blog";
import { projectsCollection } from "./collectionsConfig/projects";
import {collectionTemplateCollection} from "./collectionsConfig/collectionTemplate";


// Export a single `collections` object to register your collection(s)
export const collections = {
  // Template collection that can be used as base to create new collections:
  collectionTemplate: collectionTemplateCollection,
  // My collections:
  blog: blogCollection,
  projects: projectsCollection,
};
