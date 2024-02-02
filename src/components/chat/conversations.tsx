import { cn } from "@/lib/utils";
import { Icons } from "../icon";
import { Input } from "../ui/input";
import CardChat from "./card-chat";

export default function Conversations() {
  return (
    <div className="max-lg:p-2 h-full">
      <div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
          <div className="bg-stone-300 grid grid-cols-2  gap-0 rounded-lg border-[0.5px] border-solid border-neutral-300">
            <div
              className={cn(
                "justify-between  items-center flex gap-2 px-8 py-4 rounded-lg cursor-pointer active_etude"
              )}
            >
              <Icons.conversations className="w-5 h-5" stroke="white" />
              <div className=" text-base grow whitespace-nowrap self-start">
                Chat
              </div>
            </div>
            <div
              className={cn(
                "justify-between items-center flex gap-2 px-8 py-4 rounded-lg cursor-pointer"
              )}
            >
              <Icons.people className="w-5 h-5" stroke="black" />
              <div className="text-base grow whitespace-nowrap self-start ">
                Groups
              </div>
            </div>
          </div>
        </div>
        <div>
          <Input
            placeholder="Search"
            icon={<Icons.search className="w-5 h-5" stroke="#16222A" />}
          />
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <CardChat show={true} />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
        <CardChat />
      </div>
    </div>
  );
}
