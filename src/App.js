import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './Components/HomePage/HomePage';
import ResourcePage from './Components/ResourcePage/ResourcePage';
import SuccessStoriesPage from './Components/SuccessStoriesPage/SuccessStoriesPage';
import AboutPage from './Components/BioPage/BioPage';
import ContactAndSchedulePage from './Components/ContactAndSchedulePage/ContactAndSchedule';
import Error from './Components/ErrorPage/ErrorPage';
import Navigation from './Components/Navigation/Navigation';

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/resources" component={ResourcePage} />
					<Route exact path="/successStories" component={SuccessStoriesPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/contact" component={ContactAndSchedulePage} />
					<Route exact component={Error} />
				</Switch>
			</div>
		</Router>
	)
}

export default App;

