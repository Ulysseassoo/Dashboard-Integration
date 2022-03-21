import React from "react";
import {
  MdOutlineDashboard,
  MdOutlineMailOutline,
  MdSettings,
} from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { FaIdeal } from "react-icons/fa";
import { CgToggleSquare } from "react-icons/cg";
import AvatarImage from "../Assets/Images/avatarDashboard.png";
import CustomLink from "./CustomLink";

const navElements = [
  {
    index: 0,
    link: "/dashboard",
    name: "Dashboard",
    Icon: MdOutlineDashboard,
  },
  {
    index: 1,
    link: "/tasks",
    name: "Tasks",
    Icon: GrTasks,
  },
  {
    index: 2,
    link: "/email",
    name: "Email",
    Icon: MdOutlineMailOutline,
  },
  {
    index: 3,
    link: "/contacts",
    name: "Contacts",
    Icon: RiContactsLine,
  },
  {
    index: 4,
    link: "/chat",
    name: "Chat",
    Icon: BsChatLeft,
  },
  {
    index: 5,
    link: "/deals",
    name: "Deals",
    Icon: FaIdeal,
  },
];

function Sidebar() {
  return (
    <header className="w-64 bg-white shadow-lg divide-y divide-slate-200 flex flex-col z-10">
      <div className="h-16 w-full p-4">
        <p className="text-sky-500 ">SaaS Kit</p>
      </div>
      <div className="h-auto w-full">
        <div className="flex gap-4 w-full p-4">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={AvatarImage}
            alt="avatar"
          />
          <div>
            <p className="text-black-600 text-base">Sierra Ferguson</p>
            <span className="text-gray-400 text-sm">s.ferguson@gmail.com</span>
          </div>
        </div>
        <nav className="p-4 w-full flex flex-col gap-4">
          {navElements.map(({ link, Icon, name, index }) => {
            return (
              <CustomLink link={link} Icon={Icon} name={name} key={index} />
            );
          })}
        </nav>
      </div>
      <div className="p-4 w-full h-full flex flex-col">
        <CustomLink link="/settings" Icon={MdSettings} name="Settings" />
        <div className="w-full mt-auto">
          <div className="flex gap-6 w-full items-center text-blue-600/50">
            <CgToggleSquare />
            <p className="text-base"> Toggle sidebar </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
