import React from "react";
import {
  AuthFormBody,
  AuthFormContent,
  AuthFormGroup,
  AuthFormHeader,
  AuthFormTitle,
} from "./AuthStyle";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input/Input";
import { Phone } from "../../icons";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import { useForm } from "react-hook-form";

const PhoneForm = React.memo(({ show, updateSteps }) => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const submit = (data) => {
    console.log(data);
    updateSteps();
  };
  return (
    <AuthFormBody className={show ? "active" : "completed"}>
      <AuthFormHeader>
        <AuthFormTitle>{t("auth.5")}</AuthFormTitle>
      </AuthFormHeader>
      <AuthFormContent onSubmit={handleSubmit(submit)} autoComplete="off">
        <AuthFormGroup>
          <Input
            type="text"
            id="phonenumber"
            name="phonenumber"
            label={`${t("inputs.1")}`}
            icon={<Phone />}
            refs={register}
          />
        </AuthFormGroup>
        <AuthFormGroup>
          <LoadingButton text={t("auth.6")} />
        </AuthFormGroup>
      </AuthFormContent>
    </AuthFormBody>
  );
});

export default PhoneForm;
