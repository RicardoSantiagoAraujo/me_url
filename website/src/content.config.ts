import type {CollectionMetadata} from "./types/collectionMetadata";
import { definition as blog } from "./collectionsConfig/blog";
import { definition as projects  } from "./collectionsConfig/projects";
import { definition as collectionTemplate } from "./collectionsConfig/collectionTemplate";
import { definition as experience} from "./collectionsConfig/experience";
import { definition as education} from "./collectionsConfig/education"; 


//Metadata for each collection
export const collectionsMetadata = {
  // Template collection that can be used as base to create new collections:
  collectionTemplate: {{ definition: collectionTemplate.collectionTemplate , include: true, orderBy: null, sortOrder: "asc" } as CollectionMetadata },
  // My collections:
  blog: {definition: blog.blog , include: true, orderBy: null, sortOrder: "desc" } as CollectionMetadata },
  projects: {definition: projects.projects , include: true, orderBy: null, sortOrder: "desc" } as CollectionMetadata },
  experience: {definition: experience.experience , include: true, orderBy: null, sortOrder: "desc" } as CollectionMetadata },
  education: {definition: education.education , include: true, orderBy: null, sortOrder: "desc" } as CollectionMetadata },
};

// Generate collections dictionary from metadata definitions
export const collections = Object.entries(collectionsMetadata).reduce((acc, [key, value]) => ({
  ...acc,
  [key]: value.metadata.definition
}), {});
