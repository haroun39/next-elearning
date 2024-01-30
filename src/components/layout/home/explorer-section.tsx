"use client";
import { Icons } from "@/components/icon";
import CardVedio from "./card-vedio";
import { data } from "@/data/explorer-data";

export default function ExplorerSection() {
  const vedio = data;

  return (
    <div className="my-7">
      <h1 className="text-[20px] font-medium">Explorer</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3">
        {vedio.map((item, index) => (
          <CardVedio
            key={index}
            teacher={item.teacher}
            title={item.title}
            img={item.img}
            views={item.views}
            date={item.date}
            description={item.description}
            avatar={item.avatar}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}
