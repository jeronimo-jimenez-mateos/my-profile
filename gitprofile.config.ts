// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jeronimo-jimenez-mateos', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/my-profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jeronimo-jimenez-mateos/LLM-Robotics'], // List of repository names to display.
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Jeronimo Jimenez', description: '', imageURL: '' },
  social: {
    linkedin: 'jeronimo-jimenez-mateos',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/15f9tXBOjseyTHHMsYVvYV0aba9uuaNRT/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C#',
    'C++',
    'Matlab',
    'Simulink',
    'ROS2',
    'MySQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Airgrup SL',
      position: 'Robotics Engineer',
      from: 'January 2024',
      to: 'December 2025',
    },
  ],
  certifications: [
    {
      name: 'Cambridge Advanced - CAE',
      body: 'C1 level of English',
      year: 'March 2025',
    },
    {
      name: 'CELI 3',
      body: 'B2 level of Italian',
      year: 'March 2023',
    },
  ],
  educations: [
    {
      institution: 'Universitat Pompeu Fabra',
      degree: 'PhD in Reinforcement Learning',
      from: '2025',
      to: 'Present',
    },
    {
      institution: 'Universidad Loyola',
      degree: 'MSc in Artificial Intelligence',
      from: '2024',
      to: '2025',
    },
    {
      institution: 'Universidad de Sevilla',
      degree: 'BSc in Robotics Engineering',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    {
      title: '¿Sirve un LLM para controlar un robot móvil?',
      conferenceName: '',
      journalName: '',
      authors: 'Jerónimo Manuel Jiménez Mateos',
      link: 'https://repositorio.uloyola.es/bitstream/handle/20.500.12412/6733/TFM%20Jer%C3%B3nimo%20Manuel%20Jim%C3%A9nez.pdf',
      description:
        'Masters Thesis at Universidad Loyola.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // Track visitor interaction and behavior. https://www.hotjar.com
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  enablePWA: true,
};

export default CONFIG;
