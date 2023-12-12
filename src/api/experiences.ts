import { v4 as uuidv4 } from "uuid";

interface DatasCareerProps {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}
export const datas:DatasCareerProps[] = [
  {
    id: uuidv4(),
    role: "Frontend Engineer Mid-Level",
    company: "Spott",
    date: `Feb 2023 - Nov 2023 | 9 mos`,
    description: `
    - I worked on code maintenance to solve bugs and implement improvements to the company's web system and mobile application. Both are developed in React/React Native with Typescript and the use of styled components in styling. I also worked with receiving data via Websocket.
    - Worked on developing the new layout of the Web system with the application of Next.js 13 as the main library and the use of TailwindCSS in the styling.
    - Code versioning with git, using github for the repositories. Projects within the Scrum methodology.
    `,
    skills: [
      "HTML",
      "CSS (Styled-Components)",
      "Javascript",
      "Typescript",
      "ReactJS",
      "React Native",
      "Next.JS 13",
      "TailwindCSS",
      "OAuth",
      "Web Socket",
      "Git/GitFlow",
      "Scrum",
    ],
  },
  {
    id: uuidv4(),
    role: "Frontend Engineer",
    company: "Codeby",
    date: `Jul 2022 - Feb 2023 | 8 mos`,
    description: `
    - Acting in implementations and deployments of new features, specialized support on the Frontend for ecommerce stores, use of modern solutions such as VTEX CMS, VTEX IO, Shopify and especially with LINX Integration
    - Creation of custom Landing Pages and institutional websites.
    - Web Services Integrations, web, Swippe.js, Glide.js.
    `,
    skills: [
      "HTML",
      "CSS (SCSS)",
      "Javascript",
      "ReactJS",
      "Typescript",
      "Node.JS",
      "GraphQL",
      "Google Tag Manager",
      "Vtex IO",
      "Vtex CMS",
      "Shopify (langfy)",
      "Gitlab/Github",
      "Linx Integration",
    ],
  },
  {
    id: uuidv4(),
    role: "Frontend Engineer Jr",
    company: "Octoshop",
    date: `Apr 2022 - Jul 2022 | 4 mos`,
    description: `
    - Developed new frontend applications for ecommerce Octoshop and bug fixes. 
    - Developed Analysis system on the Seller's account balance (Frontend). 
    - Developed Customer product evaluation system (Frontend). 
    - New home page of Octoshop.(Frontend). 
    - Checkout Octoshop(Frontend).`,
    skills: ["HTML", "CSS", "Javascript", "PHP", "Magento", "Git Flow"],
  },
  {
    id: uuidv4(),
    role: "Full-Stack Engineer",
    company: "Habit'Art",
    date: `Mai 2021 - Jan 2022 | 9 mos`,
    description: `
    - Development and Support of the Habit'Art project. The system was an ecommerce for sales of rustic furniture.
    - In the construction of ecommerce I worked with HTML, CSS, JavaScript, PHP and MySQL technologies.`,
    skills: ["HTML", "CSS", "Javascript", "PHP", "Magento", "Git Flow"],
  },
  {
    id: uuidv4(),
    role: "Programming Intern",
    company: "ServiceOne",
    date: `Jul 2013 - Dec 2013 | 6 mos`,
    description: `
    - Development of Addons to SAP Business One using C# 
    - Migration of Addons written in VBA to C# 
    - Development of reports in Crystal Reports using complex SQL requests. `,
    skills: ["C#", "SAP", "SQLServer", "Crystal Reports"],
  },
  {
    id: uuidv4(),
    role: "Programming Intern",
    company: "K2Media",
    date: `Feb 2013 - Jun 2013 | 5 mos`,
    description: " I worked on the development and creation of institutional websites for companies like Embraeer.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL"],
  },
];