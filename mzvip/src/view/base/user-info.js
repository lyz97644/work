import React,{Component } from 'react';
import {Row, Col} from 'antd';
import { withRouter } from 'react-router-dom';

class UserInfo extends Component{

    signOut(){
        localStorage.clear();
        this.props.parent.getLoginstate();
    }

    Hportrait (portrait,imgurl){
        if (portrait !== null) {
            return <img src={imgurl+portrait} alt="tx" />;
        } else {
            return <img src={require('../img/user_icon.png')} alt="tx" />
        }
    }

    render(){
        let imgurl = "http://game.91muzhi.com/";
        let {className , userData} = this.props;
        // let userdata = JSON.parse(userData);
        return (
            <div className={className}>
                <span className="exit" onClick={()=>{this.signOut()}}>退出</span>
                <div className="portrait user-port">
                    {this.Hportrait(userData.mUserIcon,imgurl)}
                </div>
                <div className="user-msg">
                    <p className="user-nickName"><font>{userData.nickName}</font></p>
                    <p className="user-trade">
                        <span className="user-name">用户名：{userData.name}</span>
                        <img src={require('../img/vip_'+ userData.level +'.png')} className="user-level" alt="vip" />
                    </p>
                </div>
                <div className="user_vault">
                    <Row>
                        <Col span={8} className="user_vault_box pis-hover">
                            <a href="http://game.91muzhi.com/main/user/gift">
                                <i className="user_spri lb"></i>
                                <p><span>礼包 </span>{userData.giftSum}</p>
                            </a>
                        </Col>
                        <Col span={8} className="user_vault_box pis-hover">
                            <a href="http://game.91muzhi.com/main/user/coupon">
                                <i className="user_spri lj"></i>
                                <p><span>礼券 </span>{userData.couponSum}</p>
                            </a>
                        </Col>
                        <Col span={8} className="user_vault_box pis-hover">
                            <a href="http://game.91muzhi.com/main/user/wallet">
                                <i className="user_spri mzb"></i>
                                <p><span>拇指币 </span>{userData.mzAccount}</p>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter((props)=>{
    let { className , userData, parent } = props;
    return <UserInfo 
    className={className}
    userData={userData}
    parent={parent}
    />
});