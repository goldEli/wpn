import React from "react";
import {
  Tab,
  TabBarItem,
} from "react-weui";
import api from "../../api/api";
import Goods from "./Goods/Goods";
import Mine from "./Mine/Mine";
import UserDetail from "./UserDetail/UserDetail";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }
  componentDidMount() {
    this._setUsername();
  }
  _handleLogout = () => {
    api.logout();
  };
  _setUsername = () => {
    api.userInfo({
      success: data => {
        console.log(data);
        this.setState({ userInfo: data });
      }
    });
  };

  render() {
    return (
      <div className="fill">
        <Tab type="tabbar">
          <TabBarItem
            style={{ height: "2rem", fontSize: "0.5rem" }}
            icon={<i className="fa fa-home navLinkIco" />}
            label="统计"
          >
            <UserDetail />
          </TabBarItem>
          <TabBarItem
            style={{ height: "2rem", fontSize: "0.5rem" }}
            icon={<i className="fa fa-home navLinkIco" />}
            label="商品"
          >
            <Goods />
          </TabBarItem>
          <TabBarItem
            style={{ height: "2rem", fontSize: "0.5rem" }}
            icon={<i className="fa fa-home navLinkIco" />}
            label="我的"
          >
            <Mine />
          </TabBarItem>
        </Tab>
      </div>
    );
  }
}
