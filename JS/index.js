// Generate & display the current time and date

function getCurrentDate() {
  const date = new Date()
  document.getElementById('date').textContent = date.toDateString();
  
}
getCurrentDate()

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu")
const ul = document.querySelector("nav ul")
const nav = document.querySelector("nav")

// Select nav links
const navLink = document.querySelectorAll(".nav-link")

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show")
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show")
  })
);

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up")

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// Light-Dark Theme

// Selectors
const themeBtnLight = document.querySelector("#light-theme-btn")
const themeBtnDark = document.querySelector("#dark-theme-btn")
const root = document.documentElement

// Buttons
themeBtnLight.addEventListener("click", () =>{
 root.style.setProperty('--bg-color', 'whitesmoke')
 root.style.setProperty('--bg-color2', '#f3eee7')
 root.style.setProperty('--bg-color3', '#e9e5e0')
 root.style.setProperty('--text-color', 'black') 
 root.style.setProperty('--primary-color', '#379e9c')
 
} )

themeBtnDark.addEventListener("click", () =>{
  root.style.setProperty('--bg-color', '#191D1F')
  root.style.setProperty('--bg-color2', 'black')
  root.style.setProperty('--bg-color3', '#24282b')
  root.style.setProperty('--text-color', '#ffff') 
  root.style.setProperty('--primary-color', '#7FDFDD')
 } )







 