/**
 * Created by n7best
 */
import React from "react";
import api from "../../../api/api";
import utils from '../../../libs/utils/utils';
import Order from '../Order/Order';
import Common from '../../Common/Common';
const {renderSubPage} = Common;
export default class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderInfo: {
        totalCount: 0,
        selectdGoods: [] //{count, id}
      },
      goods: []
    };
  }
  componentDidMount() {
    this._setGoodsData();
    renderSubPage({title:"我的订单", children:<Order/>})
  }
  _setGoodsData = () => {
    api.queryAllGoods({
      success: data => {
        data.forEach((e, i) => {
          e.count = 0;
        });
        this.setState({ goods: data });
      }
    });
  };
  _handlePlus = (id, data, orderInfo) => {
    data.forEach((e, i) => {
      if (id === e.id) {
        e.count += 1;
        this._handleOrder(id, orderInfo, "plus");
      }
    });
    this.setState({ goods: data });
  };
  _handleMinus = (id, data, orderInfo) => {
    data.forEach((e, i) => {
      if (id === e.id && e.count > 0) {
        e.count -= 1;
        this._handleOrder(id, orderInfo, "minus");
      }
    });
    this.setState({ goods: data });
  };
  _handleOrder = (id, orderInfo, type) => {
    const o = utils.clone(orderInfo);
    let { totalCount, selectdGoods } = o;
    if (type === "minus") {
      totalCount -= 1;
      selectdGoods.forEach((e, i) => {
        if (e.id === id) {
          e.count -= 1;
          if (e.count === 0) {
            selectdGoods.splice(i, 1);
          }
        }
      });
    }
    if (type === "plus") {
      totalCount += 1;
      if (selectdGoods.find(e => e.id === id)) {
        selectdGoods.forEach((e, i) => {
          if (e.id === id) {
            e.count += 1;
          }
        });
      } else {
        selectdGoods.push({
          id,
          count: 1
        });
      }
    }
    this.setState({ orderInfo: { totalCount, selectdGoods } });
  };
  _renderModifyCount = option => {
    const { data, id, count, orderInfo } = option;
    const showStyle = count === 0 ? { display: "none" } : {};
    return (
      <div style={{ width: "3rem", height: "1rem" }} className="flex-row">
        <div
          onClick={() => {
            this._handleMinus(id, data, orderInfo);
          }}
          style={{ lineHeight: "1.1rem" }}
        >
          <i
            style={{ fontSize: "0.7rem", ...showStyle }}
            className="fa fa-minus-circle"
          />
        </div>
        <div
          style={{
            display: "block",
            flex: 1,
            lineHeight: "1rem",
            textAlign: "center"
          }}
        >
          <p style={{ ...showStyle }} className="fontsize40">
            {count}
          </p>
        </div>
        <div
          onClick={() => {
            this._handlePlus(id, data, orderInfo);
          }}
          style={{ lineHeight: "1.1rem" }}
        >
          <i style={{ fontSize: "0.7rem" }} className="fa fa-plus-circle" />
        </div>
      </div>
    );
  };
  _renderList = (data, orderInfo) => {
    return data.map((e, i) => {
      const { id, des, name, img_url, price, specification, count } = e;
      return (
        <div key={i} className="weui-panel__bd">
          <a
            href="javascript:void(0);"
            className="weui-media-box weui-media-box_appmsg"
          >
            <div
              style={{ height: "1rem", width: "1rem" }}
              className="weui-media-box__hd"
            >
              <img
                style={{ height: "1rem", width: "1rem" }}
                className="weui-media-box__thumb"
                src={img_url}
                alt=""
              />
            </div>
            <div className="weui-media-box__bd">
              <h4
                style={{ fontSize: "0.4rem" }}
                className="weui-media-box__title"
              >
                {name}
              </h4>
              <p
                style={{ fontSize: "0.3rem" }}
                className="weui-media-box__desc"
              >
                <i className="co_red">{"￥" + price}</i>
                <span style={{ fontSize: "0.2rem" }}>
                  {" /" + specification}
                </span>
              </p>
            </div>
            {this._renderModifyCount({ data, id, count, orderInfo })}
          </a>
        </div>
      );
    });
  };
  _handleShowOrderPage = (orderInfo) => {
    const {totalCount} = orderInfo;
    if (totalCount === 0) {
      alert("请先选择商品！")
    }
  }
  render() {
    const { goods, orderInfo } = this.state;
    return (
      <div className="fill flex-column" style={{ fontSize: "0.2rem" }}>
        <div
          style={{ height: "1.5rem", width: "100%" }}
          className="co_bg_black"
        >
          <div
            className="weui-cell__hd"
            style={{
              position: "relative",
              marginRight: "10px",
              width: "1.5rem",
              float: "left"
            }}
          >
            <i
              className="fa navLinkIco fa-shopping-cart co_white"
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                display: "block"
              }}
            />
            <span
              className="weui-badge"
              style={{
                position: "absolute",
                top: ".1rem",
                right: "-.4rem",
                fontSize: "0.4rem"
              }}
            >
              {orderInfo.totalCount}
            </span>
          </div>
          <div
            className="co_bg_red co_white fontsize40"
            onClick={()=>this._handleShowOrderPage(orderInfo)}
            style={{
              width: "3rem",
              height: "100%",
              float: "right",
              lineHeight: "1.5rem",
              textAlign: "center"
            }}
          >
            {orderInfo.totalCount === 0 ? "请选择" : "选好了"}
          </div>
        </div>
        <div style={{ width: "100%", flex: 1, overflow: "auto" }}>
          {this._renderList(goods, orderInfo)}
        </div>
      </div>
    );
  }
}
