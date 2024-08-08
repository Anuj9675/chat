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
  buttons?:React.ReactNode
}
export const Header:React.FC<IHeader> = (props) => {
  return (
    <div className={'flex flex-row items-center justify-between w-full h-[48px] p-4'}>
      <div className={"w-fit h-full"}>
        <div>
        <p></p>
        </div>
       
      </div>
      <div>{props.buttons}</div>
    </div>
  );
};
