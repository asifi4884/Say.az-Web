import React from "react";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import { Checkbox } from "./CheckboxStyles";

function CheckboxComponent({ id, month }) {
  return (
    <Auxilary>
      <Checkbox>
        <input type="checkbox" id={id} name={id} hidden />
        <div></div>
        <span>{month}</span>
      </Checkbox>
    </Auxilary>
  );
}

export default CheckboxComponent;
