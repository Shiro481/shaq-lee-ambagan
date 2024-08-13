

let skillSet =[
  {
    icon:'<i class="fa-brands fa-github"></i></i>',
    title:'Git Veresion Control',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:' <i class="fa-brands fa-app-store-ios"></i>',
    title:'App Development',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:'<i class="fa-solid fa-code"></i>',
    title:'Front-end Development',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:'<i class="fa-brands fa-figma"></i>',
    title:'UI/UX Design',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:'<i class="fa-solid fa-tags"></i>',
    title:'Branding',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:'<i class="fa-solid fa-camera"></i>',
    title:'Phototgraphy',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
];
let skillCardContainer = '';

skillSet.forEach((skill) => {
  skillCardContainer += `
    <div class="skill-card">
      ${skill.icon}
      <h2>${skill.title}</h2> <!-- Fixed the typo here -->
      <p>${skill.description}</p>
    </div>`;
});

// Assuming there's only one .skills-container
document.querySelector('.skills-container').innerHTML = skillCardContainer;


