// constants/index.js

import project1 from "../src/assets/projects/project-1.webp";
import project2 from "../src/assets/projects/project-2.webp";
import project3 from "../src/assets/projects/project-3.webp";
import project4 from "../src/assets/projects/project-4.webp";
import { FaAws, FaDocker, } from 'react-icons/fa';
import { SiOpennebula, SiApachecloudstack, SiKubernetes } from 'react-icons/si'

import {
  BiLogoJavascript,
  BiLogoPostgresql
} from 'react-icons/bi';

import { DiRedis } from 'react-icons/di';
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from 'react-icons/fa';

import {
  RiReactjsLine,
  RiTeamLine
} from 'react-icons/ri';
import { FaCode } from "react-icons/fa"; // instead of SiVisualstudiocode


import {
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiFigma,
  SiDocker,
} from 'react-icons/si';

// ✨ Hero Section Content
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const HERO_DETAILS = {
  name: "Alila Kevin",
  headline: "Full Stack Developer | Problem Solver",
  currentRole: "Senior Full Stack Developer @ Google",
  location: "New York, USA",
  summary: HERO_CONTENT,
  contactLinks: [
    { label: "Email", href: "mailto:me@example.com", icon: "✉️" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alilakevin/", icon: "💼" },
    { label: "GitHub", href: "https://github.com/alilakevin", icon: "💻" },
    { label: "Credly", href: "https://www.credly.com/users/alilakevin", icon: "🏅" },
    { label: "Phone", href: "tel:+1245556600", icon: "📞" },
  ]
};

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// 💼 Experience
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

// 🚀 Projects
export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

// 📞 Contact Info
export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

// 🏆 Certifications
export const CERTIFICATIONS = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    badge: "https://example.com/aws-badge.webp",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
  {
    title: "Full-Stack Web Development with React",
    issuer: "Coursera",
    badge: "https://example.com/react-badge.webp",
    link: "https://coursera.org/verify/xyz123",
  },
];

// 📚 Hobbies
export const HOBBIES = [
  {
    type: "Book",
    name: "Atomic Habits by James Clear",
    takeaway: "Taught me the power of small habits and consistency in both code and life.",
  },
  {
    type: "Activity",
    name: "Long-distance running",
    takeaway: "Helps me build discipline, focus, and resilience.",
  },
  {
    type: "Book",
    name: "Deep Work by Cal Newport",
    takeaway: "Inspired me to create distraction-free zones to improve code quality.",
  },
];

// 💬 Quotes
export const QUOTES = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
];

// 🎓 Education
export const EDUCATION = [
  {
    institution: "Massachusetts Institute of Technology (MIT)",
    degree: "B.Sc. in Computer Science and Engineering",
    duration: "2014 – 2018",
    honors: "Summa Cum Laude",
    thesis: "Scalable Architectures for Real-Time Web Applications",
    coursework: [
      "Algorithms",
      "Distributed Systems",
      "Web Development",
      "Database Systems",
      "Machine Learning"
    ]
  },
  {
    institution: "Stanford University",
    degree: "M.Sc. in Computer Science",
    duration: "2018 – 2020",
    honors: "Dean’s List",
    thesis: "Optimizing React Applications with Predictive Caching",
    coursework: [
      "Advanced React",
      "AI & Ethics",
      "Cloud Infrastructure",
      "Security & Cryptography"
    ]
  }
];

// 🛠️ Technologies / Skills
export const TECHNOLOGIES = [
  {
    category: "Languages",
    items: [
      { icon: BiLogoJavascript, label: "JavaScript" },
      { icon: SiPython, label: "Python" },
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { icon: RiReactjsLine, label: "React.js" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: FaNodeJs, label: "Node.js" },
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: SiMongodb, label: "MongoDB" },
      { icon: BiLogoPostgresql, label: "PostgreSQL" },
      { icon: SiMysql, label: "MySQL" },
      { icon: DiRedis, label: "Redis" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: FaGitAlt, label: "Git" },
      { icon: FaDocker, label: "Docker" },
      { icon: FaCode, label: "VS Code" },
      { icon: SiFigma, label: "Figma" },
    ],
  },
  {
    category: "Cloud Technologies",
    items: [
      { icon: FaAws, label: "AWS" }, // AWS official icon in react-icons/fa
      { icon: SiOpennebula, label: "OpenNebula" }, // SiOpennebula from react-icons/si
      { icon: SiApachecloudstack, label: "Apache CloudStack" }, // SiApachecloudstack from react-icons/si
      { icon: SiKubernetes, label: "Kubernetes" }, // popular container orchestration cloud tech
      { icon: () => "☁️", label: "Other Cloud Tech" }, // fallback emoji icon
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { icon: RiTeamLine, label: "Teamwork" },
      { icon: () => "🧠", label: "Problem Solving" },
      { icon: () => "🗣️", label: "Communication" },
    ],
  },
];