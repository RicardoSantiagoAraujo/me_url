import type { ExternalLink } from "./ExternalLink";
import type { Tech } from "./Tech";
import type { Field } from "./Field";
import type { Tag } from "./Tag";

export interface GeneralParameters {
  name: string;
  surname: string;
  portfolioTitle: string;
  logo: string;
  signature: string;
  signatureLinkTo: string;
  portrait: string;
  bannerImage:string;
  favicon: string;
  email: string;
  githubUsername?: string;
  phone: string;
  street: string;
  city: string;
  country: string;
  postcode: string;
  addressLink: string;
  cvLink: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  nationality: string;
  gender: string;
  drivingLicense: string;
  hobbies: string[];
  siteCopyright: string;
  externalLinks: ExternalLink[];
  techstack: Record<string, Tech>;
  fields: Record<string, Field>;
  tags: Record<string, Tag>;
}
