import type { ExternalLink } from './ExternalLink';

export interface GeneralParameters {
    name: string;
    surname: string;
    portfolioTitle: string;
    logo: string;
    signature: string;
    email: string;
    phone: string;
    address: string;
    externalLinks: ExternalLink[]
  }