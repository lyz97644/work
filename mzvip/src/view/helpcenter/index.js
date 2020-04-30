import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserInfo from "../base/user-info";
import RegInfo from "../base/reg_info";
import Slide from "../base/slide";
import LeftServer from "../base/left-server";
import Horn from "../base/horn";
import HelpContent from "./help-content";


class HelpIndex extends Component{
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
        return (
            <div className="helpHome">
                <div>
                    {this.isLogin()}
                    <div className="myslide fr">
                        <Slide />
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="content">
                    <Horn className="rollNews ml25" />
                    <div className="content-left fl">
                        <LeftServer />
                    </div>
                    <HelpContent />
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default connect(state=>state.user)(HelpIndex);