import React from 'react'
import { withRouter } from 'react-router-dom'

const Profile = () => {

	let style = {
 	fontWeight: 'bold',
 	letterSpacing:'0.2em',
 	color: '#7fdff4'
 }
 const pStyle= {
	 color: 'white',
	 width: '100%',
	 fontSize: '1.2em'
 }
return(
	<div className='section-2'>
		<h1>Profile =></h1>
		<h2>About</h2>
		<p>
			{`Web developer and multimedia designer, overflowing with creative ideas how to design and develop all purpose modern web applications. Highly motivated and passionate about learning and problem solving, always trying to find the most logical yet creative solution to any challenge.`}<br />
			<br />
			{`Feel free to browse through my portfolio.Each project has a link to a live demo as well as a github repo.`}
		</p>
		<h2>Skills</h2>
		<p>
			{`=> JavaScript, React, HTML, CSS, Figma.`}<br />
			{`=> Git, Node.js, Express, MongoDB.`}
		</p>
		<h2>Experience</h2>
		<p>
			{`Deloper roles`}<br />
			{`=> 2019-2021: Open source contributions and various small freelance jobs.`}<br />
			<br />
			{`UI/UX`}<br />
			{`=> 2007-2009: Freelance multimedia designer`}<br />
			{`=> 2006-2007: Multimedia and web designer at Realtime pictures, JHB South Africa.`}
		</p>
		<hr id="hr_sec_2"></hr>
		<div id='contactInfo'>
			<p><span a href="#" style={style}>naftalib@gmail.com</span> || +972 5331 55534</p>
		</div>
		<hr id="hr_sec_2"></hr>
	</div>
	)

}
export default Profile