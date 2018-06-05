import React from "react";
import api from '../../api/api'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: null,
    }
  }
  componentDidMount(){
    this._setUsername()
  }
  _handleLogout = () => {
      api.logout()
  }
  _setUsername = () => {
    api.userInfo({
      success: (data) => {
        console.log(data)
        this.setState({userInfo:data})
      }
    })
  }
  render() {
    const {name, mobile} = this.state.userInfo || {};
    return (
      <div className="box">
        <p>{'hello:'+name}</p>
        <p>{'mobile:'+mobile}</p>
        <button onClick={this._handleLogout}>logout</button>
      </div>
    );
  }
}
