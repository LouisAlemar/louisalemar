import React, { Component} from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../main/main';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return(
	    <div className="demo-big-content">
	        <Layout>
	            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Louis Alemar | Front-End Engineer</Link>} scroll>
	                <Navigation>
		                  <Link to="/resume">Resume</Link>
		                  <Link to="/portfolio">Portfolio</Link>
		                  <Link to="/contact">Contact</Link>
	                </Navigation>
	            </Header>
	            <Drawer title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Louis Alemar</Link>}>
	                <Navigation>
		                  <Link to="/resume">Resume</Link>
		                  <Link to="/portfolio">Portfolio</Link>
		                  <Link to="/contact">Contact</Link>
	                </Navigation>
	            </Drawer>
	            <Content>
	                <div className="page-content" />
	                <Main />
	            </Content>
	        </Layout>
	    </div>
    );
  }
}

export default Navbar;