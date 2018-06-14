import React from "react";
import utils from "../../../libs/utils/utils";
import api from "../../../api/api";

const style = {
  item: {
    width: "100%",
    height: "0.8rem",
    lineHeight: "0.8rem",
    background: "#fff",
    fontSize: "0.4rem",
    textIndent: "0.5rem",
    borderRadius: "0.2rem",
    border: "none",
    marginBottom: "0.2rem"
  }
};

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
    this.originData = null;
  }
  componentDidMount() {
    api.userInfo({
      success: data => {
        this.originData = data;
        const {
          name,
          bank_address,
          bank_num,
          mobile,
          pwd,
          wechat,
          alipay,
          email
        } = data;
        this.setState({
          userInfo: {
            name,
            bank_address,
            bank_num,
            mobile,
            pwd,
            confirm_pwd: pwd,
            wechat,
            alipay,
            email
          }
        });
      }
    });
  }
  _handleVerifyData = option => {
    const { name, mobile, pwd, confirm_pwd, bank_address, bank_num } = option;
    if (!name) {
      alert("请输入姓名！");
      return false;
    }
    if (!mobile) {
      alert("请输入手机号码！");
      return false;
    }
    if (!pwd) {
      alert("请输入密码！");
      return false;
    }
    if (confirm_pwd !== pwd) {
      alert("两次密码不一致！");
      return false;
    }
    if (!bank_address) {
      alert("请输入开户行！");
      return false;
    }
    if (!bank_num) {
      alert("请输入银行卡号！");
      return false;
    }
    return true;
  };
  _renderList = data => {
    var a = [];
    for (let key in data) {
      a.push({
        lable: key,
        value: data[key]
      });
    }
    return (
      <div
        className="co_bg_white"
        style={{ marginTop: "0.2rem", width: "100%" }}
      >
        {a.map((e, i) => {
          const { lable, value } = e;
          const inputType = lable.indexOf("pwd") !== -1 ? "password" : "";
          if (utils.MAP_ZE(lable)) {
            return (
              <div
                key={lable}
                style={{ width: "100%", height: "0.8rem" }}
                className="flex-row font-size-content"
              >
                <div
                  style={{
                    width: "1.5rem",
                    textAlign: "right",
                    lineHeight: "0.8rem"
                  }}
                >
                  {utils.MAP_ZE(lable)}
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "0 0.5rem",
                    wordWrap: "break-word",
                    overflow: "hidden"
                  }}
                >
                  <input
                    type={inputType}
                    style={{ ...style.item }}
                    name={lable}
                    value={value}
                    className="font-size-content"
                    onChange={this._handleInputChange}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };
  _handleInputChange = e => {
    const { userInfo } = this.state;
    const d = utils.clone(userInfo);
    d[e.target.name] = e.target.value;
    this.setState({ userInfo: d });
  };
  _handleSubmit = () => {
    const {
      name,
      mobile,
      pwd,
      confirm_pwd,
      bank_address,
      bank_num,
      alipay,
      wechat,
      email
    } =
      this.state.userInfo || {};
    if (
      !this._handleVerifyData({
        name,
        mobile,
        pwd,
        confirm_pwd,
        bank_address,
        bank_num
      })
    ) {
      return;
    }
    api.updateUserInfo({
      success: () => {
       alert("修改成功！")
      },
      param: {
        name,
        mobile,
        pwd,
        bank_address,
        bank_num,
        alipay,
        wechat,
        email
      }
    });
  };
  render() {
    const { userInfo } = this.state;
    return utils.loading(userInfo, () => {
      return (
        <div className="fill" style={{ overflow: "scroll" }}>
          {this._renderList(userInfo)}
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
              borderRadius: "0.2rem"
            }}
            className="co_white co_bg_black"
            onClick={this._handleSubmit}
          >
            提交
          </div>
        </div>
        </div>
      );
    });
  }
}
