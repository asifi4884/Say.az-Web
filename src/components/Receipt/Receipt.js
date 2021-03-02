import React, { useState } from "react";
import {
  ReceiptSection,
  ReceiptBody,
  ReceiptBodyContent,
  ReceiptBodyHeader,
  ReceiptTitle,
  ReceiptTools,
  ReceiptData,
  ReceiptDataItem,
} from "./ReceiptStyles";
import RSC from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";

import { Receipt } from "../../icons";
import DropDown from "../UI/DropDown/DropDown";
import CreateLink from "../UI/CreateLink/CreateLink";
import DataCard from "../UI/DataCard/DataCard";
import jordy from "../../assets/images/persons/jordyn.png";
import asif from "../../assets/images/persons/asif.png";
import lindsey from "../../assets/images/persons/lindsey.png";
import dulce from "../../assets/images/persons/dulce.png";

export const persons = [
  {
    name: "Jordyn Levin",
    img: jordy,
    service: "Dizayn xidməti",
    voen: "278624872462897",
    price: "1200",
    date: "29.08.2020",
    approved: true,
  },
  {
    name: "Asif İbrahimov",
    img: asif,
    service: "Dizayn xidməti",
    voen: "",
    price: "1200",
    date: "29.08.2020",
    approved: true,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Dulce Carder",
    img: dulce,
    service: "Dizayn xidməti",
    voen: "278624872462897",
    price: "1200",
    date: "29.08.2020",
    approved: true,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "278624872462897",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "278624872462897",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
  {
    name: "Lindsey George",
    img: lindsey,
    service: "Dizayn xidməti",
    voen: "278624872462897",
    price: "1200",
    date: "29.08.2020",
    approved: false,
  },
];

function ReceiptComponent() {
  const { t } = useTranslation();
  const [recType, SetReceiptType] = useState(1);

  const receiptType = [
    {
      value: 1,
      label: `${t("dropdown.4")}`,
    },
    {
      value: 2,
      label: `${t("dropdown.5")}`,
    },
  ];

  return (
    <ReceiptSection>
      <ReceiptBody>
        <ReceiptBodyContent>
          <RSC>
            <ReceiptBodyHeader>
              <ReceiptTitle>
                <Receipt />
                <h2>
                  {recType === 1 ? `${t("receipt.1")}` : `${t("receipt.2")}`}
                </h2>
              </ReceiptTitle>
              <ReceiptTools>
                <DropDown options={receiptType} clicked={SetReceiptType} />
                {recType === 1 && (
                  <CreateLink
                    text={`${t("buttons.2")}`}
                    link="/receipt/create"
                  />
                )}
              </ReceiptTools>
            </ReceiptBodyHeader>
            <ReceiptData>
              {persons &&
                persons.map((p, i) => (
                  <ReceiptDataItem key={i}>
                    <DataCard
                      name={p.name}
                      img={p.img}
                      date={p.date}
                      voen={p.voen}
                      price={p.price}
                      service={p.service}
                      approved={p.approved}
                      type={recType === 1 ? "receipt" : "receiptCome"}
                    />
                  </ReceiptDataItem>
                ))}
            </ReceiptData>
          </RSC>
        </ReceiptBodyContent>
      </ReceiptBody>
    </ReceiptSection>
  );
}

export default ReceiptComponent;
