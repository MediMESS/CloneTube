import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Layout from "./containers/Layout/Layout";
import Main from "./components/Main/Main";
import Auth from "./containers/Auth/Auth";
import History from "./containers/History/History";
import Video from "./containers/Video/Video";
import Search from "./containers/Search/Search";
import Discover from "./containers/Discover/Discover";
import Channel from "./containers/Channel/Channel";
import { logout } from "./store/actions";

class App extends Component {
  render() {
    let routes = [
      <Route component={Auth} path="/auth" exact key="auth" />,
      <Route component={Video} path="/video/:id" key="video" />,
      <Route component={Channel} path="/channel/:id" key="channel" />,
      <Route component={Search} path="/search" key="search" />,
      <Route component={Discover} path="/" exact key="discover" />,
    ];

    if (this.props.authenticated) {
      routes.shift();
      routes.push(<Route component={History} path="/history" key="history" />);
    }
    routes.push(<Redirect to="/" key="redirect" />);

    return (
      <div>
        <Layout {...this.props} />
        <Main mode={this.props.mode}>
          <Switch>{routes}</Switch>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.app.mode,
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
