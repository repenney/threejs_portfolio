export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  

  //Data for Projects Section
  export const myProjects = [
    {
      title: 'SightCall Data Collection & Analysis',
      desc: 'Developed a software solution to consume SightCall data from an API, parse, and analyze it to assess the adoption rate and business impact of SightCall, a third party visual support vendor, for GE HealthCare.',
      subdesc:
        'Built as a Steamlit app to display key data points using Pandas, NumPy, Python, PostGreSQL.',
      href: 'https://1drv.ms/p/c/81debcfe023acd7b/EQIqpLp85RtItdrF6Y0MuHgBKeetEfBR6smQ9E51yLF28Q?e=iw7YLH',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#FAF9F6',
        border: '0.2px solid #FAF9F6',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Streamlit',
          path: 'assets/streamlit.png',
        },
        {
          id: 3,
          name: 'Pandas',
          path: '/assets/pandas.png',
        },
        {
          id: 4,
          name: 'Git',
          path: '/assets/git.png',
        },
      ],
    },
    {
      title: 'RADIUS Site Automation',
      desc: 'Partnered with American Bandwidth to design and deliver a GUI tool for creating RADIUS networks, streamlining network setup, and reducing employee time requirements.',
      subdesc: 
        'Utilized Scrum and Agile development practices, PowerShell, Visual Studio, Visual Studio Code, and PuTTY, to automate network creation with customizable Linux command inputs.',
      href: 'https://1drv.ms/p/c/81debcfe023acd7b/EWBxL3k_hkVNhptklHpFtVYB96mOWI2KSKjz1TzSfe2ZLg?e=2mN9E0',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#FAF9F6',
        border: '0.2px solid #FAF9F6',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Powershell',
          path: '/assets/powershell.png',
        },
        {
          id: 2,
          name: 'Visual Studio',
          path: 'assets/visualstudio.png',
        },
        {
          id: 3,
          name: 'PuTTY',
          path: '/assets/putty.png',
        },
        {
          id: 4,
          name: 'Linux CLI',
          path: '/assets/linux.png',
        },
      ],
    },
    {
      title: '3D Web Interactivity with Three.js and React',
      desc: 'Created a tech demo using React and Three.js to showcase interactive 3D models with real-time rendering and smooth performance. The project emphasizes intuitive user interaction and demonstrates my ability to integrate 3D graphics into modern web applications.',
      subdesc:
        'Developed with modern web tools to create an immersive, interactive 3D experience directly in the browser.',
      href: 'https://1drv.ms/p/c/81debcfe023acd7b/EZixWX4C8M5BsrUBgO50_40Bl6WOW29TPDKfos8VXX5aLw?e=45kHQO',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three.js',
          path: '/assets/threejs.png',
        },
        {
          id: 4,
          name: 'HTML 5',
          path: '/assets/html.png',
        },
      ],
    },
  ];
  

  //Determine Home page model scale and position based on device size
  export const calculateSizes = (isSmall, isMobile) => {
    return {
      beachScale: isSmall ? 0.09 : isMobile ? 0.12 : .18,
      beachPosition: isSmall ? [9,-10,4] : isMobile ? [12, -13, 3] : [18, -20, 2.5],
    };
  };
  

  //Data for Experience Section
  export const workExperiences = [
    {
      id: 1,
      name: 'American Bandwidth',
      pos: 'Network Security Engineer',
      duration: 'Nov 2024 - Present',
      title: "Worked as a Network Security Engineer at American Bandwidth, supporting the design, deployment, and maintenance of secure network infrastructures for enterprise clients.",
      icon: '/assets/ameriband.PNG',
    },
    {
      id: 2,
      name: 'GE Healthcare',
      pos: 'EID Intern',
      duration: 'May 2024 - Nov 2024',
      title: "Completed a software development internship at GE Healthcare, gaining experience in data engineering, application development, and cross-functional collaboration.",
      icon: '/assets/gehc.PNG',
    },
    {
      id: 3,
      name: 'Mathnasium',
      pos: 'Math Tutor',
      duration: '2020 - 2024',
      title: "Working at Mathnasium involved teaching math to K-12 students in a fun, supportive environment using a proven, personalized learning method.",
      icon: '/assets/mathnasium.PNG',
    },
  ];