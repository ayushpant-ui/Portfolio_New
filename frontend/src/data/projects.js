const projects = [
{
  id: 1,
  slug: "portfolio-website",
  title: "Portfolio Website",
  description:
    "Modern responsive portfolio built using Next.js, Tailwind CSS and Framer Motion.",
  image: "/projects/portfolio.png",
  category: "Frontend",
  technologies: ["Next.js", "React", "Tailwind", "Framer Motion"],
  github: "https://github.com/ayushpant-ui/Portfolio_New",
  demo: "https://ayushpant.vercel.app",
  featured: true,

  details: {
    status: "Completed",
    role: "Designer & Developer",
    overview:
      "My personal portfolio, designed and built from scratch to present my skills, projects and experience. It's a single-page site with smooth scrolling between sections, subtle animations, and a theme switcher that lets visitors change the accent color of the whole site.",
    features: [
      { title: "Live Theme Switcher", text: "Six accent colors that recolor the entire site, saved so your choice persists between visits." },
      { title: "Animated Hero", text: "Typing animation for my roles, floating profile image and staggered entrance effects." },
      { title: "Smooth Scroll Navigation", text: "A fixed navbar that highlights the current section as you scroll." },
      { title: "Project Showcase", text: "Filterable project cards, each linking to its own details page." },
      { title: "Contact Form", text: "A working form that sends messages to my backend, plus a WhatsApp shortcut for hiring inquiries." },
      { title: "Downloadable CV", text: "One-click CV download from the hero section." },
      { title: "Fully Responsive", text: "Layouts and navigation adapt from mobile to wide desktop screens." },
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
      { label: "Libraries", items: ["react-scroll", "react-type-animation", "React Icons"] },
      { label: "Deployment", items: ["Vercel"] },
    ],
    screenshots: [], //  ["/projects/portfolio-1.png"]
  },
},
{
  id: 2,
  slug: "ecommerce",
  title: "E-Commerce",
  description:
    "Complete shopping platform with authentication and payment integration.",
  image: "/projects/ecommerce.png",
  category: "Full Stack",
  technologies: ["Next.js", "Node", "Express", "Prisma", "MySQL"],
  github: "https://github.com/ayushpant-ui/ECommerce_WebApp",
  demo: null,
  featured: true,

  details: {
    status: "Pending",
    role: "Full Stack Developer",
    overview:
      "A full-stack online shopping platform where customers can browse products, sign in, and pay online. It has a Next.js frontend and a Node.js and Express API, with data stored in MySQL through Prisma.",
    features: [
      { title: "User Authentication", text: "Sign-up and login so customers can manage their own accounts and orders." },
      { title: "Payment Integration", text: "Online checkout with a payment gateway." },
      { title: "Product Catalog", text: "Browse products with clear listings and detail views." },
      { title: "Shopping Cart", text: "Add, remove and update items before checking out." },
      { title: "Order Management", text: "Orders are stored in the database and linked to each customer." },
      { title: "Responsive Design", text: "A shopping experience that works on both phones and desktops." },
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "Express"] },
      { label: "Database", items: ["MySQL", "Prisma ORM"] },
    ],
    screenshots: [],
  },
},
  
{
  id: 3,
  slug: "ecms",
  title: "Engineering College Management System",
  description:
    "A comprehensive platform for managing engineering college academics and administration.",
  image: "/",
  category: "Full Stack",
  technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  github: "https://github.com/ayushpant-ui/Engineering-College-Management-System-ECMS.git",
  demo: null,
  featured: true,

  details: {
    status: "In development",
    role: "Full Stack Developer",
    overview:
      "A management platform for the School of Engineering at Far Western University. It brings academics, administration and communication into one system, with a Next.js frontend and a NestJS REST API backed by PostgreSQL through Prisma.",
    features: [
      { title: "Authentication", text: "Secure login and access control for the different kinds of users." },
      { title: "Dashboard", text: "A central overview for each user after signing in." },
      { title: "Attendance", text: "Tracking and viewing student attendance." },
      { title: "Results", text: "Publishing and viewing student results." },
      { title: "Notices", text: "A notice board for college announcements." },
      { title: "Faculty & Students", text: "Directories and management for faculty and student records." },
      { title: "Admin Panel", text: "Administrative tools for managing the system's content and users." },
      { title: "Gallery & Contact", text: "Public pages showcasing the college, with a contact form." },
      { title: "Light & Dark Themes", text: "A theme switch across the whole interface." },
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["NestJS", "REST API"] },
      { label: "Database", items: ["PostgreSQL", "Prisma ORM"] },
    ],
    screenshots: [], // ["/projects/ecms-1.png", "/projects/ecms-2.png"]
  },
},

// Chat app
{
  id: 4,
  slug: "chat-application",
  title: "Real-Time Chat Application",
  description:
    "Real-time messaging application built with Next.js, NestJS, PostgreSQL, Prisma and Socket.IO for secure user authentication and instant communication.",
  image: "/",
  category: "Full Stack",
  technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Socket.IO", "JWT"],
  github: "https://github.com/ayushpant-ui/Chat_Application",
  demo: null,
  featured: true,

  details: {
    status: "In development",
    role: "Full Stack Developer",
    overview:
      "A real-time messaging app with user registration, login and instant chat. It has its own NestJS backend and database, separate from my other projects, and a Next.js frontend with animated authentication pages.",
    features: [
      { title: "Register & Login", text: "Account creation and sign-in with JWT-based authentication." },
      { title: "Real-Time Messaging", text: "Instant message delivery using Socket.IO." },
      { title: "Selectable Themes", text: "Multiple themes you can switch between in the chat UI." },
      { title: "Animated Interface", text: "Smooth, animated login and register pages." },
      { title: "Persistent Data", text: "Users and messages stored in PostgreSQL through Prisma." },
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["NestJS", "Socket.IO", "JWT"] },
      { label: "Database", items: ["PostgreSQL", "Prisma ORM"] },
    ],
    screenshots: [],
  },
}]
export default projects;