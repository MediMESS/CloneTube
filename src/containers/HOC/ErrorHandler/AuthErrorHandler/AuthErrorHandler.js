import React, { Component } from "react";
import Modal from "../../../../components/UI/Modal/Modal";

const AuthErrorHandler = (AuthComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          {this.props.error && <Modal />}
          <AuthComponent {...this.props} />
        </div>
      );
    }
  };
};

export default AuthErrorHandler;
