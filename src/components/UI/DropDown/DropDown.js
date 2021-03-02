import React, { useState, useEffect, useRef } from "react";
import {
  DropDown,
  DropDownBody,
  DropDownButton,
  DropDownContent,
  DropDownList,
  DropDownListItem,
} from "./DropDownStyles";

import { Down } from "../../../icons";

function DropDownComponent({ options, clicked, customClass }) {
  const [val, setVal] = useState(options ? options[0].label : "");
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <DropDown>
      <DropDownBody ref={ref}>
        <DropDownButton onClick={() => setOpen(!open)} className={customClass}>
          <span>{val}</span>
          <Down />
        </DropDownButton>
        <DropDownContent className={open ? "open" : ""}>
          <DropDownList>
            {options &&
              options.map((o) => (
                <DropDownListItem
                  key={o.value}
                  onClick={() => {
                    setVal(o.label);
                    setOpen(false);
                    clicked(o.value);
                  }}
                >
                  {o.label}
                </DropDownListItem>
              ))}
          </DropDownList>
        </DropDownContent>
      </DropDownBody>
    </DropDown>
  );
}

export default DropDownComponent;
