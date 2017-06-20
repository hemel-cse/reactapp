import React, { Component } from 'react';
import { Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import Home from "./Home";
import FAQ from "./FAQ";
import App from "./App";
import createHistory from 'history/createBrowserHistory';

class Routes extends Component {
	render() {
	return (
	<Router history={createHistory} >
		<Route exact path="/" component={App}>
		<Route path="/Course" component={Home} />
		<Route path="/FAQ" component={FAQ} />
		</Route> 
	</Router>
	);
   }
}

export default Routes;