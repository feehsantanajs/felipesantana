"use client";
import { datas } from "@/api/experiences";
import { Chrono } from "react-chrono";

export default function Carrer() {
  return (
    <div>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 ">
        {" "}
        My Career
      </h1>
      <div>
        <div className="mt-20 w-full mx-auto flex-col">
          {datas.map((res) => {
            const newDescriptionSplit = res.description.split("-");

            const newDesciption = newDescriptionSplit.map((res, _index) => {
              return (
                <p className="m-1" key={_index}>
                  {res}
                </p>
              );
            });

            return (
              <div key={res.id} className=" flex-col mt-4">
                <h1 className="text-lg font-bold">{res.role}</h1>
                <h3 className="text--base text-gray-400 font-bold">
                  {res.company}
                </h3>
                <span className="text--base text-gray-400 ">{res.date}</span>
                {newDesciption}
              </div>
            );
          })}
        </div>
      </div>

      {/* <Chrono items={datas} mode="VERTICAL" /> */}
    </div>
  );
}
