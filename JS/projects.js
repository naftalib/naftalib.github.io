const projects = {
    one:{
        img: "./assets/DATA/imgs/dashboard.PNG",
        title: 'Personal Dashboard app',
        description: `This little app is a cool chrome extention based off of the momentum browser extention. I gave it a few other features like a currency converter.`,	
        code: 'https://github.com/naftalib/dashBoard',
        link: 'https://naftalib.github.io/dashBoard/'
    },
    two:{
        img:"./assets/DATA/imgs/robocards.JPG",
        title: 'Robo Cards',
        description: `This React app displays character cards, generated with a http-call to robohash.org to retrieve character figures and the JSON placeholder/users API. The characters are searchable according to name. I plan on adding some more features to it soon`,
		code: 'https://github.com/naftalib/roboQuotes/tree/main',
		link: 'https://naftalib.github.io/roboQuotes/',
    
    },
    three:{
        img:"./assets/DATA/imgs/MG.JPG",
        title: 'Meme Generator',
        description: `This app was part of a React course which covered lifecycle methods, API calls and React forms`,
        code: 'https://github.com/naftalib/MemeGenerator',
        link: "https://naftalib.github.io/MemeGenerator/" 
    },
    four:{
        img:"./assets/DATA/imgs/ToDo.JPG",
        title: 'To do list',
        description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and componant styling`,
        code: 'https://github.com/naftalib/todoApp',
        link: 'https://naftalib.github.io/todoApp/',
    
    },
    five:{
        img:"./assets/DATA/imgs/GoogleKeep.JPG",
        title: 'Google Keep clone',
        description: `This project was the first of a JS boot camp which I completed. The aim was to mimic the Google Keep app's basic functionality of taking and storing notes. Check out my code on GitHub by clicking on the link below`,
		code: 'https://github.com/naftalib/GoogleKeepClone',
		link: 'https://naftalib.github.io/GoogleKeepClone/'
    },
    six:{
        img:"./assets/DATA/imgs/HN.JPG",
        title: 'News Feed',
        description: `I used this project as the playground to get familiar with React hooks in functional components. I coded it from scratch with hooks and then redid it using class-based components so as to fully grasp the mechanics of using the 'useState' and 'useEffect' hooks`,
		code: 'https://github.com/naftalib/news-test',
		link: 'https://naftalib.github.io/news-test/'
    
    },
    seven:{
        img:"./assets/DATA/imgs/parking.PNG",
        title: 'Parking tracker',
        description: `I developped this App as part of a coding challenge that I expanded on. See the README file for more details.`,
		code: 'https://github.com/naftalib/parking-tracker/blob/API/client/js/app.js',
		link: 'https://naftalib.github.io/parking-tracker/'
    
    }
  }
  
  
  function test(data){
  return `

  <div class="project-display-card-js">
    <img src=${data.img} alt=${data.title}>
    <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="project-links">
        <ul>
            <li><a href=${data.code} target="_blank">Inspect the Code</a></li>
            <li><a href=${data.link} target="_blank">Check it out this project</a></li>
        </ul> 
        </div>
  </div>

  
  `
  }
  
  document.querySelector("#project-1").innerHTML = `${test(projects.one)}`
  document.querySelector("#project-2").innerHTML = `${test(projects.seven)}`
  document.querySelector("#project-3").innerHTML = `${test(projects.two)}`
  document.querySelector("#project-4").innerHTML = `${test(projects.four)}`
  document.querySelector("#project-5").innerHTML = `${test(projects.five)}`
  document.querySelector("#project-6").innerHTML = `${test(projects.six)}`
