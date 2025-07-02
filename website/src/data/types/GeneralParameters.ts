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
    address: string;
    siteCopyright: string;
    externalLinks: ExternalLink[]
  }