import React from "react";
import { NavLink } from "react-router-dom";

function AsideNavbarLink({ link, icon, text, topCalc, exact }) {
  return (
    <NavLink to={link} onClick={topCalc} exact={exact}>
      {icon} <span>{text}</span>
    </NavLink>
  );
}

export default AsideNavbarLink;
