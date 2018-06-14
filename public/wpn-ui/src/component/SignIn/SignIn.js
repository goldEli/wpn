import React from "react";
import api from "../../api/api";
import utils from "../../libs/utils/utils";

const style = {
  item: {
    width: "100%",
    height: "0.8rem",
    lineHeight: "0.8rem",
    background: "#fff",
    textIndent: "0.5rem",
    borderRadius: "0.2rem",
    border: "none",
    marginBottom: "0.2rem"
  }
};

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSuccessPage: false,
      userId: null
    };
  }
  componentDidMount() {
    this.setState({ userId: utils.getParamByKeyFromUrl("id") });
  }

  _handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
  _handleSubmit = userId => {
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
      this.state || {};
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
    api.insertAgency({
      success: () => {
        alert("资料提交成功，等待管理员审核！");
        this.setState({ isShowSuccessPage: true });
      },
      param: {
        user_id: userId,
        name,
        mobile,
        pwd,
        confirm_pwd,
        bank_address,
        bank_num,
        alipay,
        wechat,
        email
      }
    });
  };
  render() {
    const data = [
      { lable: "*姓名", placeholder: "请输入真实姓名", name: "name" },
      { lable: "*电话", placeholder: "请输入电话号码", name: "mobile" },
      { lable: "*密码", placeholder: "请输入密码", name: "pwd" },
      {
        lable: "*确认密码",
        placeholder: "请再次输入密码",
        name: "confirm_pwd"
      },
      {
        lable: "*开户银行",
        placeholder: "请输入开户行信息",
        name: "bank_address"
      },
      { lable: "*银行卡号", placeholder: "请输入银行卡号", name: "bank_num" },
      { lable: "支付宝", placeholder: "请输入支付号", name: "alipay" },
      { lable: "微信号", placeholder: "请输入微信号", name: "wechat" },
      { lable: "邮箱", placeholder: "请输入邮箱", name: "email" }
    ];
    const { isShowSuccessPage, userId } = this.state;
    if (!userId) {
      return <div className="font-size-primary">正在加载，请稍后...</div>;
    }
    if (isShowSuccessPage) {
      return (
        <div className="font-size-primary">资料提交成功，等待管理员审核！</div>
      );
    }
    return (
      <div className="fill" style={{ overflow: "scroll" }}>
        <div
          className="co_bg_white"
          style={{ marginTop: "0.2rem", width: "100%" }}
        >
          {data.map((e, i) => {
            const { name, lable, placeholder } = e;
            const inputType = name.indexOf("pwd") !== -1 ? "password" : "";
            return (
              <div
                key={name}
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
                  {lable}
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
                    name={name}
                    className="font-size-content"
                    style={{ ...style.item }}
                    onChange={this._handleInputChange}
                    placeholder={placeholder}
                  />
                </div>
              </div>
            );
          })}
        </div>
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
            onClick={() => {
              this._handleSubmit(userId);
            }}
          >
            提交
          </div>
        </div>
      </div>
    );
  }
}
