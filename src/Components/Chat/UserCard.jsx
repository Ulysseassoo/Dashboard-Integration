import React from "react";

function UserCard({
  userImage,
  name,
  date,
  lastMessage,
  notif,
  success,
  error,
  pending,
  open,
  sender,
}) {
  return (
    <div
      className={`flex p-4 w-fit min-w-400px border-b-2 border-t-stone-600 bg-white ${
        open ? "border-r-2 border-r-sky-500" : ""
      }`}
    >
      <div
        className={`mr-2 rounded-full overflow-hidden w-8 h-8 ${
          open ? "border-sky-500 border-2" : ""
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={`../../src/Assets/Images/${userImage}.png`}
          alt={userImage}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <p className={`${open ? "text-sky-500" : "text-black"}`}>{name}</p>
          <p className="text-[12px] text-stone-400">{date}</p>
        </div>
        <div className="flex justify-between align-center">
          <p className="text-stone-400 text-xs">
            {sender === "you" ? `You: ${lastMessage}` : lastMessage}{" "}
          </p>
          {notif && (
            <div className="w-6 h-6 rounded-md flex justify-center items-center bg-blue-500 text-slate-100">
              <p className="text-xs">{notif}</p>
            </div>
          )}
          {success && (
            <div className="w-5 h-4-5">
              <img
                className="w-full object-cover"
                src="../../src/Assets/Images/success.png"
                alt="success logo"
              />
            </div>
          )}
          {error && (
            <div className="w-5 h-4-5">
              <img
                className="w-full object-cover"
                src="../../src/Assets/Images/error.png"
                alt="success logo"
              />
            </div>
          )}
          {pending && (
            <div className="w-5 h-4-5">
              <img
                className="w-full object-cover"
                src="../../src/Assets/Images/pending.png"
                alt="success logo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
