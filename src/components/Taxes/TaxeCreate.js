import React, { useState, useEffect } from "react";
import {
  Taxes,
  TaxesBody,
  TaxesBodyContent,
  TaxesBodyHeader,
  TaxesTitle,
  TaxesForm,
  TaxesFormGroup,
  TaxesFormButtons,
  TaxesFormCheckBox,
  TaxesFormCheckBoxTitle,
  TaxesFormCheckBoxs,
} from "./TaxesStyles";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Left, Down } from "../../icons";
import Submit from "../UI/Buttons/Submit";
import Cancel from "../UI/Buttons/Cancel";
import Select from "../UI/Select/Select";
import MoneyInput from "../UI/MoneyInput/MoneyInput";
import Checkbox from "../UI/Checkbox/Checkbox";

export const year = [
  {
    value: 1,
    label: "2020",
  },
  {
    value: 2,
    label: "2021",
  },
];

export const quarter = [
  {
    value: 1,
    label: "I",
  },
  {
    value: 2,
    label: "II",
  },
  {
    value: 3,
    label: "III",
  },
  {
    value: 4,
    label: "IV",
  },
];

function TaxeCreate() {
  const { t } = useTranslation();
  const [typeTaxe, setTypeTaxe] = useState(1);
  // const [typeAction, setTypeAction] = useState(1);
  const [quar, setQuar] = useState(null);
  const { register, handleSubmit } = useForm();
  const submit = (data) => console.log(data);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const taxeTypes = [
    {
      value: 1,
      label: `${t("taxe.2")}`,
    },
    {
      value: 2,
      label: `${t("taxe.3")}`,
    },
    {
      value: 3,
      label: `${t("taxe.4")}`,
    },
  ];

  const actions = [
    {
      value: 1,
      label: `${t("inputs.23")}`,
    },
    {
      value: 2,
      label: `${t("inputs.24")}`,
    },
  ];

  const month = {
    1: [
      {
        value: 0,
        label: `${t("month.1")}`,
      },
      {
        value: 1,
        label: `${t("month.2")}`,
      },
      {
        value: 2,
        label: `${t("month.3")}`,
      },
    ],
    2: [
      {
        value: 3,
        label: `${t("month.4")}`,
      },
      {
        value: 4,
        label: `${t("month.5")}`,
      },
      {
        value: 5,
        label: `${t("month.6")}`,
      },
    ],
    3: [
      {
        value: 6,
        label: `${t("month.7")}`,
      },
      {
        value: 7,
        label: `${t("month.8")}`,
      },
      {
        value: 8,
        label: `${t("month.9")}`,
      },
    ],
    4: [
      {
        value: 9,
        label: `${t("month.10")}`,
      },
      {
        value: 10,
        label: `${t("month.11")}`,
      },
      {
        value: 11,
        label: `${t("month.12")}`,
      },
    ],
  };

  useEffect(() => {
    setQuar(null);
  }, [typeTaxe]);

  return (
    <Taxes>
      <TaxesBody>
        <TaxesBodyContent>
          <TaxesBodyHeader>
            <TaxesTitle>
              <Left onClick={goBack} />
              <h2>{t("taxe.1")}</h2>
            </TaxesTitle>
          </TaxesBodyHeader>
          <TaxesForm onSubmit={handleSubmit(submit)}>
            <TaxesFormGroup>
              <Select
                label={`${t("inputs.26")}`}
                id="taxesType"
                name="taxesType"
                options={taxeTypes}
                icon={<Down />}
                refs={register}
                selectValue={setTypeTaxe}
                selected
              />
              {typeTaxe === 3 && (
                <Select
                  label={`${t("inputs.22")}`}
                  id="actions"
                  name="actions"
                  options={actions}
                  icon={<Down />}
                  refs={register}
                />
              )}
              <Select
                label={`${t("inputs.17")}`}
                id="year"
                name="year"
                options={year}
                icon={<Down />}
                refs={register}
              />
              {typeTaxe === 1 && (
                <Select
                  label={`${t("inputs.18")}`}
                  id="quarter"
                  name="quarter"
                  options={quarter}
                  icon={<Down />}
                  refs={register}
                  selectValue={setQuar}
                />
              )}
              {typeTaxe === 1 && quar !== null && (
                <TaxesFormCheckBox>
                  <TaxesFormCheckBoxTitle>
                    Faliyyət ayları:
                  </TaxesFormCheckBoxTitle>
                  <TaxesFormCheckBoxs>
                    {month[quar].map((m) => (
                      <Checkbox key={m.value} id={m.value} month={m.label} />
                    ))}
                  </TaxesFormCheckBoxs>
                </TaxesFormCheckBox>
              )}
              {typeTaxe === 3 && (
                <Select
                  label={`${t("inputs.18")}`}
                  id="quarter"
                  name="quarter"
                  options={quarter}
                  icon={<Down />}
                  refs={register}
                  selectValue={setQuar}
                />
              )}

              {typeTaxe === 3 && quar !== null && (
                <TaxesFormCheckBox>
                  <TaxesFormCheckBoxTitle>
                    Faliyyət ayları:
                  </TaxesFormCheckBoxTitle>
                  <TaxesFormCheckBoxs>
                    {month[quar].map((m) => (
                      <Checkbox key={m.value} id={m.value} month={m.label} />
                    ))}
                  </TaxesFormCheckBoxs>
                </TaxesFormCheckBox>
              )}

              {typeTaxe === 1 && (
                <MoneyInput
                  label={`${t("inputs.19")}`}
                  id="periodExcuse"
                  name="periodExcuse"
                />
              )}
              {typeTaxe === 2 && (
                <MoneyInput
                  label={`${t("inputs.21")}`}
                  id="comeExcuse"
                  name="comeExcuse"
                />
              )}
              {typeTaxe === 1 && (
                <MoneyInput
                  label={`${t("inputs.20")}`}
                  id="taxePrice"
                  name="taxePrice"
                />
              )}
              {typeTaxe === 2 && (
                <MoneyInput
                  label={`${t("inputs.20")}`}
                  id="taxePrice"
                  name="taxePrice"
                />
              )}
            </TaxesFormGroup>
            <TaxesFormButtons>
              <Submit type="submit" text={`${t("buttons.5")}`} />
              <Cancel
                type="button"
                text={`${t("buttons.4")}`}
                goBack={goBack}
              />
            </TaxesFormButtons>
          </TaxesForm>
        </TaxesBodyContent>
      </TaxesBody>
    </Taxes>
  );
}

export default TaxeCreate;
