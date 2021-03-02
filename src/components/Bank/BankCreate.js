import React from "react";
import {
  Bank,
  BankBody,
  BankBodyContent,
  BankBodyHeader,
  BankTitle,
  BankForm,
  BankFormGroup,
  BankFormButtons,
} from "./BankStyles";
import { useTranslation } from "react-i18next";

import { useHistory } from "react-router-dom";
import { Left } from "../../icons";
import { useForm } from "react-hook-form";

import Input from "../UI/Input/Input";
import { Down } from "../../icons";
import Submit from "../UI/Buttons/Submit";
import Cancel from "../UI/Buttons/Cancel";



function BankCreate() {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue } = useForm();
  const submit = (data) => console.log(data);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const clearNumber = (value = '') => {
    return value.replace(/\D+/g, '')
  }

  const bankCardPattern = (value) => {
    if (!value) {
      return value
    }

    const clearValue = clearNumber(value)
    let nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`

    setValue("cardNumber", nextValue)
    return nextValue.trim()
  }


  const expirationDatePattern = (value) => {
    let clearValue = clearNumber(value)

    if (clearValue.length >= 3) {
      clearValue = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
    }

    return setValue("endDate", clearValue)
  }


  const cvcParttern = (value, prevValue, allValues = {}) => {
    const clearValue = clearNumber(value)
    let maxLength = 3
    // if (allValues.number) {
    //   maxLength = 3
    // }
    setValue("cvc", clearValue.slice(0, maxLength))
    return clearValue.slice(0, maxLength)
  }



  return (
    <Bank>
      <BankBody>
        <BankBodyContent>
          <BankBodyHeader>
            <BankTitle>
              <Left onClick={goBack} />
              <h2>{t("bank.2")}</h2>
            </BankTitle>
          </BankBodyHeader>
          <BankForm onSubmit={handleSubmit(submit)}>
            <BankFormGroup>
              <Input
                label={`${t("inputs.7")}`}
                id="cardNumber"
                name="cardNumber"
                icon={<Down />}
                refs={register}
                handleChange={bankCardPattern}
              />
              <Input
                type="text"
                label={`${t("inputs.8")}`}
                id="endDate"
                name="endDate"
                refs={register}
                handleChange={expirationDatePattern}
              />
              <Input
                type="text"
                label={`${t("inputs.9")}`}
                id="cvc"
                name="cvc"
                refs={register}
                handleChange={cvcParttern}
              />
            </BankFormGroup>
            <BankFormButtons>
              <Submit type="submit" text={`${t("buttons.3")}`} />
              <Cancel
                type="button"
                text={`${t("buttons.4")}`}
                goBack={goBack}
              />
            </BankFormButtons>
          </BankForm>
        </BankBodyContent>
      </BankBody>
    </Bank>
  );
}
export default BankCreate;
