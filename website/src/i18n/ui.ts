import type { Language } from "./language.config";

// UI translations for different languages
export const ui: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.more": "More",
    "nav.tags": "Tags",
    "nav.fields": "Fields",
    "nav.techstack": "Techstack",
    // EXAMPLE
    "nav.example-dropdownGroup": "Dropdown Group",
    "nav.example-dropdownItem": "Dropdown Item",
    "nav.collectionTemplate": "Collection Template Tab",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos de moi",
    "nav.experience": "Expérience",
    "nav.education": "Éducation",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    // EXAMPLE
    "nav.example-dropdownGroup": "Dropdown Group",
    "nav.example-dropdownItem": "Dropdown Item",
    "nav.collectionTemplate": "Collection Template Tab",
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.education": "Educação",
    "nav.projects": "Projectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.education": "Ausbildung",
    "nav.projects": "Projekte",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
  },
} as const;

 