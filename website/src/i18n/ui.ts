export const languages = {
  fr: { long: "Français", short: "fr", flag: "🇫🇷" },
  en: { long: "English", short: "en", flag: "🇬🇧" },
  pt: { long: "Português", short: "pt", flag: "🇧🇷" },
}  as const;
export type Language = keyof typeof languages;


export const defaultLangStart = "fr"; // default language for the app when accessing the root URL
export const defaultLang = "fr"; // fallback language in the absence of a translation



export const ui : Record<Language, Record<string, string>>= {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.blog": "Blog",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.blog": "Blog",
  },
  pt: {
    "nav.home": "Home",
    "nav.about": "Sobre",
    "nav.blog": "Blog",
  },
} as const;



export type Page = 'about' | 'blog';
export const routes : Record<Language, Record<Page, string>> = {
  fr: {
    about: "a-propos",
    blog: "blog",
  },
  en: {
    about: "about",
    blog: "blog",
  },
  pt: {
    about: "sobre",
    blog: "blog",
  },
};
