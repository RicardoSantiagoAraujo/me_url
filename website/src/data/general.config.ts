import type { GeneralParameters } from "../types/GeneralParameters";
import { techstackDefault } from "./base/glossaries/_techstack";
import { techstackUser } from "./glossaries/techstack.config";
import { fieldsDefault } from "./base/glossaries/_fields";
import { fieldsUser } from "./glossaries/fields.config";
import { tagsDefault } from "./base/glossaries/_tags";
import { tagsUser } from "./glossaries/tags.config";

// DEFINE USER PARAMETERS IN HERE;
// OTHERWISE PLACEHOLDER PARAMETERS WILL BE USED
export const generalParametersUser: GeneralParameters = {
  name: "John",
  surname: "Doe",
  portfolioTitle: "My Portfolio",
  logo: "/src/assets/placeholders/generic_portrait.svg",
  signature: "/src/assets/placeholders/generic_signature.png",
  signatureLinkTo: "",
  portrait: "/src/assets/placeholders/generic_portrait.svg",
  favicon: "/icons/favicon.svg",
  email: "johndoe@email.com",
  githubUsername: "johnDoe",
  phone: "9999999999",
  street: "rue de Cockayne, 1234",
  city: "Cockayne",
  country: "UK",
  addressLink: "https://maps.app.goo.gl/WVy79Q7bq66XKHYZ8",
  cvLink:
    "https://cversatile-demo.netlify.app/profiles/examples/johnDoe/published_pdfs/cv_johnDoe_FEN.pdf",
  postcode: "99999",
  birthYear: 1990,
  birthMonth: 1,
  birthDay: 1,
  nationality: "English",
  gender: "male",
  drivingLicense: "B",
  hobbies: ["reading", "coding", "running"],
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
    ...techstackDefault,
    ...techstackUser,
  },
  fields: {
    ...fieldsDefault,
    ...fieldsUser,
  },
  tags: {
    ...tagsDefault,
    ...tagsUser,
  }
};
