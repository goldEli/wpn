/**
 * create by miaoyu 2018/6/4
 */

import React from "react";
import { BrowserRouter,HashRouter, Route } from "react-router-dom";

import Home from "../../Home/Home";
import Login from "../../Login/Login";

export default class Layout extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="fill">
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </HashRouter>
    );
  }
}
