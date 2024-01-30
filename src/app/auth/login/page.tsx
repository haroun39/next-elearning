const page = () => {
  return (
    <div className=" flex flex-col justify-center items-stretch">
      <div className="overflow-hidden w-full max-md:max-w-full">
        <div className="bg-neutral-100 flex max-md:flex-col max-md:items-stretch max-md:gap-0 h-screen">
          <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0  login_background  ">
            <div className="z-10 flex flex-col self-stretch items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10  ">
              <div className="text-white text-center text-3xl font-bold leading-4 ml-20 self-start max-md:ml-2.5">
                LOGO
              </div>
              <div className="flex-col mix-blend-luminosity overflow-hidden relative flex min-h-[811px] w-full justify-center items-center mt-1 px-16 py-12 max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a4a3c367bf67078260f7c6eb04202be628c4bc5d01279a36e3cce6c5eedd937?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                  className="absolute object-cover object-center inset-0 size-full"
                />
                <div className="relative text-8xl font-black leading-[140px] bg-clip-text mt-28 mb-72 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:my-10">
                  Content de te revoir
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-100 flex grow flex-col items-center w-full px-20 py-11  max-md:max-w-full max-md:px-5">
              <div className="justify-center text-neutral-50 text-center text-xl font-medium leading-4 items-stretch mr-5 p-4 rounded-lg self-end max-md:mr-2.5">
                S’inscrire
              </div>
              <div className="text-black text-2xl font-bold leading-7 mt-28 max-md:max-w-full max-md:mt-10">
                Se connecter
              </div>
              <div className="text-black text-xl leading-7 w-[442px] mt-4 max-md:max-w-full">
                Ravi de vous revoir. Veuillez vous connecter à votre compte.
              </div>
              <div className="text-black text-center text-base font-medium leading-4 mt-10 max-md:max-w-full">
                Nom d’utilisateur ou E-mail
              </div>
              <div className="text-neutral-600 text-center text-base leading-4 items-stretch border bg-black bg-opacity-10 w-[556px] max-w-full justify-center mt-2 py-5 rounded-xl border-solid border-neutral-300 max-md:max-w-full">
                Votre nom d’utulisateur ou e-mail
              </div>
              <div className="text-black text-center text-base font-medium leading-4 mt-8 max-md:max-w-full">
                Mot de passe
              </div>
              <div className="justify-between items-stretch border bg-black bg-opacity-10 flex w-[556px] max-w-full gap-5 mt-2 pl-2.5 pr-20 py-5 rounded-xl border-solid border-neutral-300 max-md:flex-wrap max-md:pr-5">
                <div className="text-neutral-600 text-center text-base leading-4 grow shrink basis-auto">
                  Votre mot de passe
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/62447d26e7e1635a4fed236b178fc61097fd7365711f164dca537758eeff94a7?apiKey=421fa2e50ee64921a37345dc0ecb1f8e&"
                  className="aspect-square object-contain object-center w-4 shrink-0"
                />
              </div>
              <div className="text-slate-600 text-center text-sm leading-4 mr-5 mt-1 self-end max-md:mr-2.5">
                Mot de passe oublié ?
              </div>
              <div className="text-white text-center text-sm font-bold leading-4 justify-center items-center bg-slate-600 w-[556px] max-w-full mt-10 px-16 py-4 rounded-xl max-md:px-5">
                Se connecter
              </div>
              <div className="text-slate-600 text-center text-base leading-4 mt-16 max-md:max-w-full max-md:mt-10">
                Vous n'avez pas de compte ?{" "}
                <span className="font-bold text-slate-600">Créez-en un</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
