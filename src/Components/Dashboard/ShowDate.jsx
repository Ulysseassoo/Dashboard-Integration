import React from "react";

function ShowDate({ day, active, number }) {
  if (active) {
    return (
      <div className="flex flex-col items-center justify-center gap-0.5">
        <p className="text-sm text-gray-400">{day}</p>
        <p className="text-sm text-white bg-sky-400 h-6 w-6 rounded-full flex items-center justify-center">
          {number}
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 text-gray-400 hover:text-sky-400">
      <p className="text-sm ">{day}</p>
      <p className="text-sm">{number}</p>
    </div>
  );
}

export default ShowDate;
