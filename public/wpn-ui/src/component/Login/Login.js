import React from "react";
import {
  ButtonArea,
  Button,
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
  Toptips
} from "react-weui";
import api from "../../api/api";
import Common from "../Common/Common";
import "./login.css";

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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  _handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  _handleSubmit = () => {
    const { mobile, pwd } = this.state || {};
    if (!mobile || !pwd) {
      alert("请输入完整的手机号和密码！");
      return;
    }
    api.login({
      success: function(data) {
        console.log(data);
      },
      param: { pwd, mobile }
    });
  };
  render() {
    const dataFrom = [
      {
        key: "Mobile",
        label: "手机号",
        placeholder: "输入手机号码",
        inputName: "mobile",
        onChange: this._handleInputChange
      },
      {
        key: "Password",
        label: "密码",
        placeholder: "输入密码",
        inputName: "pwd",
        onChange: this._handleInputChange
      }
    ];
    return (
      <div className="wpn-login" style={{ paddingTop: "3rem" }}>
        <div style={{ padding: "0 0.8rem 0.2rem 0.8rem" }}>
          <input
            style={{ ...style.item }}
            name="mobile"
            placeholder="请输入手机号码"
            onChange={this._handleInputChange}
          />
          <input
            style={{ ...style.item }}
            name="pwd"
            placeholder="请输入密码"
            onChange={this._handleInputChange}
          />
          <p style={{textAlign:"right", color: "#fff"}}>忘记密码？</p>
          <a
            style={{ ...style.item, background: "rgb(1,0,3)", marginTop: "0.2rem",textAlign:'center', textIndent:'0' }}
            onClick={this._handleSubmit}
            className="weui-btn weui-btn_primary"
            href="javascript:;"
          >
            登录
          </a>
        </div>
      </div>
    );
  }
}
