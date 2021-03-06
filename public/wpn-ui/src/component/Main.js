/**
 * create by miaoyu 2018/6/4
 */

import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Login/Login";
import SignIn from './SignIn/SignIn';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="fill box">
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/SignIn" component={SignIn} />
        </div>
      </HashRouter>
    );
  }
}
