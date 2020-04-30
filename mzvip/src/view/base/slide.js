import React,{Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'


class Slide extends Component{
    constructor(arg){
        super(arg);
        this.state = {
            slide : []
        }
    }
    componentDidMount(){
        axios.post(`https://91muzhi.com/muzhipc/web/news/findBanner`)
            .then((res)=>{
                this.setState({
                    slide:res.data
                },()=>{
                    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
                    new Swiper('.swiper-container',{
                        direction:'horizontal',
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                        el: '.swiper-pagination',
                        },
                        // 如果需要前进后退按钮
                        navigation: {
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                        },
                        autoplay:{
                            delay:3000,
                            disableOnInteraction:false, //解决滑动后不能轮播的问题
                        }, 
                        observer:true,//修改swiper自己或子元素时，自动初始化swiper
                        observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    });
                })
            })
    };
    render(){
        let slideurl = "https://91muzhi.com/muzhipc";
        let imgHtml = (this.state.slide.rows || []).map((v,i)=>{
            return (
                <div className="swiper-slide" key={i}>
                    <img src={slideurl+v.imgName} alt="" />
                </div>
            )
        })
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {imgHtml}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button button-prev"></div>
                <div className="swiper-button button-next"></div>
            </div>
        );
    }
}
export default connect(state=>state.slide)(Slide);