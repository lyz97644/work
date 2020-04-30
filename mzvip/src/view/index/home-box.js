import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import data from "./data"

export default class HomeBox extends Component {
    bubble(name){
        return (
            <div className="bubble">
                <p>{name}</p>
            </div>
        )
    }
    render(){
        return (
            <div className="home-box">
                <div className="gamePrivilege">
                    <div className="privi-title">
                        <span className="privi_game"></span>
                        <Link to="/mzvip/privi/gamePrivi"><span className="privi-more"></span></Link>
                    </div>
                    <div className="privi-msg">
                        <Popover content={this.bubble(data.exclupackage)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/gamePrivi/ExcluPackage">
                                <img src={require('../img/hint_game1.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.Actiprivi)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/gamePrivi/ActivityPrivi">
                                <img src={require('../img/hint_game2.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.newgame)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/gamePrivi/NewTravel">
                                <img src={require('../img/hint_game3.png')} alt="" />
                            </Link>
                        </Popover>
                    </div>
                </div>
                <div className="idenPrivilege">
                    <div className="privi-title">
                        <span className="privi_iden"></span>
                        <Link to="/mzvip/privi/idenPrivi"><span className="privi-more"></span></Link>
                    </div>
                    <div className="privi-msg">
                        <Popover content={this.bubble(data.mziden)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/idenPrivi/MedalHonor">
                                <img src={require('../img/hint_iden1.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.birt)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/idenPrivi/BirthPrivi">
                                <img src={require('../img/hint_iden2.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.exclusive)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/idenPrivi/ExcluChange">
                                <img src={require('../img/hint_iden3.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.jqqd)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/idenPrivi">
                                <img src={require('../img/hint_iden4.png')} alt="" />
                            </Link>
                        </Popover>
                    </div>
                </div>
                <div className="servicePrivilege">
                    <div className="privi-title">
                        <span className="privi_service"></span>
                        <Link to="/mzvip/privi/servicePrivi"><span className="privi-more"></span></Link>
                    </div>
                    <div className="privi-msg">
                        <Popover content={this.bubble(data.excluserver)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/servicePrivi/ExcluService">
                                <img src={require('../img/hint_service1.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.Priority)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/servicePrivi/PriorityPro">
                                <img src={require('../img/hint_service4.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.Servicedelay)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/servicePrivi/ServiceDelay">
                                <img src={require('../img/hint_service3.png')} alt="" />
                            </Link>
                        </Popover>
                        <Popover content={this.bubble(data.returnvisit)} arrowPointAtCenter>
                            <Link to="/mzvip/privi/servicePrivi/RegularVisit">
                                <img src={require('../img/hint_service2.png')} alt="" />
                            </Link>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}