import React from "react";
import api from "../../../api/api";
import OrderManager from "../OrderManager/OrderManager";
import AgenciesAutid from "../AgenciesAutid/AgenciesAutid";
import Common from "../../Common/Common";
import AddAgency from "../AddAgency/AddAgency"
const { renderSubPage } = Common;

const data = [
  {
    icon: "fa-users",
    label: "下级代理管理",
  },
  {
    icon: "fa-user-plus",
    label: "添加代理",
    onClick: () => {
      renderSubPage({ title: "添加代理", children: <AddAgency /> });
    }
  },
  {
    icon: "fa-drivers-license",
    label: "下级代理审核",
    onClick: () => {
      renderSubPage({ title: "下级代理审核", children: <AgenciesAutid /> });
    }
  },
  {
    icon: "fa-paste",
    label: "我的订单",
    onClick: () => {
      renderSubPage({ title: "我的订单", children: <OrderManager /> });
    }
  },
  {
    icon: "fa-address-book-o",
    label: "收货地址管理",
  },
  {
    icon: "fa-edit",
    label: "修改个人信息",
  },
  {
    icon: "fa-key",
    label: "修改密码",
  },
  {
    icon: "fa-cny",
    label: "我的奖金",
  },
  {
    icon: "fa-power-off",
    label: "注销",
    onClick: () => {
      api.logout()
    }
  }
];

export default class Mine extends React.Component {
  _handleLogout = () => {
    api.logout();
  };
  _renderContent = () => {
    return (
      <div className="weui-grids" style={{paddingTop:'1rem'}}>
        {data.map((e, i) => {
          const {label, icon, onClick} = e;
          return (
            <div onClick={onClick} key={i} style={{ width: "33.3%", float: 'left', padding:"1rem 0 1rem 0",border:'1px solid grey' }}>
              <div className="weui-grid__label" style={{ fontSize: "0.4rem" }}>
                <i
                  className={"fa navLinkIco "+icon}
                  style={{ fontSize: "0.8rem", display: "block" }}
                  aria-hidden="true"
                />
              </div>
              <div className="weui-grid__label" style={{ fontSize: "0.3rem" }}>
                {label}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="fill" style={{ fontSize: "0.2rem" }}>
        {this._renderContent()}
      </div>
    );
  }
}
