// This file contains the general parameters for the application

export interface GeneralParameters {
    name: string;
    surname: string;
    portfolioTitle: string;
    logo: string;
    email: string;
    phone: string;
    address: string;
  }

export const generalParameters: GeneralParameters =
    { name: "John", surname: "Doe", portfolioTitle: "My Portfolio", logo:"../assets/generic_portrait.svg" ,
        email: "johndoe@email.com", phone: "9999999999", address: "rue de Cockayne, 1234"
    };
