import React from "react";
import {
  Bank,
  BankBody,
  BankBodyContent,
  BankBodyHeader,
  BankTitle,
  BankTools,
  BankContainer,
} from "./BankStyles";
import RSC from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";

import { Receipt } from "../../icons";
import CreateLink from "../UI/CreateLink/CreateLink";
import BankCard from "./BankCard";

import master from "../../assets/images/mastercard.png";
import visa from "../../assets/images/visa.png";
export const cards = [
  {
    img: master,
  },
  {
    img: visa,
  },
  {
    img: visa,
  },
  {
    img: master,
  },
  {
    img: master,
  },
];

function BankComponent() {
  const { t } = useTranslation();
  return (
    <Bank>
      <BankBody>
        <BankBodyContent>
          <RSC>
            <BankBodyHeader>
              <BankTitle>
                <Receipt />
                <h2>{t("bank.1")}</h2>
              </BankTitle>
              <BankTools>
                <CreateLink
                  link="/accounts/create"
                  text={`${t("buttons.1")}`}
                />
              </BankTools>
            </BankBodyHeader>
            <BankContainer>
              {cards.map((c, i) => (
                <BankCard key={i} img={c.img} />
              ))}
            </BankContainer>
          </RSC>
        </BankBodyContent>
      </BankBody>
    </Bank>
  );
}

export default BankComponent;
