import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import CompleteHeader from "../Components/CompleteHeader";
import ContactList from "../Components/Contacts/ContactListElements";

function Contacts() {
  return (
    <div className="flex h-screen">
      <CompleteHeader searchContent="Search for a contact">
        <div className="flex justify-between w-full">
          <p className="text-sm text-gray-700">
            Company : <span className="text-sky-400">All</span>
          </p>
          <button
            className="rounded bg-sky-400 shadow-blue-glow px-6 py-3 text-white"
            type="button"
          >
            Add contact
          </button>
        </div>
        <div className="shadow-xl">
          <div className="flex items-center justify-between p-4 border-slate-200 border-b-2">
            <div className="flex items-center w-2/6">
              <p className="bg-sky-400 h-5 w-5 text-sm text-white p-2 rounded flex items-center justify-center">
                1
              </p>
              <p className="text-blue-900 text-sm pl-4">1 selected</p>
              <div className="text-gray-400 p-4 text-sm">
                <BsFillTrashFill />
              </div>
            </div>
          </div>
          <ContactList />
        </div>
      </CompleteHeader>
    </div>
  );
}

export default Contacts;
