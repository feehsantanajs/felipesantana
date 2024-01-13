import { randomUUID } from "crypto";
import { v4 } from "uuid";
interface DataProjectProps{
  id: string;
  name: string;
  description: string;
  url:string;
  source_code:string;
  image: string;
}
export const dataProjects:DataProjectProps[] = [
  {
    id: v4(),
    name: "Shushi Express",  
    image: "sushi-express.png",
    url: "",
    source_code: "https://github.com/feelipesantana/sushi.express",
    description: `This project on backend I worked with Bun, ElysiaJS, Drizzle ORM, Zod, Resend and React Email. Frontend with React, Vite, Tailwind, Recharts, Framer Motion, Shadcn  `,
  },
  {
    id: v4(),
    name: "Chat real time(App Write)",
    image: "chat-real-time.png",
    url: "",
    source_code: "https://github.com/feelipesantana/react-chat-realtime",
    description: `This project was created with React, TypeScript, Vite, Platform
    AppWrite to backend. The platform AppWrite is very easy with a
    great documentation that facility the things. To style i used the
    wonderful Tailwind ans some libs how date-fns, react-router-dom,
    lucide to icons.`,
  },
  {
    id: v4(),
    name: "MKS Challenge",
    image: "mks-challenge.png",
    url: "https://mks-challenge-eta.vercel.app",
    source_code: "https://github.com/feelipesantana/mks-challenge",
    description: `To this challenge was necessary to create a Api Rest with node.js to show the projects on store. Simulate a e-commerce with cart`,
  },
 
  
  {
    id: v4(),
    name: "Lo-fi Smart",  
    image: "lo-fi-smart.png",
    url: "https://lofi-smart.vercel.app/",
    source_code: "https://github.com/feelipesantana/lofi-smart",
    description: `This project is to listen lo-fi music while you are coding.`,
  },
  {
    id: v4(),
    name: "QrCode Profile",  
    image: "qrcode-profile.png",
    url: "https://qrcode-profile.vercel.app/",
    source_code: "https://github.com/feelipesantana/qrcode-profile",
    description: `This project generates the QR Code with URL, than you can with
    mobile redirect to page by qrcode. Futhermore I used the layout of
    the VSCode. It was make with NextJS 13, TailwindCSS, TypeScript,
    Prisma and PostgreSQL`,
  },
  {
    id: v4(),
    name: "Halogenn Challenge",  
    image: "halogenn.png",
    url: "https://halogenn-challenge.vercel.app",
    source_code: "https://github.com/feelipesantana/halogenn-challenge",
    description: `To this project was necessary to create a API Rest of products using node.js and show a list of projects with layout of the figma`,
  },
  
  
];