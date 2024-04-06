import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="z-[999] bg-white fixed top-0 left-0 shadow-md w-full py-4 px-[15px] lg:px-[50px] flex justify-between items-center">
      <div className="flex flex-wrap flex-col">
        <span className="font-bold text-[20px] mb-0 pb-0">Kapinga Agency</span>
      </div>
      <div className="flex items-center">
        <i className="material-symbols-outlined p-2 bg-gray-50 rounded-full">
          message
        </i>
        <i className="material-symbols-outlined p-2 bg-gray-50 rounded-full">
          dark_mode
        </i>
      </div>
    </div>
  );
};

export default Header;
