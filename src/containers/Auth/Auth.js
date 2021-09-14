import React, { Component } from "react";
import { connect } from "react-redux";
import authStyles from "./Auth.module.css";
import AuthForm from "../../components/UI/Forms/AuthForm/AuthForm";
import { ReactComponent as PasswordIcon } from "./../../assets/auth/form/channel_icon.svg";
import { ReactComponent as TitleIcon } from "./../../assets/auth/title icon.svg";
import { ReactComponent as ChannelIcon } from "./../../assets/auth/form/avatar_icon.svg";
import { signin, signup } from "./../../store/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ReactComponent as ArrowForwardIcon } from "./../../assets/icons/links/arrow_forward.svg";

const authenticateSchema = Yup.object().shape({
  channel: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(24, "Too Long!")
    .required("Required"),
});

class Auth extends Component {
  state = {
    authMode: "signin",
  };

  setAuthMode = () => {
    this.setState((prevState) => ({
      authMode: prevState.authMode === "signin" ? "signup" : "signin",
    }));
  };

  onSubmit = (values) => {
    if (this.state.authMode === "signin") this.props.onSignin(values);
    else this.props.onSignup(values);
  };

  render() {
    let form = [
      {
        placeholder: "Enter your channel's name",
        label: "Channel",
        icon: ChannelIcon,
        name: "channel",
        type: "text",
      },
      {
        placeholder: "Enter your password",
        label: "Password",
        icon: PasswordIcon,
        name: "password",
        type: "password",
      },
    ];

    let titleMode = "In";

    let redirectText = "You don't have an account yet,";
    let initialValues = {
      channel: "",
      password: "",
    };

    if (this.state.authMode === "signup") {
      titleMode = "Up";
      redirectText = "You already have an account,";
      form[0].placeholder = "Enter a name for your channel";
      form[1].placeholder = "Enter a password for your channel";
    }

    return (
      <div
        className={[authStyles.auth, authStyles[`${this.props.mode}`]].join(
          " "
        )}
      >
        <div className={authStyles.authContainer}>
          <div className="t-center">
            <h1 className={authStyles.heading}>
              Sign <span className="primary">{titleMode}</span>
            </h1>
            <TitleIcon />
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => this.onSubmit(values)}
            validationSchema={authenticateSchema}
          >
            {({ errors, touched, resetForm }) => (
              <Form>
                <AuthForm
                  mode={this.props.mode}
                  form={form}
                  errors={errors}
                  touched={touched}
                />
                <p>
                  {redirectText}{" "}
                  <span
                    className="primary"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      resetForm();
                      this.setAuthMode();
                    }}
                  >
                    Sign {titleMode === "In" ? "Up" : "In"}
                  </span>
                </p>
                <button type="submit" className="btn-signin flex">
                  Sign {titleMode}
                  <ArrowForwardIcon />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.app.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignin: (values) => dispatch(signin(values)),
    onSignup: (values) => dispatch(signup(values)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
