module.exports = {
  email: 'acm@pccoer.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/PCCOER-ACM-Student-Chapter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/acmpccoer',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/acmpccoer',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/pccoer-acm-student-chapter',
    },
    {
      name: 'Discord',
      url: 'https://linktr.ee/acmpccoer',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Upcoming Events',
      url: '/#upcoming',
    },
    {
      name: 'Previous Events',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  // Green here is actually acm blue
  colors: {
    green: '#25a4e6',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
