import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ content }) {
  return (
    <div className="h-[calc(4rem-0.5rem)] p-2 bg-white border-b border-slate-200 flex items-center">
      <span className="text-gray-400 flex gap-4 flex justify-center items-center">
        <AiOutlineSearch />
        {content}
      </span>
    </div>
  );
}

export default Header;
