const projects = [
  {
    id: 1,
    slug: "portfolio-website",

    title: "Portfolio Website",

    description:
      "Modern responsive portfolio built using Next.js, Tailwind CSS and Framer Motion.",

    image: "/projects/portfolio.png",

    category: "Frontend",

    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Framer Motion",
      'MongoDB'
    ],

    github:
      "https://github.com/ayushpant-ui/Portfolio_New",

    demo:
      "https://ayushpant.vercel.app",

    featured: true,
  },
  {
    id: 2,

    slug: "ecommerce",

    title: "E-Commerce",

    description:
      "Complete shopping platform with authentication and payment integration.",

    image: "/projects/ecommerce.png",

    category: "Full Stack",

    technologies: [
      "Next.js",
      "Node",
      "Express",
      "Prisma",
      "MySQL",
    ],

    github: "https://github.com/ayushpant-ui/ECommerce_WebApp",

    demo: "#",

    featured: true,
  },
   {
    id: 3,

    slug: "ECMS",

    title: "Engineering College Management System",

    description:
      "A comprehensive platform for managing engineering college academics and administration. ",

    image: "/projects/ECMS.png",

    category: "Full Stack",

    technologies: [
      "Next.js",
      "NestJS",
      "Node",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],

    github: "https://github.com/ayushpant-ui/Engineering-College-Management-System-ECMS.git",

    demo: "#",

    featured: true,
  },
  {
  id: 4,
  slug: "chat-application",

  title: "Real-Time Chat Application",

  description:
    "Real-time messaging application built with Next.js, NestJS, PostgreSQL, Prisma and Socket.IO for secure user authentication and instant communication.",

  image: "/projects/chatapp.png",

  category: "Full Stack",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Socket.IO",
    "JWT"
  ],

  github:
    "https://github.com/ayushpant-ui/Chat_Application",

  demo: "",

  featured: true,
},
]

export default projects;