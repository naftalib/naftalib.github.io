import React from 'react'
import FadeIn from 'react-fade-in'

function Nav (props){

	return (

		<FadeIn>
		<div className="project_icons_list">
			<span id='project_icon'>
				<img className='project_img' 
				src={props.detail.img} 
				height='100px' 
				onClick={()=> props.handleClick(props.detail.id)}
				>
				</img>
				<p>{props.detail.title}</p>
			</span>
		</div>           
		</FadeIn>                                                                                                 
		)
}
export default Nav