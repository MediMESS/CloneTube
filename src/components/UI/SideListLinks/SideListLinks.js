import React from "react";
import sideListLinksStyles from "./SideListLinks.module.css";
import { Link } from "react-router-dom";

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
            <li key={link.name}>
              <Link
                className={sideListLinksStyles.link}
                to={link.to ? link.to : "/"}
                onClick={link.onClick && link.onClick}
              >
                {link.name}
                {link.icon}
              </Link>
            </li>
          );
        else
          return (
            <li key={link.name}>
              <Link
                className={sideListLinksStyles.link}
                to={link.to ? link.to : "/"}
                onClick={link.onClick && link.onClick}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          );
      })}
    </ul>
  );
};

export default SideListLinks;
