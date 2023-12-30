import { stacksData } from "@/mock/stacks";
import Image from "next/image";
import Link from "next/link";
export default function Stacks() {
  return (
    <div className="w-full">
      <h1 className="font-bold  text-4xl ">Stack and uses</h1>
      <p className="text-lg w-[80%]">
        Explore the technologies and tools that power my development journey. I
        carefully choose and leverage these tools to create robust, efficient,
        and user-centric solutions.
      </p>

      <div className="mt-10">
        <h1 className="font-bold  text-2xl text-white">Frontend</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "frontend") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>

        <h1 className="font-bold  text-2xl text-white mt-10">Backend</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "backend") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>

        <h1 className="font-bold  text-2xl text-white mt-10">Databases</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "database") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>

        <h1 className="font-bold  text-2xl text-white mt-10">Testing</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "testing") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>
        <h1 className="font-bold  text-2xl text-white mt-10">Apps</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "apps") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>
        <h1 className="font-bold  text-2xl text-white mt-10">
          Version Control
        </h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "version-control") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>
        <h1 className="font-bold  text-2xl text-white mt-10">
          Infrastructure{" "}
        </h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "infrastructure") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>

        <h1 className="font-bold  text-2xl text-white mt-10">Platform</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "platform") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>

        <h1 className="font-bold  text-2xl text-white mt-10">ERP</h1>
        <li className="grid grid-cols-2 gap-5 mt-2 lg:grid-cols-4">
          {stacksData.map((res) => {
            if (res.type === "erp") {
              return (
                <Link
                  key={res.id}
                  className="bg-gradient-to-br from-slate-600/10 to-slate-800  flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={res.url}
                >
                  <div className="w-10 h-10 p-2 flex items-center justify-center rounded-lg relative overflow-hidden ">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="blur inset-0 opacity-90 absolute w-full z-0"
                    />
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={`/assets/images/stacks/${res.img}`}
                      className="inset-1 blur-0 opacity-100 z-1"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{res.name}</span>
                </Link>
              );
            }
          })}
        </li>
      </div>
    </div>
  );
}
