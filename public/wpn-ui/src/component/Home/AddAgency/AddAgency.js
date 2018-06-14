import React from "react";
import api from "../../../api/api";
import QRCode from "qrcode";

// With promises
QRCode.toDataURL("I am a pony!")
  .then(url => {
    console.log(url);
  })
  .catch(err => {
    console.error(err);
  });

// With async/await
const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};

export default class AddAgency extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    api.userInfo({
      success: data => {
        console.log(data);
        QRCode.toCanvas(
          document.getElementById("canvas"),
          window.location.origin + "/#/SignIn?id=" + data.id,
          { toSJISFunc: QRCode.toSJIS,width: document.body.offsetWidth },
          function(error) {
            if (error) console.error(error);
            console.log("success!");
          }
        );
      }
    });
  }
  render() {
    return (
      <div className="font-size-primary fill" style={{padding:"0.5rem 0 0 0"}}>
        <canvas id="canvas" style={{width:"5rem", height:"5rem"}} />
      </div>
    );
  }
}
