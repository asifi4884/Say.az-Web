import React from "react";
import { Button } from "./ButtonsStyles";

const submit = ({ text, type }) => (
  <Button className="submit" type={type}>
    {text}
  </Button>
);
export default submit;
