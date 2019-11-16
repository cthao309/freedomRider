import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
	return (
		<header>
			<NavLink to="/">	<img className="siteLogo" src={''} alt="Site Logo" /></NavLink>
			<nav className="Nav-container">
				<div className="Navlinks">
					<NavLink to="/resources">Resources</NavLink>
					<NavLink to="/successStories">Success Stories</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</div>
			</nav>
		</header>
	)
}
export default Navigation;