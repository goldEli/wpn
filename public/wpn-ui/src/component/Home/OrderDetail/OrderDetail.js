import React from "react";
import utils from "../../../libs/utils/utils";

export default class OrderDetail extends React.Component {
  _renderOrderInfo = (data, MAP_PAY_STATUS) => {
    const { id, express, adress_info, selected_goods, status, time } = data;
    const { consignees, adress, mobile } = JSON.parse(adress_info);
    const { totalPrice } = utils.calculate(selected_goods);
    const d = [
      { lable: "订单号", content: id },
      { lable: "下单日期", content: time },
      { lable: "收货人", content: consignees },
      { lable: "联系电话", content: mobile },
      { lable: "收货地址", content: adress },
      { lable: "支付状态", content: MAP_PAY_STATUS[status] },
      { lable: "应付金额", content: totalPrice },
      { lable: "快递类型", content: express }
    ];
    return (
      <div
        className="co_bg_white"
        style={{ marginTop: "0.2rem", width: "100%" }}
      >
        {d.map((e, i) => {
          const { lable, content } = e;
          return (
            <div
              key={lable}
              style={{ width: "100%" }}
              className="flex-row font-size-content"
            >
              <div style={{ width: "1.5rem", textAlign: "right" }}>
                {lable + "："}
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "0 0.5rem",
                  wordWrap: "break-word",
                  overflow: "hidden"
                }}
              >
                {content}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  _renderGoodsInfo = data => {
    return (
      <div
        className="co_bg_white"
        style={{ marginTop: "0.2rem", width: "100%" }}
      >
        {data.map((e, i) => {
          const { count, price, name } = e;
          return (
            <div key={i} className="flex-row" style={{ width: "100%" }}>
              <div style={{ flex: 1 }}>
                <p className="font-size-content">{name}</p>
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-size-content">{"x " + count}</p>
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-size-content">
                  {"￥ " + utils.math.mul(price, count)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    const { data, MAP_PAY_STATUS } = this.props;
    const { selected_goods, status } = data;
    console.log(this);
    return (
      <div className="fill">
        {this._renderOrderInfo(data, MAP_PAY_STATUS)}
        {this._renderGoodsInfo(JSON.parse(selected_goods))}
        <div
          style={{
            margin: "0.2rem",
            display: "flex",
            justifyItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              height: "0.8rem",
              lineHeight: "0.8rem",
              width: "3rem",
              textAlign: "center",
              borderRadius: "0.2rem",
              display: status === 1 ? "block" : "none"
            }}
            className="co_white co_bg_black"
          >
            去支付
          </div>
        </div>
      </div>
    );
  }
}
