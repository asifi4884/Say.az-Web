import React from "react";
import {
  Profile,
  ProfileBody,
  ProfileBodyContent,
  ProfileInner,
  ProfileForm,
  ProfileFormButtons,
  ProfileFormAbout,
  ProfilePicture,
  ProfileName,
  ProfileBirthday,
  ProfileFormGroup,
  ProfileInfo,
  ProfileRemove,
} from "./ProfileStyles";

import { useTranslation } from "react-i18next";

import { useHistory } from "react-router-dom";

import Submit from "../UI/Buttons/Submit";
import Cancel from "../UI/Buttons/Cancel";
import person from "../../assets/images/personGirlLarge.jpg";
import { Camera } from "../../icons";
import Input from "../UI/Input/Input";

function ProfileComponent() {
  const { t } = useTranslation();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Profile>
      <ProfileBody>
        <ProfileBodyContent>
          <ProfileInner>
            <ProfileForm>
              <ProfileFormAbout>
                <ProfilePicture>
                  <input type="file" hidden />
                  <img src={person} alt="Person" />
                  <span>
                    <Camera />
                  </span>
                </ProfilePicture>
                <ProfileName>Ülviyyə İmamova</ProfileName>
                <ProfileBirthday>29.08.2000</ProfileBirthday>
              </ProfileFormAbout>
              <ProfileFormGroup>
                <Input
                  type="text"
                  value="Dizayner"
                  label={`${t("inputs.25")}`}
                  readOnly
                />
                <Input
                  type="text"
                  value="676245tvd"
                  label={`${t("inputs.3")}`}
                  readOnly
                />
                <Input
                  type="text"
                  value="87168176126"
                  label={`${t("inputs.11")}`}
                  readOnly
                />
              </ProfileFormGroup>
              <ProfileInfo>{t("info.2")}</ProfileInfo>
            </ProfileForm>
            <ProfileFormButtons>
              <Submit text={`${t("buttons.6")}`} type="submit" />
              <Cancel
                text={`${t("buttons.4")}`}
                type="button"
                goBack={goBack}
              />
              <ProfileRemove>{t("buttons.7")}</ProfileRemove>
            </ProfileFormButtons>
          </ProfileInner>
        </ProfileBodyContent>
      </ProfileBody>
    </Profile>
  );
}

export default ProfileComponent;
