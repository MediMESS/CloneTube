import React from "react";
import authFormStyles from "./AuthForm.module.css";
import { Field } from "formik";
import closeIconPath from "./../../../../assets/auth/form/close_icon.svg";
import doneIconPath from "./../../../../assets/auth/form/done_icon.svg";

const AuthForm = (props) => {
  return (
    <div>
      {props.form.map((input) => (
        <div
          key={input.label}
          className={[
            authFormStyles["input-group"],
            "layout-links",
            authFormStyles[`${props.mode}`],
          ].join(" ")}
        >
          <label htmlFor={input.name}>{input.label}</label>
          <div
            className={[
              authFormStyles.input,
              props.disabled && authFormStyles.disabled,
            ].join(" ")}
          >
            <div>
              <input.icon />
            </div>
            <Field
              name={input.name}
              type={input.type}
              className="layout-links"
              placeholder={input.placeholder}
            />
            {props.errors[`${input.name}`] &&
              props.touched[`${input.name}`] && (
                <div style={{ color: "red", fontSize: "15px" }}>
                  {props.errors[`${input.name}`]}
                </div>
              )}
          </div>
          <div className={authFormStyles["input-validation"]}>
            {props.touched[`${input.name}`] ? (
              props.errors[`${input.name}`] ? (
                <img src={closeIconPath} alt="error" />
              ) : (
                <img src={doneIconPath} alt="valide" />
              )
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthForm;
