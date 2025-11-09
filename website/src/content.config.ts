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
  } as CollectionMetadata,
  // My collections:
  blog: {
    definition: blog.blog,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "BlogPostLink",
    itemLayout: "ItemLayout_blog",
  } as CollectionMetadata,
  projects: {
    definition: projects.projects,
    include: true,
    orderBy: "title",
    sortOrder: "desc",
    itemListComponent: "ProjectCard",
    itemLayout: "GenericItemLayout",
  } as CollectionMetadata,
  experience: {
    definition: experience.experience,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "ExperienceCard",
    itemLayout: "GenericItemLayout",
  } as CollectionMetadata,
  education: {
    definition: education.education,
    include: true,
    orderBy: null,
    sortOrder: "desc",
    itemListComponent: "EducationCard",
    itemLayout: "GenericItemLayout",
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
  tags: { name: "tags", include: true } as Glossary,
  fields: { name: "fields", include: true } as Glossary,
  techstack: { name: "techstack", include: true } as Glossary,
};


// Glossary types used on project
export const glossaries = Object.fromEntries(
  Object.entries(glossaries0)
    .filter(([key, item]) => item.include !== false) // Exclude entries where `include: false`
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort by collection ID
    .reverse() // Reverse the sorted array to get descending order
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
