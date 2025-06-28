import { ui, defaultLang, routes, type Language, type Page  } from './ui';

export function getLangFromUrl(url: URL) {
  // Extract the language from the URL path: works if the URL is like /[lang]/some-page, i.e., the language is the first segment of the path.
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}


export function useTranslatedPath(lang: Language) {
    return function translatePath(path: string, l: Language = lang) {
      const pathAsList = path.split("/");
      const pathName =pathAsList[pathAsList.length - 2] as Page;
      const hasTranslation =  routes[l] !== undefined && routes[l][pathName] !== undefined
      const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path

      return `/${l}${translatedPath}`
    }
  }
