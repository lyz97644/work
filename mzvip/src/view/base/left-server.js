import React,{Component } from 'react';

class LeftServer extends Component{

    onlineCustomer(){
        let userdata = JSON.parse(localStorage.getItem("userdata"));
        let token = localStorage.getItem("token")
        if (token !== undefined && token !== null) {
            window.ysf('config', {
            uid:'pcmuzhi'+userdata.accountId,
            data:JSON.stringify([ 
                {"key":"mobile_phone", "hidden":true},
                {"index":0, "key":"accountId", "label":"账号", "value":userdata.accountId},
            ]),
            groupid: "397720630",// 客服组id
            robotShuntSwitch: 1,
            qtype: '2872523'         //常见问题模板id
            });
            window.open(window.ysf.url())
        } else {
            setTimeout(() => {
                window.open("http://game.91muzhi.com/main/login");
            }, 1000);
        }
    }

    render(){
        return (
            <div className="server-box">
                <div className="server-msg">
                    <span className="title">VIP专属客服QQ：</span>
                    <div className="detamsg">
                        <a
                         target="_blank"
                         href="http://wpa.qq.com/msgrd?v=3&uin=4009611191&site=qq&menu=yes"
                         className="pis-hover"
                         rel="noopener noreferrer"
                        ><span>点击查询</span></a>
                        <p>目前已上线王者纷争、我的荣耀、正统三国，其他游戏将陆续更新，敬请期待！</p>
                    </div>
                </div>
                <div className="server-online pis-hover">
                    <span onClick={()=>this.onlineCustomer()} rel="noopener noreferrer">
                        <img src={require("../img/vipcust.png")} alt="vip" />
                    </span>
                </div>
            </div>
        );
    }
}
export default LeftServer;