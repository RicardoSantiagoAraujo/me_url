import type { GeneralParameters } from "./types/GeneralParameters";

// DEFINE USER PARAMETERS IN HERE;
// OTHERWISE PLACEHOLDER PARAMETERS WILL BE USED
export const generalParametersUser: GeneralParameters = {
  name: "John",
  surname: "Doe",
  portfolioTitle: "My Portfolio",
  logo: "/src/assets/placeholders/generic_portrait.svg",
  signature: "/src/assets/placeholders/generic_signature.png",
  signatureLinkTo: "./projects",
  email: "johndoe@email.com",
  phone: "9999999999",
  street: "rue de Cockayne, 1234",
  city: "Cockayne",
  country: "UK",
  addressLink: "https://maps.app.goo.gl/WVy79Q7bq66XKHYZ8",
  postcode: "99999",
  birthYear: 1990,
  birthMonth: 1,
  birthDay: 1,
  nationality: "English",
  gender: "male",
  drivingLicense: "B",
  siteCopyright:
    "© me_url template website built with Astro by by Ricardo Santiago Araújo.",
  externalLinks: [
    {
      name: "GitHub",
      include: true,
      iconAsImg: null,
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-github",
      hyperref: "github.com",
    },
    {
      name: "LinkedIn",
      include: true,
      iconAsImg: null,
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-linkedin",
      hyperref: "linkedin.com",
    },
    {
      name: "ResearchGate",
      include: true,
      iconAsImg: null,
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-researchgate",
      hyperref: "researchgate.net",
    },
    {
      name: "Instagram",
      include: false,
      iconAsImg: null, // "/src/assets/icons/instagram.svg",
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-instagram",
      hyperref: "instagram.com",
    },
  ],
  techstack: {
    "astro": {
        name: "Astro",
        icon: "tech/astro",
        link: "https://astro.build/",
    },
    "javascript": {
        name: "JavaScript",
        icon: "tech/typescript",
        link: "https://www.typescriptlang.org/",
    },
    "typescript": {
        name: "TypeScript",
        icon: "tech/typescript",
        link: "https://www.typescriptlang.org/",
    },
    "python": {
        name: "Python",
        icon: "tech/python",
        link: "https://www.python.org/",
    },
    "flask": {
        name: "Flask",
        icon: "tech/flask",
        link: "https://flask.palletsprojects.com/en/stable/",
    },
    "pyspark": {
        name: "PySpark",
        icon: "tech/pyspark2",
        link: "https://spark.apache.org/docs/latest/api/python/",
    },
    "psytoolkit": {
        name: "PsyToolkit",
        icon: "tech/r_colorless",
        link: "https://www.psytoolkit.org/experiment-library/",
    },
    "jsx": {
        name: "JSX",
        icon: "tech/jsx",
        link: "https://fr.legacy.reactjs.org/docs/introducing-jsx.html",
    },
    "html": {
        name: "HTML",
        icon: "tech/html",
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    "scss": {
        name: "SCSS",
        icon: "tech/sass",
        link: "https://sass-lang.com/",
    },
    "mysql": {
        name: "SCSS",
        icon: "tech/sass",
        link: "https://sass-lang.com/",
    },
    "spring": {
        name: "SCSS",
        icon: "tech/sass",
        link: "https://sass-lang.com/",
    },
    "markdown": {
        name: "Markdown",
        icon: "tech/markdown",
        link: "https://www.markdownguide.org/",
    },
    "latex": {
      name: "LaTeX",
      icon: "tech/latex",
      link: "https://www.latex-project.org/",
    },
    "luatex": {
      name: "LuaTeX",
      icon: "tech/lua_colorless",
      link: "https://www.luatex.org/",
    },
    "r": {
      name: "R",
      icon: "tech/r_colorless",
      link: "https://www.r-project.org/",
    },
    "d3": {
      name: "D3.js",
      icon: "tech/d3_colorless",
      link: "https://d3js.org/",
    },
    "angularjs": {
      name: "AngularJS",
      icon: "tech/angularjs_colorless",
      link: "https://angularjs.org/",
    },
    "angular2": {
    name: "Angular 2",
      icon: "tech/angular2_colorless",
      link: "https://angular.dev/",
    },
    "techstack_a": {
        name: "Tech A",
        icon: "tech/tech",
        link: "https://www.google.com/",
    },
    "techstack_b": {
        name: "Tech B",
        icon: "tech/tech",
        link: "https://www.google.com/",
    },
    "techstack_c": {
        name: "Tech C",
        icon: "tech/tech",
        link: "https://www.google.com/",
    },
  }
};
