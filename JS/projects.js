//Obj containing an object with each project's details

const projects = {
    one:{
        img: "./assets/DATA/imgs/js.png",
        title: 'Personal Dashboard app',
        description: `This little app is a cool chrome extension based off of the momentum browser extension. I gave it a few other features like a currency converter.`,	
        code: 'https://github.com/naftalib/dashBoard/blob/main/index.js',
        link: 'https://github.com/naftalib/dashBoard'
    },
    two:{
        img:"./assets/DATA/imgs/react.png",
        title: 'Robots',
        description: `This React app displays character cards, generated with a http-call to robohash.org to retrieve character figures and the JSON placeholder/users API for dummy data. The characters are searchable by name. I plan on adding a feature where a random quote generator will trigger a quote when a robot is clicked.`,
		code: 'https://github.com/naftalib/robots/blob/main/src/containers/App.js',
		link: 'https://github.com/naftalib/robots',
    
    },
    three:{
        img:"./assets/DATA/imgs/js.png",
        title: 'War Cards',
        description: `Play against the computer and see who wins. A course project I built using vanilla JS.`,
        code: 'https://github.com/naftalib/war-cards/blob/main/script.js',
        link: "https://github.com/naftalib/war-cards" 
    },
    four:{
        img:"./assets/DATA/imgs/react.png",
        title: 'To do list',
        description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and component styling.`,
        code: 'https://github.com/naftalib/todoApp/blob/main/src/App.js',
        link: 'https://github.com/naftalib/todoApp',
    
    },
    five:{
        img:"./assets/DATA/imgs/js.png",
        title: 'Google Keep clone',
        description: `This project was the first of a JS boot camp which I completed. The aim was to mimic the Google Keep app's basic functionality of taking and storing notes. Check out my code on GitHub by clicking on the link below.`,
		code: 'https://github.com/naftalib/GoogleKeepClone/blob/master/app.js',
		link: 'https://github.com/naftalib/GoogleKeepClone'
    },
    six:{
        img:"./assets/DATA/imgs/react.png",
        title:'git -search ',
        description:`I used this project as the playground to get familiar with React hooks in functional components. I coded it from scratch with hooks and then redid it using class-based components so as to fully grasp the mechanics of using the 'useState' and 'useEffect' hooks.`,
		code:"https://github.com/naftalib/github_finder_hooks/blob/main/src/App.js",
		link:"https://github.com/naftalib/github_finder_hooks"
    
    },
    seven:{
        img:"./assets/DATA/imgs/js.png",
        title: 'Parking tracker',
        description: `I developed this App as part of a coding challenge that I expanded on. See the README file for more details.`,
		code: 'https://github.com/naftalib/parking-tracker/blob/API/client/js/app.js',
		link: 'https://github.com/naftalib/parking-tracker'
    
    },
    eight:{
        img:"./assets/DATA/imgs/react.png",
        title: 'Investors',
        description: `This app was my solution to a coding challenge, fetching data from an API that generates JSON objects consisting of a unique profile for an investor, built in in React. See the README file in the repo.`,
		code: 'https://github.com/naftalib/bhbsd/blob/main/src/App.js',
		link: 'https://github.com/naftalib/bhbsd'
    
    }
  }
  
 //Fn taked in the projects Obj as arg and returns template string- HTML card
  function test(data){
  return `

  <div class="project-display-card-js">
    <img src=${data.img} alt=${data.title}>
    <h2>${data.title}</h2>
        <p>${data.description}</p>
        
        <div class="project-links">
        <ul>
            <li><a href=${data.code} target="_blank">> Code</a></li><br>
            <li><a href=${data.link} target="_blank">> Demo</a></li>
        </ul> 
        </div>
        <hr>
  </div>
  `
  }
  
//Instantiation of each project - deployed to the DOM

  document.querySelector("#project-1").innerHTML = `${test(projects.eight)}`
  document.querySelector("#project-2").innerHTML = `${test(projects.seven)}`
  document.querySelector("#project-3").innerHTML = `${test(projects.one)}`
  document.querySelector("#project-4").innerHTML = `${test(projects.two)}`
  document.querySelector("#project-5").innerHTML = `${test(projects.four)}`
  document.querySelector("#project-6").innerHTML = `${test(projects.five)}`
  document.querySelector("#project-7").innerHTML = `${test(projects.six)}`
  document.querySelector("#project-8").innerHTML = `${test(projects.three)}`


