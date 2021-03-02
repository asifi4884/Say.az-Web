import React from "react";
import {
  InfoSection,
  InfoBody,
  InfoBodyContent,
  InfoBodyHeader,
  InfoTitle,
  InfoContent,
  InfoContentInner,
  InfoContentText,
  InfoContentButton,
} from "./InfoStyles";
import { useTranslation } from "react-i18next";

import { Info } from "../../icons";

function InfoComponent() {
  const { t } = useTranslation();
  return (
    <InfoSection>
      <InfoBody>
        <InfoBodyContent>
          <InfoBodyHeader>
            <InfoTitle>
              <Info />
              <h2>{t("navbar.4")}</h2>
            </InfoTitle>
          </InfoBodyHeader>
          <InfoContent>
            <InfoContentInner>
              <InfoContentText>
                Id ultricies orci elit praesent nunc tempus, at gravida amet.
                Elit dignissim augue pretium iaculis semper velit feugiat
                aliquam risus. Viverra aliquet id sodales at. Pretium diam porta
                lectus hendrerit ipsum ac. Imperdiet nullam vulputate neque
                laoreet imperdiet nulla. Sit amet penatibus nullam orci
                elementum ultricies elit congue. Dictum feugiat viverra tellus
                vestibulum ut nunc. Nisl, praesent sit tellus et euismod
                placerat ullamcorper. Adipiscing quam consectetur urna,
                pulvinar. Sociis nisl orci, nisl sodales.
              </InfoContentText>
              <InfoContentText>
                Id ultricies orci elit praesent nunc tempus, at gravida amet.
                Elit dignissim augue pretium iaculis semper velit feugiat
                aliquam risus. Viverra aliquet id sodales at. Pretium diam porta
                lectus hendrerit ipsum ac. Imperdiet nullam vulputate neque
                laoreet imperdiet nulla. Sit amet penatibus nullam orci
                elementum ultricies elit congue.
              </InfoContentText>
              <InfoContentText>
                Id ultricies orci elit praesent nunc tempus, at gravida amet.
                Elit dignissim augue pretium iaculis semper velit feugiat
                aliquam risus. Viverra aliquet id sodales at. Pretium diam porta
                lectus hendrerit ipsum ac. Imperdiet nullam vulputate neque
                laoreet imperdiet nulla. Sit amet penatibus nullam orci
                elementum ultricies elit congue. Dictum feugiat viverra tellus
                vestibulum ut nunc. Nisl, praesent sit tellus et euismod
                placerat ullamcorper.
              </InfoContentText>
            </InfoContentInner>
            <InfoContentButton>
              <a href="mailto:test@gmail.com">{t("info.1")}</a>
            </InfoContentButton>
          </InfoContent>
        </InfoBodyContent>
      </InfoBody>
    </InfoSection>
  );
}

export default InfoComponent;
