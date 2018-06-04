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
import api from '../../api/basic'

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
  _submit = () => {
    const {mobile, password} = this.state;
  }
  componentDidMount() {
    
    api.users({
      success: (data) => {
        console.log(data)
      }
    })
    // api.login({
    //   success: (data) => {
    //     console.log(data)
    //   }
    // })
  }
  render() {
    return (
      <div className="wpn-login" style={{paddingTop: '10%'}}>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>Username</Label>
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
              <Input name="password" placeholder="Enter your password" onChange={this._handleInputChange}/>
            </CellBody>
          </FormCell>
        </Form>
        <ButtonArea>
          <Button
            //button to display toptips
            onClick={e => {
              if (this.state.showToptips) return;
              this.setState({ showToptips: !this.state.showToptips });
              window.setTimeout(
                e => this.setState({ showToptips: !this.state.showToptips }),
                2000
              );
            }}
          >
            OK
          </Button>
        </ButtonArea>
        <Toptips type="warn" show={this.state.showToptips}>
          Oops, username or password invalid!
        </Toptips>
      </div>
    );
  }
}
