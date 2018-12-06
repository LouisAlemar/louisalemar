import React, { Component} from "react";

class Navbar extends Component{
  render(){
    return(
      <div className="Navbar">
      	<div className="logo_container">
	      	<img src={'../images/logo.png'} />
      	</div>
      	<div className="navbar_container">
	      	<ul>
	      		<li><a href="#">About</a></li>
	      		<li><a href="#">Portfolio</a></li>
	      		<li><a href="#">Testimonials</a></li>
	      		<li><a href="#">Contact</a></li>
	      	</ul>
      	</div>
      </div>
    );
  }
}

export default Navbar;