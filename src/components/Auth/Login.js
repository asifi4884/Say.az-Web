import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input/Input";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import {
  Auth,
  AuthContainer,
  Aside,
  AuthContent,
  AsideBody,
  AsideLogo,
  AsideIllustration,
  AsideContent,
  AsideTitle,
  AsideText,
  AsideLink,
  AuthContentBody,
  AuthHeader,
  AuthButtons,
  AuthForm,
  AuthFormBody,
  AuthFormHeader,
  AuthFormTitle,
  AuthFormContent,
  AuthFormGroup,
  AuthMobileLink,
  AuthQuestion,
} from "./AuthStyle";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import LoginIllustration from "../../illustration/Login";
import AsanLogin from "../../assets/images/asanlogin.png";
import Scan from "../../assets/images/scan.png";
import { Phone, Person, Chat } from "../../icons";

import logo from "../../assets/images/logo.png";

function Login(props) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);
  const submit = (data) => {
    console.log(data);
    props.onAuthLoginStart();
    history.push("/");
  };
  return (
    <Auth>
      <AuthContainer>
        <Aside>
          <AsideBody>
            <AsideLogo>
              <Link to="/login">
                <img src={logo} alt="Sayaz" />
              </Link>
            </AsideLogo>
            <AsideIllustration>
              <LoginIllustration />
            </AsideIllustration>
            <AsideContent>
              <AsideTitle>{t("auth.1")}</AsideTitle>
              <AsideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                sagittis, sed tincidunt eu, malesuada facilisis.{" "}
              </AsideText>

              <AsideLink>
                <Link to="/register">{t("auth.3")}</Link>
              </AsideLink>
            </AsideContent>
          </AsideBody>
        </Aside>
        <AuthContent>
          <AuthContentBody>
            <AsideLogo className="mobile-logo flex-grow">
              <Link to="/">
                <img src={logo} alt="Sayaz" />
              </Link>
            </AsideLogo>
            <AuthForm>
              <AuthHeader>
                <AuthButtons>
                  <button
                    onClick={() => setIndex(1)}
                    className={index === 1 ? "active" : ""}
                  >
                    <img src={AsanLogin} alt="Asan Login" />
                  </button>
                  <button
                    onClick={() => setIndex(2)}
                    className={index === 2 ? "active" : ""}
                  >
                    ASAN Pass
                  </button>
                </AuthButtons>
              </AuthHeader>
              <AuthFormBody>
                <AuthFormHeader>
                  <img src={Scan} alt="Scan" />
                  <AuthFormTitle>{t("auth.2")}</AuthFormTitle>
                </AuthFormHeader>
                <AuthFormContent
                  onSubmit={handleSubmit(submit)}
                  autoComplete="off"
                >
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
                    <Input
                      type="text"
                      id="userId"
                      name="userId"
                      label={`${t("inputs.2")}`}
                      icon={<Person />}
                      refs={register}
                    />
                  </AuthFormGroup>
                  <AuthFormGroup>
                    <LoadingButton text={t("auth.2")} />
                  </AuthFormGroup>
                </AuthFormContent>
              </AuthFormBody>
            </AuthForm>
            <AuthMobileLink>
              <Link to="/register">{t("auth.3")}</Link>
            </AuthMobileLink>
            <AuthQuestion>
              <Link to="">
                <Chat />
                {t("auth.4")}
              </Link>
            </AuthQuestion>
          </AuthContentBody>
        </AuthContent>
      </AuthContainer>
    </Auth>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthLoginStart: () => dispatch(actions.authLoginStart()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
