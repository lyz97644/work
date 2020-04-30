import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserInfo from "../base/user-info";
import RegInfo from "../base/reg_info";
import Slide from "../base/slide";
import Horn from "../base/horn";

import HomeBox from "./home-box"

class Index extends Component{
    constructor(arg){
        super(arg);
        // console.log(arg)
        // console.log("初始化挂件加载时间："+new Date());
        this.state = {
            show:false,
            userData:null,
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
        // console.log("初始化数据未渲染DOM："+new Date());
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
    // componentDidMount(){
    //     console.log("组件已渲染，dom已生成："+new Date());
    // }
    // componentWillReceiveProps(nextprops){
    //     console.log(nextprops);
    //     console.log("父组件改变后："+new Date());
    // }
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
            <div className="indexHome">
                <div>
                    {this.isLogin()}
                    <div className="myslide fr">
                        <Slide />
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="content">
                    <Horn className="rollNews ml365" />
                    <HomeBox />
                </div>
                
            </div>
        );
    }
}
export default connect(state=>state.user)(Index);