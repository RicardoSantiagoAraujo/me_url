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
  address: "rue de Codckayne, 1234",
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
    "markdown": {
        name: "Markdown",
        icon: "tech/markdown",
        link: "https://www.markdownguide.org/",
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
