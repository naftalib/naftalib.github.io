import React, { Component } from 'react'
import ProjectsBar from '../components/ProjectsBar'
import Nav from '../components/Nav'
import Display from '../components/Display'
import projectNav from '../utils/ProjectNavigation'
import simple from '../utils/simpleProjects'
import complex from '../utils/complexProjects'
import design from '../utils/UI_UX'
import openSource from '../utils/openSource'
import freelance from '../utils/freelanceWork'



class Body extends Component {

	//state maintaining project navigation and display
	state = { 
			projects: simple,
			project_display:[],
			}
	//init nav & display
	componentDidMount(){
		const currentId = simple.filter(proj=> proj.id === 1)
		this.setState( { project_display: currentId })
  }
  	//method that filters through the project list by id, then commits the selected id to a variable and updates the display state with selected id
	handleClick = id => {
		let currentId = this.state.projects.filter(proj=> proj.id === id)
		this.setState( { project_display: currentId })
	}
	handleNavChange = id => {
	
		switch (id) {
			case  1:
				this.setState( { projects:simple } )
				break;
			case  2:
				this.setState( { projects:complex } )
				break;
			case  3:
				this.setState( { projects:design } )
				break;
			case  4:
				this.setState( { projects:openSource } )
				break;
			case  5:
				this.setState( { projects:freelance } )
				break;
			default:
		}
	} 
	render(){
		const { projects, project_display } = this.state

		const projectList = projectNav.map(link =>
			<ProjectsBar 
			key={link.id}
			link={link}
			handleNavChange={this.handleNavChange}
			/>)

		const navList = projects.map(detail => 
			<Nav 
			key={detail.id} 
			detail={detail} 
			img={detail.img}
			handleClick={this.handleClick}
			/>)

		const displayElement = project_display.map(info =>
			<Display
			key={info.id} 
			info={info} 
			img={info.img}
			/>
			)

		return (

				<div className='selection_container'>
					<div className="selection_pannel">
						{projectList}
					</div>
					<hr id='hr_sec_2' />
					<h3 className='proj_title'>Select a project</h3>
					<div className="selection_pannel">
						{navList}
					</div>
					<hr id='hr_sec_2'></hr>
						{displayElement}
				</div> 
			
		)
	}
}

export default Body



