const skills1 = [
"Google",  
"HTML", 
"CSS",
"UX/UI Design",
"JavaScript",
"React.js",
"Version controll (Git/GitHub)"
]

const skills2 = [
  "Firebase: User-auth, databases",
  "Advanced React concepts",
  "Vue.js", 
  "Node.js",
  "Tailwind CSS",
  ]

const skillsList1 = skills1.map(skill=>{
return `<ul class="skills-ul">
    <li><span>o</span>${skill}</li>  
  </ul>`
})

console.log(skillsList1)

document.querySelector('#skills-row-1').innerHTML = skillsList1.join("")

const skillsList2 = skills2.map(skill=>{
  return `<ul class="skills-ul">
      <li><span>o</span>${skill}</li>  
    </ul>`
  })
  
  console.log(skillsList2)
  
  document.querySelector('#skills-row-2').innerHTML = skillsList2.join("")
