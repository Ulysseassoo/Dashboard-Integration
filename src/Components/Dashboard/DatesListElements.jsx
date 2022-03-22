import React from "react";
import ShowDate from "./ShowDate";

const dates = [
  {
    id: 0,
    day: "Sun",
    number: 23,
  },
  {
    id: 1,
    day: "Mon",
    number: 24,
  },
  {
    id: 2,
    day: "Tue",
    number: 25,
  },
  {
    id: 3,
    day: "Wed",
    number: 26,
  },
  {
    id: 4,
    day: "Thu",
    number: 27,
  },
  {
    id: 5,
    day: "Fri",
    number: 28,
  },
  {
    id: 6,
    day: "Sat",
    number: 29,
  },
];

function DatesListElements() {
  return (
    <>
      {dates.map(({ id, day, number }) => {
        if (id === 0) {
          return <ShowDate key={id} day={day} number={number} active />;
        }
        return <ShowDate key={id} day={day} number={number} />;
      })}
    </>
  );
}

export default DatesListElements;
