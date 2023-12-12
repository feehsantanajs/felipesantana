import { randomUUID } from "crypto";
interface stackProps{
  id: string;
  name: string;
  type: string;
  url: string;
  description: string;
}
export const stacksData:stackProps[] = [
  {
    id: randomUUID(),
    name: "HTML",
    type: "frontend",
    url: "html-logo.png",
    description: `HTML is the standard markup language for creating Web pages.`,
  },
  {
    id: randomUUID(),
    name: "CSS",
    type: "frontend",
    url: "css-logo.png",
    description: `CSS is the language we use to style an HTML document.`,
  },
  {
    id: randomUUID(),
    name: "JavaScript",
    type: "fullstack",
    url: "js-logo.png",
    description: `JavaScript is the programming language of the Web.`,
  },
  {
    id: randomUUID(),
    name: "TypeScript",
    type: "fullstack",
    url: "typescript-logo.png",
    description: `TypeScript is JavaScript with added syntax for types.`,
  },
  {
    id: randomUUID(),
    name: "ReactJS",
    type: "framework",
    url: "react-logo.png",
    description: `React is a framework used to build single-page applications.`,
  },
  {
    id: randomUUID(),
    name: "Node.JS",
    type: "backend",
    url: "nodejs-logo.svg",
    description: `Node.js allows you to run JavaScript on the server.`,
  },
  {
    id: randomUUID(),
    name: "PHP",
    type: "backend",
    url: "php-logo.png",
    description: `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.`,
  },
  {
    id: randomUUID(),
    name: "TailwindCSS",
    type: "framework",
    url: "tailwind-logo.png",
    description: `Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes to quickly and efficiently style HTML elements.`,
  },
  {
    id: randomUUID(),
    name: "GraphQL",
    type: "framework",
    url: "graphql-logo.png",
    description: `It is a query language and runtime for APIs`,
  },
  {
    id: randomUUID(),
    name: "Vue.JS",
    type: "framework",
    url: "vue-logo.png",
    description: `Vue.js is a popular open-source JavaScript framework for building user interfaces and single-page applications. `,
  },

  {
    id: randomUUID(),
    name: "VTEX",
    type: "framework",
    url: "vtex-logo.svg",
    description: `VTEX is a cloud-based e-commerce platform that provides a suite of tools and services to help businesses build and manage their online stores.`,
  },

  {
    id: randomUUID(),
    name: "SAP",
    type: "ERP",
    url: "sap-logo.png",
    description: `SAP (Systems, Applications, and Products) is a multinational software corporation that provides enterprise software to manage business operations and customer relations.`,
  },
  {
    id: randomUUID(),
    name: "MySQL",
    type: "database",
    url: "mysql-logo.png",
    description: `MySQL is an open-source relational database management system (RDBMS) that allows for the creation, management, and manipulation of databases.`,
  },
  {
    id: randomUUID(),
    name: "SQLServer",
    type: "database",
    url: "sqlserver-logo.png",
    description: `SQL Server is a relational database management system (RDBMS) developed by Microsoft. It is used to store and retrieve data as requested by other software applications. `,
  },
  {
    id: randomUUID(),
    name: "MongoDB",
    type: "database",
    url: "mongobd-logo.png",
    description: `MongoDB is a popular open-source NoSQL document-oriented database that uses a flexible JSON-like data model. `,
  },
  {
    id: randomUUID(),
    name: "PostgreSQL",
    type: "erp",
    url: "postgresql-logo.png",
    description: `PostgreSQL is an advanced open-source relational database management system (RDBMS) that uses and extends the SQL language. It is known for its robustness, extensibility, and compliance with industry standards.`,
  },
];