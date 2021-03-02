import React from "react";
import {
  ReceiptSection,
  ReceiptBody,
  ReceiptBodyContent,
  ReceiptBodyHeader,
  ReceiptTitle,
  ReceiptForm,
  ReceiptFormGroup,
  ReceiptFormButtons,
  ReceiptFormInput,
  ReceiptFormOtherInput,
} from "./ReceiptStyles";
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom";
import { Left, Down, Right } from "../../icons";
import { useForm } from "react-hook-form";
import Submit from "../UI/Buttons/Submit";
import Cancel from "../UI/Buttons/Cancel";
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
import MoneyInput from "../UI/MoneyInput/MoneyInput";



function ReceiptCreate() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const submit = (data) => console.log(data);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const typeOfReceipt = [
    {
      value: 1,
      label: `${t("inputs.13")}`,
    },
    {
      value: 2,
      label: `${t("inputs.12")}`,
    },
  ];

  const period = [
    {
      value: 1,
      label: `${t("inputs.15")}`,
    },
  ];

  return (
    <ReceiptSection>
      <ReceiptBody>
        <ReceiptBodyContent>
          <ReceiptBodyHeader>
            <ReceiptTitle>
              <Left onClick={goBack} />
              <h2>{t("receipt.5")}</h2>
            </ReceiptTitle>
          </ReceiptBodyHeader>
          <ReceiptForm onSubmit={handleSubmit(submit)}>
            <ReceiptFormGroup>
              <ReceiptFormInput>
                <Select
                  label={`${t("inputs.10")}`}
                  id="typeOfReceipt"
                  name="typeOfReceipt"
                  options={typeOfReceipt}
                  icon={<Down />}
                  refs={register}
                />
              </ReceiptFormInput>
              <ReceiptFormInput>
                <Input
                  type="text"
                  label={`${t("inputs.11")}`}
                  id="tin"
                  name="tin"
                  refs={register}
                  icon={<Right />}
                />
              </ReceiptFormInput>
              <ReceiptFormOtherInput>
                <Input
                  className="ownerOfTIN"
                  type="text"
                  label={`${t("inputs.14")}`}
                  id="ownerOfTin"
                  name="ownerOfTin"
                  refs={register}
                />
              </ReceiptFormOtherInput>
              <ReceiptFormInput>
                <Select
                  label={`${t("inputs.15")}`}
                  id="period"
                  name="period"
                  options={period}
                  icon={<Down />}
                  refs={register}
                />
              </ReceiptFormInput>
              <ReceiptFormInput>
                <MoneyInput
                  label={`${t("inputs.16")}`}
                  id="amount"
                  name="amount"
                  refs={register}
                />
              </ReceiptFormInput>
            </ReceiptFormGroup>
            <ReceiptFormButtons>
              <Submit type="submit" text={`${t("buttons.3")}`} />
              <Cancel type="button" text={`${t("buttons.4")}`} goBack={goBack} />
            </ReceiptFormButtons>
          </ReceiptForm>
        </ReceiptBodyContent>
      </ReceiptBody>
    </ReceiptSection>
  );
}

export default ReceiptCreate;
