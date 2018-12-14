import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 }
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#000', height: '200px', background: 'url(../images/noddle.png) center / cover'}}>
						Noddle Companies
					</CardTitle>
					<CardText>
						The Noddle Companies is a full service strategic development partner which can provide their clients with assistance in site selection, acquisition master planning, architect and contractor selections and contract negotiation, zoning, infrastructure installation, tax incentives, construction management and more.
					</CardText>
					<CardActions className="CardActions" border>
						<Button colored><a href="http://www.noddlecompanies.com/" target="_blank">Website</a></Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			)
		} else if(this.state.activeTab === 1){
			return(
				<div><h1>This is Angular</h1></div>
			)
		} else if(this.state.activeTab === 2){
			return(
				<div><h1>This is MongoDB</h1></div>
			)
		}
	}
	
	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<section className="projects-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">
								{this.toggleCategories()}
							</div>
						</Cell>
					</Grid>
				</section>
			</div>
		)
	}
}

export default Portfolio;