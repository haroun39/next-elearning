import Chat from "@/components/chat/chat";
import Conversations from "@/components/chat/conversations";
import MainLayoyt from "@/components/layout/main-layout";

const page = () => {
  return (
    <MainLayoyt>
      <div className="p-10 max-lg:p-2">
        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  h-[85vh] overflow-y-hidden">
          <div className="overflow-y-hidden">
            <Conversations />
          </div>
          <div className="block max-lg:hidden">
            <Chat />
          </div>
        </div>
      </div>
    </MainLayoyt>
  );
};
export default page;
