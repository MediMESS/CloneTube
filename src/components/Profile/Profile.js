import React, { useState } from "react";
import profileStyles from "./Profile.module.css";
import CSSTransition from "react-transition-group/CSSTransition";
import { ReactComponent as ArrowForwardIcon } from "./../../assets/icons/links/arrow_forward.svg";
import { ReactComponent as CloneTubeCreatorIcon } from "./../../assets/icons/links/clonetubeCreator.svg";
import { ReactComponent as HelpIcon } from "./../../assets/icons/links/help.svg";
import { ReactComponent as ReportHistoryIcon } from "./../../assets/icons/links/reportHistory.svg";
import { ReactComponent as SendFeedbackIcon } from "./../../assets/icons/links/sendFeedback.svg";
import { ReactComponent as SettingsIcon } from "./../../assets/icons/links/settings.svg";
import { ReactComponent as MembershipIcon } from "./../../assets/icons/links/membership.svg";
import { ReactComponent as YourChannelIcon } from "./../../assets/icons/links/yourchannel.svg";
import SideListLinks from "./../UI/SideListLinks/SideListLinks";

const Profile = (props) => {
  const seconds = 0.3;
  const timeout = seconds * 1000;
  const [isDropdown, togglDropdown] = useState(false);
  const links = [
    [
      { icon: <YourChannelIcon />, name: "Your Channel" },
      { icon: <MembershipIcon />, name: "Memberships" },
      { icon: <CloneTubeCreatorIcon />, name: "CloneTube Creator" },
    ],
    [
      { icon: <SettingsIcon />, name: "Settings" },
      { icon: <ReportHistoryIcon />, name: "Report History" },
      { icon: <HelpIcon />, name: "Help" },
      { icon: <SendFeedbackIcon />, name: "Send Feedback" },
    ],
    [
      {
        name: "Sign Out",
        icon: <ArrowForwardIcon />,
        onClick: props.logout,
      },
    ],
  ];
  const [profileImg, setProfileImg] = React.useState(null);

  React.useEffect(() => {
    import("./../../assets/channels/producdevity.png").then((img) => {
      setProfileImg(img.default);
    });
  }, [profileImg]);

  return (
    <div
      className={[
        profileStyles.profile,
        props.mode === "dark" ? profileStyles.dark : profileStyles.light,
      ].join(" ")}
    >
      <img
        src="https://randomwordgenerator.com/img/picture-generator/57e0d6424c5aa414f1dc8460962e33791c3ad6e04e507440762e7adc934cc7_640.jpg"
        alt="my-channel"
        onClick={() => togglDropdown((prevState) => !prevState)}
      />
      <CSSTransition
        classNames="dropdown-appear"
        in={isDropdown}
        timeout={timeout}
        mountOnEnter
        unmountOnExit
      >
        <div className={[profileStyles.dropdown, "layout-links"].join(" ")}>
          <div className={`${profileStyles["dropdown-channel"]} flex`}>
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e0d6424c5aa414f1dc8460962e33791c3ad6e04e507440762e7adc934cc7_640.jpg"
              alt="my-channel"
            />
            <div>
              <p className={props.mode === "dark" ? "white" : "dark"}>
                ProducDevity
              </p>
              <p className="primary">Manage your account</p>
            </div>
          </div>
          <hr className="light-hr" />
          <SideListLinks mode={props.mode} links={links[0]} />
          <hr className="light-hr" />
          <SideListLinks mode={props.mode} links={links[1]} />
          <hr className="light-hr" />
          <SideListLinks mode={props.mode} reverse links={links[2]} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Profile;
