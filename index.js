

let skillSet =[
  {
    icon:'<i class="fa-solid fa-music"></i>',
    title:'Music',
    description:'I\'ve been always a music-minded person since I was kid. I enjoy listening to different kinds of music, playing musical instruments like guitar, piano, and drums. Music has made a big role in my life.'
  },
  {
    icon:'<i class="fa-solid fa-tree"></i>',
    title:'Nature Exploration',
    description:'When I\'m at my hometown, I would go out almost every afternoon to watch sunsets or go to the mountains and enjoying the view. It\'s like a therapy for me'
  },
  {
    icon:'<i class="fa-solid fa-code"></i>',
    title:'Front-end Development',
    description:'Front-end Development is something I enjoy doing when I have free time. I\'ve been learning HTML, CSS, and JavaScript lately. I\'m trying to improve my skills so that maybe one day I can pursue a web developer career'
  },
  {
    icon:'<i class="fa-brands fa-figma"></i>',
    title:'UI/UX Design',
    description:'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  },
  {
    icon:'<i class="fa-solid fa-pen-nib"></i>',
    title:'Graphic design',
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

document.querySelector('.submit-btn').addEventListener('click', submitMessage);

const userName = document.querySelector('.js-name-input');
const userEmail = document.querySelector('.js-email-input');
const userMessage = document.querySelector('.js-message-input');

function submitMessage() {
  if (userName.value.trim() === '' || userEmail.value.trim() === '' || userMessage.value.trim() === '') {
    alert('ERROR  Message not sent');
  } else {
    alert('Message sent successfully');
  }
}
