// This file sets the general parameters for the application
import type { GeneralParameters } from "./types/GeneralParameters";
import { generalParametersUser } from "./_general.config";

// DEFINE USER PARAMETERS IN general.config.ts IN SAME DIRECTORY AS THIS FILE

// PLACEHOLDER GENERAL PARAMETERS
// This is used when userGeneralParameters is not defined or empty
// It provides a fallback to ensure the application has valid general parameters
const generalParametersPlaceholder: GeneralParameters = {
  name: "John",
  surname: "Doe",
  portfolioTitle: "My Portfolio",
  logo: "/src/assets/placeholders/generic_portrait.svg",
  signature: "/src/assets/placeholders/generic_signature.png",
  signatureLinkTo: "./projects",
  email: "johndoe@email.com",
  phone: "9999999999",
  address: "rue de Cockayne, 1234",
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
      iconAsImg: null, // "/src/icons/instagram.svg",
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

// Check if userGeneralParameters is defined and not empty
const testConditions =
  generalParametersUser! == undefined ||
  generalParametersUser == null ||
  Object.keys(generalParametersUser).length === 0;
export const generalParameters: GeneralParameters = testConditions
  ? generalParametersPlaceholder // If it is not defined or empty, use the placeholder general parameters
  : generalParametersUser; // Otherwise, use the userGeneralParameters
