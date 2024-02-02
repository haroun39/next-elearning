import { Input } from "../ui/input";
import HeaderChat from "./header-chat";

export default function Chat() {
  return (
    <div className="pt-10 max-lg:p-2 ">
      <div className="bg-[#000000]/5 p-5 rounded-lg h-[81vh] flex flex-col justify-between">
        <HeaderChat />
        <div className="h-[65vh] ">
          <div className="my-3 flex justify-end">
            <div className="p-2 px-3 active_etude rounded-3xl">Hi, Mandy</div>
          </div>
          <div className="my-3 flex justify-end">
            <div className="p-2 px-3 active_etude rounded-3xl">
              I’ve tried the app
            </div>
          </div>
          <div className="my-3 flex justify-start">
            <div className="p-2 px-3 bg-[#d3d3d3] rounded-3xl">Really?</div>
          </div>
          <div className="my-3 flex justify-end">
            <div className="p-2 px-3 active_etude rounded-3xl">
              Yeah, It’s really good!
            </div>
          </div>
        </div>
        <div>
          <Input placeholder="Type your message" />
        </div>
      </div>
    </div>
  );
}
