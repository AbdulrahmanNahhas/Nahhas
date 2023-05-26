export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: "Nahhas",
  description:
    "Hello, I'm Abdulrahman Nahhas, Full-Stack developmer. Welcome to my website!",
  projecturl: "https://github.com/AbdulrahmanNahhas/Nahhas",
  // Change Pages Icons in ./components/CommandDialog.tsx
  pages: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Me",
      href: "/about",
      comingSoon: false,
    },
    {
      title: "Projects",
      href: "/projects",
      comingSoon: true,
    },
    {
      title: "Blog",
      href: "/blog",
      comingSoon: false,
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      comingSoon: true,
    },
    {
      title: "Change log",
      href: "/changelog",
    },
  ],
  projects: [
    {
      show: true,
      url: "",
      image: "/Projects/Nahhas.png",
      light_image: "/Projects/Nahhas_light.png",
      title: "Nahhas",
      id: "nahhas",
      description:
        "Welcome to Nahhas Portfolio, a captivating showcase of my skills, achievements, and projects. With a sleek design and seamless user experience, this website highlights my expertise in web development, design, and more. Explore my portfolio, delve into my work, and discover the value I can bring to your next project. Let's connect and discuss how I can contribute to your digital success.",
    },
    {
      show: true,
      url: "",
      image: "/Projects/coming_soon.png",
      light_image: "/Projects/coming_soon_light.png",
      title: "Nahhas Code",
      id: "nahhas-code",
      description:
        "A platform for coding challenges and problems. (Not Done Yet)",
    },
    {
      show: true,
      url: "",
      image: "/Projects/coming_soon.png",
      light_image: "/Projects/coming_soon_light.png",
      title: "Nahhas Blog",
      id: "nahhas-blog",
      description:
        "Experience Nahhas Blog, a sleek and dynamic website powered by Next.js, Tailwind CSS, and Sanity. Featuring engaging articles and a visually appealing design, this project showcases my skills in web development and design.",
    },
  ],
  links: {
    twitter: "https://twitter.com/Nahhas909",
    github: "https://github.com/AbdulrahmanNahhas",
    projects: "#",
  },

  // Home Page
  Home: {
    title: "Abdulrahman Nahhas",
    subTitle: "",
    description:
      "Hello, I'm Abdulrahman Nahhas, a student with a passion for Full-Stack development. Welcome to my website! Feel free to explore the projects page to check out all of my creations. Alternatively, you can also visit my GitHub account for more of my work. Thank you for visiting, and have a great day! Goodbye!",
  },

  // Services
  Services: {
    id: "services",
    title: "Services",
    subtitle: "Services to help your business grow.",
    services: [
      {
        available: false,
        title: "Web Development",
        subTitle: "(Full Stack)",
        description:
          "Do you need a website? Look no further! We can create a stunning website for you using the latest and most advanced technologies, including:",
        list: [
          "NextJS",
          "Tailwind css",
          "ViteJS",
          "Sanity",
          "Mongodb",
          "ExpressJS",
          "ReactJS",
        ],
      },
    ],
  },

  // Faqs
  FAQs: {
    id: "FAQs",
    title: "FAQs",
    subtitle: "Frequently Asked Questions",
    questions: [
      {
        question: "What does the name 'Nahhas' mean?",
        answer: "'Nahhas' is my family name, of Arabic origin. In English, it means 'COPPER.'",
      },
      {
        question: "Does learning have an endpoint?",
        answer: "The concept of 'finishing learning' is non-existent because learning is a lifelong process. Every moment brings new opportunities for acquiring knowledge and expanding our understanding.",
      },
      {
        question: "I am unable to open the projects page.",
        answer:
          "We apologize for the inconvenience. The projects page is currently unavailable. Please check back soon to see if it has been restored.",
      },
    ],
  },

  // Stats
  Stats: {
    id: "stats",
    title: "Stats",
    subtitle: "Numbers tell Our Story!",
  }
};
