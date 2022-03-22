import React from "react";
import UserCard from "./UserCard";

const users = [
  {
    userImage: "Lindsey",
    name: "Lindsey Stroud",
    date: "30 Dec 2018, 12:34",
    lastMessage: "Your idea for this application is nice!",
    notif: 1,
    open: true,
  },
  {
    userImage: "Nicci",
    name: "Nicci Troiani",
    date: "30 Dec 2018, 11:12",
    lastMessage: "Nicci is typing a message...",
    notif: 2,
  },
  {
    userImage: "Wordpress",
    name: "WordPress conferesion",
    date: "29 Dec 2018, 18:05",
    lastMessage: "Sure!",
    success: 1,
    sender: "you",
  },
  {
    userImage: "Rebecca",
    name: "Rebecca Moore",
    date: "29 Dec 2018, 18:05",
    lastMessage: "I’m not sure about this..",
    error: 1,
    sender: "you",
  },
  {
    userImage: "Jane",
    name: "Jane Doe",
    date: "29 Dec 2018, 16:45",
    lastMessage: "It should be pretty simple.",
    pending: 1,
    sender: "you",
  },
  {
    userImage: "Jones",
    name: "Jones Dermot",
    date: "29 Dec 2018, 13:37",
    lastMessage: "I have a new feature for this project.",
  },
  {
    userImage: "Martin",
    name: "Martin Merces",
    date: "29 Dec 2018, 12:48",
    lastMessage: "Martin is typing a message...",
  },
  {
    userImage: "Franz",
    name: "Franz Ferdinand",
    date: "28 Dec 2018, 15:27",
    lastMessage: "Can we schedule an online meeting? Thanks! ",
  },
  {
    userImage: "Judith",
    name: "Judith Williams",
    date: "28 Dec 2018, 13:19",
    lastMessage: "Thank you. See you later!",
  },
  {
    userImage: "John",
    name: "John Smith",
    date: "27 Dec 2018, 21:22",
    lastMessage: "It’s fine",
  },
];

function UsersCard() {
  return (
    <div className="rounded-md w-fit overflow-hidden flex flex-col">
      {users.map(
        ({
          userImage,
          name,
          date,
          lastMessage,
          success,
          error,
          pending,
          notif,
          open,
          sender,
        }) => (
          <UserCard
            userImage={userImage}
            name={name}
            date={date}
            lastMessage={lastMessage}
            success={success}
            error={error}
            pending={pending}
            notif={notif}
            open={open}
            sender={sender}
          />
        )
      )}
    </div>
  );
}

export default UsersCard;
