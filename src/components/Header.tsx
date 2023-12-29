"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCommand } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import useControlModal from "@/hook/useControlModal";
import { useState } from "react";
import { ButtonMenu } from "./ButtonMenu";
import { motion } from "framer-motion";
export default function Header() {
  const setModal = useControlModal((state) => state.setValueModal);

  return (
    <motion.header className="px-10 lg:p-0 border-b border-white/20 w-full">
      <div className="mx-auto flex items-center justify-between w-full max-w-[1280px] min-h-[5rem] ">
        <Link href="/">
          <Image
            src="./assets/images/logo-fs-white.svg"
            width={36}
            height={36}
            sizes="10"
            alt={"Felipe Santana"}
          />
        </Link>

        <nav className="max-w-[32rem] w-full  mx-auto hidden lg:flex">
          <ul className="flex justify-between">
            <Link href="/">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                ABOUT
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                CAREER
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                PROJECTS
              </li>
            </Link>
            <Link href="/techs">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                TECHS
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                INSIGHTS
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900">
                CONTACT
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-2 ">
          <ButtonMenu />
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => setModal()}>
            <FiCommand className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
