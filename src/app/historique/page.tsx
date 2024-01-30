import { Icons } from "@/components/icon";
import MainLayoyt from "@/components/layout/main-layout";

const page = () => {
  return (
    <MainLayoyt>
      <div className="p-10 max-lg:p-2">
        <span className="flex flex-col pb-12 px-5">
          <span className="items-center self-stretch flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <h1 className="text-[20px] font-medium">Historique des videos</h1>
            <span className="bg-[#e0e0e0] rounded-full p-[12px]">
              <Icons.points className="w-[20px] h-[20px] " />
            </span>
          </span>
          <div className="bg-black bg-opacity-10 flex items-stretch gap-2 mt-4 px-3 py-3.5 rounded-md self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <span className="flex items-stretch justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/239284c70625a1d4b7367878b95dac6a12b028a43c1e81e9ff3f776d19e7c2ff?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <input
                type="text"
                name=""
                id=""
                className="text-neutral-500 text-start text-xl font-medium leading-4 self-center grow whitespace-nowrap my-auto bg-transparent outline-none"
                placeholder="Search"
              />
            </span>
          </div>
          <div className="text-gray-900 text-xl font-medium self-stretch w-full mt-7 max-md:max-w-full">
            Recement regardé
          </div>
          <div className="items-stretch bg-gray-200 flex gap-2 mt-4 pl-4 pr-7 py-4 rounded-md self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a12dfc369bf705200b9ba151440b764429d2b1c5ba92ac62044f17ff75e786d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-[0.79] object-contain object-center w-[84px] overflow-hidden shrink-0 max-w-full"
            />
            <span className="items-start flex grow basis-[0%] flex-col self-start max-md:max-w-full">
              <div className="items-stretch flex gap-1 self-start">
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.85] justify-center px-2 py-1 rounded-3xl">
                  SNC
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.75] justify-center px-2 py-1 rounded-3xl">
                  2eme
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[2.7] justify-center px-2 py-1 rounded-3xl">
                  Science
                </span>
              </div>
              <div className="text-black text-opacity-80 text-base self-stretch mt-1 max-md:max-w-full">
                Science 1er cour{" "}
              </div>
              <div className="text-black text-opacity-60 text-xs self-stretch mt-1 max-md:max-w-full">
                Nom du prof · 1.6k vues
              </div>
              <div className="text-neutral-500 text-xs font-light self-stretch mt-1 max-md:max-w-full">
                Porem ipsum dolor sit amet, consectetur adipiscing elit.Porem
                ipsum dolor sit emot
              </div>
            </span>
          </div>
          <div className="items-stretch bg-black bg-opacity-0 flex gap-2 mt-4 pl-4 pr-7 py-4 rounded-md self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0398a19f0eea3c5091efe5c14368a03eeeb303c1466f5142ff7304fa07fef5db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-[0.79] object-contain object-center w-[84px] overflow-hidden shrink-0 max-w-full"
            />
            <span className="items-start flex grow basis-[0%] flex-col self-start max-md:max-w-full">
              <div className="items-stretch flex gap-1 self-start">
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.85] justify-center px-2 py-1 rounded-3xl">
                  SNC
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.75] justify-center px-2 py-1 rounded-3xl">
                  2eme
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[2.8] justify-center px-2 py-1 rounded-3xl">
                  Français
                </span>
              </div>
              <div className="text-black text-opacity-80 text-base self-stretch mt-1 max-md:max-w-full">
                Français 1er cours{" "}
              </div>
              <div className="text-black text-opacity-60 text-xs self-stretch mt-1 max-md:max-w-full">
                Nom du prof · 9.6k vues
              </div>
              <div className="text-neutral-500 text-xs font-light self-stretch mt-1 max-md:max-w-full">
                Porem ipsum dolor sit amet, consectetur adipiscing elit.Porem
                ipsum dolor sit emot
              </div>
            </span>
          </div>
          <div className="items-stretch bg-black bg-opacity-0 flex gap-2 mt-4 pl-4 pr-7 py-4 rounded-md self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-[0.79] object-contain object-center w-[84px] overflow-hidden shrink-0 max-w-full"
            />
            <span className="items-start flex grow basis-[0%] flex-col self-start max-md:max-w-full">
              <div className="items-stretch flex gap-1 self-start">
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.85] justify-center px-2 py-1 rounded-3xl">
                  SNC
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.75] justify-center px-2 py-1 rounded-3xl">
                  2eme
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[2.35] justify-center px-2 py-1 rounded-3xl">
                  Physic
                </span>
              </div>
              <div className="text-black text-opacity-80 text-base self-stretch mt-1 max-md:max-w-full">
                physic 1er cours{" "}
              </div>
              <div className="text-black text-opacity-60 text-xs self-stretch mt-1 max-md:max-w-full">
                Nom du prof · 4.7k vues
              </div>
              <div className="text-neutral-500 text-xs font-light self-stretch mt-1 max-md:max-w-full">
                Porem ipsum dolor sit amet, consectetur adipiscing elit.Porem
                ipsum dolor sit emot
              </div>
            </span>
          </div>
          <div className="text-gray-900 text-xl font-medium self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10">
            Dernier 7jrs
          </div>
          <div className="items-stretch bg-black bg-opacity-0 flex gap-2 mt-4 pl-4 pr-7 py-4 rounded-md self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/910d40e8f2c558afcf1c2ace27fd99da7a438903b0ecc7e5700ca3fda79430dd?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-[0.79] object-contain object-center w-[84px] overflow-hidden shrink-0 max-w-full"
            />
            <span className="items-start flex grow basis-[0%] flex-col self-start max-md:max-w-full">
              <div className="items-stretch flex gap-1 self-start">
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.85] justify-center px-2 py-1 rounded-3xl">
                  SNC
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[1.75] justify-center px-2 py-1 rounded-3xl">
                  2eme
                </span>
                <span className="text-white text-xs whitespace-nowrap items-stretch bg-gray-900 aspect-[2.35] justify-center px-2 py-1 rounded-3xl">
                  Physic
                </span>
              </div>
              <div className="text-black text-opacity-80 text-base self-stretch mt-1 max-md:max-w-full">
                physic 1er cours{" "}
              </div>
              <div className="text-black text-opacity-60 text-xs self-stretch mt-1 max-md:max-w-full">
                Nom du prof · 4.7k vues
              </div>
              <div className="text-neutral-500 text-xs font-light self-stretch mt-1 max-md:max-w-full">
                Porem ipsum dolor sit amet, consectetur adipiscing elit.Porem
                ipsum dolor sit emot
              </div>
            </span>
          </div>
        </span>
      </div>
    </MainLayoyt>
  );
};
export default page;
