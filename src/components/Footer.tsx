import { SiNextdotjs, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col h-full items-center justify-evenly text-sm mx-auto w-72 lg:flex-row lg:w-full lg:h-20">
      <ul className="w-full flex justify-between lg:gap-8 lg:justify-start">
        <Link
          href="https://www.linkedin.com/in/feelipesantana/"
          className="transition ease-in-out duration-300 hover:text-blue-600"
        >
          {" "}
          <li>Linkedin</li>
        </Link>
        <Link
          href="https://github.com/feelipesantana/"
          className="transition ease-i n-out duration-300 hover:text-gray-600"
        >
          <li>Github</li>
        </Link>
        <Link
          href="https://twitter.com/felipesantanajs/"
          className="transition ease-in-out duration-300 hover:text-blue-300"
        >
          <li>Twitter</li>
        </Link>
      </ul>

      <div className="flex items-center gap-1 lg:w-72">
        <div className="flex items-center justify-center gap-2">
          <p>Build with</p>
          <SiReact width={50} height={50} className="text-cyan-500" />
          <SiNextdotjs width={50} height={50} />
          <SiTailwindcss width={50} height={50} className="text-cyan-500" />
          <SiVercel width={50} height={50} className="text-black-700" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <p>& </p>
          <AiFillHeart width={50} height={50} className="text-red-700" />
        </div>
      </div>
    </footer>
  );
}
