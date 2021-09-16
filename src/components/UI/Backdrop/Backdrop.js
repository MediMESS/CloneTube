import React from "react";
import backdropStyles from "./Backdrop.module.css";
const Backdrop = (props) => {
  let className = null;
  if (props.show !== null) {
    className = props.show ? "show-true" : "show-false";
  }
  return (
    <div
      className={[backdropStyles.backdrop, backdropStyles[`${className}`]].join(
        " "
      )}
      onClick={props.onClick}
    ></div>
  );
};

export default Backdrop;
