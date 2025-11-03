import { dev } from "astro";
import type { Field } from "../../types/Field";

// DEFAULT AVAILABLE VALUES
export const fieldsDefault: Record<string, Field> = {
  data: {
    name: "Astro", 
  },
  data_engineering: {
    name: "Data Engineering",
  },
  data_analysis: {
    name: "Data Analysis",
  },
  data_science: {
    name: "Data Science",
  },
  software_engineering: {
    name: "Software Engineering",
  },
  web_development: {
    name: "Web Development",
  },
  devops: {
    name: "DevOps",
  },
  backend: {
    name: "Backend",
  },
  frontend: {
    name: "Frontend",
  },
};
