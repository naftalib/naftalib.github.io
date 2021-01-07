import React from 'react';
import './App.css'
import Header from './sections/Header'
import Projects from './sections/Projects'
import Profile from './sections/Profile'
import Footer from './sections/Footer'

function App() {

  return (
   <div>  
      <div>
        <Header />
      </div>
      <div className='body'>
        <div className='body2'>
        <Profile />
           <Projects />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    )
}

export default App;
