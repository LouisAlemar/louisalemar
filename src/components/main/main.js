import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../landing_page/landing_page';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Testimonials from '../testimonials/testimonials';
import Contact from '../contact/contact';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/resume" component={Resume} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/testimonials" component={Testimonials} />
		<Route path="/contact" component={Contact} />
	</Switch>
)

export default Main;