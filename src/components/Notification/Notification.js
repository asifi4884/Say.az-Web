import React from "react";
import {
  Notification,
  NotificationBody,
  NotificationBodyContent,
  NotificationBodyHeader,
  NotificationTitle,
  NotificationData,
} from "./NotificationStyles";
import { useTranslation } from "react-i18next"

import { Bell } from "../../icons";
import NotificationItem from "./NotificationItem";

function NotificationComponent() {
  const { t } = useTranslation();
  return (
    <Notification>
      <NotificationBody>
        <NotificationBodyContent>
          <NotificationBodyHeader>
            <NotificationTitle>
              <Bell />
              <h2>{t("navbar.6")}</h2>
            </NotificationTitle>
          </NotificationBodyHeader>
          <NotificationData>
            <NotificationItem
              type={true}
              text="3,200 AZN balansınıza yükləndi."
              date="29.08.2020"
              from="Asif İbrahimov"
            />
            <NotificationItem
              type={false}
              text="Xəbərdarlıq! 30 Noyabr 2020 birinci rübün hesabatları verilməlidir"
              date="29.08.2020"
            />
            <NotificationItem
              type={false}
              text="Xəbərdarlıq! 30 Noyabr 2020 birinci rübün hesabatları verilməlidir"
              date="29.08.2020"
            />
            <NotificationItem
              type={true}
              text="3,200 AZN balansınıza yükləndi."
              date="29.08.2020"
              from="Asif İbrahimov"
            />
            <NotificationItem
              type={true}
              text="3,200 AZN balansınıza yükləndi."
              date="29.08.2020"
              from="Asif İbrahimov"
            />
          </NotificationData>
        </NotificationBodyContent>
      </NotificationBody>
    </Notification>
  );
}

export default NotificationComponent;
