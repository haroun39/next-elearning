"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icon";

export default function SiteSidBar({ onNavItemClick, selectedNavItem }) {
  const pathname = usePathname();
  const handleLinkClick = (item: any) => {
    onNavItemClick(item);
  };
  return (
    <div
      className={cn(
        "bg-neutral-50 w-[350px] border-none overflow-hidden z-[100] transition-all",
        selectedNavItem ? "w-[305px] fixed top-0 bottom-0" : "max-lg:w-0"
      )}
    >
      <div className="text-gray-900 text-center text-3xl font-bold py-[26px]  my-auto cursor-pointer">
        LOGO
        <span
          className={cn(
            "absolute top-0 right-2 text-4xl p-3 cursor-pointer",
            selectedNavItem ? "" : "hidden"
          )}
          onClick={() => handleLinkClick(!selectedNavItem)}
        >
          x
        </span>
      </div>

      <nav className="flex flex-col">
        <Link
          href="/"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.home className="w-[20px] h-[20px]" />
            Home{" "}
          </span>
        </Link>
        <Link
          href="/etude"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/etude" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.etude className="w-[20px] h-[20px]" />
            Etude{" "}
          </span>
        </Link>
        <Link
          href="/chat"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/chat" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.chat className="w-[20px] h-[20px]" />
            Chat{" "}
          </span>
        </Link>
        <Link
          href="/historique"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/historique" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.historique className="w-[20px] h-[20px]" />
            Historique{" "}
          </span>
        </Link>
        <Link
          href="/"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/aide" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.aide className="w-[20px] h-[20px]" />
            Aide{" "}
          </span>
        </Link>
        <Link
          href="/"
          className={cn(
            "py-[13px] flex justify-center items-center gap-2",
            pathname === "/settings" ? "active" : ""
          )}
        >
          <span className="flex gap-2 w-[100px]">
            <Icons.setting className="w-[20px] h-[20px]" />
            Settings{" "}
          </span>
        </Link>
      </nav>
    </div>
  );
}
