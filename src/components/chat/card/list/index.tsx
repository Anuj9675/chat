'use client';

export const CardList = () => {
  return (
    <div
      className={
        'group cursor-pointer hover:text-gray-50 gap-4 rounded-xl  hover:bg-blue-700 flex flex-row items-start justify-between w-full h-[70px] pt-3 px-4'
      }
    >
      <div className="w-[48px] h-full">
        <img
          className="rounded-full bg-white"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
        />
      </div>
      <div className="flex gap-1 flex-col items-start justify-start group-hover:border-none border-b border-gray-100 w-full h-full">
        <div className="flex flex-row items-center justify-between w-full h-fit">
          <p className="text-[15px] text-gray-900 font-medium group-hover:text-white">Sourav</p>
          <p className="text-[12px]  text-gray-600 group-hover:text-white">9:45 AM</p>
        </div>
        <div className={'w-full h-fit flex gap-2 flex-row items-center justify-between'}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="fill-blue-500 group-hover:fill-white"
            >
              <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
            </svg>
          </div>
          <div className={'text-[13px] w-full group-hover:text-white text-gray-600 line-clamp-1'}>
            Which Motivational Poster Was Made For You?
          </div>
          <div
            className={
              'rounded-full flex flex-row items-center justify-center size-[18px] text-[11px] p-2 group-hover:bg-white group-hover:text-blue-700 bg-blue-500 text-white'
            }
          >
            1
          </div>
        </div>
      </div>
    </div>
  );
};
