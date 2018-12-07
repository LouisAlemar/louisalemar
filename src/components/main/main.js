import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../landing_page/landing_page';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
	</Switch>
)

export default Main;