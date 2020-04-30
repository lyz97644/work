import React,{ Component } from 'react';
import { BackTop } from 'antd';

class GoTop extends Component{
    render(){
        return(
            <BackTop visibilityHeight={200}>
                <img src={require('../img/top.jpg')} alt="gotop" />
            </BackTop>
        )
    }
}
export default GoTop;
