export const languages = {
  fr: { long: "Français", short: "fr", flag: "🇫🇷", isAvailable: true },
  en: { long: "English", short: "en", flag: "🇬🇧", isAvailable: true },
  pt: { long: "Português", short: "pt", flag: "🇵🇹", isAvailable: false }, //🇧🇷
  de: { long: "Deutsch", short: "de", flag: "🇩🇪", isAvailable: false },
};
export type Language = keyof typeof languages;

export const defaultLangStart = "en"; // default language for the app when accessing the root URL
export const defaultLang = "en"; // fallback language in the absence of a translation

export const ui: Record<Language, Record<string, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.collectionTemplate": "Collection Template Tab",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.example-dropdownGroup": "Dropdown Group",
    "nav.example-dropdownItem": "Dropdown Item",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
  },
} as const;

// Ensure all possible routes are included in the Page type to enforce type safety
export type Page =
  | "home"
  | "about"
  | "blog"
  | "projects"
  | "experience"
  | "contact"
  | "collectionTemplate";
export const routes: Record<Language, Record<Page, string>> = {
  fr: {
    home: "",
    about: "a-propos",
    blog: "blog",
    projects: "projets",
    experience: "experience",
    contact: "contact",
    collectionTemplate: "collectionTemplate",
  },
  en: {
    home: "",
    about: "about",
    blog: "blog",
    projects: "projects",
    experience: "experience",
    contact: "contact",
    collectionTemplate: "collectionTemplate",
  },
  pt: {
    home: "",
    about: "sobre",
    blog: "blog",
    projects: "projectos",
    experience: "experiencia",
    contact: "contacto",
    collectionTemplate: "collectionTemplate",
  },
  de: {
    home: "",
    about: "uber-mich",
    blog: "blog",
    projects: "projekte",
    experience: "erfahrung",
    contact: "kontakt",
    collectionTemplate: "collectionTemplate",
  },
};
