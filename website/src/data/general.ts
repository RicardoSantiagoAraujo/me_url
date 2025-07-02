// This file contains the general parameters for the application
import type { GeneralParameters } from "./types/GeneralParameters";

export const generalParameters: GeneralParameters = {
  name: "John",
  surname: "Doe",
  portfolioTitle: "My Portfolio",
  logo: "/src/assets/generic_portrait.svg",
  signature: "/src/assets/generic_signature.png",
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
      hyperref: "github.com/RicardoSantiagoAraujo",
    },
    {
      name: "LinkedIn",
      include: true,
      iconAsImg: null,
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-linkedin",
      hyperref: "linkedin.com/in/ricardo-santiago-araujo/",
    },
    {
      name: "ResearchGate",
      include: true,
      iconAsImg: null,
      IconAsImgHeight: "27px",
      iconFontAwesome: "fa-brands fa-researchgate",
      hyperref: "researchgate.net/profile/Ricardo-Santiago-Araujo",
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
};
