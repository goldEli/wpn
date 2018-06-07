/**
 * Created by n7best
 */
import React from "react";
import {
  Panel,
  PanelHeader,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
  Page
} from "react-weui";

const appMsgIcon = (
  <img
    alt=""
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
  />
);

export default class Goods extends React.Component {
  _renderList = () => {
    const a = [
      { name: "五香兔", des: "经典口味，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" },
      { name: "冷吃兔", des: "好吃的板命，200g/袋" }
    ];
    return a.map((e, i) => {
      return (
        <div key={i} className="weui-panel__bd">
          <a
            href="javascript:void(0);"
            className="weui-media-box weui-media-box_appmsg"
          >
            <div
              style={{ height: "1rem", width: "1rem" }}
              className="weui-media-box__hd"
            >
              <img
                style={{ height: "1rem", width: "1rem" }}
                className="weui-media-box__thumb"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
            <div className="weui-media-box__bd">
              <h4
                style={{ fontSize: "0.4rem" }}
                className="weui-media-box__title"
              >
                {e.name}
              </h4>
              <p
                style={{ fontSize: "0.3rem" }}
                className="weui-media-box__desc"
              >
                {e.des}
              </p>
            </div>
            <div style={{ width: "3rem", height: "1rem" }} className="flex-row">
              <div style={{ lineHeight: "1.1rem" }}>
                <i
                  style={{ fontSize: "0.7rem" }}
                  className="fa fa-minus-circle"
                />
              </div>
              <div
                style={{
                  display: "block",
                  flex: 1,
                  lineHeight: "1rem",
                  textAlign: "center"
                }}
              >
                <p className="fontsize40">123</p>
              </div>
              <div style={{ lineHeight: "1.1rem" }}>
                <i
                  style={{ fontSize: "0.7rem" }}
                  className="fa fa-plus-circle"
                />
              </div>
            </div>
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="fill flex-column" style={{ fontSize: "0.2rem" }}>
        <div
          style={{ height: "1.5rem", width: "100%" }}
          className="co_bg_black"
        >
          <div
            className="weui-cell__hd"
            style={{
              position: "relative",
              marginRight: "10px",
              width: "1.5rem",
              float: "left"
            }}
          >
            <i
              className="fa navLinkIco fa-shopping-cart co_white"
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                display: "block"
              }}
            />
            <span
              className="weui-badge"
              style={{
                position: "absolute",
                top: ".1rem",
                right: "-.4rem",
                fontSize: "0.4rem"
              }}
            >
              8
            </span>
          </div>
          <div
            className="co_bg_red co_white fontsize40"
            style={{
              width: "3rem",
              height: "100%",
              float: "right",
              lineHeight: "1.5rem",
              textAlign: "center"
            }}
          >
            请选择
          </div>
        </div>
        <div style={{ width: "100%", flex: 1, overflow: "auto" }}>
          {this._renderList()}
        </div>
      </div>
    );
  }
}
