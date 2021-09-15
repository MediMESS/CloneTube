import React from "react";
import backdropStyles from "./Backdrop.module.css";
const Backdrop = (props) => {
  return (
    <div className={backdropStyles.backdrop} onClick={props.onClick}></div>
  );
};

export default Backdrop;
