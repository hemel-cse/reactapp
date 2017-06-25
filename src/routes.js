import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Curriculum from "./components/Curriculum";
import Benefits from "./components/Benefits";
import Trainers from "./components/Trainers";
import Lab from "./components/Lab";
import Admission from "./components/Admission";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

import App from "./App";

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/course' component={Home}/>
                    <Route path='/introduction' component={Introduction}/>
                    <Route path='/curriculum' component={Curriculum}/>
                    <Route path='/benefits' component={Benefits}/>
                    <Route path='/trainers' component={Trainers}/>
                    <Route path='/lab' component={Lab}/>
                    <Route path='/admission' component={Admission}/>
                    <Route path='/faq' component={FAQ}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;