import React from "react";
import api from "../../../api/api";
import utils from "../../../libs/utils/utils";

const MAP_TAB = {
  ALL: "ALL",
  PAID: 0,
  NOT_PAID: 1
};
const MAP_PAY_STATUS = {
  0: "已付款",
  1: "未付款",
}

export default class OrderManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: MAP_TAB.ALL,
      ordersData: []
    };
  }
  componentDidMount() {
    this._setOrdersData()
  }
  _setOrdersData = () => {
    api.findAllOrders({
      success: data => {
        this.setState({ ordersData: data });
      }
    });
  };
  _handleSwitchTab = (curTab, key) => {
    if (curTab === key) {
      return;
    }
    this.setState({ curTab: key });
  };
  _handleCalculate = (data) => {
    const a = JSON.parse(data);
    let totalPrice = 0;
    let amount = 0;
    a.forEach((e,i) => {
      const {price, count} = e;
      totalPrice = utils.math.add(totalPrice, utils.math.mul(price, count));
      amount += count;
    })
    return {totalPrice, amount};
  }
  
  _renderTab = curTab => {
    const data = [
      { name: "全部", key: MAP_TAB.ALL },
      { name: "已付款", key: MAP_TAB.PAID },
      { name: "未付款", key: MAP_TAB.NOT_PAID }
    ];
    return (
      <div
        style={{ height: "1rem", width: "100%" }}
        className="flex-row co_bg_white"
      >
        {data.map((e, i) => {
          const { key, name } = e;
          const className =
            "co_bd_black " +
            (e.key === curTab ? "co_bg_red co_white" : "co_bg_white co_black");
          return (
            <div
              key={key}
              onClick={() => {
                this._handleSwitchTab(curTab, key);
              }}
              className={className}
              style={{ flex: 1, textAlign: "center", lineHeight: "1rem" }}
            >
              {name}
            </div>
          );
        })}
      </div>
    );
  };
  _renderOrdersList = (data,curTab) => {
    var d = curTab === MAP_TAB.ALL ? data : data.filter(e=>curTab===e.status)
    return (
      <div style={{ flex: 1, overflow: "scroll" }}>
        {d.map((e, i) => {
          const { id, time, status, selected_goods,adress_info } = e;
          const {totalPrice, amount} = this._handleCalculate(selected_goods)
          return (
            <div
              key={id}
              className="co_bg_white flex-column"
              style={{ marginTop: "0.2rem", height: "1.5rem", width: "100%" }}
            >
              <div
                className="flex-row"
                style={{ height: "0.5rem", width: "100%" }}
              >
                <div style={{ flex: 1 }}>{time}</div>
                <div style={{ width: "2rem" }}>{MAP_PAY_STATUS[status]}</div>
              </div>
              <div style={{ flex: 1, alignItems: "center", display: "flex" }}>
                <div>{`(${JSON.parse(adress_info).consignees})共个${amount}产品，总金额：￥${totalPrice}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    console.log(this)
    const { curTab, ordersData } = this.state;
    return (
      <div className="fill flex-column">
        {this._renderTab(curTab)}
        {this._renderOrdersList(ordersData,curTab)}
      </div>
    );
  }
}
