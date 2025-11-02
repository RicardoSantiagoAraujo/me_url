// Define supported languages and their properties : DEFINE ONE PER LOCALE DEFINED IN astro.config.mts
export const languages = {
  fr: { long: "Français", short: "fr", flag: "🇫🇷", isAvailable: true },
  en: { long: "English", short: "en", flag: "🇬🇧", isAvailable: true },
  pt: { long: "Português", short: "pt", flag: "🇵🇹", isAvailable: true }, //🇧🇷
  de: { long: "Deutsch", short: "de", flag: "🇩🇪", isAvailable: true },
};
export type Language = keyof typeof languages;

export const defaultLangStart = "en"; // default language for the app when accessing the root URL
export const defaultLang = "en"; // fallback language in the absence of a translation

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
