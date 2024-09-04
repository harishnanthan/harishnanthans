export const WORKS = [
  {
    title: "Personal Portfolio Website",
    techStacks: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    smallDescription:
      "A sleek and modern portfolio website to showcase my skills and projects.",
    description:
      "This project involved designing and developing a responsive personal portfolio website using React and Figma. The site includes a dynamic hero section, project showcase, and contact form, all optimized for performance and accessibility.",
    titleImageUrl:
      "https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg",
    ssUrls: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    ],
    repository: "https://github.com/username/portfolio",
    liveDemo: "https://username.github.io/portfolio",
    dateCompleted: "2024-06-15",
    features: ["Responsive design", "SEO optimized", "Dynamic project gallery"],
  },
  {
    title: "E-commerce Platform",
    techStacks: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    smallDescription:
      "A full-fledged e-commerce platform with secure payment integration.",
    description:
      "Built a scalable e-commerce platform using the MERN stack. The platform supports user authentication, product management, and secure transactions using Stripe API. It also includes features like a shopping cart, order tracking, and user reviews.",
    titleImageUrl:
      "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg",
    ssUrls: [
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      "https://images.pexels.com/photos/4050323/pexels-photo-4050323.jpeg",
    ],
    repository: "https://github.com/username/ecommerce-platform",
    liveDemo: "https://ecommerce-platform.example.com",
    dateCompleted: "2023-11-30",
    features: ["User authentication", "Payment integration", "Admin dashboard"],
  },
  {
    title: "Task Management App",
    techStacks: ["Vue.js", "Firebase", "Tailwind CSS"],
    smallDescription:
      "A task management app to help users organize their daily tasks effectively.",
    description:
      "Developed a task management application using Vue.js for the front-end and Firebase for the back-end. The app features task categorization, real-time updates, and drag-and-drop task sorting. Tailwind CSS was used to create a minimalist and user-friendly interface.",
    titleImageUrl:
      "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg",
    ssUrls: [
      "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg",
      "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg",
    ],
    repository: "https://github.com/username/task-management-app",
    liveDemo: "https://taskapp.example.com",
    dateCompleted: "2024-03-10",
    features: [
      "Real-time updates",
      "Drag-and-drop interface",
      "Task categorization",
    ],
  },
  {
    title: "Social Media Dashboard",
    techStacks: ["Angular", "TypeScript", "SCSS", "Firebase"],
    smallDescription:
      "A dashboard to manage and analyze social media accounts.",
    description:
      "Created a social media dashboard using Angular and Firebase. The app allows users to manage multiple social media accounts, schedule posts, and analyze engagement metrics. It features a clean and interactive UI built with SCSS and Angular Material.",
    titleImageUrl:
      "https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg",
    ssUrls: [
      "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg",
      "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg",
    ],
    repository: "https://github.com/username/social-media-dashboard",
    liveDemo: "https://socialdashboard.example.com",
    dateCompleted: "2024-01-20",
    features: [
      "Multi-account management",
      "Post scheduling",
      "Engagement analytics",
    ],
  },
];

export const SKILLS = [
  {
    id: 1,
    header: "Programming Languages",
    values: [
      {
        label: "JavaScript",
        bgColor: "#F7DF1E", // JavaScript yellow
        color: "#000",
      },
      {
        label: "C",
        bgColor: "#A8B9CC", // C light blue
        color: "#000",
      },
      {
        label: "C++",
        bgColor: "#00599C", // C++ blue
        color: "#fff",
      },
      {
        label: "Go",
        bgColor: "#00ADD8", // Go blue
        color: "#fff",
      },
    ],
  },
  {
    id: 2,
    header: "Front-End Development",
    values: [
      {
        label: "React",
        bgColor: "#61DAFB", // React cyan
        color: "#000",
      },
      {
        label: "HTML",
        bgColor: "#E34F26", // HTML orange
        color: "#fff",
      },
      {
        label: "CSS",
        bgColor: "#1572B6", // CSS blue
        color: "#fff",
      },
      {
        label: "SCSS",
        bgColor: "#CC6699", // SCSS pink
        color: "#fff",
      },
      {
        label: "Webpack",
        bgColor: "#8DD6F9", // Webpack light blue
        color: "#000",
      },
    ],
  },
  {
    id: 3,
    header: "Back-End and Database",
    values: [
      {
        label: "Node.js",
        bgColor: "#339933", // Node.js green
        color: "#fff",
      },
      {
        label: "Express",
        bgColor: "#000000", // Express black
        color: "#fff",
      },
      {
        label: "Socket.IO",
        bgColor: "#010101", // Socket.IO black
        color: "#fff",
      },
      {
        label: "MySQL",
        bgColor: "#4479A1", // MySQL blue
        color: "#fff",
      },
      {
        label: "MongoDB",
        bgColor: "#47A248", // MongoDB green
        color: "#fff",
      },
    ],
  },
  {
    id: 4,
    header: "Other Tools & Technologies",
    values: [
      {
        label: "Git",
        bgColor: "#F05032", // Git orange
        color: "#fff",
      },
      {
        label: "Figma",
        bgColor: "#F24E1E", // Figma orange
        color: "#fff",
      },
    ],
  },
];

export const WORK_FLOW = [
  {
    id: 1,
    title: "Research & Analysis",
    content:
      "Conducted comprehensive research to gather project requirements, understand user needs, and analyze market trends.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    content:
      "Led the development of scalable and responsive applications using a combination of front-end and back-end technologies.",
  },
  {
    id: 3,
    title: "Deployment & Maintenance",
    content:
      "Successfully deployed projects to live environments using cloud hosting services. Conducted routine performance optimization and security audits.",
  },
];
