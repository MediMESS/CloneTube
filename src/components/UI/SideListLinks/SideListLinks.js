import React from "react";
import sideListLinksStyles from "./SideListLinks.module.css";

const SideListLinks = (props) => {
  return (
    <ul
      className={[
        sideListLinksStyles["side-list-links"],
        props.mode === "dark"
          ? sideListLinksStyles.dark
          : sideListLinksStyles.light,
      ].join(" ")}
    >
      {props.links.map((link) => {
        if (props.reverse)
          return (
            <li key={link.name} onClick={link.onClick && link.onClick}>
              {link.name}
              {link.icon}
            </li>
          );
        else
          return (
            <li key={link.name} onClick={link.onClick && link.onClick}>
              {link.icon}
              {link.name}
            </li>
          );
      })}
    </ul>
  );
};

export default SideListLinks;
