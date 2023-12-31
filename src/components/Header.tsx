"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCommand } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import useControlModal from "@/hook/useControlModal";
import { useState } from "react";
import { ButtonMenu } from "./ButtonMenu";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HeaderLink } from "./HeaderLink";
export default function Header() {
  const setModal = useControlModal((state) => state.setValueModal);
  const pathname = usePathname();
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
            <HeaderLink name="HOME" path="/" />
            <HeaderLink name="ABOUT" path="/about" />
            {/* <Link href="/career">
              <li className={`${pathname === '/' && '' }cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900`}>
                CAREER
              </li>
            </Link> */}
            <HeaderLink name="PROJECTS" path="/projects" />
            <HeaderLink name="STACKS" path="/stacks" />
            <HeaderLink name="INSIGHTS" path="/insights" />
            <HeaderLink name="CONTACT" path="/contact" />
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
