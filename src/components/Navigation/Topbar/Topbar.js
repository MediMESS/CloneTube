import React from "react";
import topbarStyles from "./Topbar.module.css";
import logoPath from "./../../../assets/logo.svg";
import { ReactComponent as CameraIcon } from "./../../../assets/icons/topbar/camera.svg";
import { ReactComponent as SearchIcon } from "./../../../assets/icons/topbar/search.svg";
import { ReactComponent as MicIcon } from "./../../../assets/icons/topbar/mic.svg";
import Notification from "./../../UI/Notification/Notification";
import SliderMode from "./../../UI/Slider/Slider";
import Profile from "./../../Profile/Profile";

const Topbar = (props) => {
  return (
    <div
      className={[
        topbarStyles.Topbar,
        "d-pr",
        props.mode === "dark"
          ? `${topbarStyles.dark} dark-mode`
          : `${topbarStyles.light} light-mode`,
      ].join(" ")}
    >
      <div className={[topbarStyles.left, "flex"].join(" ")}>
        <div className={topbarStyles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={topbarStyles.logo}>
          <div className={topbarStyles["logo-container"]}>
            <div className="flex">
              <img src={logoPath} alt="Logo" />
              <h1>
                CLONE<span className="primary">TUBE</span>
              </h1>
            </div>
            <p>enjoy freedom</p>
          </div>
        </div>
      </div>

      <div className={`${topbarStyles.right} flex`}>
        <div className={topbarStyles.searchbar}>
          <SearchIcon className={topbarStyles["search-action"]} />
          <input type="text" placeholder="Search" />
          <MicIcon className={topbarStyles["voice"]} />
        </div>

        <div className={`${topbarStyles.actions} flex`}>
          <div className={[topbarStyles.upload, "flex"].join(" ")}>
            <CameraIcon mode={props.mode} />
            Upload
          </div>
          {props.authenticated && <Notification mode={props.mode} />}
          <SliderMode />
          {props.authenticated ? (
            <Profile mode={props.mode} logout={props.logout} />
          ) : (
            <div className={["btn-signin", topbarStyles.signin].join(" ")}>
              Sign In
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
