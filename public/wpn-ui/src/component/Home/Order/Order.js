import React from "react";
import api from "../../../api/api";
import utils from "../../../libs/utils/utils";

const MAP_EXPRESS = {
  ST: "申通",
  SF: "顺丰",
  ZT: "自提"
};

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      wepay: false,
      alipay: true,
      express: MAP_EXPRESS.ST
    };
  }
  componentDidMount() {
    this._setTotalPrice();
  }
  _setTotalPrice = () => {
    const { selectdGoods } = this.props.data;

    let totalPrice = 0;
    selectdGoods.forEach((e, i) => {
      const { count, goodsInfo } = e;
      const { price } = goodsInfo;
      totalPrice = utils.math.add(utils.math.mul(price, count), totalPrice);
    });
    this.setState({ totalPrice });
  };
  _handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  _handleRadioChange = (name, status) => {
    this.setState({
      wepay: name === "wepay" ? !status : status,
      alipay: name === "alipay" ? !status : status
    });
  };
  _handleVerifyOutput = data => {
    const { adress_info } = data;
    const { consignees, mobile, adress } = JSON.parse(adress_info);
    if (!consignees) {
      alert("请输入收货人！");
      return false;
    }
    if (!mobile) {
      alert("请输入收货人电话！");
      return false;
    }
    if (!adress) {
      alert("请输入收货人地址！");
      return false;
    }
    return true;
  };
  _renderAdressInfo = () => {
    return [
      { label: "姓名", placeholder: "请输入姓名", name: "consignees" },
      { label: "电话", placeholder: "请输入电话", name: "mobile" },
      { label: "地址", placeholder: "请输入地址", name: "adress" }
    ].map((e, i) => {
      return (
        <div key={i} className="weui-cell">
          <div style={{ width: "2rem" }}>
            <p className="font-size-content">{e.label}</p>
          </div>
          <div style={{ flex: 1 }}>
            <input
              className="font-size-content fill"
              style={{ display: "inline-block" }}
              name={e.name}
              placeholder={e.placeholder}
              onChange={this._handleInputChange}
            />
          </div>
        </div>
      );
    });
  };
  _renderExpressInfo = () => {
    return (
      <select
        className="font-size-content fill"
        style={{ display: "inline-block" }}
        onChange={this._handleInputChange}
        name="express"
        defaultValue={MAP_EXPRESS.ST}
      >
        <option value={MAP_EXPRESS.ST}>{MAP_EXPRESS.ST}</option>
        <option value={MAP_EXPRESS.SF}>{MAP_EXPRESS.SF}</option>
        <option value={MAP_EXPRESS.ZT}>{MAP_EXPRESS.ZT}</option>
      </select>
    );
  };
  _renderPayInfo = option => {
    const { alipay, wepay } = option;
    const radioStyle = {
      display: "inlineBlock",
      width: "0.3rem",
      height: "0.3rem"
    };
    return (
      <div className="fill font-size-content">
        <input
          onChange={e => {}}
          checked={alipay}
          onClick={() => {
            this._handleRadioChange("alipay", alipay);
          }}
          style={radioStyle}
          name="alipay"
          type="radio"
        />支付宝<br />
        <input
          onChange={() => {}}
          checked={wepay}
          onClick={() => {
            this._handleRadioChange("wepay", wepay);
          }}
          style={radioStyle}
          name="wepay"
          type="radio"
        />微信
      </div>
    );
  };
  _renderOrderInfo = data => {
    return data.map((e, i) => {
      const { count, goodsInfo } = e;
      const { name, price } = goodsInfo;
      return (
        <div key={i} className="weui-cell">
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
    });
  };
  _handleOk = selectdGoods => {
    const { consignees, mobile, adress, alipay, express } = this.state;
    const adress_info = { consignees, mobile, adress };
    const pay_method = alipay ? "alipay" : "wepay";
    const _handle_goods_info = selectdGoods => {
      const a = [];
      selectdGoods.forEach((e, i) => {
        const { goodsInfo } = e;
        const { count, name, price } = goodsInfo;
        a.push({ count, name, price });
      });
      return a;
    };
    var param = {
      adress_info: JSON.stringify(adress_info),
      pay_method,
      express,
      selected_goods: JSON.stringify(_handle_goods_info(selectdGoods)),
      status: 1 // 未支付
    };
    if (!this._handleVerifyOutput(param)) {
      return;
    }
    api.insertOrder({
      success: data => {
        alert("下单成功！");
      },
      param: param
    });
  };
  render() {
    console.log(this);
    const { selectdGoods } = this.props.data;
    const { totalPrice, alipay, wepay } = this.state;
    return (
      <div className="fill flex-column">
        <div style={{ flex: 1, overflow: "scroll" }}>
          <p className="font-size-content">收货信息</p>
          <div className="weui-cells">{this._renderAdressInfo()}</div>
          <p className="font-size-content">选择快递</p>
          <div className="weui-cells">{this._renderExpressInfo()}</div>
          <p className="font-size-content">选择支付方式</p>
          <div className="weui-cells">
            {this._renderPayInfo({ alipay, wepay })}
          </div>
          <p className="font-size-content">订单信息</p>
          <div className="weui-cells">
            {this._renderOrderInfo(selectdGoods)}
          </div>
        </div>
        <div
          className="flex-row co_white font-size-primary"
          style={{
            height: "1rem",
            width: "100%",
            textAlign: "center",
            lineHeight: "1rem"
          }}
        >
          <div className="co_bg_black" style={{ flex: 1 }}>
            {"共计：" + totalPrice}
          </div>
          <div
            onClick={() => {
              this._handleOk(selectdGoods);
            }}
            className="co_bg_red"
            style={{ width: "2rem" }}
          >
            确定
          </div>
        </div>
      </div>
    );
  }
}
