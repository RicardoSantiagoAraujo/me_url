import type { CollectionMetadata } from "./types/collectionMetadata";
import type { Glossary } from "./types/Glossary";
import { definition as blog } from "./collectionsConfig/blog";
import {
  definition as projects,
  definition,
} from "./collectionsConfig/projects";
import { definition as collectionTemplate } from "./collectionsConfig/collectionTemplate";
import { definition as experience } from "./collectionsConfig/experience";
import { definition as education } from "./collectionsConfig/education";
import { flattenDiagnosticMessageText } from "typescript";

//Metadata for each collection
export const collectionsMetadata0: {
  [collection_id: string]: CollectionMetadata;
} = {
  // Template collection that can be used as base to create new collections:
  collectionTemplate: {
    definition: collectionTemplate.collectionTemplate,
    include: true,
    orderBy: null,
    sortOrder: "asc",
    itemListComponent: "CollectionTemplateLink",
    itemLayout: "ItemLayout_collectionTemplate",
    description: "A template collection to use as a base for new collections.",
  } as CollectionMetadata,
  // My collections:
  blog: {
    definition: blog.blog,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "BlogPostLink",
    itemLayout: "ItemLayout_blog",
    description: "My blog posts.",
  } as CollectionMetadata,
  projects: {
    definition: projects.projects,
    include: true,
    orderBy: "title",
    sortOrder: "desc",
    itemListComponent: "ProjectCard",
    itemLayout: "GenericItemLayout",
    description: "My personal projects.",
  } as CollectionMetadata,
  experience: {
    definition: experience.experience,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "ExperienceCard",
    itemLayout: "GenericItemLayout",
    description: "My professional experiences.",
  } as CollectionMetadata,
  education: {
    definition: education.education,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "EducationCard",
    itemLayout: "GenericItemLayout",
    description: "My educational background.",
  } as CollectionMetadata,
};

export const collectionsMetadata = Object.fromEntries(
  Object.entries(collectionsMetadata0)
    .filter(([key, item]) => item.include !== false) // Exclude entries where `include: false`
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort by collection ID
    .reverse() // Reverse the sorted array to get descending order
);

if (false) {
  // To print active collections to console on build
  console.log("\nActive collections:");
  for (let [key, val] of Object.entries(collectionsMetadata)) {
    console.log("\t" + key);
  }
}


// Glossary types used on project
export const glossaries0: {
  [glossary_id: string]: Glossary;
} = {
  tags: { name: "Tags", include: true } as Glossary,
  fields: { name: "Fields", include: true } as Glossary,
  techstack: { name: "Techstack", include: true, description: "Tech tools that I have used over time." } as Glossary,
};


// Glossary types used on project
export const glossaries = Object.fromEntries(
  Object.entries(glossaries0)
    .filter(([key, item]) => item.include !== false) // Exclude entries where `include: false`
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort by collection ID
    .reverse() // Reverse the sorted array to get descending order
);

if (false) {
  // To print active glossaries to console on build
  console.log("\nGlossary types defined:");
  for (let [key, val] of Object.entries(glossaries)) {
    console.log("\t" + key);
}
}

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
