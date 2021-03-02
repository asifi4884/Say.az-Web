import React from "react";
import { Link } from "react-router-dom";

import { Create } from "./CreateLinkStyles";
import { Plus } from "../../../icons";

const createLink = ({ link, text }) => (
  <Create>
    <Link to={link}>
      <span>{text}</span> <Plus />
    </Link>
  </Create>
);
export default createLink;
