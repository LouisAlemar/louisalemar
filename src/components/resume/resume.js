import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../education/education';
import Experience from '../experience/experience';
import Skills from '../skills/skills';

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
						<h2>Education</h2>

						<Education
							startYear={2012}
							endYear={2015}
							schoolName='Full Sail University'
							schoolDescription='Bachelor of Science Degree in Music Production'
						/>

						<hr style={{ borderTop: '3px solid rgb(75, 114, 189)' }}/>

						<h2>Experience</h2>

						<Experience
							startYear={2017}
							endYear='Present'
							jobName='The Berman Group'
							jobTitle='Front-End Engineer'
							jobDescription='Public relations company delivering business-to-business marketing, public relations, and special events services'
							bullets={
								['Developed internal search engines for multiple clients such as BOMA New York and Noddle Companies', 
								'Utilized AJAX, jQuery, and JavaScript to build website content with Wordpress page and custom post types on front-end as the lead front-end engineer',
								'Supervised and trained junior developers on how to render Wordpress content to the DOM using PHP, jQuery, and JavaScript',
								'Manually setup Apache servers using Digital Ocean for individual clients',
								'Conducted quality assurance tests to optimize usability and discover parse-time, run-time, and logical errors',
								'Collaborated with designers to create clean interfaces, intuitive interactions, and user-friendly experiences',
								'Used LESS to write reusable mixins and variables to expedite and centralize application styling']
							}
						/>

						<Experience
							startYear={2014}
							endYear={2017}
							jobName='Skylo Services'
							jobTitle='Founder/Web Developer'
							jobDescription='Web development company focused on delivering the best user experience in a timely manner'
							bullets={
								['Created webpages and web apps for clients using a multitude of technologies and languages such as HTML5, CSS3, JavaScript, ReactJs, PHP, and FlexBox', 
								'Built mobile responsive user-friendly interfaces with BootStrap',
								'Collaborated with clients to develop a sitemap and discuss design options',
								'Fixed bugs from existing websites and added enhancements that improved web functionality & speed']
							}
						/>

						<hr style={{ borderTop: '3px solid rgb(75, 114, 189)' }}/>

						<h2>Skills</h2>

						<Skills
							skill='HTML/CSS'
							progress={100}
						/>

						<Skills
							skill='JavaScript'
							progress={100}
						/>

						<Skills
							skill='PHP'
							progress={85}
						/>

						<Skills
							skill='React'
							progress={70}
						/>

						<Skills
							skill='NodeJS'
							progress={70}
						/>

						<Skills
							skill='MySQL'
							progress={85}
						/>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;