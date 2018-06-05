import React from "react";
import {
  ButtonArea,
  Button,
  Cell,
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
  Toptips
} from "react-weui";
import api from '../../api/api'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showToptips: false,
    }
  }
  _handleInputChange = (e) => { 
    this.setState({[e.target.name]:  e.target.value});
  }
  _handleTips = () => {
    e => {
      if (this.state.showToptips) return;
      this.setState({ showToptips: !this.state.showToptips });
      window.setTimeout(
        e => this.setState({ showToptips: !this.state.showToptips }),
        2000
      );
    }
  }
  _handleSubmit = () => {
    const {mobile, pwd} = this.state;
    api.login({
      success:function(data){
        console.log(data)
      },
      param:{pwd, mobile}
    })
  }
  _handleRegister = () => {
    
  }
  render() {
    return (
      <div className="wpn-login" style={{paddingTop: '10%'}}>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>Mobile</Label>
            </CellHeader>
            <CellBody>
              <Input placeholder="Enter your phone number" name="mobile" onChange={this._handleInputChange}/>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>Password</Label>
            </CellHeader>
            <CellBody>
              <Input name="pwd" placeholder="Enter your password" onChange={this._handleInputChange}/>
            </CellBody>
          </FormCell>
        </Form>
        <ButtonArea>
          <Button onClick={this._handleSubmit}>OK</Button>
          <Button onClick={this._handleRegister}>Register</Button>
        </ButtonArea>
        <Toptips type="warn" show={this.state.showToptips}>
          Oops, username or password invalid!
        </Toptips>
      </div>
    );
  }
}
