import React,{ Component } from 'react';

export default class HelpContent extends Component {
    render(){
        return (
            <div className="content-right fr">
                <span className="server-norm"></span>
                <div className="questions">
                    <span className="ques-title">VIP特权FAQ</span>
                    <p style={{marginTop:"25px"}}><font className="vio">Q：</font>如何成为拇指游玩VIP会员？</p>
                    <p><font className="blu">A：</font>当玩家在拇指游玩旗下手游中累积充值超过1.0万元时，账号将成为VIP6，添加VIP客服通过认证后，即可享受VIP服务！</p>
                    <span class="rule_tips">目前特权仅支持部分游戏，详情请查看特权首页</span>
                    <p class="fgx"></p>
                    <p style={{marginTop:"20px"}}><font className="vio">Q：</font>VIP特权共有几个等级？</p>
                    <p><font className="blu">A：</font>在拇指游玩平台下VIP等级共V0-V12，详情如下：</p>
                    <p style={{textAlign: "center",marginTop: "20px"}}>
                        <img src={require('../img/VIPgrade.png')} alt="img" />
                    </p>
                    <span class="rule_tips">具体享受VIP特权视游戏内邮件通知为准</span>
                    <p class="fgx"></p>
                    <p><font class="vio">Q：</font>VIP账号需要验证才能享用特权吗？</p>
                    <p><font class="blu">A：</font>账号达到VIP6后，将有邮件/短信等渠道引导添加VIP客服，通过VIP认证后该账号开始享用VIP特权。同时VIP特权采取实名认证，一账号一人享用的专属福利，平台不建议账号进行共享使用/出售，避免账号出现安全问题！</p>
                    <p class="fgx"></p>
                    <p><font class="vio">Q：</font>我玩的游戏没福利通过认证后还能享受什么VIP特权？</p>
                    <p style={{marginBottom:"10px"}}><font class="blu">A：</font>对于尚未开展特权福利游戏的玩家表示十分抱歉，平台正在积极更新中，满足VIP等级的玩家可通过添加VIP客服享受平台内已开展特权的游戏福利，更多的特权即将推出，敬请期待！</p>
                </div>
            </div>
        )
    }
}