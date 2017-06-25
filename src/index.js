import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);
registerServiceWorker();
