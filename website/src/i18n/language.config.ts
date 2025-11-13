import type { LanguageConfig } from "@/types/LanguageConfig";
// Define supported languages and their properties : DEFINE ONE PER LOCALE DEFINED IN astro.config.mts
export const languages : Record<string, LanguageConfig> = {
  fr: { long: "Français", short: "fr", flag: "🇫🇷", isAvailable: true},
  en: { long: "English", short: "en", flag: "🇬🇧", isAvailable: true},
  pt: { long: "Português", short: "pt", flag: "🇵🇹", isAvailable: true}, //🇧🇷
  de: { long: "Deutsch", short: "de", flag: "🇩🇪", isAvailable: false},
};
export const languagesAvailable : Record<string, LanguageConfig> = Object.fromEntries(Object.entries(languages).filter(([key, val] : [string, LanguageConfig]) => val.isAvailable));

// Types for languages
export type Language = keyof typeof languages;
export type LanguageAvailable = keyof typeof languagesAvailable;  

// Default language settings
export const defaultLangStart : Language = "en"; // default language for the app when accessing the root URL
export const defaultLang : Language = "en"; // fallback language in the absence of a translation 

