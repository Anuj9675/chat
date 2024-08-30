'use client';

import React, { forwardRef, Ref } from 'react';

type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Search = forwardRef((props: SearchProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="relative w-full h-fit flex flex-row items-center justify-between">
      <input
        type="text"
        placeholder="Search"
        className="pl-[36px] placeholder:text-[16px] text-[16px]  p-1 outline-none bg-gray-200 w-full h-[28px] rounded-md"
        ref={ref} 
        {...props}
      />
      <div className="absolute pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-[20px] text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
});

Search.displayName = 'Search';
