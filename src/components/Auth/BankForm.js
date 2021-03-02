import React from "react";
import {
  AuthFormBody,
  AuthFormContent,
  AuthFormGroup,
  AuthFormHeader,
  AuthFormTitle,
} from "./AuthStyle";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import SelectComponent from "../UI/Select/Select";
import { Down } from "../../icons";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import { useForm } from "react-hook-form";

const bank = [
  {
    value: 1,
    label: "Kapital Bank",
  },
];

const typeOfCard = [
  {
    value: 1,
    label: "Visa Classic",
  },
  {
    value: 2,
    label: "Maestro",
  },
];

const BankForm = React.memo(({ show }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const redirect = () => history.push("/login");
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
    redirect();
  };

  return (
    <AuthFormBody className={show ? "active" : "completed"}>
      <AuthFormHeader>
        <AuthFormTitle>{t("auth.8")}</AuthFormTitle>
      </AuthFormHeader>
      <AuthFormContent onSubmit={handleSubmit(submit)} autoComplete="off">
        <AuthFormGroup>
          <SelectComponent
            type="select"
            id="bank"
            name="bank"
            label={`${t("inputs.5")}`}
            options={bank}
            icon={<Down />}
            refs={register}
          />
        </AuthFormGroup>
        <AuthFormGroup>
          <SelectComponent
            type="select"
            id="typeOfCard"
            name="typeOfCard"
            label={`${t("inputs.6")}`}
            options={typeOfCard}
            icon={<Down />}
            refs={register}
          />
        </AuthFormGroup>
        <AuthFormGroup>
          <LoadingButton text={t("auth.9")} />
        </AuthFormGroup>
      </AuthFormContent>
    </AuthFormBody>
  );
});

export default BankForm;
