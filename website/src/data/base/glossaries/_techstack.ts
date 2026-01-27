import type { Tech } from "@/types/Tech";
export const techstackDefault: Record<string, Tech> = {
  astro: {
    name: "Astro",
    icon: "tech/astro",
    link: "https://astro.build/",
    descriptionShort: "A modern web framework for fast, content-focused websites.",
    description: "Astro is a static site builder that delivers lightning-fast websites by shipping less JavaScript to the browser and focusing on content efficiency."
  },
  javascript: {
    name: "JavaScript",
    icon: "tech/typescript",
    link: "https://www.typescriptlang.org/",
    descriptionShort: "The core programming language of the web.",
    description: "JavaScript enables dynamic, interactive web pages and powers nearly all web applications. It runs directly in browsers and on servers via Node.js."
  },
  typescript: {
    name: "TypeScript",
    icon: "tech/typescript",
    link: "https://www.typescriptlang.org/",
    descriptionShort: "A typed superset of JavaScript for scalable development.",
    description: "TypeScript adds static typing to JavaScript, helping developers catch errors early and write more maintainable, large-scale applications."
  },
  jquery: {
    name: "jQuery",
    icon: "tech/jquery",
    link: "https://jquery.com/",
    descriptionShort: "A classic JavaScript library for DOM manipulation.",
    description: "jQuery simplifies HTML document traversal, event handling, and animations, and was once the most popular JavaScript library for front-end development."
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "tech/bootstrap",
    link: "https://getbootstrap.com/",
    descriptionShort: "A front-end framework for responsive web design.",
    description: "Bootstrap provides prebuilt CSS and JavaScript components that make it easy to design responsive, mobile-first websites quickly."
  },
  python: {
    name: "Python",
    icon: "tech/python",
    link: "https://www.python.org/",
    descriptionShort: "A versatile programming language known for simplicity and readability.",
    description: "Python is widely used for web development, data analysis, AI, automation, and scientific computing, thanks to its clean syntax and rich ecosystem."
  },
  flask: {
    name: "Flask",
    icon: "tech/flask",
    link: "https://flask.palletsprojects.com/en/stable/",
    descriptionShort: "A lightweight Python web framework.",
    description: "Flask is a minimal, flexible framework for building web applications and APIs in Python, known for its simplicity and modular design."
  },
  pyspark: {
    name: "PySpark",
    icon: "tech/spark2",
    link: "https://spark.apache.org/docs/latest/api/python/",
    descriptionShort: "A Python API for distributed data processing with Apache Spark.",
    description: "PySpark enables large-scale data analysis and processing across clusters using Python, leveraging the speed and scalability of Apache Spark."
  },
  psytoolkit: {
    name: "PsyToolkit",
    icon: "tech/r_colorless",
    link: "https://www.psytoolkit.org/experiment-library/",
    descriptionShort: "A toolkit for designing psychology experiments and surveys.",
    description: "PsyToolkit provides an accessible online platform for creating, running, and analyzing psychological experiments and surveys."
  },
  jsx: {
    name: "JSX",
    icon: "tech/jsx",
    link: "https://fr.legacy.reactjs.org/docs/introducing-jsx.html",
    descriptionShort: "A syntax extension combining JavaScript and HTML.",
    description: "JSX allows developers to write UI components in a syntax that mixes JavaScript and HTML, commonly used with React for declarative UI design."
  },
  html: {
    name: "HTML",
    icon: "tech/html",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    descriptionShort: "The standard markup language for web pages.",
    description: "HTML structures web content and defines the basic elements of webpages such as headings, paragraphs, links, and multimedia."
  },
  css: {
    name: "CSS",
    icon: "tech/css",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
    descriptionShort: "A styling language for web page presentation.",
    description: "CSS controls the layout, colors, and design of web pages, enabling responsive and visually appealing interfaces."
  },
  scss: {
    name: "SCSS",
    icon: "tech/sass",
    link: "https://sass-lang.com/",
    descriptionShort: "A CSS preprocessor with variables and nesting.",
    description: "SCSS (Sassy CSS) extends CSS with advanced features like variables, nesting, and mixins, making stylesheet management more efficient."
  },
  sql: {
    name: "SQL",
    icon: "tech/database",
    link: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
    descriptionShort: "A language for managing and querying databases.",
    description: "SQL (Structured Query Language) is used to create, read, update, and delete data in relational databases."
  },
  mysql: {
    name: "MySQL",
    icon: "tech/mysql",
    link: "https://www.mysql.com/",
    descriptionShort: "An open-source relational database system.",
    description: "MySQL is one of the most popular SQL-based databases, widely used in web applications for its reliability and performance."
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "tech/postgresql",
    link: "https://www.postgresql.org/",
    descriptionShort: "A powerful open-source relational database.",
    description: "PostgreSQL is known for its robustness, extensibility, and support for complex queries and data types."
  },
  spring: {
    name: "Java Spring",
    icon: "tech/tech",
    link: "https://spring.io/",
    descriptionShort: "A Java framework for enterprise and web applications.",
    description: "Spring simplifies Java development with comprehensive infrastructure support for building secure, scalable, and maintainable applications."
  },
  markdown: {
    name: "Markdown",
    icon: "tech/markdown",
    link: "https://www.markdownguide.org/",
    descriptionShort: "A lightweight markup language for formatted text.",
    description: "Markdown allows easy formatting of text documents with simple syntax, ideal for documentation, blogs, and README files."
  },
  latex: {
    name: "LaTeX",
    icon: "tech/latex",
    link: "https://www.latex-project.org/",
    descriptionShort: "A typesetting system for high-quality documents.",
    description: "LaTeX is used for producing scientific and academic documents, offering precise control over layout and mathematical typesetting."
  },
  luatex: {
    name: "LuaTeX",
    icon: "tech/lua_colorless",
    link: "https://www.luatex.org/",
    descriptionShort: "An extension of TeX integrating the Lua scripting language.",
    description: "LuaTeX enhances TeX typesetting with Lua scripting, enabling advanced automation and customization in document production."
  },
  r: {
    name: "R",
    icon: "tech/r_colorless",
    link: "https://www.r-project.org/",
    descriptionShort: "A programming language for statistical computing.",
    description: "R specializes in data analysis, statistics, and visualization, and is widely used in academic and data science fields."
  },
  d3: {
    name: "D3.js",
    icon: "tech/d3_colorless",
    link: "https://d3js.org/",
    descriptionShort: "A JavaScript library for interactive data visualizations.",
    description: "D3.js uses web standards like SVG, HTML, and CSS to create dynamic, data-driven visualizations for the web."
  },
  angularjs: {
    name: "AngularJS",
    icon: "tech/angularjs_colorless",
    link: "https://angularjs.org/",
    descriptionShort: "The original Angular framework for dynamic web apps.",
    description: "AngularJS is a front-end JavaScript framework developed by Google that introduced two-way data binding and component-based architecture."
  },
  angular2: {
    name: "Angular 2",
    icon: "tech/angular2_colorless",
    link: "https://angular.dev/",
    descriptionShort: "A modern, TypeScript-based web framework by Google.",
    description: "Angular 2 is a complete rewrite of AngularJS, built with TypeScript and designed for scalable, modular single-page applications."
  },
  techstack_a: {
    name: "Generic Tech A",
    icon: "tech/techA",
    link: "https://www.google.com/",
    descriptionShort: "A placeholder technology for demos or examples.",
    description: "Generic Tech A represents a customizable placeholder entry used for examples, templates, or testing environments."
  },
  techstack_b: {
    name: "Generic Tech B",
    icon: "tech/techB",
    link: "https://www.google.com/",
    descriptionShort: "Another example entry for mock data or demos.",
    description: "Generic Tech B serves as a demo or mock entry in tech stacks where actual technology details are not yet defined."
  },
  techstack_c: {
    name: "Generic Tech C",
    icon: "tech/techC",
    link: "https://www.google.com/",
    descriptionShort: "A sample placeholder for tech stack listings.",
    description: "Generic Tech C can be used as a placeholder or template element when showcasing or testing a technical stack structure."
  },
  aws: {
    name: "AWS",
    icon: "tech/aws",
    link: "https://aws.amazon.com/en",
    descriptionShort: "On-demand cloud computing platforms and APIs.",
    description: "On-demand cloud computing platforms and APIs."
  },
    snowflake: {
    name: "Snowflake",
    icon: "tech/snowflake",
    link: "https://www.snowflake.com/en/",
    descriptionShort: "Cloud-based data platform that supports data analysis and simultaneous access of data sets with minimal latency.",
    description: "Cloud-based data platform that supports data analysis and simultaneous access of data sets with minimal latency."
  },
};
