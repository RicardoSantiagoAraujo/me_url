import type { Field } from "@/types/Field"; 

// DEFAULT AVAILABLE VALUES
export const fieldsDefault: Record<string, Field> = {
  // --- DATA & COMPUTING ---
  data: {
    name: "Data",
    description:
      "Working with data, databases, pipelines, analytics, visualization, and data-driven decision-making across industries.",
    descriptionShort: "Data-related technologies and practices.",
  },
  computer_science: {
    name: "Computer Science",
    description:
      "The study of computation, algorithms, data structures, software, and the theoretical foundations of computing systems.",
    descriptionShort: "Theory and practice of computation and algorithms.",
  },
  data_engineering: {
    name: "Data Engineering",
    description:
      "Designing, building, and maintaining systems for collecting, storing, and analyzing data efficiently and securely.",
    descriptionShort: "Building and managing large-scale data systems.",
  },
  data_analysis: {
    name: "Data Analysis",
    description:
      "Examining data sets to uncover insights, trends, and patterns that support informed decision-making.",
    descriptionShort: "Extracting insights from data.",
  },
  data_science: {
    name: "Data Science",
    description:
      "A multidisciplinary field combining statistics, machine learning, and domain expertise to extract knowledge from data.",
    descriptionShort: "Applying machine learning and statistics to data.",
  },
  software_engineering: {
    name: "Software Engineering",
    description:
      "Designing, developing, testing, and maintaining reliable and scalable software systems.",
    descriptionShort: "Engineering principles applied to software development.",
  },
  software_development: {
    name: "Software Development",
    description:
      "The process of creating applications and systems using programming languages and software tools.",
    descriptionShort: "Building and maintaining software applications.",
  },
  web_dev: {
    name: "Web Development",
    description:
      "Building and maintaining websites and web applications for the internet or intranets.",
    descriptionShort: "Creating and managing web applications.",
  },
  devops: {
    name: "DevOps",
    description:
      "Combining development and IT operations to improve collaboration, automation, and delivery speed.",
    descriptionShort: "Bridging development and operations.",
  },
  backend: {
    name: "Backend Development",
    description:
      "Creating server-side systems, APIs, and databases that power the functionality of applications.",
    descriptionShort: "Server-side application and API development.",
  },
  frontend: {
    name: "Frontend Development",
    description:
      "Designing and implementing user interfaces and experiences for web or mobile applications.",
    descriptionShort: "Building interactive and visual user interfaces.",
  },
  fullstack: {
    name: "Fullstack Development",
    description:
      "Developing both client-side and server-side parts of web applications, integrating front and back end.",
    descriptionShort: "Building complete web applications end-to-end.",
  },

  // --- LIFE SCIENCES ---
  biology: {
    name: "Biology",
    description:
      "The scientific study of living organisms, including their structure, function, growth, evolution, and distribution.",
    descriptionShort: "Study of living organisms and life processes.",
  },
  veterinary_medicine: {
    name: "Veterinary Medicine",
    description:
      "The branch of medicine dealing with the prevention, diagnosis, and treatment of diseases in animals.",
    descriptionShort: "Medical science for animals.",
  },
  zoology: {
    name: "Zoology",
    description:
      "The study of animals, including their physiology, classification, and behavior within ecosystems.",
    descriptionShort: "Study of animal biology and behavior.",
  },
  genetics: {
    name: "Genetics",
    description:
      "The study of genes, genetic variation, and heredity in living organisms.",
    descriptionShort: "Science of genes and heredity.",
  },
  biotechnology: {
    name: "Biotechnology",
    description:
      "Using biological systems and organisms to develop useful technologies and products in health, agriculture, and industry.",
    descriptionShort: "Technology based on biological systems.",
  },
  neuroscience: {
    name: "Neuroscience",
    description:
      "The scientific study of the nervous system, brain function, and behavior.",
    descriptionShort: "Study of the brain and nervous system.",
  },

  // --- ENGINEERING & TECHNOLOGY ---
  electrical_engineering: {
    name: "Electrical Engineering",
    description:
      "Design and study of electrical systems, electronics, and electromagnetism for modern technology.",
    descriptionShort: "Engineering with electricity and electronics.",
  },
  mechanical_engineering: {
    name: "Mechanical Engineering",
    description:
      "Applying physics and materials science to design and manufacture mechanical systems and devices.",
    descriptionShort: "Design and analysis of mechanical systems.",
  },
  civil_engineering: {
    name: "Civil Engineering",
    description:
      "Designing and constructing infrastructure such as buildings, roads, bridges, and water systems.",
    descriptionShort: "Engineering infrastructure and public works.",
  },
  aerospace_engineering: {
    name: "Aerospace Engineering",
    description:
      "Developing aircraft, spacecraft, and systems related to flight within and beyond Earth’s atmosphere.",
    descriptionShort: "Engineering of flight and space vehicles.",
  },
  robotics: {
    name: "Robotics",
    description:
      "Designing and programming robots and automated systems for manufacturing, healthcare, and exploration.",
    descriptionShort: "Engineering and programming robotic systems.",
  },

  // --- SCIENCE & MATHEMATICS ---
  physics: {
    name: "Physics",
    description:
      "The study of matter, energy, and the fundamental laws governing the universe.",
    descriptionShort: "Science of matter and energy.",
  },
  chemistry: {
    name: "Chemistry",
    description:
      "The study of substances, their properties, reactions, and the processes that form new materials.",
    descriptionShort: "Science of substances and reactions.",
  },
  mathematics: {
    name: "Mathematics",
    description:
      "The study of numbers, structures, patterns, and their applications in science and technology.",
    descriptionShort: "The abstract science of numbers and patterns.",
  },
  statistics: {
    name: "Statistics",
    description:
      "The science of collecting, analyzing, and interpreting data to make informed decisions.",
    descriptionShort: "Science of data collection and analysis.",
  },

  // --- HUMANITIES & SOCIAL SCIENCES ---
  psychology: {
    name: "Psychology",
    description:
      "The scientific study of the mind, behavior, and mental processes.",
    descriptionShort: "Study of human behavior and the mind.",
  },
  sociology: {
    name: "Sociology",
    description:
      "The study of human society, social behavior, and institutions that shape communities.",
    descriptionShort: "Study of society and social behavior.",
  },
  philosophy: {
    name: "Philosophy",
    description:
      "The study of fundamental questions about existence, knowledge, values, and reasoning.",
    descriptionShort: "Exploration of knowledge and existence.",
  },
  history: {
    name: "History",
    description:
      "The study of past events, societies, and cultures through evidence and interpretation.",
    descriptionShort: "Study of past human events and cultures.",
  },
  linguistics: {
    name: "Linguistics",
    description:
      "The scientific study of language, its structure, and how it is used and learned.",
    descriptionShort: "Science of language and communication.",
  },
  economics: {
    name: "Economics",
    description:
      "The study of production, distribution, and consumption of goods and services.",
    descriptionShort: "Science of markets and resource allocation.",
  },
  political_science: {
    name: "Political Science",
    description:
      "The study of politics, government systems, and public policy.",
    descriptionShort: "Study of political systems and power.",
  },

  // --- CREATIVE & APPLIED FIELDS ---
  architecture: {
    name: "Architecture",
    description:
      "The art and science of designing and constructing buildings and physical structures.",
    descriptionShort: "Design of buildings and spaces.",
  },
  graphic_design: {
    name: "Graphic Design",
    description:
      "Creating visual content to communicate messages through typography, imagery, and layout.",
    descriptionShort: "Visual communication through design.",
  },
  ux_ui_design: {
    name: "UX/UI Design",
    description:
      "Designing digital interfaces that are intuitive, user-friendly, and visually appealing.",
    descriptionShort: "Designing user experiences and interfaces.",
  },
  art: {
    name: "Art",
    description:
      "Creative expression through visual, auditory, or performance mediums.",
    descriptionShort: "Visual and creative artistic expression.",
  },
  music: {
    name: "Music",
    description:
      "The art of arranging sounds in time to produce rhythm, melody, and harmony.",
    descriptionShort: "Art of sound and rhythm.",
  },
  literature: {
    name: "Literature",
    description:
      "The study and creation of written works, including fiction, poetry, and essays.",
    descriptionShort: "Written creative expression and analysis.",
  },

  // --- HEALTH & MEDICINE ---
  medicine: {
    name: "Medicine",
    description:
      "The science and practice of diagnosing, treating, and preventing illness and injury.",
    descriptionShort: "Science of human health and treatment.",
  },
  nursing: {
    name: "Nursing",
    description:
      "Providing care and support to patients across healthcare settings, emphasizing compassion and clinical skill.",
    descriptionShort: "Patient care and healthcare support.",
  },
  public_health: {
    name: "Public Health",
    description:
      "Protecting and improving the health of communities through education, policy, and research.",
    descriptionShort: "Health promotion and disease prevention.",
  },
  pharmacy: {
    name: "Pharmacy",
    description:
      "The science of preparing, dispensing, and understanding the effects of medications.",
    descriptionShort: "Study of medicines and their effects.",
  },

  // --- BUSINESS & MANAGEMENT ---
  business: {
    name: "Business",
    description:
      "The study and practice of managing organizations, markets, and entrepreneurship.",
    descriptionShort: "Management and operation of organizations.",
  },
  management: {
    name: "Management",
    description:
      "Coordinating people and resources to achieve organizational goals effectively and efficiently.",
    descriptionShort: "Leading and organizing teams and processes.",
  },
  finance: {
    name: "Finance",
    description:
      "Managing money, investments, and financial systems to support economic growth and stability.",
    descriptionShort: "Study and management of money and assets.",
  },
  marketing: {
    name: "Marketing",
    description:
      "Promoting products and services through research, branding, and communication strategies.",
    descriptionShort: "Connecting products with audiences.",
  },
  entrepreneurship: {
    name: "Entrepreneurship",
    description:
      "Creating and scaling new businesses by identifying opportunities and innovating solutions.",
    descriptionShort: "Building and growing new ventures.",
  },

  // --- EXAMPLES (PLACEHOLDERS) ---
  field_example_1: {
    name: "Field Example 1",
    description: "A placeholder field for demonstration purposes.",
    descriptionShort: "Example field for testing.",
  },
  field_example_2: {
    name: "Field Example 2",
    description: "Another placeholder for testing field functionality.",
    descriptionShort: "Second example field.",
  },
  field_example_3: {
    name: "Field Example 3",
    description: "Example field entry to be replaced or customized later.",
    descriptionShort: "Third example field.",
  },
};
