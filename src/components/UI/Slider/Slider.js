import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";

import sliderStyles from "./Slider.module.css";
import nightIconPath from "./../../../assets/icons/topbar/night.svg";
import morningIconPath from "./../../../assets/icons/topbar/morning.svg";

export const Slider = (props) => {
  const [slideDirection, togglSlide] = React.useState("right");
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
        togglSlide((prevState) => {
          if (prevState === "right") return "left";
          return "right";
        });
      }}
      className={[
        slideDirection === "right"
          ? sliderStyles.slideLeft
          : sliderStyles.slideRight,
        props.sliderClassName,
        sliderStyles.slider,
      ].join(" ")}
    >
      <div>
        {props.iconPath && <img src={props.iconPath} alt={props.mode} />}
      </div>
    </div>
  );
};

const SliderMode = (props) => {
  let modeTitle = "Light",
    sliderClassName = "bg-dark-light",
    iconPath = morningIconPath;

  let modeSet = "dark";

  if (props.mode === "dark") {
    modeTitle = "Night";
    sliderClassName = "bg-white";
    iconPath = nightIconPath;
    modeSet = "light";
  }

  return (
    <div className={`${sliderStyles.sliderMode} flex flex-column`}>
      {modeTitle}
      <Slider
        onClick={() => {
          props.setMode(modeSet);
        }}
        iconPath={iconPath}
        sliderClassName={sliderClassName}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.app.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (mode) => dispatch(actions.setMode(mode)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SliderMode);
