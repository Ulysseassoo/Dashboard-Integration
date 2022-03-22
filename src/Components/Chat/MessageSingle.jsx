import React from "react";
import image from "../../Assets/Images/Lindsey.png";

function MessageContainer({ message, name, date }) {
  return (
    <div className="p-5 mb-5">
      <div
        className={`flex items-center mb-4 ${
          name === "You" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="mr-2 rounded-full overflow-hidden w-5">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
        <p className="text-[14px] mr-2">{name}</p>
        <p className="text-[11px]">{date}</p>
      </div>
      <div
        className={`w-full flex ${
          name === "You" ? "justify-end" : "justify-start"
        }`}
      >
        <p
          className={`w-[85%] p-5 ${
            name === "You"
              ? "text-black bg-white border-2 border-gray-200 rounded-tl-md rounded-br-md rounded-bl-md"
              : "bg-sky-500 text-slate-50 rounded-tr-md rounded-br-md rounded-bl-md"
          } `}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default MessageContainer;
