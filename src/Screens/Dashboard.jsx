import React from "react";
import CompleteHeader from "../Components/CompleteHeader";
import Card from "../Components/Dashboard/Card";
import Graph from "../Assets/Images/graph1.png";
import DatesListElements from "../Components/Dashboard/DatesListElements";
import TodoList from "../Components/Dashboard/TodoList";

const cardDatas = [
  {
    id: 0,
    title: "Deals",
    date: "Monthly",
  },
  {
    id: 1,
    title: "Tasks",
    date: "This month",
  },
];

function Dashboard() {
  return (
    <div className="flex h-screen">
      <CompleteHeader searchContent="Global Search">
        <div className="flex gap-8 h-full">
          <div className="flex-auto w-3/5 shadow-lg rounded bg-white">
            <div className="border-slate-200 border-b-2 p-4">
              <div className="flex justify-between items-center">
                <p className="text-blue-800 text-sm">
                  8 task completed out of 10
                </p>
                <p className="text-sm text-gray-500">
                  Show:<span className="text-sky-400 pl-1">This week</span>{" "}
                </p>
              </div>
              <div className="w-full pt-4">
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-green-400 h-1" style={{ width: "80%" }} />
                </div>
              </div>
              <div className="pt-4">
                <p className="font-bold text-black"> 23 December, Sunday</p>
              </div>
              <div className="pt-4 w-full flex justify-between">
                <DatesListElements />
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4 h-4/5">
              <TodoList />
              <div className=" text-center">
                <p className="text-sky-600 text-sm font-semibold">Show more</p>
              </div>
            </div>
          </div>
          <div className="flex-auto w-2/5  flex flex-col h-full gap-8">
            {cardDatas.map(({ id, title, date }) => {
              if (id === 0) {
                return (
                  <Card key={id} title={title} date={date}>
                    <img src={Graph} alt="graph" />
                  </Card>
                );
              }
              return (
                <Card key={id} title={title} date={date}>
                  <div className="flex w-full h-full items-center justify-center gap-4 ">
                    <div className="rounded-full h-full w-60 h-60 flex justify-center items-center bg-white border-green-400 border-8 ">
                      <p className="text-green-400 font-medium text-5xl">
                        60 %
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center">
                        <div className="rounded-full h-1 w-1 bg-white border-yellow-400 border-4" />
                        <p className="text-xs text-black pl-4"> Active</p>
                      </div>
                      <div className="flex items-center">
                        <div className="rounded-full h-1 w-1 bg-white border-green-400 border-4" />
                        <p className="text-xs text-black pl-4"> Completed</p>
                      </div>
                      <div className="flex items-center">
                        <div className="rounded-full h-1 w-1 bg-white border-red-400 border-4" />
                        <p className="text-xs text-black pl-4"> Ended</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </CompleteHeader>
    </div>
  );
}

export default Dashboard;
