import React from "react";

function Card({ title, date, children }) {
  return (
    <div className="shadow-lg w-full flex-1 rounded bg-white">
      <div className="flex justify-between items-center border-slate-200 border-b-2 p-4">
        <p className="text-md text-black">{title}</p>
        <p className="text-sm text-gray-500">
          Show:<span className="text-sky-400 pl-1">{date}</span>{" "}
        </p>
      </div>
      <div className="p-4 flex items-center justify-center">{children}</div>
    </div>
  );
}

export default Card;
