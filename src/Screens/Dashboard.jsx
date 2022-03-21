import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Header />
    </div>
  );
}

export default Dashboard;
