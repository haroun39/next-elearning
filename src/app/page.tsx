import HomePage from "@/components/layout/home/home-page";
import MainLayoyt from "@/components/layout/main-layout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayoyt>
      <div className="p-10 max-lg:p-2">
        <HomePage />
      </div>
    </MainLayoyt>
  );
}
