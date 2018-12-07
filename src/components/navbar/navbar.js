import React, { Component} from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class Navbar extends Component{
  render(){
    return(
	    <div className="demo-big-content">
	        <Layout>
	            <Header title="Louis Alemar" scroll>
	                <Navigation>
		                  <li><a href="/">About</a></li>
		                  <li><a href="/">Portfolio</a></li>
		                  <li><a href="/">Testimonials</a></li>
		                  <li><a href="/">Contact</a></li>
	                </Navigation>
	            </Header>
	            <Drawer title="Louis Alemar">
	                <Navigation>
		                  <li><a href="/">About</a></li>
		                  <li><a href="/">Portfolio</a></li>
		                  <li><a href="/">Testimonials</a></li>
		                  <li><a href="/">Contact</a></li>
	                </Navigation>
	            </Drawer>
	            <Content>
	                <div className="page-content" />
	            </Content>
	        </Layout>
	    </div>
    );
  }
}

export default Navbar;