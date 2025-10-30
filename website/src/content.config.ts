import type { CollectionMetadata } from "./types/collectionMetadata";
import { definition as blog } from "./collectionsConfig/blog";
import { definition as projects } from "./collectionsConfig/projects";
import { definition as collectionTemplate } from "./collectionsConfig/collectionTemplate";
import { definition as experience } from "./collectionsConfig/experience";
import { definition as education } from "./collectionsConfig/education";

//Metadata for each collection
export const collectionsMetadata = {
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
    orderBy: null,
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

// Generate collections dictionary from metadata definitions
export const collections = {
  collectionTemplate: collectionTemplate.collectionTemplate,
  blog: blog.blog,
  projects: projects.projects,
  experience: experience.experience,
  education: education.education,
}