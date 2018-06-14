import React from "react";
import api from "../../api/api";
import Goods from "./Goods/Goods";
import Mine from "./Mine/Mine";
import UserDetail from "./UserDetail/UserDetail";

const MAP_TAB = {
  USER_DETAIL: "UserDetail",
  GOODS: "Goods",
  MINE: "Mine",
};
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      curTab: MAP_TAB.MINE,
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
  _handleSwitchTab = key => {
    const { curTab } = this.state;
    if (key === curTab) {
      return;
    }
    this.setState({
      curTab: key
    });
  };
  _renderNavRoot = curTab => {
    var d = [
      { iconClass: "fa-home", name: "首页", key: MAP_TAB.USER_DETAIL },
      { iconClass: "fa-shopping-cart", name: "商品", key: MAP_TAB.GOODS },
      { iconClass: "fa-user", name: "我的", key: MAP_TAB.MINE }
    ];
    return (
      <div className="navRoot">
        {d.map((e, i) => {
          var activeClass = curTab === e.key ? "active" : "";
          return (
            <a
              onClick={() => {
                this._handleSwitchTab(e.key);
              }}
              key={e.key}
              href="javascript:void(0);"
              className={"navLink " + activeClass}
            >
              <i
                className={"fa navLinkIco " + e.iconClass}
                aria-hidden="true"
              />
              <span className="navLinkText">{e.name}</span>
            </a>
          );
        })}
      </div>
    );
  };
  _renderContent = curTab => {
    switch (curTab) {
      case MAP_TAB.USER_DETAIL:
        return <UserDetail />;
      case MAP_TAB.GOODS:
        return <Goods />;
      case MAP_TAB.MINE:
        return <Mine />;
      default:
        return <div>no content</div>
    }
  };
  render() {
    const { curTab } = this.state;
    return (
      <div className="fill flex-column">
        <div style={{ width: "100%", flex: 1, overflow: 'scroll' }}>
          {this._renderContent(curTab)}
        </div>
        {this._renderNavRoot(curTab)}
      </div>
    );
  }
}

