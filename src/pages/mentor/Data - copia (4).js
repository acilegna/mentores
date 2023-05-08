import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
const Data = [
  {
    id: '1',
    name: 'Poha',
    lastname: 'Luna',
    category: 'Backend',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: '100 MX$',
    redes: [
      {link: 'https://www.face.com/', icono: faFacebook},
      {link: 'https://www.tuit.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.link.com/', icono: faLinkedin},
    ],

    img: 'images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',
    styles: {
      color: '#5ba0fb',
      background: 'linear-gradient(281deg, #5ba0fb 0%, #007abf 100%)',
    },
    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png', left: '0px'},
      {skill: 'images/ps.png'},
    ],
  },
  {
    id: '2',
    name: 'noha',
    lastname: 'Luna',
    category: 'Frontend',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: 'Free',
    redes: [
      {link: 'https://www.face.com/', icono: faFacebook},
      {link: 'https://www.tuit.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.link.com/', icono: faLinkedin},
      {link: 'https://www.link.com/', icono: faCalendarCheck},
    ],
    img: 'images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',

    styles: {
      color: '#FF512F',
      background: 'linear-gradient(to right, #ff512f, #f09819)',
    },
    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png', left: '0px'},
      {skill: 'images/ps.png'},
      {skill: 'images/ps.png', position: 'left', right: '-63px'},
      {
        skill: 'images/icons8-adobe-illustrator-50.png',
        position: 'left',
        right: '-63px',
      },
    ],
  },
  {
    id: '3',
    name: 'Polha',
    lastname: 'Luna',
    category: 'Full Stack',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: '100 MX$',
    redes: [
      {link: 'https://www.face.com/', icono: faFacebook},
      {link: 'https://www.tuit.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.link.com/', icono: faLinkedin},
    ],
    img: 'images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',
    styles: {
      color: '#92745a',
      background: 'linear-gradient(84deg, #92745a 0%, #dcb083 100%)',
    },
    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png'},
      {skill: 'images/ps.png'},
    ],
  },
  {
    id: '4',
    name: 'pPoha',
    lastname: 'Luna',
    category: 'Backend',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: '120 MX$',
    redes: [
      {link: 'https://www.face.com/', icono: faFacebook},
      {link: 'https://www.tuit.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.link.com/', icono: faLinkedin},
    ],
    img: 'images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',
    styles: {
      color: '#96948a',
      background: 'linear-gradient(270deg, #b5b3a7 0%, #000000 100%)',
    },

    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png'},
      {skill: 'images/ps.png'},
    ],
  },
  {
    id: '5',
    name: 'fPoha',
    lastname: 'Luna',
    category: 'Backend',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: 'Free',
    redes: [
      {link: 'https://www.face.com/', icono: faFacebook},
      {link: 'https://www.tuit.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.link.com/', icono: faLinkedin},
    ],
    img: 'images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',
    styles: {
      color: '#017508',
      background: 'linear-gradient(270deg, #71f14d 0%, #57dc15 11%, #017508 100%)',
    },
    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png'},
      {skill: 'images/ps.png'},
    ],
  },
  {
    id: '6',
    name: 'Jioha',
    lastname: 'Luna',
    category: 'Full Stack',
    language: ['JS', ' ', 'PHP', ' ', 'PYTHON', ' ', 'JAVA'],
    costo: '80 MX$',
    redes: [
      {link: 'https://www.tuitt.com/', icono: faTwitter},
      {link: 'https://www.git.com/', icono: faGithub},
      {link: 'https://www.linke.com/', icono: faLinkedin},
    ],
    img: 'images/img.jpg',
    desc: 'ppp Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. ',
    styles: {
      color: '#d118cf',
      background: 'linear-gradient(90deg, #771277 0%, #d118cf 100%)',
    },
    skills: [
      {skill: 'images/icons8-adobe-illustrator-50.png'},
      {skill: 'images/ps.png'},
    ],
  },
];

export default Data;
