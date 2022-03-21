import React from "react";
import { NavLink } from "react-router-dom";

function CustomLink({ link, name, Icon }) {
  return (
    <NavLink
      className={(navigationData) =>
        navigationData.isActive
          ? "!text-sky-500 flex gap-6 w-full items-center"
          : "flex gap-6 w-full items-center"
      }
      to={link}
    >
      <Icon />
      <p className="text-base text-black-800"> {name}</p>
    </NavLink>
  );
}

export default CustomLink;
