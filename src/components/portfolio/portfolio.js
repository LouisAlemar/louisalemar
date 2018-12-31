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
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className="portfolio_item_header" style={{color: '#000', height: '200px', background: 'url(../images/noddle.jpg) center / cover'}}>
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

					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className="portfolio_item_header" style={{color: '#000', height: '200px', background: 'url(../images/nycbuildsbio.jpg) center / cover'}}>
							NYC Builds Bio
						</CardTitle>
						<CardText className="paddingBottom34">
							Launched in 2018, NYC Builds Bio+ connects commercial life science opportunities to New York City's real estate development community through events, research, reports and educational programs.
						</CardText>
						<CardActions className="CardActions" border>
							<Button colored><a href="http://www.nycbuildsbio.org/" target="_blank">Website</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className="portfolio_item_header" style={{color: '#000', height: '200px', background: 'url(../images/iannelli.jpg) center / cover'}}>
							Iannelli Construction
						</CardTitle>
						<CardText className="paddingBottom88">
							An informational website for a construction company.
						</CardText>
						<CardActions className="CardActions" border>
							<Button colored><a href="http://www.iannelliconstruction.com/" target="_blank">Website</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					
				</div>
			)
		} else if(this.state.activeTab === 1){
			return(
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className="portfolio_item_header" style={{color: '#000', height: '200px', background: 'url(../images/louisalemar_website.jpg) center / cover'}}>
							Louis Alemar
						</CardTitle>
						<CardText>
							Portfolio website in React
						</CardText>
						<CardActions className="CardActions" border>
							<Button colored><a href="https://github.com/LouisAlemar/louisalemar" target="_blank">GitHub</a></Button>
							<Button colored><a href="http://www.louisalemar.com/" target="_blank">Website</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			)
		}
	}
	
	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>JavaScript</Tab>
					<Tab>React</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">
							{this.toggleCategories()}
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Portfolio;