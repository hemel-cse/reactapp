import React, { Component } from 'react';
import { Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import App from "./components/App";
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