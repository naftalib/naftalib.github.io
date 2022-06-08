import logo from './logo.svg';
import './App.css';
import './Components/Components.css'
import Header from './Components/Header'
import Router from './Components/Router'
import Footer from './Components/Footer'


function App() {
  return (
   <div claassName='mainContainer'>
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Router />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
