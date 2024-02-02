import { cn } from "@/lib/utils";
import { Icons } from "../icon";

export default function HeaderChat() {
  return (
    <div
      className={cn(
        "w-full   flex justify-between  rounded-xl cursor-pointer items-center"
      )}
    >
      <div className="flex gap-3 items-center">
        <img src="assets/user.png" alt="" />
        <div>
          <h1 className="text-base font-bold">Dr.Name</h1>
          <p className={cn(" text-sm")}>En ligne</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <Icons.search className="w-5 h-5" stroke="black" />
          <div className="p-2 bg-[#d3d3d3] rounded-full">
            <Icons.more className="w-5 h-5" stroke="#16222A" />
          </div>
        </div>
      </div>
    </div>
  );
}
