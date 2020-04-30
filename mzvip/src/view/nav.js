import React,{Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import { Menu, Divider } from "antd";

class Nav extends Component{
    constructor(props){
        super(props)
        let now = this.getNow(props.location)
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split('/');
        return now[2]
    }
    shouldComponentUpdate(nextprops){
        let now = this.getNow(nextprops.location)
        if (now !== this.state.now) {
            this.setState({
                now
            })
            return true
        }
        return false
    }
    render(){
        let {mode,id} = this.props;
        return (
            <Menu
             mode={mode}
             id={id}
            >
                <Menu.Item key="index">
                    <Link to="/mzvip/index" className="nav_title pis-hover">特权首页</Link>
                </Menu.Item>
                <Divider type="vertical" className="headDivider" orientation="center" />
                <Menu.Item key="supple">
                    <a href="http://game.91muzhi.com/main/user/authen" target="_blank" className="nav_title pis-hover" rel="noopener noreferrer">实名认证</a>
                </Menu.Item>
                <Divider type="vertical" className="headDivider" orientation="center" />
                <Menu.Item key="helpcenter">
                    <Link to="/mzvip/helpcenter" className="nav_title pis-hover">VIP帮助中心</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter((props)=>{
    let {mode, id, location} = props;
    return <Nav 
     mode={mode}
     id={id}
     location={location}
    />
});