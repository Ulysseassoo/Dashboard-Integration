import React from "react";
import CompleteHeader from "../Components/CompleteHeader";
import UsersCard from "../Components/Chat/UsersCard";
import MessagesContainer from "../Components/Chat/MessagesContainer";

function Chat() {
  return (
    <div className="flex h-screen">
      <CompleteHeader searchContent="Global Search">
        <div className="flex justify-between">
          <div className="w-[400px]">
            <UsersCard />
          </div>
          <div className="w-[calc(100%-450px)] h-[calc(100vh-(7.5rem))] rounded overflow-hidden">
            <MessagesContainer />
          </div>
        </div>
      </CompleteHeader>
    </div>
  );
}

export default Chat;
