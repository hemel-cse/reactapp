import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Home from "./components/Home";
import Course from "./components/Course";
import Introduction from "./components/Introduction";
import Curriculum from "./components/Curriculum";
import Benefits from "./components/Benefits";
import Trainers from "./components/Trainers";
import Lab from "./components/Lab";
import Admission from "./components/Admission";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import PageNotFound from "./components/NotFound";
import './index.css';

class App extends Component {
  render() {
    return (
        <div className="vbox viewport">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/course' component={Course}/>
                <Route path='/introduction' component={Introduction}/>
                <Route path='/curriculum' component={Curriculum}/>
                <Route path='/benefits' component={Benefits}/>
                <Route path='/trainers' component={Trainers}/>
                <Route path='/lab' component={Lab}/>
                <Route path='/admission' component={Admission}/>
                <Route path='/faq' component={FAQ}/>
                <Route path='/contact' component={Contact}/>
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
  }
}

export default App;
