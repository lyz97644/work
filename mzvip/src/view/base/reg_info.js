import React,{Component } from 'react';
import { withRouter } from 'react-router-dom';

class RegInfo extends Component{

    render(){
        let {className} = this.props;
        return (
            <div className={className}>
                <div className="portrait">
                    <img src={require('../img/tx.png')} alt="img" />
                </div>
                <div className="regbtn">
                    <a href="http://game.91muzhi.com/main/login"><button className="reg-btn reg-login"></button></a>
                    <a href="http://game.91muzhi.com/main/register"><button className="reg-btn reg-reg"></button></a>
                </div>
            </div>
        );
    }
}
export default withRouter((props)=>{
    let {className, parent} = props;
    return <RegInfo 
     className={className}
     parent={parent}
    />
});