import React, { useState } from "react";
import {
  Money,
  MoneyBody,
  MoneyInputAnimateLine,
  MoneyInputType,
  Label,
  SelectInput,
  SelectIcon,
} from "./MoneyInputStyles";
import Select from "react-dropdown-select";

import { Down } from "../../../icons";

export const money = [
  {
    value: 1,
    label: "Dollar($)",
  },
  {
    value: 2,
    label: "Azn(₼)",
  },
  {
    value: 3,
    label: "Euro(€)",
  },
];

function MoneyInput({ id, name, label, refs }) {
  const [value, setValue] = useState(null);

  return (
    <Money>
      <MoneyBody>
        <MoneyInputType type="number" ref={refs} id={id} name={name} required />
        <Label htmlFor={id}>{label}</Label>
        {/* <Select>
          <option>Dollar($)</option>
          <option>Azn(m)</option>
          <option>Euro(e)</option>
        </Select> */}
        <span style={{ display: "none" }}>{value && value[0].value}</span>
        <SelectInput>
          <Select
            options={money}
            color="#0b7d91"
            placeholder=""
            values={[money.find((opt) => opt.value === 1)]}
            searchable={false}
            onChange={(values) => setValue(values)}
          />
        </SelectInput>
        <SelectIcon>
          <Down />
        </SelectIcon>
        <MoneyInputAnimateLine />
      </MoneyBody>
    </Money>
  );
}

export default MoneyInput;
