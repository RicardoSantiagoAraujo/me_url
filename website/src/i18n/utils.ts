import { ui, defaultLang, routes, type Language, type Page } from "./ui";
import { debugMode } from "@/options.config";

/**
 * Get language from URL
 *
 * @param url - The URL object to extract the language from
 * @returns The language code if found in the URL, otherwise returns the default language
 */
export function getLangFromUrl(url: URL) {
  // Extract the language from the URL path: works if the URL is like /[lang]/some-page, i.e., the language is the first segment of the path.
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Get translation function for a specific language
 *
 * @param lang - The language code to get translations for
 * @returns A function that takes a translation key and returns the corresponding translated string
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get path translation function for a specific language
 *
 * @param lang - The language code to get path translations for
 * @returns A function that takes a path and returns the corresponding translated path
 */
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    // console.log("path: " + path);
    const pathAsList = path.split("/");
    // console.log("pathAsList: " + pathAsList);
    if (pathAsList[pathAsList.length - 1] === "") {
      pathAsList.pop(); // Remove the last empty segment if it exists
    }
    const pathName = pathAsList[pathAsList.length - 1] as Page;
    // console.log("pathName: " + pathName);
    const hasTranslation =
      routes[l] !== undefined && routes[l][pathName] !== undefined;
    // console.log("");
    // console.log("\t hasTranslation: " + hasTranslation);
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    // console.log("translatedPath: " + translatedPath);
    if (hasTranslation) {
      // console.log("Has translation, returning translated path");
      return `/${l}${translatedPath}`;
    } else {
      // console.log(`No translation found, defaulting to ${defaultLang}`);
      return `/${defaultLang}${path}`;
    }
  };
}

/**
 * Translate a given route path from one language to another
 *
 * @param path - the original path to be translated
 * @param currentLang - the current language of the path
 * @param targetLang - the language to translate the path to
 * @returns the translated path, or the original path if no translation is found
 */
export function translateRoute(
  path: string,
  currentLang: Language,
  targetLang: Language
) {
  const currentRoutes = routes[currentLang];
  const key = Object.keys(currentRoutes).find(
    (k) => currentRoutes[k as keyof typeof currentRoutes] === path
  ) as keyof (typeof routes)[Language];
  const translatedRoute = routes[targetLang][key];
  // console.log("routes[targetLang]: " + JSON.stringify(routes[targetLang]));
  // console.log("path: " + path);
  // console.log("key: " + key);
  // console.log(`\t Translated route: "${translatedRoute}"`);
  if (translatedRoute) {
    return translatedRoute;
  } else if (path) {
    return path;
  } else {
    return "";
  }
}

/**
 * Warn if a section name is missing in the translations
 *
 * @param section - the section identifier to check
 * @param language - the language to check the translation for
 * @returns - 0 if debugMode is off, otherwise logs warnings to the console
 */
export function warningMissingSectionName(section: string, language: Language) {
  if (!debugMode) {
    return 0;
  }
  const sectionNameTranslated = ui[language][`nav.${section}`];
  const sectionNameDefault = ui[defaultLang][`nav.${section}`];
  // if (!sectionNameTranslated) throw new Error(`"${"test"}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif,svg}"`);
  if (sectionNameTranslated) {
    console.log("☑ Section translation: " + sectionNameTranslated);
  } else if (sectionNameDefault) {
    console.log(
      `⚠ NO TRANSLATION AVAILABLE FOR SECTION ${section}. Defaulting to [${defaultLang}]: ${sectionNameDefault}`
    );
  } else {
    console.log(
      `⚠⚠⚠ NO DEFAULT NAME AVAILABLE FOR SECTION ${section}. Make sure to add it to the ui object`
    );
  }
}
