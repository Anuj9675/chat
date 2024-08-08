'use client';
import { Main } from '@/src/components/chat/main';
import { LeftBar } from '@/src/components/chat/sidebar/left';
import { RightBar } from '@/src/components/chat/sidebar/right';

interface IChat {
  left: {};
  main: {};
  right: {};
}
export const Chat = () => {
  return (
    <div className="bg-white flex flex-row items-start justify-center w-full h-full">
      <div className="w-[460px] h-full ">
        <LeftBar />
      </div>
      <div className=" w-full h-full">
        <Main />
      </div>
      {/* <div className="w-2/6 h-full ">
        <RightBar />
      </div> */}
    </div>
  );
};
