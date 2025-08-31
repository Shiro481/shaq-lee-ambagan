// skills-data.js (could be a separate file)
const skillSet = [
  {
    id: 1,
    icon: '<i class="fa-solid fa-music"></i>',
    title: 'Music',
    description: 'I\'ve always been music-minded since childhood. I enjoy listening to various genres and playing guitar, piano, and drums.'
  },
  {
    id: 2,
    icon: '<i class="fa-solid fa-tree"></i>',
    title: 'Nature Exploration',
    description: 'When in my hometown, I enjoy watching sunsets and mountain views as a form of therapy.'
  },
  {
    id: 3,
    icon: '<i class="fa-solid fa-code"></i>',
    title: 'Front-end Development',
    description: 'I enjoy learning HTML, CSS, and JavaScript in my free time, aiming to pursue a web development career.'
  },
  {
    id: 4,
    icon: '<i class="fa-brands fa-figma"></i>',
    title: 'UI/UX Design',
    description: 'Passionate about creating intuitive user interfaces and experiences.'
  },
  {
    id: 5,
    icon: '<i class="fa-solid fa-pen-nib"></i>',
    title: 'Graphic Design',
    description: 'Experienced in creating visual content and branding materials.'
  },
  {
    id: 6,
    icon: '<i class="fa-solid fa-camera"></i>',
    title: 'Photography',
    description: 'Skilled in capturing moments and creating compelling visual stories.'
  }
];

// Main application
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  setupForm();
});

function renderSkills() {
  const skillsContainer = document.querySelector('.skills-container');
  
  if (!skillsContainer) {
    console.error('Skills container not found');
    return;
  }

  const skillsHTML = skillSet.map(skill => `
    <div class="skill-card" data-id="${skill.id}">
      ${skill.icon}
      <h2>${skill.title}</h2>
      <p>${skill.description}</p>
    </div>
  `).join('');

  skillsContainer.innerHTML = skillsHTML;
  addSkillInteractions();
}

function addSkillInteractions() {
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
      // Add interactive functionality here
      card.classList.toggle('active');
    });
  });
}

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.querySelector('.js-name-input').value;
  const email = document.querySelector('.js-email-input').value;
  const message = document.querySelector('.js-message-input').value;
  alert(`Thank you ${name} for your message!`);
  console.log(name, email, message);
})