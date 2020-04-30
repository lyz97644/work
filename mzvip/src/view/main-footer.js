import React,{Component} from 'react';
import {Layout,Divider} from 'antd';

export default class MainFooter extends Component{
    render(){
        return(
            <Layout.Footer className="warp-footer" style={{
                textAlign:"center"
            }}>
                <div className="footer">
                    <ul className="footer_nav">
                        <li><a href="http://game.91muzhi.com/developer-resource/" className="pis-hover">商务合作</a></li>
                        <Divider type="vertical" orientation="center" />
                        <li><a href="http://game.91muzhi.com/main/user/authen" className="pis-hover">防沉迷认证</a></li>
                        <Divider type="vertical" orientation="center" />
                        <li><a href="http://game.91muzhi.com/main/index" className="pis-hover">企业官网</a></li>
                        <Divider type="vertical" orientation="center" />
                        <li><a href="http://game.91muzhi.com/main/about" className="pis-hover">关于我们</a></li>
                        <Divider type="vertical" orientation="center" />
                        <li><a href="http://game.91muzhi.com/main/mzagreement" className="pis-hover">用户协议</a></li>
                        <Divider type="vertical" orientation="center" />
                        <li><a href="http://game.91muzhi.com/main/service" className="pis-hover">客服中心</a></li>
                    </ul>
                    <p>深圳市拇指游玩科技有限公司  版权所有  2014ALL  Rights  Reserved.</p>
                    <p>网络文化经营许可证:  <a href="https://www.91muzhi.com/add_value.html" target="_blank" className="pis-hover" rel="noopener noreferrer">粤网文[2018]2287-804号</a></p>
                    <p>增值电信业务经营许可证： <a href="http://game.91muzhi.com/assets/images/%E5%A2%9E%E5%80%BC%E7%94%B5%E4%BF%A1%E4%B8%9A%E5%8A%A1%E7%BB%8F%E8%90%A5%E8%AE%B8%E5%8F%AF%E8%AF%81.jpg" target="_blank" className="pis-hover" rel="noopener noreferrer">粤B2-20150359</a>  <a href="http://www.miitbeian.gov.cn/" target="_blank" className="pis-hover" rel="noopener noreferrer">粤ICP备14027729号-1</a></p>
                    <p>健康游戏公告：抵制不良游戏  拒绝盗版游戏  注意自我保护  谨防受骗上当  适度游戏益脑  沉迷游戏伤身  合理安排时间  享受健康生活</p>
                </div>
            </Layout.Footer>
        );
    }
}