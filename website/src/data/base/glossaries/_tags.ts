import type { Tag } from "@/types/Tag";

// DEFAULT AVAILABLE VALUES
export const tagsDefault: Record<string, Tag> = {
  // --- GENERAL & PERSONAL ---
  personal: {
    name: "Personal",
    description: "Items, notes, or goals related to personal interests, life, or self-development.",
    descriptionShort: "Personal or self-related content.",
  },
  work: {
    name: "Work",
    description: "Projects, tasks, or materials related to professional work or employment.",
    descriptionShort: "Professional and workplace content.",
  },
  education: {
    name: "Education",
    description: "Topics and activities related to learning, studying, or academic work.",
    descriptionShort: "Learning and academic topics.",
  },
  hobbies: {
    name: "Hobbies",
    description: "Activities or interests pursued for relaxation or pleasure outside of work.",
    descriptionShort: "Recreational and interest-based activities.",
  },
  projects: {
    name: "Projects",
    description: "Initiatives or tasks that involve planning, building, or research efforts.",
    descriptionShort: "Organized work or creative efforts.",
  },
  travel: {
    name: "Travel",
    description: "Posts or notes related to trips, destinations, and travel experiences.",
    descriptionShort: "Exploring and traveling content.",
  },
  health: {
    name: "Health",
    description: "Topics related to physical and mental well-being, fitness, and nutrition.",
    descriptionShort: "Wellness and health-focused content.",
  },
  finance: {
    name: "Finance",
    description: "Money management, budgeting, and investment-related materials.",
    descriptionShort: "Financial and budgeting content.",
  },

  // --- SKILL LEVELS & EXPERIENCE ---
  beginner: {
    name: "Beginner",
    description: "Content suitable for individuals new to a topic or skill area.",
    descriptionShort: "Introductory-level material.",
  },
  junior: {
    name: "Junior",
    description: "Content or roles suitable for early-career professionals with foundational experience.",
    descriptionShort: "Early-stage professional level.",
  },
  senior: {
    name: "Senior",
    description: "Advanced content or roles for experienced professionals or specialists.",
    descriptionShort: "High-experience professional level.",
  },
  team_lead: {
    name: "Team Lead",
    description: "Topics related to leadership, management, and guiding project teams.",
    descriptionShort: "Leadership and management-focused.",
  },
  mentor: {
    name: "Mentor",
    description: "Guidance, coaching, or mentorship-related topics and resources.",
    descriptionShort: "Coaching and professional guidance.",
  },
  expert: {
    name: "Expert",
    description: "Advanced or in-depth material intended for subject matter experts.",
    descriptionShort: "Expert-level content.",
  },

  // --- EDUCATION & LEARNING ---
  bootcamp: {
    name: "Bootcamp",
    description: "Intensive, short-term training programs focused on practical skills, often in tech.",
    descriptionShort: "Short, intensive training program.",
  },
  certification: {
    name: "Certification",
    description: "Professional or educational certifications earned or being pursued.",
    descriptionShort: "Professional or academic credentials.",
  },
  tutorial: {
    name: "Tutorial",
    description: "Step-by-step guides or instructional resources for learning a topic or skill.",
    descriptionShort: "Learning and instructional materials.",
  },
  research: {
    name: "Research",
    description: "Tags related to academic or professional research and experimentation.",
    descriptionShort: "Study and investigation-related content.",
  },
  course: {
    name: "Course",
    description: "Formal educational or training courses taken or taught.",
    descriptionShort: "Educational class or program.",
  },

  // --- TECHNOLOGY & DEVELOPMENT ---
  website: {
    name: "Website",
    description: "Projects or topics involving building, maintaining, or analyzing websites.",
    descriptionShort: "Web development and design content.",
  },
  ssg: {
    name: "SSG",
    description: "Static Site Generators such as Next.js, Hugo, or Gatsby used to build fast websites.",
    descriptionShort: "Static site generation tools and frameworks.",
  },
  algorithms: {
    name: "Algorithms",
    description: "Discussions or work related to algorithm design, optimization, or problem-solving.",
    descriptionShort: "Algorithmic and problem-solving topics.",
  },
  databases: {
    name: "Databases",
    description: "Topics involving data storage, relational or NoSQL databases, and data management.",
    descriptionShort: "Database and data storage systems.",
  },
  ai: {
    name: "AI",
    description: "Artificial intelligence, machine learning, and neural network-related topics.",
    descriptionShort: "Artificial intelligence and ML topics.",
  },
  cloud: {
    name: "Cloud",
    description: "Content about cloud computing platforms, deployment, and infrastructure.",
    descriptionShort: "Cloud computing and services.",
  },
  open_source: {
    name: "Open Source",
    description: "Projects or discussions related to publicly available software and collaboration.",
    descriptionShort: "Publicly shared software projects.",
  },
  security: {
    name: "Security",
    description: "Topics related to cybersecurity, privacy, and data protection.",
    descriptionShort: "Cybersecurity and privacy topics.",
  },
  automation: {
    name: "Automation",
    description: "Scripts, tools, and workflows that automate repetitive tasks or processes.",
    descriptionShort: "Workflow and process automation.",
  },
  design: {
    name: "Design",
    description: "Visual or user experience design, covering graphics, interfaces, and branding.",
    descriptionShort: "Visual and UX design topics.",
  },

  // --- ANIMALS & PETS ---
  pets: {
    name: "Pets",
    description: "General content related to animals kept for companionship or care.",
    descriptionShort: "Animal care and companionship.",
  },
  dogs: {
    name: "Dogs",
    description: "Topics, guides, or personal content related to dogs and dog care.",
    descriptionShort: "Dog-related content.",
  },
  cats: {
    name: "Cats",
    description: "Topics, guides, or personal content related to cats and cat care.",
    descriptionShort: "Cat-related content.",
  },
  wildlife: {
    name: "Wildlife",
    description: "Posts related to nature, wildlife, and environmental conservation.",
    descriptionShort: "Animals and natural habitats.",
  },

  // --- CREATIVE & MEDIA ---
  photography: {
    name: "Photography",
    description: "Capturing and editing images, including artistic or documentary photography.",
    descriptionShort: "Art and technique of taking photos.",
  },
  writing: {
    name: "Writing",
    description: "Creative or technical writing, journaling, and storytelling.",
    descriptionShort: "Written expression and documentation.",
  },
  music: {
    name: "Music",
    description: "Creating, performing, or discussing music, instruments, and composition.",
    descriptionShort: "Musical creation and appreciation.",
  },
  video: {
    name: "Video",
    description: "Producing, editing, or sharing video-based content.",
    descriptionShort: "Video production and editing.",
  },
  art: {
    name: "Art",
    description: "Visual or performance arts, creativity, and aesthetic expression.",
    descriptionShort: "Visual and creative arts.",
  },

  // --- BUSINESS & PRODUCTIVITY ---
  productivity: {
    name: "Productivity",
    description: "Methods, tools, and practices to increase efficiency and focus.",
    descriptionShort: "Efficiency and time management topics.",
  },
  entrepreneurship: {
    name: "Entrepreneurship",
    description: "Starting, managing, and growing new ventures or businesses.",
    descriptionShort: "Startup and innovation-related topics.",
  },
  marketing: {
    name: "Marketing",
    description: "Promoting products, services, or ideas through creative and analytical strategies.",
    descriptionShort: "Promotion and branding topics.",
  },
  management: {
    name: "Management",
    description: "Organizing teams, workflows, and business operations effectively.",
    descriptionShort: "Team and project organization.",
  },

  // --- EXAMPLES / PLACEHOLDERS ---
  tag_example_1: {
    name: "Tag Example 1",
    description: "A placeholder tag used for demonstration or testing purposes.",
    descriptionShort: "Example tag for demo use.",
  },
  tag_example_2: {
    name: "Tag Example 2",
    description: "Another placeholder tag used for testing configurations or layouts.",
    descriptionShort: "Second example tag.",
  },
  tag_example_3: {
    name: "Tag Example 3",
    description: "Third placeholder tag to illustrate tag structure and format.",
    descriptionShort: "Third example tag.",
  },
};
