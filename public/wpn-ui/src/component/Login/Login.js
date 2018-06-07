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
import './login.css';

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
      alert("请输入完整的手机号和密码！")
      return;
    }
    api.login({
      success: function(data) {
        console.log(data);
      },
      param: { pwd, mobile }
    });
  };
  _handleRegister = () => {};
  render() {
    const dataFrom = [
      {key: 'Mobile', label: '手机号', placeholder: '输入手机号码', inputName: 'mobile', onChange: this._handleInputChange},
      {key: 'Password', label: '密码', placeholder: '输入密码', inputName: 'pwd', onChange: this._handleInputChange},
    ]
    return (
      <div className="wpn-login" style={{ paddingTop: "3rem" }}>
        <div style={{padding:"0 0.5rem 0.2rem 0.5rem"}}>
        {Common.renderForm(dataFrom)}
        </div>
        <a style={{height:"1rem",lineHeight:"1rem",width:"80%", fontSize:"0.4rem"}} onClick={this._handleSubmit} className="weui-btn weui-btn_primary" href="javascript:;">登录</a>
      </div>
    );
  }
}
