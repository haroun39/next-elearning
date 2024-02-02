import { cn } from "@/lib/utils";

export default function CardChat({ show = false }) {
  return (
    <div
      className={cn(
        "w-full   flex justify-between p-5 rounded-xl cursor-pointer",
        show ? "active_etude" : ""
      )}
    >
      <div className="flex gap-3 items-center">
        <img src="assets/user.png" alt="" />
        <div>
          <h1 className="text-base font-bold">Dr.Name</h1>
          <p
            className={cn(
              " text-sm",
              show ? "text-[#D5D5D5]" : "text-[#646464]"
            )}
          >
            Yeah, it’s really good !
          </p>
        </div>
      </div>
      <div>
        <span
          className={cn(" text-sm", show ? "text-[#D5D5D5]" : "text-[#646464]")}
        >
          Jeu 15:32
        </span>
      </div>
    </div>
  );
}
