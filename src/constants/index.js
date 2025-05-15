import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in the MERN stack, including React, Tailwind CSS, Node.js, Express.js, and MongoDB. I thrive on building scalable and efficient web applications with a focus on clean code and seamless user experiences. With a strong foundation in both frontend and backend development, I am committed to creating innovative solutions that meet client needs. My goal is to continually enhance my skills and contribute to impactful projects that push the boundaries of web technology. Let's collaborate to turn ideas into reality!
`;

export const ABOUT_TEXT = `I am a recent graduate in Computer Science and Engineering with a strong passion for problem-solving, competitive programming, and mastering data structures and algorithms. My curiosity for technology drives me to continually enhance my skills and build innovative solutions.

Currently, I am focused on advancing my expertise in the MERN stack—MongoDB, Express.js, React, and Node.js. I enjoy creating dynamic, responsive, and user-centric web applications that deliver seamless experiences. My academic foundation in computer science, coupled with hands-on projects, has provided me with a solid understanding of software development and full-stack technologies.

As an aspiring software engineer, I aim to leverage my programming knowledge to solve real-world problems and contribute to impactful projects. I am excited to grow as a developer and make meaningful contributions to the tech industry by blending creativity, technical skills, and a strong commitment to excellence.`;

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

export const PROJECTS = [
  {
    title: "Typing Speed Test",
    image: project1,
    description:
      "A responsive Typing Speed Test web app built with React and Tailwind CSS, featuring real-time accuracy feedback, timer, and WPM calculation.",
    technologies: ["HTML", "Tailwind CSS", "React"],
    link: "https://speed-test01.vercel.app/"
  },
  {
    title: "Weather Forecast Web App",
    image: project2,
    description:
      "A responsive weather forecast web app that displays real-time weather data by city using React, Tailwind CSS, and the OpenWeatherMap API.",
    technologies: ["HTML", "CSS", "React", "OpenWeatherMap API"],
    link: "https://sky-cast-sooty-one.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
    link: "https://skycast.vercel.app",

  },
  
];

export const CONTACT = {
  address: "Ashulia, Dhaka, Bangladesh ",
  phoneNo: "+8801900000",
  email: "durjoykundu07@gmail.com",
};
