export const portfolioData = {
  personal: {
    name: "Ashish Kumar Das",
    initials: "AKD",
    title: "Full Stack Developer",
    tagline: "Think. Build. Improve.",
    shortBio:
      "B.Tech Engineering Student passionate about building modern, scalable and user-friendly web applications.",
    aboutParagraphs: [
      "I'm a B.Tech Engineering Student and passionate Full Stack Developer who loves bridging the gap between clean code and intuitive user experiences. I specialize in building end-to-end web applications—from scalable backend architectures and RESTful APIs to responsive, pixel-perfect frontend interfaces.",
      "Constantly exploring new frameworks and tools, I apply sound engineering principles to solve real-world problems through efficient, maintainable software. When I'm not coding, I'm usually debugging side projects, learning about system design, or contributing to open-source software."
    ],
    profileImage: "/profile.jpg"
  },

  features: [
    {
      number: "01",
      title: "FULL STACK DEVELOPMENT",
      description:
        "Building complete web applications from responsive frontend interfaces to backend services."
    },
    {
      number: "02",
      title: "BACKEND & APIs",
      description:
        "Learning to build REST APIs, backend architecture and database-driven applications."
    },
    {
      number: "03",
      title: "PROBLEM SOLVING",
      description:
        "Using programming fundamentals and engineering principles to solve real-world problems."
    }
  ],

  skills: {
    usingNow: [
      {
        category: "Frontend",
        items: [
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "React", icon: "react" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Java", icon: "java" },
          { name: "Python", icon: "python" },
          { name: "Node.js", icon: "node" },
          { name: "Express.js", icon: "express" },
          { name: "PHP", icon: "php" }
        ]
      },
      {
        category: "Database",
        items: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "VS Code", icon: "vscode" },
          { name: "Antigravity", icon: "antigravity" },
          { name: "IntelliJ IDEA", icon: "intellij" }
        ]
      }
    ],
    currentlyLearning: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "REST APIs", icon: "api" },
      { name: "Database Design", icon: "database" },
      { name: "System Design", icon: "system" },
      { name: "DSA", icon: "dsa" },
      { name: "Backend Development", icon: "backend" }
    ]
  },

  projects: [
    {
      id: "01",
      number: "PROJECT 01",
      title: "Full Stack E-Commerce Platform",
      status: "COMING SOON",
      isLive: false,
      stack: ["React", "Java", "Spring Boot", "PostgreSQL"],
      description:
        "A full-stack e-commerce platform focused on responsive UI, authentication, REST APIs, database integration and backend architecture.",
      links: {
        github: { label: "GitHub — Coming Soon", available: false },
        demo: { label: "Live Demo — Coming Soon", available: false }
      }
    },
    {
      id: "02",
      number: "PROJECT 02",
      title: "Task Management Application",
      status: "COMING SOON",
      isLive: false,
      stack: ["React", "Java", "Spring Boot", "PostgreSQL"],
      description:
        "A task management application exploring authentication, CRUD operations, REST APIs and database management.",
      links: {
        github: { label: "GitHub — Coming Soon", available: false },
        demo: { label: "Live Demo — Coming Soon", available: false }
      }
    },
    {
      id: "03",
      number: "PROJECT 03",
      title: "Developer Portfolio",
      status: "CURRENTLY BUILDING",
      isLive: true,
      stack: ["React", "JavaScript", "CSS"],
      description:
        "My personal developer portfolio designed to showcase my skills, learning journey and future projects.",
      links: {
        github: {
          label: "View Source",
          available: true,
          url: "https://github.com/ashishdas80188-source"
        },
        demo: { label: "Active Project", available: true, url: "#home" }
      }
    }
  ],

  education: {
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Einstein Academy of Technology and Management",
    year: "3rd Year",
    status: "Currently Enrolled",
    focus: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems & Networks",
      "Web Technologies"
    ]
  },

  social: {
    github: {
      url: "https://github.com/ashishdas80188-source",
      label: "GitHub",
      handle: "ashishdas80188-source"
    },
    email: {
      url: "mailto:ashishdas80188@gmail.com",
      label: "Email",
      handle: "ashishdas80188@gmail.com"
    },
    linkedin: {
      url: "#",
      label: "LinkedIn",
      handle: "Coming Soon",
      isPlaceholder: true
    }
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ]
};
