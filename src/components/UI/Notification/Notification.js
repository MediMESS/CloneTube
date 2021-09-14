import React from "react";
import { ReactComponent as NotificationIcon } from "./../../../assets/icons/topbar/notifications.svg";
import notificationStyles from "./Notification.module.css";

const Notification = (props) => {
  return (
    <div
      className={[
        props.mode === "dark" && notificationStyles.dark,
        notificationStyles.notification,
      ].join(" ")}
    >
      <NotificationIcon />
      <div>8</div>
    </div>
  );
};

export default Notification;
