import React from 'react'

export default class Home extends React.Component{
    render() {
        return (
            <div className="box">
                <img src="http://temp.im/640x260/444/fff" className="img-responsive"/>
                <ul style={{fontSize:"0.12rem", padding: "0.2rem"}}>
                    <li style={{fontSize:"0.4rem"}}><a href="http://www.jianshu.com/p/985d26b40199">rem布局（进阶版）的一些说明</a></li>
                    <li>1，大家先把这个页面在不同设备模式下浏览下，感受下。</li>
                    <li>2，一般来说我们的手机端效果图是640px或750px。</li>
                    <li>3，对于上图这类需要等屏宽的图片，只需让其宽度设为 100% 即可。</li>
                    <li>4，该布局方案要求凡是涉及尺寸的，单位都是rem，比如，height width margin paddint top border-radius 等等。你只需要按照效果图上标注的尺寸布局即可。</li>
                </ul>
                <div className="navRoot">
                    <a href="#" className="navLink active">
                    <i className="fa fa-home navLinkIco" aria-hidden="true"></i>
                    <span className="navLinkText">首页</span>
                    </a>
                    <a href="#" className="navLink">
                    <i className="fa fa-home navLinkIco" aria-hidden="true"></i>
                    <span className="navLinkText">商品</span>
                    </a>
                    <a href="#" className="navLink">
                    <i className="fa fa-home navLinkIco" aria-hidden="true"></i>
                    <span className="navLinkText">我的</span>
                    </a>
                </div>
            </div>
        )
    }
}