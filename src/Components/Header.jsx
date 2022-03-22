import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header({ content }) {
  return (
    <div className="h-[calc(4rem-0.5rem)] py-2 px-8 bg-white border-b border-slate-200 flex items-center justify-between">
      <span className="text-gray-400 flex gap-4 flex justify-center items-center">
        <AiOutlineSearch />
        {content}
      </span>
      <div className="text-gray-400 text-lg relative">
        <IoMdNotificationsOutline />
        <span className="block h-2 w-2 rounded-full bg-red-300 absolute top-0 right-0" />
      </div>
    </div>
  );
}

export default Header;
