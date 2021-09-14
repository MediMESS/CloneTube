import React from "react";
import { Link } from "react-router-dom";
import sidebarStyles from "./Sidebar.module.css";
import SideListLinks from "./../../UI/SideListLinks/SideListLinks";
import { ReactComponent as SearchIcon } from "./../../../assets/icons/topbar/search.svg";
import { ReactComponent as TrendingIcon } from "./../../../assets/icons/links/Trending.svg";
import { ReactComponent as FollowingIcon } from "./../../../assets/icons/links/Following.svg";
import { ReactComponent as FavouriteIcon } from "./../../../assets/icons/links/Favourite.svg";
import { ReactComponent as StacksIcon } from "./../../../assets/icons/links/Stacks.svg";
import { ReactComponent as HistoryIcon } from "./../../../assets/icons/links/History.svg";
import { ReactComponent as PlaylistIcon } from "./../../../assets/icons/links/Playlist.svg";
import { ReactComponent as ArrowDownIcon } from "./../../../assets/icons/links/Arrow_Down.svg";
import { ReactComponent as HelpIcon } from "./../../../assets/icons/links/help.svg";
import { ReactComponent as ReportHistoryIcon } from "./../../../assets/icons/links/reportHistory.svg";
import { ReactComponent as SendFeedbackIcon } from "./../../../assets/icons/links/sendFeedback.svg";
import { ReactComponent as SettingsIcon } from "./../../../assets/icons/links/settings.svg";
import { ReactComponent as ArrowForwardIcon } from "./../../../assets/icons/links/arrow_forward.svg";

import freeCodeCampPath from "./../../../assets/channels/freecodecamp.png";
import aliAbdaalPath from "./../../../assets/channels/AliAbdaal.png";
import blizzardEntertainmentPath from "./../../../assets/channels/Blizzard Entertainment.png";
import figmaPath from "./../../../assets/channels/Figma.png";

const Sidebar = (props) => {
  const links = [
    [
      { icon: <SearchIcon />, name: "Discover", to: "/" },
      { icon: <TrendingIcon />, name: "Trending", to: "/trending" },
      { icon: <FollowingIcon />, name: "Following", to: "/following" },
    ],
    [
      {
        icon: <FavouriteIcon />,
        name: "Favourite",
        to: "/favourite",
      },
      {
        icon: <StacksIcon />,
        name: "My Videos",
        to: "/channel",
      },
      {
        icon: <HistoryIcon />,
        name: "History",
        to: "history",
      },
    ],
    [
      {
        icon: <PlaylistIcon />,
        name: "Create Playlist",
        to: "/auth",
      },
    ],
    [
      {
        icon: <img src={freeCodeCampPath} alt="channel" />,
        name: "freeCodeCamp.org",
      },
      {
        icon: <img src={figmaPath} alt="channel" />,
        name: "Figma",
      },
      {
        icon: <img src={aliAbdaalPath} alt="channel" />,
        name: "Ali Abdaal",
      },
      {
        icon: <img src={blizzardEntertainmentPath} alt="channel" />,
        name: "Blizzard Entertainment",
      },
      { icon: <ArrowDownIcon />, name: "Show 45 More" },
    ],
    [
      { icon: <SettingsIcon />, name: "Settings", to: "/settings" },
      { icon: <ReportHistoryIcon />, name: "Report History" },
      { icon: <HelpIcon />, name: "Help" },
      { icon: <SendFeedbackIcon />, name: "Send Feedback" },
    ],
  ];

  if (props.authenticated) {
    links[2] = [
      { icon: <PlaylistIcon />, name: "Coding Music" },
      { icon: <PlaylistIcon />, name: "Best Cat Videos" },
      { icon: <PlaylistIcon />, name: "Motivation" },
      { icon: <ArrowDownIcon />, name: "Show More" },
    ];
  }
  return (
    <div
      className={[
        sidebarStyles.sidebar,
        props.mode === "dark"
          ? `${sidebarStyles.dark} dark-mode`
          : `${sidebarStyles.light} light-mode`,
      ].join(" ")}
    >
      <div className="mb-30">
        <SideListLinks links={links[0]} mode={props.mode} />
      </div>
      <div className="mb-30">
        <h2>YOUR VIDEOS</h2>
        <SideListLinks links={links[1]} mode={props.mode} />
      </div>
      <div className="mb-30">
        <h2>MY PLAYLIST</h2>
        <SideListLinks links={links[2]} mode={props.mode} />
      </div>
      <div className="mb-30">
        <h2>SUBSCRIPTIONS</h2>
        {props.authenticated ? (
          <SideListLinks links={links[3]} mode={props.mode} />
        ) : (
          <div className={sidebarStyles["signin-container"]}>
            <div className="btn-signin">
              <Link to="/auth">
                Sign In <ArrowForwardIcon />
              </Link>
            </div>
            <p>
              Subscribe to the content that you love, Join the community by{" "}
              <Link to="/auth">Sign In</Link>
            </p>
          </div>
        )}
      </div>
      <hr className="light-hr mb-20 " />
      <SideListLinks links={links[4]} mode={props.mode} />
      <hr className="light-hr mt-20 mb-20" />
      <div>
        <div>
          <span>About</span>
          <span>Contact Us</span>
          <span>Copyright</span>
          <span>Developers</span>
        </div>
        <div>
          <span>Terms</span>
          <span>Policy & Safety</span>
          <span>Privacy</span>
        </div>
        <p>Copyright © 2021 All Rights Reserved To CloneTube</p>
      </div>
    </div>
  );
};

export default Sidebar;
