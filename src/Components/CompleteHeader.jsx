import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function CompleteHeader({ searchContent, children }) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-[calc(100%-256px)]">
        <Header content={searchContent} />
        <div className="h-[calc(100vh-4rem)]">{children}</div>
      </div>
    </>
  );
}

export default CompleteHeader;
