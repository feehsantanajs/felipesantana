'use client'
import {useState,useEffect} from 'react'
import React from 'react';
import Image from 'next/image';
import { api } from '@/services/api';
import { v4 as uuidv4 } from 'uuid';
type stackProps = [
  {
    id: string;
    name: string;
    type: string;
    url: string;
    description: string;
  }
]
export function Techs(){
  const data = [
    {
      id: uuidv4(),
      name: 'HTML',
      type: 'frontend',
      url:'html-logo.png',
      description: `HTML is the standard markup language for creating Web pages.`
    },
    {
      id: uuidv4(),
      name: 'CSS',
      type: 'frontend',
      url:'css-logo.png',
      description: `CSS is the language we use to style an HTML document.`
    },
    {
      id: uuidv4(),
      name: 'JavaScript',
      type: 'fullstack',
      url:'js-logo.png',
      description: `JavaScript is the programming language of the Web.`
    },
    {
      id: uuidv4(),
      name: 'TypeScript',
      type: 'fullstack',
      url:'typescript-logo.png',
      description: `TypeScript is JavaScript with added syntax for types.`
    },
    {
      id: uuidv4(),
      name: 'ReactJS',
      type: 'framework',
      url:'react-logo.png',
      description: `React is a framework used to build single-page applications.`
    },
    {
      id: uuidv4(),
      name: 'Node.JS',
      type: 'backend',
      url:'nodejs-logo.svg',
      description: `Node.js allows you to run JavaScript on the server.`
    },
    {
      id: uuidv4(),
      name: 'PHP',
      type: 'backend',
      url:'php-logo.png',
      description: `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.`
    },
    {
      id: uuidv4(),
      name: 'TailwindCSS',
      type: 'framework',
      url:'tailwind-logo.png',
      description: `Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes to quickly and efficiently style HTML elements.`
    },
    {
      id: uuidv4(),
      name: 'GraphQL',
      type: 'framework',
      url:'graphql-logo.png',
      description: `It is a query language and runtime for APIs`
    },
    {
      id: uuidv4(),
      name: 'Vue.JS',
      type: 'framework',
      url:'vue-logo.png',
      description: `Vue.js is a popular open-source JavaScript framework for building user interfaces and single-page applications. `
    },
    
    {
      id: uuidv4(),
      name: 'VTEX',
      type: 'framework',
      url:'vtex-logo.svg',
      description: `VTEX is a cloud-based e-commerce platform that provides a suite of tools and services to help businesses build and manage their online stores.`
    },
   
    {
      id: uuidv4(),
      name: 'SAP',
      type: 'ERP',
      url:'sap-logo.png',
      description: `SAP (Systems, Applications, and Products) is a multinational software corporation that provides enterprise software to manage business operations and customer relations.`
    },
    {
      id: uuidv4(),
      name: 'MySQL',
      type: 'database',
      url:'mysql-logo.png',
      description: `MySQL is an open-source relational database management system (RDBMS) that allows for the creation, management, and manipulation of databases.`
    },
    {
      id: uuidv4(),
      name: 'SQLServer',
      type: 'database',
      url:'sqlserver-logo.png',
      description: `SQL Server is a relational database management system (RDBMS) developed by Microsoft. It is used to store and retrieve data as requested by other software applications. `
    },
    {
      id: uuidv4(),
      name: 'MongoDB',
      type: 'database',
      url:'mongobd-logo.png',
      description: `MongoDB is a popular open-source NoSQL document-oriented database that uses a flexible JSON-like data model. `
    },
    {
      id: uuidv4(),
      name: 'PostgreSQL',
      type: 'erp',
      url:'postgresql-logo.png',
      description: `PostgreSQL is an advanced open-source relational database management system (RDBMS) that uses and extends the SQL language. It is known for its robustness, extensibility, and compliance with industry standards.`
    },
  ]
  
  
    return (
      <div className='grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3'>
        {data.map((res:any) => {
          return(
            <div key={res.id} className='max-w-sm w-[100%] h-64  bg-gray-900 rounded p-5 flex flex-col justify-between transition ease-in-out duration-300 hover:brightness-75'>
              <Image src={`/assets/images/logos/${res.url}`} alt={res.name} width={50} height={50} />
              <h1 className='text-lg'>{res.name}</h1>
              <p>{res.description}</p>
            </div>
          )
        })}
      </div>
     
    )
 
  
}