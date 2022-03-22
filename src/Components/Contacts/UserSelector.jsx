import React, { useState } from "react";
import image from "../../Assets/Images/Lindsey.png";

function UserSelector({ mail, name, company, occupation, percent, date }) {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  if (activeCheckbox) {
    return (
      <div className="flex items-center justify-between p-4 bg-sky-200/50 border-slate-200 border-b-2">
        <div className="flex items-center w-2/6">
          <input
            type="checkbox"
            name="user"
            className="mr-4 border-2 border-blue-400"
            onChange={() => setActiveCheckbox(!activeCheckbox)}
          />
          <div className="flex items-center">
            <div className="w-7 mr-2 rounded-full overflow-hidden">
              <img className="w-full object-contain" src={image} alt="" />
            </div>
            <p>{name}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-4/6 text-gray-700">
          <p>{mail}</p>
          <p>{company}</p>
          <p>{occupation}</p>
          <p>{percent}</p>
          <p>{date}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 border-slate-200 border-b-2">
      <div className="flex items-center w-2/6">
        <input
          type="checkbox"
          name="user"
          className="mr-4 border-2 border-blue-400"
          onChange={() => setActiveCheckbox(!activeCheckbox)}
        />
        <div className="flex items-center">
          <div className="w-7 mr-2 rounded-full overflow-hidden">
            <img className="w-full object-contain" src={image} alt="" />
          </div>
          <p>{name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-4/6 text-gray-700">
        <p>{mail}</p>
        <p>{company}</p>
        <p>{occupation}</p>
        <p>{percent}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default UserSelector;
