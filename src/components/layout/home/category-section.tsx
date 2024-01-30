"use client";
import { data } from "@/data/category-data";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategorySection() {
  const pathname = usePathname();
  const categories = data;
  return (
    <Splide
      className="splide-categories"
      options={{
        rewind: true,
        pagination: false, // Disable pagination
        arrows: false,
      }}
      aria-label="React Splide Example"
    >
      {
        // @ts-ignore
        categories.map((item, i) => (
          <SplideSlide>
            <Link href="/">
              <div
                className={cn(
                  " rounded-[6px]  m-2 p-2 text-center",
                  pathname == item ? "active_category" : "bg-[#E1E1E1]"
                )}
              >
                <span className="capitalize text-center">{item}</span>
              </div>
            </Link>
          </SplideSlide>
        ))
      }
    </Splide>
  );
}
