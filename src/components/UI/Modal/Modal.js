import React from "react";
import Backdrop from "./../Backdrop/Backdrop";
import modalStyles from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.close} show={props.show} />
      <CSSTransition
        in={props.show}
        timeout={300}
        classNames="fade-in"
        mountOnEnter
        unmountOnExit
      >
        <div>
          <div className={modalStyles.modal}>{props.children}</div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
