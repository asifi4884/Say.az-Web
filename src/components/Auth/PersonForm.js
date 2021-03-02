import React from "react";
import {
  AuthFormBody,
  AuthFormContent,
  AuthFormGroup,
  AuthImageBody,
  AuthImage,
  AuthImageContent,
  AuthName,
  AuthUploadImage,
} from "./AuthStyle";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input/Input";
import { Down, Person } from "../../icons";
import SelectComponent from "../UI/Select/Select";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import personNull from "../../assets/images/person-null.png";
import { useForm } from "react-hook-form";

const typeOfctivite = [
  {
    value: 1,
    label: "Dizayner",
  },
  {
    value: 2,
    label: "Developer",
  },
];

const PersonFrom = React.memo(({ show, updateSteps }) => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();

  const submit = (data) => {
    console.log(data);
    updateSteps();
  };
  return (
    <AuthFormBody className={show ? "active" : "completed"}>
      <AuthFormContent onSubmit={handleSubmit(submit)} autoComplete="off">
        <AuthImageBody>
          <AuthImage>
            <AuthImageContent>
              <img src={personNull} alt="Person" />
              <input type="file" hidden />
            </AuthImageContent>
            <AuthUploadImage>{t("auth.7")}</AuthUploadImage>
          </AuthImage>
          <AuthName>
            <h3>Ülviyyə İmamova</h3>
            <span>29.08.2000</span>
          </AuthName>
        </AuthImageBody>
        <AuthFormGroup>
          <Input
            type="text"
            id="fin"
            name="fin"
            label={`${t("inputs.3")}`}
            icon={<Person />}
            refs={register}
          />
        </AuthFormGroup>
        <AuthFormGroup>
          <SelectComponent
            type="select"
            id="typeOfActivitie"
            name="typeOfActivitie"
            label={`${t("inputs.4")}`}
            options={typeOfctivite}
            icon={<Down />}
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

export default PersonFrom;
