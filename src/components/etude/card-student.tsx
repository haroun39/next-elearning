import DemanderForm from "../form/demande-form";
import Modal from "../ui/modal";

export default function CardStudent() {
  return (
    <div className="col-span-1">
      <div className="justify-center items-stretch bg-[#CFCFCF]/20 flex w-full grow flex-col mx-auto p-2 rounded-md max-md:mt-6">
        <div className="items-stretch flex justify-between gap-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74db6ca76e5b7604775e39be288a12bfe1156ab052eb8f20447a16c28aa36d93?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
            className="aspect-square object-contain object-center w-[106px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
            <div className="justify-between items-center flex w-full gap-5 pr-4">
              <div className="justify-center items-stretch flex gap-1 my-auto px-0.5">
                <div className="text-black text-sm grow whitespace-nowrap">
                  Dr.Fred
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/332f22067bf7e472695187149c5c34f014eaf54aa81cdaadbbc1b2e625c09725?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                  className="aspect-square object-contain object-center w-3 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <div className="text-stone-500 text-xs self-center grow whitespace-nowrap my-auto">
                  4.9
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a0a851810b0f73ac245438badf1fa36e0191ad64d397b7ebdd520bdd351e1dc?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="text-stone-500 text-xs mt-1">Speciality</div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="justify-between items-stretch bg-stone-300 flex gap-1 px-3.5 py-2 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d27d06f7396c3199b16f9e28a73e68d23f8773c7a170aa9886680fa8370a1e1?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs grow whitespace-nowrap self-start">
                  Message
                </div>
              </div>
              <Modal
                title="Demander"
                button={
                  <div className="justify-between items-stretch bg-stone-300 flex gap-1 px-2.5 py-2 rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e1a89c59dc442fdb7a06355b199ccdfe6b12a4c63eece2a1d44fd5a2149a5d?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-black text-xs grow whitespace-nowrap self-start">
                      Demander
                    </div>
                  </div>
                }
              >
                <DemanderForm />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
