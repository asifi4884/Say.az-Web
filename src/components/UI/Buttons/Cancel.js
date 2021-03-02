import React from "react";
import { Button } from "./ButtonsStyles";

const cancel = ({ type, text, goBack }) => (
  <Button className="cancel" type={type} onClick={goBack}>
    {text}
  </Button>
);
export default cancel;
