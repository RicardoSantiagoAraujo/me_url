import type { ExternalLink } from './ExternalLink';

export interface GeneralParameters {
    name: string;
    surname: string;
    portfolioTitle: string;
    logo: string;
    signature: string;
    signatureLinkTo: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    country: string;
    postcode: string;
    addressLink: string;
    birthYear:  number;
    birthMonth:   number;
    birthDay:   number;
    nationality: string;
    gender: string;
    drivingLicense: string;
    siteCopyright: string;
    externalLinks: ExternalLink[]
    techstack: Record<string, Tech>
  }

  type Tech = {
    name: string;
    icon: string;
    link: string;
};
