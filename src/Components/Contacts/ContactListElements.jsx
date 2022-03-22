import React from "react";
import UserSelector from "./UserSelector";

const contacts = [
  {
    id: 0,
    avatar: "",
    name: "Lindsey Stroud",
    mail: "lindsey.stroud@gmail.com",
    company: "Hatchbuck",
    occupation: "Manager",
    percent: "50 %",
    date: "5 Minutes ago",
  },
  {
    id: 1,
    avatar: "",
    name: "Nicci Troioni",
    mail: "nicci.troioni@gmail.com",
    company: "Slack",
    occupation: "Manager",
    percent: "75 %",
    date: "14 Minutes ago",
  },
  {
    id: 2,
    avatar: "",
    name: "George Fields",
    mail: "george.fields@gmail.com",
    company: "Clockify",
    occupation: "CEO",
    percent: "10 %",
    date: "6 Hours ago",
  },
  {
    id: 3,
    avatar: "",
    name: "Rebecca Moora",
    mail: "rebecca.moora@gmail.com",
    company: "Upwork",
    occupation: "Manager",
    percent: "25 %",
    date: "Dec 14, 2018",
  },
  {
    id: 4,
    avatar: "",
    name: "Jane Doe",
    mail: "jane.doe@gmail.com",
    company: "Trello",
    occupation: "Engineer",
    percent: "30 %",
    date: "Dec 12, 2018",
  },
  {
    id: 5,
    avatar: "",
    name: "Jones Dermot",
    mail: "dermot.jones@gmail.com",
    company: "Slack",
    occupation: "Developer",
    percent: "40 %",
    date: "Dec 11, 2018",
  },
  {
    id: 6,
    avatar: "",
    name: "Martin Merces",
    mail: "martin.merces@gmail.com",
    company: "Google",
    occupation: "Manager",
    percent: "60 %",
    date: "Dec 9, 2018",
  },
  {
    id: 7,
    avatar: "",
    name: "Franz Ferdinand",
    mail: "franz.ferdinand@gmail.com",
    company: "Facebook",
    occupation: "Manager",
    percent: "100 %",
    date: "Dec 6, 2018",
  },
  {
    id: 8,
    avatar: "",
    name: "John Smith",
    mail: "john.smith@gmail.com",
    company: "Skype",
    occupation: "CEO",
    percent: "75 %",
    date: "Nov 30, 2018",
  },
  {
    id: 9,
    avatar: "",
    name: "Judith Williams",
    mail: "judith.williams@gmail.com",
    company: "Google",
    occupation: "Designer",
    percent: "45 %",
    date: "Nov 26, 2018",
  },
];

function ContactListElements() {
  return (
    <>
      {contacts.map(
        ({ mail, id, company, occupation, percent, date, name }) => {
          return (
            <UserSelector
              key={id}
              mail={mail}
              company={company}
              occupation={occupation}
              percent={percent}
              date={date}
              name={name}
            />
          );
        }
      )}
    </>
  );
}

export default ContactListElements;
