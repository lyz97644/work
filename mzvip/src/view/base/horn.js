import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Horn extends Component{
    constructor(arg){
        super(arg);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.post(`https://91muzhi.com/muzhipc/web/news/findWheelWords`)
        .then((res)=>{
            this.setState({
                data:res.data.rows
            })
        })
        .catch((error)=>{
            this.setState({
                data:"升级VIP，享受更多VIP特权"
            })
        })
    }
    render(){
        let {className} = this.props;
        let text = this.state.data&&this.state.data.text;
        if (text === "") {
            text = "升级VIP，享受更多VIP特权"
        }
        return(
            <div className={className}>
                <span className="horn"></span>
                <marquee className="customtext" direction="right">
                    <span>{text}</span>
                </marquee>
                <div className="fg"></div>
            </div>
        );
    }
}
export default withRouter((props)=>{
    let {className} = props;
    return <Horn 
    className={className}
    />
});