import React from "react";
import {
  InputGroup,
  InputBody,
  InputType,
  Label,
  InputIcon,
  InputAnimateLine,
} from "./InpuStyles";

const Input = React.memo(
  ({ type, id, name, label, icon, refs, value, readOnly, handleChange }) => {
    return (
      <InputGroup>
        <InputBody>
          <InputType
            className={readOnly ? "readOnly" : ""}
            ref={refs}
            type={type}
            id={id}
            name={name}
            value={value}
            readOnly={readOnly}
            required
            onChange={(e) => {
              handleChange && handleChange(e.target.value);
            }}
          />
          <Label htmlFor={id}>{label}</Label>
          <InputIcon>{icon}</InputIcon>
          <InputAnimateLine />
        </InputBody>
      </InputGroup>
    );
  }
);

export default Input;
