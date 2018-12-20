import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
	render() {
		return(
			<Grid>
				<Cell col={4}>
					<p>{this.props.startYear} -  {this.props.endYear}</p>
				</Cell>
				<Cell col={8}>
					<h4 style={{ marginTop: '0rem' }}>{this.props.jobName}</h4>
					<h6>{this.props.jobTitle}</h6>
					<p><em>{this.props.jobDescription}</em></p>
					<ul>
						{this.props.bullets.map((value, index) =>
							<li key={index}>{value}</li>
						)}
					</ul>
				</Cell>
			</Grid>
		)
	}
}

export default Experience;