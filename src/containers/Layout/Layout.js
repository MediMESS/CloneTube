import React from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

const Layout = (props) => {
  let hide = false;
  if (props.location.pathname === "/video") {
    hide = true;
  }

  return (
    <div className="layout-links">
      <Topbar
        mode={props.mode}
        authenticated={props.authenticated}
        logout={props.logout}
      />
      {hide ? null : (
        <Sidebar mode={props.mode} authenticated={props.authenticated} />
      )}
    </div>
  );
};

export default Layout;
