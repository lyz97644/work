import React, {Component} from 'react';
import { Divider, Collapse } from "antd";
import { withRouter } from "react-router-dom";

class PriviContent extends Component{
    scrollToAnchor(anchorName) {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }
    priviTitle(cla,vlu,id){
        return (
            <div className="privi-intro-content" id={id}>
                <i className={cla}></i>
                <span className="intro-title">{vlu}</span>
            </div>
        )  
    }
    componentDidMount(){
        let Anchor = this.props.anchor;
        let anchorElement = document.getElementById(Anchor);
        let anchorHeight = anchorElement.offsetTop;
        setTimeout(function(){
            window.scrollTo({
                top:anchorHeight,
                behavior: "smooth"
            })
        },300)
    }
    render(){
        const { Panel } = Collapse;
        return(
            <div className="privi-content">
                <div className="label-card">
                    <span onClick={() => this.scrollToAnchor("gamePrivi")} className="labeltext">游戏特权</span>
                    <Divider type="vertical" className="headDivider m20" orientation="center" />
                    <span onClick={() => this.scrollToAnchor("idenPrivi")} className="labeltext">身份特权</span>
                    <Divider type="vertical" className="headDivider m20" orientation="center" />
                    <span onClick={() => this.scrollToAnchor("servicePrivi")} className="labeltext">服务特权</span>
                </div>
                <div className="privi-box" id="gamePrivi">
                    <i className="privi-icon"></i>
                    <span className="privi-box-title">游戏特权</span>
                    <div className="privi-intro">
                        <Collapse expandIconPosition="right" defaultActiveKey={this.props.fold}>
                            <Panel header={this.priviTitle("intro-icon icon-zs","VIP专属礼包","ExcluPackage")} key="ExcluPackage">
                                <p>1. 尊贵的平台V6及以上玩家可每月领取一份专属VIP月度礼包（目前开展游戏为：王者纷争、我的荣耀、正统三国，其他游戏陆续更新），具体领取方式联系VIP客服；</p>
                                <p>2. 每款游戏礼包内容不同，详情以领取说明为准。</p>
                                <p>
                                    <span className="change-game">目前已开展的游戏：</span>
                                    <div className="game-packs">
                                        <a href="http://hd.91muzhi.com:8080/mzact/daQinAct/index.html" target="_blank" rel="noopener noreferrer"><span>王者纷争</span></a>
                                        <a href="http://hd.91muzhi.com:8080/mzact/ryaoAct/index.html" target="_blank" rel="noopener noreferrer"><span>我的荣耀</span></a>
                                    </div>
                                </p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-fes","节日礼包","HolidayPackage")} key="HolidayPackage">
                                <p>每逢重大节日将为VIP用户奉上节日礼包、节日祝福。</p>
                                <p>具体内容VIP客服将一对一进行同步。</p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-act","VIP活动特权","ActivityPrivi")} key="ActivityPrivi">
                                <p>游戏内不定时开展的充值活动中VIP玩家将享受额外的福利，活动将不定时开启，具体上线时间与内容请关注游戏动态。</p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-ng","新游推荐","NewTravel")} key="NewTravel">
                                <p>平台新游戏将优先推送VIP玩家，请留意平台消息。</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className="privi-box" id="idenPrivi">
                    <i className="privi-icon"></i>
                    <span className="privi-box-title">身份特权</span>
                    <div className="privi-intro">
                    <Collapse expandIconPosition="right" defaultActiveKey={this.props.fold}>
                        <Panel header={this.priviTitle("intro-icon icon-iden","拇指身份勋章","MedalHonor")} key="MedalHonor">
                            <p>身份勋章是玩家在拇指游玩社区的专属身份，等级越高勋章更豪华</p>
                        </Panel>
                        <Panel header={this.priviTitle("intro-icon icon-brt","生日特权","BirthPrivi")} key="BirthPrivi">
                            <p>1.VIP专属生日礼包（目前已开展王者纷争、我的荣耀，其他游戏敬请期待），具体领取方式联系VIP客服；</p>
                            <p style={{marginLeft:"65px"}}>（1）王者纷争——专属头像框+游戏礼包</p>
                            <p style={{marginLeft:"65px"}}><img src={require('../img/inside1.jpg')} style={{width:"70%"}} alt="sl" /></p>
                            <p style={{marginLeft:"65px"}}>（2）我的荣耀——专属头像框+对话气泡</p>
                            <p style={{marginLeft:"65px"}}><img src={require('../img/inside2.jpg')} alt="sl" /></p>
                            <p style={{marginLeft:"65px"}}><img src={require('../img/inside3.jpg')} alt="sl" /></p>
                            <p>2.VIP充值优惠券</p>
                            <p>即将推出，敬请期待</p>
                        </Panel>
                        <Panel header={this.priviTitle("intro-icon icon-dh","专属兑换","ExcluChange")} key="ExcluChange">
                            <p>1.游戏礼包</p>
                            <p>通过金币可兑换不同价值的游戏礼包，礼包持续更新，给予VIP超级待遇</p>
                            <p>2.游戏周边</p>
                            <p>即将推出，敬请期待</p>
                        </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className="privi-box" id="servicePrivi">
                    <i className="privi-icon"></i>
                    <span className="privi-box-title">服务特权</span>
                    <div className="privi-intro">
                        <Collapse expandIconPosition="right" defaultActiveKey={this.props.fold}>
                            <Panel header={this.priviTitle("intro-icon icon-kf","专属客服","ExcluService")} key="ExcluService">
                                <p>VIP专属客服一对一联系，QQ、电话、短信多渠道带来贴心服务。</p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-yx","账号优先处理权","PriorityPro")} key="PriorityPro">
                                <p>VIP玩家进行账号相关操作时，将得到VIP客服优先处理，效率快人一步。</p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-ys","服务延时礼包","ServiceDelay")} key="ServiceDelay">
                                <p>VIP玩家反馈的问题无法及时处理，将由VIP客服赠予服务延时礼包，并加急处理问题给出反馈。</p>
                            </Panel>
                            <Panel header={this.priviTitle("intro-icon icon-hf","定期回访","RegularVisit")} key="RegularVisit">
                                <p>定期对VIP玩家进行回访，了解对游戏和客服的感受，以便后续优化，提升对游戏与服务的满意度。</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter((props)=>{
    let { fold, anchor } = props;
    return <PriviContent 
     fold={fold}
     anchor={anchor}
    />
});;