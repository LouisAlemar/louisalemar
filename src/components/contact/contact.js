import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2 className="header_title">Louis Alemar</h2>
						<img 
							src={'../images/profile_pic.jpg'} 
							alt="Louis Alemar"
							className="profile_pic"
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1rem' }}>
							Since I was a child, I have always been a creative person. From graduating as a Music Producer to being a Front-End Engineer, the creative aspect behind both careers is what has driven me to pursue these professions. I first taught myself how to build webpages back in the 6th grade. The idea of being able to type lines of code to create something from nothing was mind-boggling to me.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>

						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent className="contact-list-content" style={{ fontSize:'30px', fontFamily:'Anton'}}>
							    	<div className="contact-list-content">
							    		<i className="fa fa-envelope" aria-hidden="true"></i>
								    	louisalemar@gmail.com
							    	</div>
							    </ListItemContent>
							  </ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;