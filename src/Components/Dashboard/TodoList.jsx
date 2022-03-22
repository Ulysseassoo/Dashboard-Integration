import React from "react";
import Todo from "./Todo";

const todos = [
  {
    id: 0,
    firstname: "George",
    lastname: "Fields",
    title: "Send benefit review by Sunday",
    type: "Reminder",
    date: "December 23, 2018",
    complete: true,
  },
  {
    id: 1,
    firstname: "Rebecca",
    lastname: "Moore",
    title: "Invite to office meet-up",
    type: "Call",
    date: "December 23, 2018",
    complete: false,
  },
  {
    id: 2,
    firstname: "Lindsey",
    lastname: "Stroud",
    title: "Office meet-up",
    type: "Event",
    date: "December 23, 2018",
    complete: true,
  },
];

function TodoList() {
  return (
    <>
      {todos.map(({ id, lastname, title, firstname, date, complete, type }) => {
        return (
          <Todo
            key={id}
            lastname={lastname}
            title={title}
            firstname={firstname}
            date={date}
            complete={complete}
            type={type}
          />
        );
      })}
    </>
  );
}

export default TodoList;
