import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/home" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
