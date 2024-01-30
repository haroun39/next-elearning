"use client";
import { data } from "@/data/professeurs-data";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
export default function SuggestionSection() {
  const categories = data;
  return (
    <div className="my-7">
      <h1 className="text-[20px] font-medium">Suggestions des Professeurs</h1>
      <div className="mt-3">
        <Splide
          className="splide-professeurs"
          options={{
            rewind: true,
            pagination: false, // Disable pagination
            arrows: false,
            perPage: 4,
          }}
          aria-label="React Splide Example"
        >
          {
            // @ts-ignore
            categories.map((item, i) => (
              <SplideSlide>
                <span className="items-center flex max-w-[106px] flex-col">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cb813f4867344f93e1b31299ccfde20f684171e0f00a09e1cb4e3a5569e1cce?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <span className="justify-center items-stretch self-stretch flex gap-1 mt-1 px-5">
                    <div className="text-black text-sm grow whitespace-nowrap">
                      Dr.Lana
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47ad250badaf9e2c6560a28147adcf6ac7ad711ea605afbb7c8e1867a28dc5ca?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                      className="aspect-square object-contain object-center w-3 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-500 text-xs self-center grow whitespace-nowrap my-auto">
                      4.9
                    </div>
                  </span>
                  <div className="text-neutral-500 text-xs self-center whitespace-nowrap mt-1">
                    Speciality
                  </div>
                  <span className="text-black text-xs whitespace-nowrap justify-center items-stretch self-stretch bg-neutral-200 mt-1 px-5 py-2.5 rounded-md">
                    approche
                  </span>
                </span>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </div>
  );
}
