export type SiteConfig = typeof siteConfig
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
      href: "/about-me",
      comingSoon: true,
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

  // Services Component
  Services: {
    title: "Services",
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
}
