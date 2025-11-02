import type { CollectionMetadata } from "./types/collectionMetadata";
import { definition as blog } from "./collectionsConfig/blog";
import { definition as projects } from "./collectionsConfig/projects";
import { definition as collectionTemplate } from "./collectionsConfig/collectionTemplate";
import { definition as experience } from "./collectionsConfig/experience";
import { definition as education } from "./collectionsConfig/education";

//Metadata for each collection
export const collectionsMetadata0: { [collection_id: string]: CollectionMetadata } = {
  // Template collection that can be used as base to create new collections:
  collectionTemplate: {
    definition: collectionTemplate.collectionTemplate,
    include: true,
    orderBy: null,
    sortOrder: "asc",
    itemListComponent: "",
  } as CollectionMetadata,
  // My collections:
  blog: {
    definition: blog.blog,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "BlogPostCard",
  } as CollectionMetadata,
  projects: {
    definition: projects.projects,
    include: true,
    orderBy: "title",
    sortOrder: "desc",
    itemListComponent: "ProjectCard",
  } as CollectionMetadata,
  experience: {
    definition: experience.experience,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "ExperienceCard",
  } as CollectionMetadata,
  education: {
    definition: education.education,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "EducationCard",
  } as CollectionMetadata,
};

export const collectionsMetadata = Object.fromEntries(
  Object.entries(collectionsMetadata0)
    .filter(([key, item]) => item.include !== false) // Exclude entries where `include: false`
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort by collection ID
    // .reverse()  // Reverse the sorted array to get descending order
);

// create collections export as needed by Astro
export const collections = Object.entries(collectionsMetadata)
  // Generate collections dictionary from metadata definitions
  .reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.definition,
    }),
    {}
  );
