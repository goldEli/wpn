import React from "react";
import ReactDom from "react-dom";

const renderLayout = (_handleClose, option) => {
  const {title, children} = option;
  return (
    <div
      className="co_bg_common flex-column"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          height: "1rem",
          borderBottomWidth: "1px",
          lineHeight: "1.2rem",
          paddingLeft: "0.5rem"
        }}
        className="co_bd_black border_style"
      >
        <i onClick={_handleClose} className="fa fa-chevron-left font-size-primary" />
        <span
          className="font-size-primary"
          style={{ textIndent: "0.5rem", display: "inline-block" }}
        >
          {title || "标题"}
        </span>
      </div>
      <div style={{ flex: 1, overflow: "scroll" }}>{children || "请创建内容"}</div>
    </div>
  );
};

const renderSubPage = option => {
  let body = document.body;
  let showDom = document.createElement("div");
  // 设置基本属性
  showDom.style.position = "absolute";
  showDom.style.top = "0px";
  showDom.style.left = "0px";
  showDom.style.width = "100%";
  showDom.style.height = "100%";
  showDom.style.zIndex = 50;
  body.appendChild(showDom);
  // 自我删除的方法
  let _handleClose = () => {
    ReactDom.unmountComponentAtNode(showDom);
    body.removeChild(showDom);
  };
  ReactDom.render(renderLayout(_handleClose, option), showDom);
};

export default renderSubPage;
