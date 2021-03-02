import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  AuthMobileLink,
  AuthQuestion,
} from "./AuthStyle";
import { useTranslation } from "react-i18next";
import RegisterIllustration from "../../illustration/Register";
import { Chat } from "../../icons";
import PhoneForm from "./PhoneForm";
import PersonForm from "./PersonForm";
import BankForm from "./BankForm";

import logo from "../../assets/images/logo.png";

function Register() {
  const { t } = useTranslation();
  /*
  const [index, setIndex] = useState(0);
*/
  const [steps, setSteps] = useState([
    {
      selected: true,
      highlight: true,
      completed: false,
    },
    {
      selected: false,
      highlight: false,
      completed: false,
    },
    {
      selected: false,
      highlight: false,
      completed: false,
    },
  ]);

  const updateSteps = (stepNumber) => {
    const newSteps = [...steps];

    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          selected: true,
          highlight: true,
          completed: false,
        };
        stepCounter++;
      } else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          selected: false,
          highlight: false,
          completed: true,
        };
        stepCounter++;
      } else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          selected: false,
          highlight: false,
          completed: false,
        };
        stepCounter++;
      }
    }

    return setSteps(newSteps);
  };

  return (
    <Auth>
      <AuthContainer className="register-container">
        <AuthContent>
          <AuthContentBody>
            <AsideLogo className="flex-grow">
              <Link to="/register">
                <img src={logo} alt="Sayaz" />
              </Link>
            </AsideLogo>

            <AuthForm className="register-auth__form">
              <AuthHeader>
                <AuthButtons>
                  {steps.map((s, i) => (
                    <button
                      key={i}
                      className={`${s.selected ? "active" : ""}${
                        s.completed ? "disabled" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </AuthButtons>
              </AuthHeader>

              <PhoneForm
                show={steps[0].selected ? true : false}
                updateSteps={() => updateSteps(1)}
              />
              <PersonForm
                show={steps[1].selected ? true : false}
                updateSteps={() => updateSteps(2)}
              />
              <BankForm show={steps[2].selected ? true : false} />
            </AuthForm>

            <AuthMobileLink>
              <Link to="/login">{t("auth.2")}</Link>
            </AuthMobileLink>
            <AuthQuestion>
              <Link to="">
                <Chat />
                {t("auth.4")}
              </Link>
            </AuthQuestion>
          </AuthContentBody>
        </AuthContent>
        <Aside>
          <AsideBody className="register-aside">
            <AsideLogo className="regsiter-aside__logo">
              <Link to="/">
                <img src={logo} alt="Sayaz" />
              </Link>
            </AsideLogo>
            <AsideIllustration className="register-illustration">
              <RegisterIllustration />
            </AsideIllustration>
            <AsideContent className="register-aside__content">
              <AsideTitle>{t("auth.10")}</AsideTitle>
              <AsideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                sagittis, sed tincidunt eu, malesuada facilisis.
              </AsideText>

              <AsideLink>
                <Link to="/login">{t("auth.2")}</Link>
              </AsideLink>
            </AsideContent>
          </AsideBody>
        </Aside>
      </AuthContainer>
    </Auth>
  );
}

export default Register;
