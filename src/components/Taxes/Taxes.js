import React, { useState } from "react";
import {
  Taxes,
  TaxesBody,
  TaxesBodyContent,
  TaxesBodyHeader,
  TaxesTitle,
  TaxesTools,
  TaxesData,
  TaxesDataItem,
} from "./TaxesStyles";
import RSC from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";

import { Taxe } from "../../icons";
import DropDown from "../UI/DropDown/DropDown";
import CreateLink from "../UI/CreateLink/CreateLink";
import DataCard from "../UI/DataCard/DataCard";

function TaxesComponent() {
  const { t } = useTranslation();
  const taxeTypes = [
    {
      value: 1,
      label: `${t("taxe.5")}`,
    },
    {
      value: 2,
      label: `${t("taxe.2")}`,
    },
    {
      value: 3,
      label: `${t("taxe.3")}`,
    },
    {
      value: 4,
      label: `${t("taxe.4")}`,
    },
  ];
  const taxes = [
    {
      name: `${t("taxe.2")}`,
      periodPrice: "300AZN",
      taxePrice: "50AZN",
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: null,
    },
    {
      name: `${t("taxe.4")}`,
      periodPrice: null,
      taxePrice: null,
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: "",
    },
    {
      name: `${t("taxe.4")}`,
      periodPrice: null,
      taxePrice: null,
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: "Yanvar, Fevral, Mart",
    },
    {
      name: `${t("taxe.3")}`,
      periodPrice: null,
      taxePrice: "50AZN",
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: "100,000AZN",
      totalPrice: "300,000AZN",
      action: null,
    },
    {
      name: `${t("taxe.2")}`,
      periodPrice: "300AZN",
      taxePrice: "50AZN",
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: null,
    },
    {
      name: `${t("taxe.4")}`,
      periodPrice: null,
      taxePrice: null,
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: "",
    },
    {
      name: `${t("taxe.4")}`,
      periodPrice: null,
      taxePrice: null,
      date: "2020, I Rüb",
      totalDate: "29.08.2020",
      costs: null,
      totalPrice: null,
      action: "Yanvar, Fevral, Mart",
    },
  ];
  const [taxe, setTaxe] = useState(1);

  return (
    <Taxes>
      <TaxesBody>
        <TaxesBodyContent>
          <RSC>
            <TaxesBodyHeader>
              <TaxesTitle>
                <Taxe />
                <h2>
                  {taxe === 1
                    ? `${t("navbar.3")}`
                    : taxe === 2
                    ? `${t("taxe.2")}`
                    : taxe === 3
                    ? `${t("taxe.3")}`
                    : taxe === 4 && `${t("taxe.4")}`}
                </h2>
              </TaxesTitle>
              <TaxesTools>
                <DropDown
                  options={taxeTypes}
                  clicked={setTaxe}
                  customClass="width"
                />
                <CreateLink text={`${t("buttons.2")}`} link="/taxes/create" />
              </TaxesTools>
            </TaxesBodyHeader>
            <TaxesData>
              {taxes &&
                taxes.map((t, i) => (
                  <TaxesDataItem key={i}>
                    <DataCard
                      name={t.name}
                      date={t.date}
                      taxePrice={t.taxePrice}
                      periodPrice={t.periodPrice}
                      totalDate={t.totalDate}
                      costs={t.costs}
                      action={t.action}
                      totalPrice={t.totalPrice}
                      type="taxe"
                    />
                  </TaxesDataItem>
                ))}
            </TaxesData>
          </RSC>
        </TaxesBodyContent>
      </TaxesBody>
    </Taxes>
  );
}
export default TaxesComponent;
