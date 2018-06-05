/**
 * create by miaoyu 2018/6/4
 */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../Home/Home";
import Login from "../../Login/Login";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div className="fill">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
