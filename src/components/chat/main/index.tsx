'use client';
import {Header} from "../../../components/chat/header"
export const Main = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full bg-white">
      <div className="bg-white w-full border-b border-gray-200/70 h-[50px]">
        <Header/>
      </div>
      <div className="w-full h-[70%] scroll-bar overflow-y-auto">
</div>
      <div className="w-full h-auto bg-white p-2">
hello
      </div>
    </div>
  );
};
