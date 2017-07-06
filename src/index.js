import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);
registerServiceWorker();
