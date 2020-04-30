import React , { Component } from 'react';
import {Layout, Row, Col} from "antd";
import {connect} from 'react-redux';
import Nav from './nav'
import { Link } from 'react-router-dom';

import { onport,cliport } from './base/comment';

class MainHeader extends Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextprops){
        console.log(this.props)
        console.log(nextprops)
    }
    componentDidUpdate(prevprops,prevState){
        console.log(this.props)
        console.log(prevprops)
    }
    
    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        console.log(prevState)
    }

    isLogin(){
        let { isLogin, data } = this.props;
        if (isLogin) {
            return (
                <li className="fr"><a href="http://game.91muzhi.com/main/user/account" target="_blank" rel="noopener noreferrer"><span className="pis-hover">{data.name}</span></a> &nbsp;|&nbsp; <span className="pis-hover" onClick={()=>{this.signOut()}} >退出</span></li>
            )
        } else {
            return (
                <li className="fr"><i className="icon-spri icon-login"></i><a href="http://game.91muzhi.com/main/login" target="_blank" rel="noopener noreferrer"><span className="pis-hover">登录 &nbsp;|</span></a><a href="http://game.91muzhi.com/main/register" target="_blank" rel="noopener noreferrer"><span className="pis-hover">&nbsp; 注册</span></a></li>
            )
        }
    }
    signOut(){
        localStorage.clear();
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

    render () {
        return (
            <Layout.Header className="warp-header">
                <div className="head">
                    <div className="head-content">
                        <ul className="clearfix">
                            <li className="fl pis-hover"><a href="http://game.91muzhi.com/main/index" target="_blank" rel="noopener noreferrer"><i className="icon-spri icon-gw"></i><span>91muzhi |</span></a></li>
                            <li className="fl pis-hover"><a href="http://game.91muzhi.com/m/pc.html" target="_blank" rel="noopener noreferrer"><i className="icon-spri icon-mobile"></i><span>手机版 |</span></a></li>
                            <li className="fl pis-hover"><a href="http://game.91muzhi.com/yyb/pc/" target="_blank" rel="noopener noreferrer"><i className="icon-spri icon-app"></i><span>app</span></a></li>
                            {this.isLogin()}
                        </ul>
                    </div>
                </div>
                <div className="head-nav">
                    <Row>
                        <Col md={12}>
                            <Link to="/mzvip/index" ><img src={require('./img/logo.png')} alt=""/></Link>
                        </Col>
                        <Col md={12}>
                            <Nav mode="horizontal" id="nav" />
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        );
    }
}


export default connect(state=>state.user)(MainHeader);


