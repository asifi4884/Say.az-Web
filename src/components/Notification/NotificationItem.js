import React from "react";
import {
  NotificationCard,
  NotificationCardBody,
  NotificationCardIcon,
  NotificationContent,
} from "./NotificationStyles";

import { Mark, GainsDown } from "../../icons";

const notificationItem = ({ type, text, date, from }) => {
  return (
    <NotificationCard>
      <NotificationCardBody>
        <NotificationCardIcon className={type ? "green" : "red"}>
          {type ? <GainsDown /> : <Mark />}
        </NotificationCardIcon>
        <NotificationContent>
          <p className={type ? "come" : ""}>{text}</p>
          {from && <span>{from}</span>}
          <span>{date}</span>
        </NotificationContent>
      </NotificationCardBody>
    </NotificationCard>
  );
};
export default notificationItem;
