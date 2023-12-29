import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

export function RelevantProject() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-start justify-between ">
        <div className="flex gap-8 max-w-4xl w-full">
          <Tilt>
            <div
              className="relative rounded-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                width={1000}
                height={1000}
                src={`/assets/images/projects/chat-real-time.png`}
                alt="Image project"
                className="min-w-[20rem] rounded-lg transition ease-in hover:scale-110 cursor-zoom-in

        "
              />
            </div>
          </Tilt>
          <div>
            <h3 className="text-xl font-bold">Chat real time (AppWrite)</h3>
            <p className="mt-3">
              This project was created with React, TypeScript, Vite, Platform
              AppWrite to backend. The platform AppWrite is very easy with a
              great documentation that facility the things. To style i used the
              wonderful Tailwind ans some libs how date-fns, react-router-dom,
              lucide to icons.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-blue-800 p-2 rounded-lg transition duration-200 hover:brightness-75">
            Visit Project
          </button>
          <Link
            href="https://github.com/feelipesantana/react-chat-realtime"
            className="flex items-center justify-center gap-2 bg-gray-800 p-2 rounded-lg transition duration-200 hover:brightness-75"
          >
            <BsGithub /> Source-code
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-between flex-row-reverse">
        <div className="flex gap-8 max-w-4xl w-full flex-row-reverse">
          <Tilt>
            <div className="relative rounded-xl">
              <Image
                width={1000}
                height={1000}
                src={`/assets/images/projects/qrcode-profile.png`}
                alt="Image project"
                className="min-w-[20rem] rounded-lg transition ease-in hover:scale-110 cursor-zoom-in

        "
              />
            </div>
          </Tilt>
          <div className="text-right">
            <h3 className="text-xl font-bold">QrCode Profile (AppWrite)</h3>
            <p className="mt-3">
              This project generates the QR Code with URL, than you can with
              mobile redirect to page by qrcode. Futhermore I used the layout of
              the VSCode. It was make with NextJS 13, TailwindCSS, TypeScript,
              Prisma and PostgreSQL
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="https://qrcode-profile.vercel.app/"
            className="bg-blue-800 p-2 rounded-lg transition duration-200 hover:brightness-75"
          >
            Visit Project
          </Link>
          <Link
            href="https://github.com/feelipesantana/qrcode-profile"
            className="flex items-center justify-center gap-2 bg-gray-800 p-2 rounded-lg transition duration-200 hover:brightness-75"
          >
            <BsGithub /> Source-code
          </Link>
        </div>
      </div>
    </div>
  );
}
