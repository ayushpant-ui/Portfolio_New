const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built using Next.js, Tailwind CSS and Framer Motion.",
    image: "/projects/portfolio.png",
    category: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/ayushpant-ui/Portfolio_New",
    live: "https://yourportfolio.vercel.app",
    featured: true,
  },

  {
    id: 2,
    slug: "chat-application",
    title: "Chat Application",
    description:
      "Real-time chat application with authentication and Socket.io.",
    image: "/projects/chat.png",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MySQL",
    ],
    github: "#",
    live: "#",
    featured: true,
  },

  {
    id: 3,
    slug: "ecommerce-store",
    title: "E-Commerce Website",
    description:
      "Responsive online shopping platform with payment integration.",
    image: "/projects/ecommerce.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Prisma",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
];

export default projects;