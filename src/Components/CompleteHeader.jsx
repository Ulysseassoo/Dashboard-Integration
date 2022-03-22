import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function CompleteHeader({ searchContent, children }) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-[calc(100%-256px)] overflow-hidden">
        <Header content={searchContent} />
        <div className="h-[calc(100vh-4rem)] p-8">{children}</div>
      </div>
    </>
  );
}

export default CompleteHeader;
