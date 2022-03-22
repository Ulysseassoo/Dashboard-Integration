import React from "react";
import image from "../../Assets/Images/Lindsey.png";

function Todo({ title, type, date, complete, firstname, lastname }) {
  return (
    <div className="bg-white shadow-md p-4 flex flex-col gap-4 justify-between">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-black text-base">{title}</p>
          <p className="font-medium text-gray-400 text-xs">{type}</p>
        </div>
        <p className="text-gray-400 text-sm">
          Due date: <span className="text-gray-600">{date}</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-7 mr-2 rounded-full overflow-hidden">
            <img
              className="w-full object-contain"
              src={image}
              alt={`${firstname} ${lastname}`}
            />
          </div>
          <p className="text-gray-500 text-xs">
            {firstname} {lastname}
          </p>
        </div>
        {complete ? (
          <button
            className="bg-green-400 text-white text-sm font-medium py-0.5 px-2 rounded"
            type="button"
          >
            Completed
          </button>
        ) : (
          <button
            className="bg-red-400 text-white text-sm font-medium py-1 px-2 rounded"
            type="button"
          >
            Ended
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
