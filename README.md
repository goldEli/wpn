# wpn

node + express + mysql + react + weui

代理，订单管理

## feature

- [x] 登陆
- [ ] 注册
- [ ] 首页数据展示
- [x] 商品展示
- [ ] 我的
  - [ ] 下级代理管理
  - [ ] 添加代理
  - [ ] 下级代理审核
  - [x] 我的订单
  - [ ] 收货地址管理
  - [ ] 修改个人信息
  - [ ] 修改密码
  - [ ] 我的奖金
  - [x] 退出

## 先创建数据库表

```
CREATE SCHEMA `wpn` DEFAULT CHARACTER SET utf8mb4 ;
source /wpn/wpn.sql;
```

## log

* mac mysql 8 以上版本 node 模块连接有问题，降到 5.6 解决。

## reference

* [nodejs服务端开发（Express+Mysql）---小k博客 http://htmlk.cn](https://github.com/htmlk/express)
