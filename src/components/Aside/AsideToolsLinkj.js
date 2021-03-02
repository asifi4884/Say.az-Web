import React from "react";
import { NavLink } from "react-router-dom";
import { AsideToolsLinkListItem, AsideToolsNotification } from "./AisdeStyles";

const asideToolsLink = ({ link, icon, color, bgColor, notification }) => {
  return (
    <AsideToolsLinkListItem style={{ backgroundColor: bgColor }}>
      {notification && <AsideToolsNotification>3</AsideToolsNotification>}

      <NavLink to={link} style={{ color: color }}>
        {icon}
      </NavLink>
    </AsideToolsLinkListItem>
  );
};

export default asideToolsLink;
