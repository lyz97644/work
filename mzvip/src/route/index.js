import React,{Component} from 'react';
import {Switch, Route, Redirect } from "react-router-dom";

import Index from '../view/index/index';
import PriviIndex from '../view/privicenter/index'
import Helpcenter from '../view/helpcenter/index'
import ScrollToTop from "./ScrollToTop";

class RouteIndex extends Component{
    render(){
        return(
            <ScrollToTop>
                <Switch>
                    <Route path="/mzvip/" exact render={()=>(
                        <Redirect to="/mzvip/index" />
                    )} />
                    <Route path="/mzvip/index" component={Index} />
                    <Route path="/mzvip/privi" component={PriviIndex} />
                    <Route path="/mzvip/privi/:id" component={PriviIndex}  />
                    <Route path="/mzvip/privi/:id/:id" component={PriviIndex}  />
                    <Route path="/mzvip/helpcenter" component={Helpcenter} />
                </Switch>
            </ScrollToTop>
        );
    }
}
export default RouteIndex;