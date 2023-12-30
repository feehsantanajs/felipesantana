import useControlModal from "@/hook/useControlModal";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TiWeatherSnow } from "react-icons/ti";

export function Modal() {
  const valueModal = useControlModal((state) => state.valueModal);
  const setModal = useControlModal((state) => state.setValueModal);
  if (valueModal) {
    return (
      <div
        className="bg-dark-black-1 w-full h-full fixed top-0 left-0 z-10 flex items-center justify-center"
        onClick={() => {
          setModal();
        }}
      >
        <motion.div
          className="fixed bg-gray-900 backdrop-blur-md bg-white/10 border border-white/10 max-w-[36rem] max-h-[26rem] w-full rounded-lg overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ul>
            <Link href="/" className="">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-white/20 hover:text-white ">
                <AiOutlineHome /> Home
              </li>
            </Link>
            <Link href="/" className="">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-white/20 hover:text-white">
                <AiOutlineMail /> Send Email
              </li>
            </Link>
            <li className="p-2">Go to</li>
            <Link href="/about" className="">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-white/20 hover:text-white">
                <AiOutlineUser /> About
              </li>
            </Link>
            <Link href="/projects" className="">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-white/20 hover:text-white">
                <BsLightningCharge /> Projects
              </li>
            </Link>
            <Link href="/stacks" className="">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-white/20 hover:text-white">
                <TiWeatherSnow /> Stacks
              </li>
            </Link>

            <Link href="https://github.com/feelipesantana/" target="_blank">
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-black hover:text-white">
                <AiFillGithub /> Github
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/feelipesantana/"
              target="_blank"
            >
              <li className="flex items-center p-2 gap-2 text-lg transition ease-in-out duration-300 text-gray-400 hover:bg-dark-blue-500 hover:text-white">
                <AiFillLinkedin /> Linkedin
              </li>
            </Link>
          </ul>
        </motion.div>
      </div>
    );
  } else {
    return <></>;
  }
}
