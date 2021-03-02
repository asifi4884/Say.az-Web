import React from "react";
import {
  DashboardSection,
  DashboardBody,
  DashboardBodyContent,
  DashboardBodyHeader,
  DashboardTitle,
  DashboardTools,
  DashboardData,
} from "./DashboardStyles";
import { useTranslation } from "react-i18next";
import { Pie } from "../../icons";
import DropDownComponent from "../UI/DropDown/DropDown";
import Charts from "./Charts";

export default function Dashboard() {
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
    <DashboardSection>
      <DashboardBody>
        <DashboardBodyContent>
          <DashboardBodyHeader>
            <DashboardTitle>
              <Pie />
              <h2>{t("navbar.7")}</h2>
            </DashboardTitle>
            <DashboardTools>
              <DropDownComponent options={options} clicked={() => {}} />
            </DashboardTools>
          </DashboardBodyHeader>
          <DashboardData>
            <Charts />
            <Charts />
          </DashboardData>
        </DashboardBodyContent>
      </DashboardBody>
    </DashboardSection>
  );
}
