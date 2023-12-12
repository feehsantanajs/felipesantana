"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCommand } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import { motion } from "framer-motion";
import useControlModal from "@/hook/useControlModal";
import { useState } from "react";

export default function Header() {
  const setModal = useControlModal((state) => state.setValueModal);

  return (
    <>
      <nav className="px-10 lg:p-0">
        <div className="mx-auto flex items-center justify-between w-full max-w-[1280px] min-h-[5rem] ">
          <div className="w-8 h-8">
            <Link href="/">
              <Image
                src="./assets/images/logo-fs-white.svg"
                width={100}
                height={100}
                sizes="10"
                alt={"Felipe Santana"}
              />
            </Link>
          </div>
          <div className="max-w-[32rem] w-full  mx-auto hidden lg:flex">
            <ul className="flex justify-between">
              <Link href="/about">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  ABOUT
                </li>
              </Link>
              <Link href="/career">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  CAREER
                </li>
              </Link>
              <Link href="/projects">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  PROJECTS
                </li>
              </Link>
              <Link href="/techs">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  TECHS
                </li>
              </Link>
              <Link href="/insights">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  INSIGHTS
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setModal()}
            >
              <FiCommand className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>
    </>
  );
}
