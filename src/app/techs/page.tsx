import { stacksData } from "@/mock/stacks";
import Image from "next/image";
export default function MyTechs() {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 ">
        My Techs
      </h1>
      <div>
        <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3">
          {stacksData.map((res) => {
            return (
              <div
                key={res.id}
                className="max-w-sm w-[100%] h-64  bg-gray-800 rounded p-5 flex flex-col justify-between transition ease-in-out duration-300 hover:brightness-75"
              >
                <Image
                  src={`/assets/images/logos/${res.url}`}
                  alt={res.name}
                  width={50}
                  height={50}
                />
                <h1 className="text-lg">{res.name}</h1>
                <p>{res.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
