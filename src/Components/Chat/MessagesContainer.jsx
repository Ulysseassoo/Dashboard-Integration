/* eslint-disable react/self-closing-comp */
import React from "react";
import MessageSingle from "./MessageSingle";

const messages = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio euismod lacinia. Aliquet eget sit amet tellus cras adipiscing enim.",
    name: "Lindsey Stroud",
    date: "11:12",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consecteturg.",
    name: "You",
    date: "11:20",
  },
  {
    message: "Your idea for this application is nice!",
    name: "Lindsey Stroud",
    date: "11:20",
  },
];

function MessagesContainer() {
  return (
    <div className="h-[100%]">
      <div className="h-[50px] flex justify-between bg-white px-5 border-b-2 border-b-neutral-200">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full overflow-hidden w-[25px] h[25px] mr-[10px]">
            <img src="../../../src/Assets/Images/Lindsey.png" alt="Lindsey" />
          </div>
          <p>Lindsey Stroud</p>
          <div className="w-[7px] h-[7px] bg-green-400 rounded-full ml-2"></div>
        </div>
        <div className="flex items-center">
          <img src="../../../src/Assets/Images/menuDots.png" alt="options" />
        </div>
      </div>
      <div
        className="h-[calc(100%-100px)] bg-white overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map(({ message, name, date }) => {
          return <MessageSingle message={message} name={name} date={date} />;
        })}
      </div>
      <div className="h-[50px] bg-white flex justify-between items-center border-t-2">
        <div className="w-[85%] h-[100%]">
          <input
            type="text"
            placeholder="Type a message..."
            className="h-full w-full p-5 text-xs"
          />
        </div>
        <div className="w-[2px] bg-gray-200 h-[90%]"></div>
        <div className="flex justify-center items-center w-[14%]">
          <div className="w-full flex items-center justify-center">
            <img src="../../../src/Assets/Images/attached.png" alt="" />
          </div>
          <div className="w-full flex items-center justify-center">
            <img src="../../../src/Assets/Images/smiley.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesContainer;
