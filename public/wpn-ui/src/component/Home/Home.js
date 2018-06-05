import React from "react";
import api from '../../api/basic'

export default class Home extends React.Component {
  componentDidMount() {
    api.users({
      success: data => {
        console.log(data);
      }
    });
    // api.login({
    //   success: (data) => {
    //     console.log(data)
    //   }
    // })
  }
  _handleLogout = () => {
      api.logout()
  }
  render() {
    return (
      <div className="box">
        <button onClick={this._handleLogout}>logout</button>
      </div>
    );
  }
}
