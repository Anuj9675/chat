'use client';
import { useState } from 'react';
import { Search } from '../../search';
import { useRecoilState } from 'recoil';
import { CardList } from '../../../../components/chat/card/list';
import { Recoil } from '@/src/recoil';

export const LeftBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useRecoilState(Recoil.left.ASearch);
  const itemsArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="select-none bg-gray-50 w-full h-full overflow-hidden border-r border-gray-200/70">
      <div className="w-full h-fit">
        <div className="transition-all ease-in-out flex items-center justify-between py-4 pl-4 pr-3 w-full border-b border-gray-200/70 h-[60px]">
          {open ? (
            <Search onChange={(e) => setText(e.currentTarget.value)} value={text} />
          ) : (
            <p className="text-[23px] text-gray-800 font-semibold">Chats</p>
          )}
          <div
            onClick={() => {
              setText('');
              setOpen(!open);
            }}
            className="px-2 cursor-pointer"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full scroll-bar pr-1 pl-2 pt-2 pb-20 overflow-y-auto">
        {itemsArray.map((value, index) => (
          <CardList key={index} />
        ))}
      </div>
    
    </div>
  );
};
