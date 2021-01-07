import React from 'react'

const Logo = () =>{
	
	// styles
		const logo ={
			  maxWidth: '400px',
			  display: 'flex',
			  flexWrap: 'wrap',
			  alignContent: 'center',
			  color: '#fff',
			  fontFamily: 'Ariel, sans-serif'
		}
		const tag = {
			    opacity: '30%',
			    marginBottom: '0',
			    fontSize: '2em',
			    color: '#fff' 
			}
		const h2 = {
			 fontSize: '1.2em',
			 marginTop: '0',
			 marginBottom: '0',
			 color: '#7fdff4',
			}

		const hr_logo = {
		    width: '8em',
			}
		const webdev = {
			fontsize: '1em',
		    margin: '0 0 1em 0',
		}
		const hr_main = {
		    maxWidth: '260px',
		    width: '30%',
		    // display: 'block',
		    height: '1px',
		    border: '0',
		    borderTop: '1px solid #7a7c72',  
		}

	return(

		<div style={logo}>	
			<h1 style={tag}>{`<NB/>`}</h1>
		    <h2>Naftali Breuning</h2>
		    <hr style={hr_logo} />
		    <h3 id={webdev}>web developer</h3>
		    <hr style={hr_main} />
		</div>
		)
}
export default Logo