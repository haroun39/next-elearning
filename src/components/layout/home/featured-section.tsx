export default function FeaturedSection() {
  return (
    <div className="max-w-[1150px] my-2">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f234a5d887fbb50432507968abcc599a45981931e538078fe28b4f4f157f2e90?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
            className="aspect-[1.58] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col my-auto px-5 items-start max-md:mt-10">
            <div className="text-black text-3xl font-bold leading-4 self-stretch">
              Featured
            </div>
            <div className="text-zinc-800 text-lg leading-8 self-stretch mt-8">
              Voluptas et rem quo autem fugit voluptate reprehenderit. Ipsum
              ducimus ad sint dignissimos quo et.
            </div>
            <div className="items-stretch flex w-[103px] max-w-full gap-2 mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/051274e228fe779cd7cf8571110df8cf3860df06b8a0676afea927e34b91304f?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-[50%]"
              />
              <span className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                <div className="text-black text-center text-base font-medium leading-4 whitespace-nowrap">
                  Haroun
                </div>
                <div className="text-neutral-500 text-xs leading-4 whitespace-nowrap mt-2">
                  6h Ago
                </div>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
