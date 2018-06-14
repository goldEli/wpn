import React from "react";
import api from "../../../api/api";

export default class AgenciesAutid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this._setList();
  }
  _setList = () => {
    api.findAllAgencies({
      success: data => {
        this.setState({ list: data });
      }
    });
  };
  render() {
    const { list } = this.state;

    return (
      <div className="fill">
        {list.map((e, i) => {
          const {
            alipay,
            bank_address,
            bank_num,
            email,
            id,
            mobile,
            name,
            user_id,
            wechat
          } = e;
          const d = [
            { name: "电话", content: mobile },
            { name: "开户行", content: bank_address },
            { name: "银行卡卡号", content: bank_num },
            { name: "微信号", content: wechat },
            { name: "支付宝号", content: alipay },
            { name: "邮箱", content: email }
          ];
          return (
            <div
              key={id}
              className="co_bg_white flex-column "
              style={{ marginTop: "0.5rem", height: "3rem", width: "100%" }}
            >
              <div
                className="flex-row font-size-content co_bd_black"
                style={{
                  height: "1rem",
                  lineHeight: "1rem",
                  width: "100%",
                  borderBottomWidth: "1px"
                }}
              >
                <div style={{ flex: 1 }}>{name}</div>
                <div
                  style={{ width: "2rem", textAlign: "center" }}
                  className="co_bg_red co_white"
                >
                  通过
                </div>
              </div>
              <div
                style={{ flex: 1 }}
                className="flex-column font-size-secondary"
              >
                {d.map((e, i) => {
                  return <p key={i}>{e.name + "：" + e.content}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
