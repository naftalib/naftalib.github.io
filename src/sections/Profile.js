import React from 'react'

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
		<h2>About</h2>
		<p>
			{`Highly motivated and tenacious self-taught Web developer. Passionate about learning new technologies and problem solving, always trying to find the most logical yet creative solution to any challenge`}<br />
			<br />
			{`Please browse through my portfolio. Each project has a link to a live demo as well as a github repo`}
		</p>
		<h2>Skills</h2>
		<p>
			{`=> JavaScript, React, HTML, CSS, Figma`}<br />
			{`=> Git, Node.js, Express, MongoDB`}
		</p>
		<h2>Experience</h2>
		<p>
			{`Deloper roles`}<br />
			{`=> 2019-current: Open source contributor and freelancer`}<br />
			<br />
			{`Other roles`}<br />
			{`=> 2007-2009: Freelance multimedia designer`}<br />
			{`=> 2006-2007: Multimedia and web designer at Realtime pictures, South Africa`}
		</p>
		<h2>Education</h2>
		<p>
			{`Web development courses`}<br />
			{`=> J.S & React bootcamps, Full Stack devloper course`}<br />
			<br />
			{`B.A (Hons) Multimedia Design`}
		</p>
		<hr id="hr_sec_2"></hr>
		<div id='contactInfo'>
			<p><span a href="#" style={style}>naftalib212@gmail.com</span> || +972 5331 55534

</p>
		</div>
		<hr id="hr_sec_2"></hr>
	</div>
	)

}
export default Profile