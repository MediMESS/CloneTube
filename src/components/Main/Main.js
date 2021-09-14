import React from "react";
import mainStyles from "./Main.module.css";

const Main = (props) => {
  return (
    <div
      className={[
        mainStyles.main,
        props.mode === "dark" ? "dark-mode" : "light-mode",
      ].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default Main;
