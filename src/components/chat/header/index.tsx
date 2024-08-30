'use client';
interface IHeader {
  userInfo?: {
    name?: {
      first?: string;
      midlle?: string;
      last?: string;
    };
    avater?: string;
  };
  buttons?: React.ReactNode
}
export const Header: React.FC<IHeader> = (props) => {
  return (
    <div className={'py-2 px-5 flex flex-row items-center justify-between w-full h-full '}>

      <div className={"gap-3 flex flex-row items-center justify-start w-fit h-full"}>
        <div className="w-[42px] h-full">
          <img
            className="rounded-full bg-yellow-100"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-0">
          <p className={"text-[18px] text-gray-800 font-medium"}>Sourav</p>
          <p className={"-mt-0 text-[13px] text-gray-500"}>Onine</p>
        </div>

      </div>

      <div>{props.buttons}</div>
    </div>
  );
};
