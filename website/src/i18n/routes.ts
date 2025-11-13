import type { Language } from "./language.config";

// Ensure all possible routes are included in the Page type to enforce type safety
export type Page =
  | any // to be able to add pages out of this list without TS errors
  | "home"
  | "about"
  | "blog"
  | "projects"
  | "experience"
  | "education"
  | "contact"
  | "collectionTemplate";
export const routes: Record<Language, Record<Page, string>> = {
  en: {
    home: "",
    about: "about",
    blog: "blog",
    projects: "projects",
    experience: "experience",
    education: "education",
    contact: "contact",
    // EXAMPLE
    collectionTemplate: "collectionTemplate",
  },
  fr: {
    home: "",
    about: "a-propos",
    blog: "blog",
    projects: "projets",
    experience: "experience",
    education: "education",
    contact: "contact",
    // EXAMPLE
    collectionTemplate: "collectionTemplate",
  },
  pt: {
    home: "",
    about: "sobre",
    blog: "blog",
    projects: "projectos",
    experience: "experiencia",
    education: "educacao",
    contact: "contacto",
    // EXAMPLE
    collectionTemplate: "collectionTemplate",
  },
  de: {
    home: "",
    about: "uber-mich",
    blog: "blog",
    projects: "projekte",
    experience: "erfahrung",
    education: "ausbildung",
    contact: "kontakt",
    // EXAMPLE
    collectionTemplate: "collectionTemplate",
  },
};
