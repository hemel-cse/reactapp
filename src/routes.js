import react from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from "./components/Home";
import App from "./App";


export default (
	<Route path="/" component={App}>
	<IndexRoute component={Home} />
	</Route>
);
