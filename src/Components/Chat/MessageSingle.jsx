import React from "react";
import image from "../../Assets/Images/Lindsey.png";

function MessageContainer({ sender = "you" }) {
    return (
        <div className="p-5 mb-5">
            <div
                className={`flex items-center mb-4 ${
                    sender === "you" ? "justify-end" : "justify-start"
                }`}
            >
                <div className="mr-2 rounded-full overflow-hidden w-5">
                    <img
                        className="w-full h-full object-contain"
                        src={image}
                        alt=""
                    />
                </div>
                <p className="text-[14px] mr-2">Lindsey Stroud</p>
                <p className="text-[11px]">11:12</p>
            </div>
            <div
                className={`w-full flex ${
                    sender === "you" ? "justify-end" : "justify-start"
                }`}
            >
                <p
                    className={`w-2/3 p-5 ${
                        sender === "you"
                            ? "text-black bg-slate-50 border-2 border-current rounded-tl-md rounded-br-md rounded-bl-md"
                            : "bg-sky-600 text-slate-50 rounded-tr-md rounded-br-md rounded-bl-md"
                    } `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nibh mauris cursus mattis molestie. Ligula
                    ullamcorper malesuada proin libero nunc consequat interdum.
                    A lacus vestibulum sed arcu non odio euismod lacinia.
                    Aliquet eget sit amet tellus cras adipiscing enim.
                </p>
            </div>
        </div>
    );
}

export default MessageContainer;
