'use client';
import { Header } from "../../../components/chat/header"
import { ChatBox } from "../../chatbox";
export const Main = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full bg-white overflow-hidden">
      <div className="bg-white w-full border-b border-gray-200/70 h-[60px]">
        <Header />
      </div>
      <div className="bg-white w-full h-full scroll-bar overflow-y-auto">
      </div>
      <div className="w-full h-fit bg-white">
      <ChatBox/>
      </div>
    </div>
  );
};
