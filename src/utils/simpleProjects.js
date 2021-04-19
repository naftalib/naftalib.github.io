import img1 from './imgs/GoogleKeep.JPG'
import img4 from './imgs/Todo.JPG'
import img5 from './imgs/MG.JPG'
import img6 from './imgs/robocards.JPG'
import img7 from './imgs/newsFeed.JPG'

const Data = [

	{
		id: 1,
		img: img1,
		type: 'Vanilla JavaScript',
		title: 'Google Keep clone',
		description: `This project was the first of a JS boot camp which I completed. The aim was to mimic the Google Keep app's basic functionality of taking and storing notes. Check out my code on GitHub by clicking on the link below`,	
		code: 'https://github.com/naftalib/GoogleKeepClone',
		link: 'https://naftalib.github.io/GoogleKeepClone/'

	},
		{
		id: 2,
	    img:img4,
		type: 'React App',
		title: 'To do list',
		description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and componant styling`,
		code: 'https://github.com/naftalib/todoApp',
		link: 'https://naftalib.github.io/todoApp/',

	},
		{
		id: 3,
		img:img5,
		type: 'React App',
		title: 'Meme Generator',
		description: `This app was part of a React course which covered lifecycle methods, API calls and React forms`,
		code: 'https://github.com/naftalib/MemeGenerator',
		link: "https://naftalib.github.io/MemeGenerator/" 

	},
		{
		id: 4,
		img:img6,
		type: 'React App',
		title: 'Robo Cards',
		description: `In this React app I had to create character cards. They are generated with one http-call to robohash.org to retrieve character figures and just to have some placeholder info a second call is being made to the JSON placeholder/users API. The only cool thing about this app is that you can filter through the characters by name. I plan on adding some more features to it soon!`,
		code: 'https://github.com/naftalib/roboQuotes/tree/main',
		link: 'https://naftalib.github.io/roboQuotes/',
	},
		{
		id: 5,
		img:img7,
		type: 'React App',
		title: 'News Feed',
		description: `I used this project as the playground to get familiar with and perfect using hooks in functional based components. I coded the project up from scratch with hooks and then recoded it into a class-based one and then redid it as functinal so as to fully grasp the mechanics of using the 'useState' and 'useEffect' hooks`,
		code: 'https://github.com/naftalib/news-test',
		link: 'https://naftalib.github.io/news-test/',
	}

]

export default Data