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
      // console.log("path: " + path);
      const pathAsList = path.split("/");
      // console.log("pathAsList: " + pathAsList);
      if (pathAsList[pathAsList.length - 1] === "") {
        pathAsList.pop(); // Remove the last empty segment if it exists
      }
      const pathName =pathAsList[pathAsList.length - 1] as Page;
      // console.log("pathName: " + pathName);
      const hasTranslation =  routes[l] !== undefined && routes[l][pathName] !== undefined;
      // console.log("hasTranslation: " + hasTranslation);
      const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path;
      // console.log("translatedPath: " + translatedPath);
      // console.log("");
      return `/${l}${translatedPath}`
    }
  }


export function translateRoute(path: string, currentLang: Language, targetLang: Language) { 
     const currentRoutes = routes[currentLang];
     const key = Object.keys(currentRoutes).find(k => currentRoutes[k as keyof typeof currentRoutes] === path) as keyof typeof routes[Language];
     const translatedRoute = routes[targetLang][key];
     if (translatedRoute)
     {
        return translatedRoute;
     }
     else if (path) {
        return path;
     }
     else {
        return "";
     }
  }
