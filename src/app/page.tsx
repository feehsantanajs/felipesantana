/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import useControlModal from "@/hook/useControlModal";
import Image from "next/image";
import { RelevantStack } from "@/components/RelevantStack";
import { motion } from "framer-motion";
import About from "./about/page";
import Link from "next/link";
import { BsBriefcase, BsBriefcaseFill, BsInfoSquareFill } from "react-icons/bs";
import { RelevantPosts } from "@/components/RelevantPosts";
import { RelevantExperiences } from "@/components/RelevantExperences";
import Projects from "./projects/page";
import useDownloader from "react-use-downloader";
export default function App() {
  const { percentage, download, cancel, error, isInProgress } = useDownloader();

  const fileUrlEN = "/files/cv-en.pdf";
  const fileUrlPT = "/files/cv-pt.pdf";
  const filenameEN = "Felipe Santana - Resume - 2024.pdf";
  const filenamePT = "Felipe Santana - Resume - 2024.pdf";
  return (
    <div className="w-full flex flex-col lg:justify-center ">
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className="">
          <Image
            src="https://github.com/feelipesantana.png"
            width={150}
            height={100}
            className="rounded-lg "
            alt="My Image"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-extrabold text-transparent text-lg  bg-clip-text text-white lg:text-2xl">
              Felipe Santana de Jesus
            </h1>

            <p className="text-sm lg:text-base mt-2">
              Software Engineer | Focus everyday improving my skills
            </p>
            <p className="text-sm font-itim lg:text-base text-slate-500 mt-4">
              " Knowing that a life breathed easier just because you existed "
            </p>
          </div>
          <div className="flex gap-2 flex-wrap lg:flex-nowrap">
            <RelevantStack title="ReactJS" d={0.2} x1={10} />
            <RelevantStack title="Node.js" d={0.6} x1={20} />
            <RelevantStack title="Next.js" d={1} x1={30} />
            <RelevantStack title="TypeScript" d={1.4} x1={40} />
            <RelevantStack title="JavaScript" d={1.8} x1={50} />
            <RelevantStack title="Tailwind" d={2.2} x1={60} />
          </div>
        </div>
      </motion.div>

      <About />
      <div className="flex gap-4 flex-col lg:flex-row">
        <motion.div
          className="border border-white/20 rounded-lg mt-10 p-8 lg:w-[50%]"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-xl text-white flex items-center gap-2 ">
              <BsBriefcaseFill />
              Experiences
            </h2>

            <Link
              href="https://www.linkedin.com/in/feelipesantana/"
              className="text-sm text-blue-700 font-semibold"
            >
              Hire me
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <RelevantExperiences
              company="Novadata"
              position="Mid-Level Full Stack Engineer"
              image="novadata.jpeg"
              duration="Contract - Jan 2024 - May 2024 • 4 mos"
            />
            <RelevantExperiences
              company="Spott"
              position="Mid-Level Frontend Engineer"
              image="spott.jpeg"
              duration="Feb 2023 - Nov 2023 • 9 mos"
            />
            <RelevantExperiences
              company="Codeby"
              position="Junior Frontend Engineer"
              image="codeby.jpeg"
              duration="Jul 2022 - Feb 2023 • 8 mos"
            />
            <RelevantExperiences
              company="Octoshop"
              position="Junior Frontend Engineer"
              image="octoshop.jpeg"
              duration="Apr 2022 - Jul 2022 • 4 mos"
            />
            <RelevantExperiences
              company="Habit'Art"
              position="Full Stack Engineer"
              image="habttart.jpeg"
              duration="May 2021 - Jan 2022 • 9 mos"
            />
            <RelevantExperiences
              company="Service One"
              position="Trainee"
              image="habttart.jpeg"
              duration="Jul 2013 - Dec 2013 • 6 mos"
            />
            <RelevantExperiences
              company="K2Media"
              position="Trainee"
              image="k2media.jpeg"
              duration="Feb 2013 - Jun 2013 • 5 mos"
            />

          </div>
          <div className="mt-16 flex justify-between gap-4 ">
            <button
              onClick={() => download(fileUrlEN, filenameEN)}
              className="bg-blue-700 px-4 py-2 rounded-lg transition ease-in duration-200 hover:brightness-75"
            >
              Download CV in English
            </button>
            <button
              onClick={() => download(fileUrlPT, filenamePT)}
              className="bg-blue-700 px-4 py-2 rounded-lg transition ease-in duration-200 hover:brightness-75"
            >
              Baixar CV em Português
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border border-white/20 rounded-lg mt-10 p-8 lg:w-[50%]"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <h2 className="font-extrabold text-xl text-white flex items-center gap-2 ">
            <BsInfoSquareFill />
            Latest Posts
          </h2>

          <div className="mt-10 flex flex-col gap-12">
            <RelevantPosts
              date="01/02/2024"
              image="cob.jpeg"
              title="Brazilian Olympic Committee "
              description={`This begin of year I got started to work at Brazilian Olympic Committee project.
               I'm so happy  for the opportunity of get a great project. On this project I'm working how Full stack, but the great focus is on Frontend. 
               Besides working with React, Next, Tailwind, GraphQL and Node, I'm getting experience with Strapi CMS.`}
            />
            <RelevantPosts
              date="05/01/2024"
              image="python.svg"
              title="2024 - Year of change"
              description={`This year besides to continue improve my knowledge on the new techs about javascript, how Deno, Next.js 14 and etc, I also began to look more to AI and machine learning. Then I started my studies with python.`}
            />
            <RelevantPosts
              date="20/10/2023"
              image="springboot.png"
              title="I'm Focus on Studying Spring Boot"
              description="A 3 month ago I began studying Spring Boot to increase my knowledge on this tech and increase my knowledge on Java. My Focus is work with backend too."
            />

          </div>
        </motion.div>
      </div>

      <motion.div
        className="border border-white/20 rounded-lg mt-10 p-8 "
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold text-xl text-white flex items-center gap-2 ">
            <FaProjectDiagram />
            My Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-blue-700 font-semibold"
          >
            See more
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <Projects />
        </div>
      </motion.div>
    </div>
  );
}
