import React from "react";
import Backdrop from "./../Backdrop/Backdrop";
import modalStyles from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="fade-in"
      mountOnEnter
      unmountOnExit
    >
      <div>
        <Backdrop onClick={props.close} />
        <div className={modalStyles.modal}>{props.children}</div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
