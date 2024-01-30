import { Icons } from "../icon";

export default function SiteHeader({ onNavItemClick, selectedNavItem }) {
  const handleLinkClick = (item: any) => {
    onNavItemClick(item);
  };
  return (
    <div
      className="bg-neutral-50 px-16 py-5 flex justify-end max-lg:justify-between max-lg:px-5
    fixed top-0 left-0 right-0 z-50
    "
    >
      <div className="hidden items-center gap-5 max-lg:flex">
        <Icons.menu
          className="w-[20px] h-[20px] "
          onClick={() => handleLinkClick(!selectedNavItem)}
        />
        <div className="text-gray-900 text-center text-3xl font-bold  my-auto cursor-pointer">
          LOGO
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-[50px] items-center justify-end">
          <div className="items-stretch bg-neutral-200 self-stretch flex justify-between gap-5 p-4 py-2 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:hidden">
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
                placeholder="Chercher"
              />
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc4dc530319f630adc66edf892467f58b602923af5b895c9d7cf48f41c374db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="flex items-center gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/562d6335d37324d189abd8ccc87c70e17dbde74507ea9bc27ba03996179b0fc5?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
              className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto cursor-pointer"
            />
            <div className="justify-between items-stretch bg-zinc-200 self-stretch flex gap-2 p-3 py-2 rounded-3xl cursor-pointer max-lg:bg-transparent">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
              />
              <span className="justify-center items-center self-center flex gap-1 my-auto max-lg:hidden">
                <div className="text-gray-900 text-center text-xl leading-4 grow whitespace-nowrap my-auto">
                  Rayen
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/537b96d63d1d5b3eac10ef75ec265ca68d843b0b340327933c1d15d142d5e213?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-neutral-50 flex flex-col justify-center items-stretch px-16 py-5 max-md:px-5">
    //   <span className="flex items-center justify-between gap-5 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
    //     <div className="text-gray-900 text-center text-3xl font-bold leading-4 grow whitespace-nowrap my-auto">
    //       LOGO
    //     </div>
    //     <div className="items-stretch bg-neutral-200 self-stretch flex justify-between gap-5 p-4 rounded-3xl max-md:max-w-full max-md:flex-wrap">
    //       <span className="flex items-stretch justify-between gap-2">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/239284c70625a1d4b7367878b95dac6a12b028a43c1e81e9ff3f776d19e7c2ff?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <input type="text" name="" id="" className="text-neutral-500 text-center text-xl font-medium leading-4 self-center grow whitespace-nowrap my-auto bg-transparent outline-none" placeholder="Chercher"/>

    //       </span>
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc4dc530319f630adc66edf892467f58b602923af5b895c9d7cf48f41c374db?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //         className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //       />
    //     </div>
    //     <div className="w-[350px] flex items-center">
    //         <span className="justify-between items-stretch bg-[linear-gradient(68deg,#16222A_0%,#355869_100%)] self-stretch flex gap-2 p-4 rounded-lg">
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b63f7e116142c246f135d3bfc5b55a84a2fbd4789ff37268540b6e5c37ff484?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //             className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //           />
    //           <div className="text-neutral-50 text-center text-xl font-medium leading-4 self-center grow whitespace-nowrap my-auto">
    //             Publier
    //           </div>
    //         </span>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/562d6335d37324d189abd8ccc87c70e17dbde74507ea9bc27ba03996179b0fc5?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //           className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
    //         />
    //         <div className="justify-between items-stretch bg-zinc-200 self-stretch flex gap-2 p-3 rounded-3xl">
    //           <img
    //             loading="lazy"
    //             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a003d5d8deff3e9f6346cec09d7b7812e8df47f30ea9c96540ac2daf06282f4?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //             className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
    //           />
    //           <span className="justify-center items-center self-center flex gap-1 my-auto">
    //             <div className="text-gray-900 text-center text-xl leading-4 grow whitespace-nowrap my-auto">
    //               Rayen
    //             </div>
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/537b96d63d1d5b3eac10ef75ec265ca68d843b0b340327933c1d15d142d5e213?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
    //               className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
    //             />
    //           </span>
    //         </div>
    //     </div>
    //   </span>
    // </div>
  );
}
