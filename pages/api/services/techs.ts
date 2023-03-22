import {NextApiRequest, NextApiResponse} from 'next'
import uniqid from 'uniqid';

export default async function techs(request: NextApiRequest, response:NextApiResponse) {
  const datas = [
    {
      id: uniqid('tech-'),
      name: 'HTML',
      type: 'frontend',
      url:'html-logo.png',
      description: 
      `HTML is the standard markup language for creating Web pages.`
      
    },
    {
      id: uniqid('tech-'),
      name: 'CSS',
      type: 'frontend',
      url:'css-logo.png',
      description: 
      `CSS is the language we use to style an HTML document.`
    },
    {
      id: uniqid('tech-'),
      name: 'JavaScript',
      type: 'fullstack',
      url:'js-logo.png',
      description: `JavaScript is the programming language of the Web.`
    },
    {
      id: uniqid('tech-'),
      name: 'TypeScript',
      type: 'fullstack',
      url:'typescript-logo.png',
      description: `TypeScript is JavaScript with added syntax for types.`
    },
    {
      id: uniqid('tech-'),
      name: 'ReactJS',
      type: 'framework',
      url:'react-logo.png',
      description: `React is a framework used to build single-page applications.`
    },
    
    {
      id: uniqid('tech-'),
      name: 'Vue.JS',
      type: 'framework',
      url:'html-logo.png',
      description: `Vue.js is a popular open-source JavaScript framework for building user interfaces and single-page applications. `
    },
    {
      id: uniqid('tech-'),
      name: 'VTEX',
      type: 'framework',
      url:'html-logo.png',
      description: `VTEX is a cloud-based e-commerce platform that provides a suite of tools and services to help businesses build and manage their online stores.`
    },
    {
      id: uniqid('tech-'),
      name: 'Node.JS',
      type: 'backend',
      url:'nodejs-logo.svg',
      description: `Node.js allows you to run JavaScript on the server.`
    },
    {
      id: uniqid('tech-'),
      name: 'PHP',
      type: 'backend',
      url:'html-logo.png',
      description: `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.`
    },
    {
      id: uniqid('tech-'),
      name: 'SAP',
      type: 'ERP',
      url:'html-logo.png',
      description: `SAP (Systems, Applications, and Products) is a multinational software corporation that provides enterprise software to manage business operations and customer relations.`
    },
    {
      id: uniqid('tech-'),
      name: 'MySQL',
      type: 'database',
      url:'html-logo.png',
      description: `MySQL is an open-source relational database management system (RDBMS) that allows for the creation, management, and manipulation of databases.`
    },
    {
      id: uniqid('tech-'),
      name: 'SQLServer',
      type: 'database',
      url:'html-logo.png',
      description: `SQL Server is a relational database management system (RDBMS) developed by Microsoft. It is used to store and retrieve data as requested by other software applications. `
    },
    {
      id: uniqid('tech-'),
      name: 'MongoDB',
      type: 'database',
      url:'html-logo.png',
      description: `MongoDB is a popular open-source NoSQL document-oriented database that uses a flexible JSON-like data model. `
    },
    {
      id: uniqid('tech-'),
      name: 'PostgreSQL',
      type: 'erp',
      url:'html-logo.png',
      description: `PostgreSQL is an advanced open-source relational database management system (RDBMS) that uses and extends the SQL language. It is known for its robustness, extensibility, and compliance with industry standards.`
    },
  ]

  return response.status(200).json(datas)
}
