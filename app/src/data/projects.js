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
]

export default projects;