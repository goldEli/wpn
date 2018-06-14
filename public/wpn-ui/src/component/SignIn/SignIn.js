import React from "react";
import api from "../../api/api";

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
    this._setUserId();
  }
  _setUserId = () => {
    let s = window.location.hash;
    if (s.indexOf("id=") !== -1) {
      let userId = s.replace(/#\/SignIn\?id=/, "");
      this.setState({ userId });
    }
  };
  _handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  _handleSubmit = (userId) => {
    const {
      name,
      mobile,
      pwd,
      confirm_password,
      bank_address,
      bank_num,
      alipay,
      wechat,
      email
    } =
      this.state || {};
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
        confirm_password,
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
      { lable: "*银行卡号", placeholder: "请输入银行卡密码", name: "bank_num" },
      { lable: "支付宝", placeholder: "请输入支付号号", name: "alipay" },
      { lable: "微信号", placeholder: "请输入微信号", name: "wechat" },
      { lable: "邮箱", placeholder: "请输入邮箱", name: "email" }
    ];
    const { isShowSuccessPage, userId } = this.state;
    if (!userId) {
      return <div className="font-size-primary">正在加载，请稍后...</div>
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
            onClick={()=>{this._handleSubmit(userId)}}
          >
            提交
          </div>
        </div>
      </div>
    );
  }
}

 
