import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserInfo from "../base/user-info";
import RegInfo from "../base/reg_info";
import LeftServer from "../base/left-server";
import Horn from "../base/horn";
import PriviContent from "./privi-content"

class PriviIndex extends Component{
    constructor(arg){
        super(arg);
        this.state = {
            show:false,
            userData:null
        }
        this.getLoginstate();
    }
    getLoginstate(){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'LOGIN_IS',
                data:null
            })
            if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
                dispatch({
                    type:'LOGIN_IS_SUCC',
                    data:JSON.parse(localStorage.getItem("userData")),
                })
            } else {
                dispatch({
                    type:'LOGIN_IS_ERROR',
                    data:null
                })
            }
        })
    }
    componentWillMount(){
        if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
            this.setState({
                show:true,
                userData:localStorage.getItem("userData")
            })
        } else {
            this.setState({
                show:false,
                userData:null
            })
        }
    }
    isLogin() {
        let { isLogin, data } = this.props;
        let userClass = "user-info fl";
        let regClass = "reg-info fl";
        if (isLogin) {
            return <UserInfo className={userClass} userData={data} parent={this} />
        } else {
            return <RegInfo className={regClass} parent={this} />
        }
    }
    render(){
        let loca = this.props.location.pathname.split("/");
        let Anchor = loca[3];
        let openCard;
        if (loca[4]) {
            openCard = loca[4];
        } else {
            if (Anchor === "gamePrivi") {
                openCard = 'ExcluPackage';
            } else if (Anchor === "idenPrivi") {
                openCard = 'MedalHonor';
            }  else if (Anchor === "servicePrivi") {
                openCard = 'ExcluService';
            }
        }
        
        return (
            <div className="priviHome">
                <div className="privi-left fl">
                    {this.isLogin()}
                    <LeftServer />
                    <div className="clearfix"></div>
                </div>
                <div className="privi-right fr">
                    <Horn className="rollNews" />
                    <PriviContent fold={openCard} anchor={Anchor} />
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}
export default connect(state=>state.user)(PriviIndex);