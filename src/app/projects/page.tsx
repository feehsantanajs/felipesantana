"use client";
import { dataProjects } from "@/mock/projects";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { usePathname } from "next/navigation";
export default function Projects() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-20 w-full mx-auto">
      {dataProjects.slice(0, pathname === "/" ? 3 : 10).map((res, _index) => {
        return (
          <div
            className="flex items-start justify-between flex-col lg:flex-row"
            key={res.id}
          >
            <div className="flex gap-8 max-w-4xl w-full  flex-col lg:flex-row">
              <Tilt>
                <div className=" rounded-xl">
                  <Image
                    width={300}
                    height={150}
                    src={`/assets/images/projects/${res.image}`}
                    alt="Image project"
                    className="lg:min-w-[20rem] rounded-lg transition ease-in hover:scale-110 cursor-zoom-in"
                  />
                </div>
              </Tilt>
              <div>
                <h3 className="text-xl font-bold">{res.name}</h3>
                <p className="mt-3">{res.description}</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 text-sm mt-4 lg:mt-0 lg:flex-col lg:text-md">
              <Link
                href={res.url}
                className="bg-blue-800 p-2 rounded-lg transition duration-200 hover:brightness-75 text-center"
              >
                Visit Project
              </Link>
              <Link
                href={res.source_code}
                className="flex items-center justify-center gap-2 bg-gray-800 p-2 rounded-lg transition duration-200 hover:brightness-75"
              >
                <BsGithub /> Source-code
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
