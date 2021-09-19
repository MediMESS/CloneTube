import React, { Component } from "react";
import Modal from "../../../../components/UI/Modal/Modal";
import oopsPicturePath from "./../../../../assets/modal/oops.png";

const AuthErrorHandler = (AuthComponent) => {
  return class extends Component {
    closeModal = () => {
      this.props.resetAuth();
    };

    render() {
      const msg = {
        INVALID_PASSWORD: "Incorrect Email or Password",
        EMAIL_EXISTS: "This Channel already exist",
        EMAIL_NOT_FOUND: "Incorrect Email or Password",
      };
      return (
        <div>
          <Modal show={!!this.props.error} close={this.closeModal}>
            <h1>Ooops, Something Wrong</h1>
            <div>
              <img src={oopsPicturePath} alt="oopsImage" />
            </div>
            <p>
              {msg[this.props.error]
                ? msg[this.props.error]
                : "Please try again, later"}
            </p>
          </Modal>
          <AuthComponent {...this.props} />
        </div>
      );
    }
  };
};

export default AuthErrorHandler;
