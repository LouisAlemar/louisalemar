import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
	render(){
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img 
								src={'../images/profile_pic.jpg'} 
								alt="Louis Alemar"
								className="profile_pic"
							/>
						</div>

						<h2 style={{ paddingTop: '2rem' }}>Louis Alemar</h2>
						<h4 style={{ color: 'grey' }}>Front-End Engineer</h4>
						<hr style={{ borderTop: '3px solid rgb(72, 108, 175)', width: '50%' }}/>
						<p>Experienced Front-End Engineer in the NYC area</p>
						<hr style={{ borderTop: '3px solid rgb(72, 108, 175)', width: '50%' }}/>
						<h5>Email</h5>
						<p><a href="mailto:louisalemar@gmail.com">louisalemar@gmail.com</a></p>
						<hr style={{ borderTop: '3px solid rgb(72, 108, 175)', width: '50%' }}/>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						Right Side
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;