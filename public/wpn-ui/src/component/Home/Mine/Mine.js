import React from "react";
import { Page, Grids } from "react-weui";
import api from '../../../api/api';

const data = [
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "下级代理管理",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "添加代理",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "下级代理审核",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "我的订单",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "收货地址管理",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "修改个人信息",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "修改密码",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "我的奖金",
    href: "javascript:;"
  },
  {
    icon: <i onClick={this._handleLogout} className="fa fa-home navLinkIco" />,
    label: "退出",
    href: "javascript:;"
  }
];

export default class Mine extends React.Component {
  _handleLogout = () => {
    api.logout()
  }
  render() {
    return (
      <div className="fill" style={{ fontSize: "0.2rem" }}>
        <Page className="grid" title="Grid" subTitle="九宫格">
          <Grids data={data} />
        </Page>
      </div>
    );
  }
}
