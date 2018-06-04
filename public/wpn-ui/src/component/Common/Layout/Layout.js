/**
 * create by miaoyu 2018/6/4
 */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../Home/Home";
import Goods from "../../Goods/Goods";
import Mine from "../../Mine/Mine";
import Login from "../../Login/Login";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/goods" component={Goods} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
