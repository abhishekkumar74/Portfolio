import { Project, Service, ExperienceItem, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "2024",
    teamSize: "Solo",
    complexity: "Advanced"
  },
  {
    id: 2,
    title: "Portfolio Landing Page",
    category: "Web Development",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Interactive and engaging user experience portfolio landing page with SEO optimization and performance improvements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://abhishek-portfolioe.netlify.app/",
    githubUrl: "https://github.com/abhishekkumar74/Portfolio-2.0",
    featured: true,
    completionDate: "Mar 2024",
    teamSize: "Solo",
    complexity: "Intermediate"
  },
  {
    id: 3,
    title: "TechiSpot Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Social platform for photo sharing, commenting, news feeds, and tech memes with user authentication.",
    technologies: ["React.js", "Bootstrap", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "Feb 2024",
    teamSize: "Solo",
    complexity: "Advanced"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Web Development",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    completionDate: "2024",
    teamSize: "Solo",
    complexity: "Intermediate"
  },
  {
    id: 7,
    title: "Student Database Management",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comprehensive Student Database Management System with records management and appointment scheduling.",
    technologies: ["Java", "MySQL", "Swing", "JDBC"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "Dec 2023",
    teamSize: "Solo",
    complexity: "Advanced"
  },
  {
    id: 8,
    title: "Calculator App",
    category: "Web Development",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Advanced calculator with scientific functions and history tracking.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    completionDate: "2023",
    teamSize: "Solo",
    complexity: "Beginner"
  },
  {
    id: 11,
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Secure mobile banking application with biometric authentication and transaction management.",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "2024",
    teamSize: "Team",
    complexity: "Advanced"
  },
  {
    id: 12,
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comprehensive fitness tracking app with workout plans and progress monitoring.",
    technologies: ["Flutter", "Firebase", "Health APIs", "Dart"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    completionDate: "2023",
    teamSize: "Solo",
    complexity: "Intermediate"
  },
  {
    id: 13,
    title: "E-Learning Platform",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Online learning platform with video courses, progress tracking, and certification system.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "2024",
    teamSize: "Team",
    complexity: "Advanced"
  },
  {
    id: 14,
    title: "Restaurant Management",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Complete restaurant management system with order processing and inventory management.",
    technologies: ["Vue.js", "Express.js", "MySQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    completionDate: "2023",
    teamSize: "Solo",
    complexity: "Advanced"
  },
  {
    id: 15,
    title: "Design System",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comprehensive design system with reusable components and design tokens for consistent user experiences.",
    technologies: ["Figma", "Storybook", "React", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    completionDate: "2024",
    teamSize: "Solo",
    complexity: "Advanced"
  },
  {
    id: 16,
    title: "E-Commerce UI Kit",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Complete UI kit for e-commerce applications with modern design patterns.",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    completionDate: "2023",
    teamSize: "Solo",
    complexity: "Intermediate"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, fast, and modern websites using the latest technologies and best practices.",
    icon: "Code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences.",
    icon: "Palette"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications for iOS and Android devices.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "Developing complete e-commerce platforms with payment integration and inventory management.",
    icon: "ShoppingCart"
  },
  {
    id: 5,
    title: "Brand Identity",
    description: "Creating comprehensive brand identities including logos, color schemes, and brand guidelines.",
    icon: "Star"
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Optimizing websites for search engines to improve visibility and organic traffic.",
    icon: "TrendingUp"
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Corp",
    period: "2022 - Present",
    description: "Leading development of scalable web applications, mentoring junior developers, and implementing modern development practices.",
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using React, Node.js, and cloud technologies.",
    type: "work"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2018 - 2020",
    description: "Created responsive websites and web applications with focus on user experience and performance optimization.",
    type: "work"
  },
  {
    id: 4,
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors.",
    type: "education"
  },
  {
    id: 5,
    title: "Bachelor of Computer Science",
    company: "University of California",
    period: "2012 - 2016",
    description: "Focused on web development, algorithms, and software design patterns. Active in coding competitions.",
    type: "education"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript/TypeScript", percentage: 95 },
  { name: "React/Vue.js", percentage: 90 },
  { name: "Node.js", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "Mobile Development", percentage: 75 },
  { name: "Cloud Technologies", percentage: 85 }
];