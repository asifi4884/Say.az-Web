import React from "react";
import {
  Home,
  HomeHeader,
  HomeHeaderBalance,
  HomeBody,
  HomeBodyContent,
  HomeBodyHeader,
  HomeTitle,
  HomeTools,
  HomeData,
  HomeDataContent,
  HomeDataHeader,
  HomeDataQuarter,
  HomeDataLine,
  HomeDataInner,
  HomeDataItem,
} from "./HomeStyles";
import RSC from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";

import { Gains } from "../../icons";

import DropDownComponent from "../UI/DropDown/DropDown";
import DataCardComponent from "../UI/DataCard/DataCard";
import jordy from "../../assets/images/persons/jordyn.png";
import asif from "../../assets/images/persons/asif.png";
import lindsey from "../../assets/images/persons/lindsey.png";
import dulce from "../../assets/images/persons/dulce.png";
import terry from "../../assets/images/persons/terry.png";

export const persons = [
  {
    year: "2020",
    quarter: [
      {
        qua: "I",
        persons: [
          {
            name: "Jordyn Levin",
            img: jordy,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Asif İbrahimov",
            img: asif,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Lindsey George",
            img: lindsey,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Dulce Carder",
            img: dulce,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
        ],
      },
      {
        qua: "II",
        persons: [
          {
            name: "Terry Donin",
            img: terry,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Terry Donin",
            img: terry,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Asif İbrahimov",
            img: asif,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
          {
            name: "Lindsey George",
            img: lindsey,
            service: "",
            voen: "278624872462897",
            price: "1200",
            date: "29.08.2020",
          },
        ],
      },
    ],
  },
];

function HomePage() {
  const { t } = useTranslation();
  const options = [
    {
      value: 0,
      label: `${t("dropdown.1")}`,
    },
    {
      value: 1,
      label: `${t("dropdown.2")}`,
    },
    {
      value: 2,
      label: `${t("dropdown.3")}`,
    },
  ];
  return (
    <Home>
      <HomeHeader>
        <HomeHeaderBalance>
          <span>3,200</span>
          <small>.99 AZN</small>
        </HomeHeaderBalance>
      </HomeHeader>
      <HomeBody>
        <HomeBodyContent>
          <RSC>
            <HomeBodyHeader>
              <HomeTitle>
                <Gains />
                <h2>{t("navbar.1")}</h2>
              </HomeTitle>
              <HomeTools>
                <DropDownComponent options={options} clicked={() => {}} />
              </HomeTools>
            </HomeBodyHeader>
            <HomeData>
              {persons.map((p) =>
                p.quarter.map((q, i) => (
                  <HomeDataContent key={i}>
                    <HomeDataHeader>
                      <HomeDataQuarter>
                        {p.year}, {q.qua} Rüb
                      </HomeDataQuarter>
                      <HomeDataLine />
                    </HomeDataHeader>
                    <HomeDataInner>
                      {q.persons.map((pr, index) => (
                        <HomeDataItem key={index}>
                          <DataCardComponent
                            name={pr.name}
                            img={pr.img}
                            date={pr.date}
                            service={pr.service}
                            voen={pr.voen}
                            price={pr.price}
                            type="home"
                          />
                        </HomeDataItem>
                      ))}
                    </HomeDataInner>
                  </HomeDataContent>
                ))
              )}
            </HomeData>
          </RSC>
        </HomeBodyContent>
      </HomeBody>
    </Home>
  );
}

export default HomePage;
