"use client";
import DemanderTab from "@/components/etude/demander-tab";
import MesTab from "@/components/etude/mes-tab";
import { Icons } from "@/components/icon";
import MainLayoyt from "@/components/layout/main-layout";
import { cn } from "@/lib/utils";
import { useState } from "react";

const page = () => {
  const [demander, setDemander] = useState(false);
  return (
    <MainLayoyt>
      <div className="p-10 max-lg:p-2">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <div className="bg-stone-300 grid grid-cols-2  gap-0 rounded-lg border-[0.5px] border-solid border-neutral-300">
            <div
              className={cn(
                "justify-between  items-center flex gap-2 px-8 py-4 rounded-lg cursor-pointer",
                demander == false ? "active_etude" : ""
              )}
              onClick={() => setDemander(false)}
            >
              <Icons.messageText
                className="w-5 h-5"
                stroke={demander == false ? "white" : "black"}
              />
              <div className=" text-base grow whitespace-nowrap self-start">
                Mes etude
              </div>
            </div>
            <div
              className={cn(
                "justify-between items-center flex gap-2 px-8 py-4 rounded-lg cursor-pointer",
                demander == true ? "active_etude" : ""
              )}
              onClick={() => setDemander(true)}
            >
              <Icons.send
                className="w-5 h-5"
                stroke={demander == true ? "white" : "black"}
              />
              <div className="text-base grow whitespace-nowrap self-start ">
                Demander
              </div>
            </div>
          </div>
        </div>
        <div className={cn(demander == true ? "" : "hidden")}>
          <DemanderTab />
        </div>
        <div className={cn(demander == false ? "" : "hidden")}>
          {" "}
          <MesTab />
        </div>
      </div>
    </MainLayoyt>
  );
};

export default page;
