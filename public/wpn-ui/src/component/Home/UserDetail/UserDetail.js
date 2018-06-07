/**
 * create by miaoyu 2018/6/5
 */

import React from "react";
import { Page, Grids } from "react-weui";
import Common from '../../Common/Common';

const data = [
  {key: 'todaySales', label: '当日销量:', value: '432', inputName: 'todaySales',},
  {key: 'totalSales', label: '累计销量:', value: '42345', inputName: 'totalSales',},
  {key: 'teamSales', label: '团队日销:', value: '345', inputName: 'teamSales',},
  {key: 'teamMonthSales', label: '团队月销:', value: '43534', inputName: 'teamMonthSales',},
  {key: 'TeamTotalSales', label: '团队累计销量:', value: '2343', inputName: 'TeamTotalSales',},
  {key: 'TeamMonthBouns', label: '当月团队奖金:', value: '45645', inputName: 'TeamMonthBouns',},
  {key: 'totalMonthBouns', label: '当月累计奖金:', value: '2343', inputName: 'totalMonthBouns',},
];

export default class UserDetail extends React.Component {
  render() {
    return (
      <div className="fill">
        {Common.renderForm(data)}
      </div>
    );
  }
}
