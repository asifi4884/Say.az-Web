import React, { useState } from "react";
import {
  SelectBody,
  Label,
  SelectIcon,
  SelectAnimateLine,
} from "./SelectStyles";
import Select from "react-dropdown-select";

const SelectComponent = ({
  id,
  label,
  name,
  icon,
  options,
  refs,
  selectValue,
  selected,
}) => {
  const [value, setValue] = useState(
    selected ? [options.find((opt) => opt.value === 1)] : []
  );

  return (
    <SelectBody>
      {/* <SelectInput ref={refs} id={id} name={name} required>

        {options &&
          options.map((o) => (
            <Option key={o.value} value={o.value}>
              {o.label}
            </Option>
          ))}
      </SelectInput> */}
      <Label className={value.length !== 0 ? "focus" : ""} htmlFor={id}>
        {label}
      </Label>
      <SelectIcon>{icon}</SelectIcon>
      <Select
        options={options}
        color="#0b7d91"
        placeholder=""
        onChange={(values) => {
          setValue(values);
          selectValue && selectValue(values[0].value);
        }}
        values={selected ? [options.find((opt) => opt.value === 1)] : []}
        required
        name={name}
      />
      <SelectAnimateLine />
    </SelectBody>
  );
};

export default SelectComponent;
