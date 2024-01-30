export default function CardMes() {
  return (
    <div className="col-span-1">
      <div className="justify-end items-stretch bg-[#CFCFCF]/20 flex gap-3 p-2 rounded-md">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/161185678c35972e99732675d2117426baccf231bc2cd030970978c029425c43?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
          className="aspect-[0.7] object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
        />
        <div className="items-stretch flex grow basis-[0%] flex-col px-5 self-start">
          <div className="items-stretch flex gap-1 pr-12">
            <div className="text-black text-xs whitespace-nowrap items-stretch bg-black bg-opacity-10 aspect-[2.95] justify-center px-2 py-1 rounded-3xl">
              Examens
            </div>
            <div className="text-black text-xs whitespace-nowrap items-stretch bg-black bg-opacity-10 aspect-[3.25] justify-center px-2 py-1 rounded-3xl">
              Document
            </div>
            <div className="text-black text-xs whitespace-nowrap items-stretch bg-black bg-opacity-10 aspect-[2.15] justify-center px-2 py-1 rounded-3xl">
              Video
            </div>
          </div>
          <div className="text-black text-sm mt-2">Français débutant</div>
          <div className="text-gray-900 text-xs whitespace-nowrap mt-2">
            Prochain seance :{" "}
            <span className="text-gray-900">12/05/2023 12:06PM</span>
          </div>
          <div className="text-gray-900 text-xs mt-2">
            <span className="text-black">Message:</span> Travailler serie 2....{" "}
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c899b2176f4f456f102e4823bbd2e369b691875773d6644d48efad125447eaef?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
          className="aspect-[2.29] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
    </div>
  );
}
