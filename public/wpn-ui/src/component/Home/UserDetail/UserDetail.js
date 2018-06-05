/**
 * create by miaoyu 2018/6/5
 */

import React from "react";
import { Page, Grids } from "react-weui";

const data = [
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "当日销量: 123",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "当月销量: 123",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "累计销量: 123",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "团队日销: 23423",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "团队月销: 2344",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "团队累计销量: 2332",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "当月团队奖金: 21",
    href: "javascript:;"
  },
  {
    icon: <i className="fa fa-home navLinkIco" />,
    label: "当月累计奖金: 32",
    href: "javascript:;"
  }
];

export default class UserDetail extends React.Component {
  render() {
    return (
      <div className="fill" style={{ fontSize: "0.2rem" }}>
        <Page className="grid" title="Grid" subTitle="九宫格">
          <Grids data={data} />
        </Page>
      </div>
    );
  }
}
