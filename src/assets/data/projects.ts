import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    name: "Sincerely",
    endDate: new Date(2024, 1),
    repository: "https://github.com/sanskarm7/sincerely",
    images: ["Screenshot2024-12-14174745.png"],
    description: [
      "An AI powered passive-aggressive detection Chrome extension used for emails. Users can detect the passive-aggressiveness of email text with the click of a button and can modify the text to have different levels of passive-aggressiveness.",
      "Pretty cool if you ask me.",
    ],
    technologies: ["Chrome Extension", "HTML/CSS/JS", "Express.js"],
    featured: false,
  },

  {
    id: 2,
    name: "Course Eater",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 8),
    repository: "https://github.com/NeatPatel/course-planner",
    demo: "https://course-eater.space/",
    images: [
      "Screenshot2024-12-14005857.png",
      "Screenshot2024-12-14005543.png",
    ],
    description: [
      "A four-year planner for UCI. Working with a team of 6, we created UCI's very first four-year planner with a prerequisite-checking system.",
      "My role was to lead the design of the entire backend, making routes for updating user course schedules, creating algorithms for solving prereq/coreq trees, and writing API documentation.",
      "Unfortunately, PeterPortalAPI, the course API that this application leverages, will be down and may already be down permanently, so the application may not function. A future task may be to update the application to use UCI ICSSC's new API instead.",
    ],
    technologies: ["Express.js", "PeterPortalAPI", "Bootstrap", "React"],
    featured: false,
  },
  {
    id: 3,
    name: "Weekly | Google Calendar Redesign",
    endDate: new Date(2024, 3),
    repository: "https://github.com/noahk004/weekly",
    images: [
      "Screenshot2024-12-14004910.png",
      "Screenshot2024-12-14004925.png",
      "Screenshot2024-12-14004944.png",
    ],
    description: [
      "Frontend redesign of Google Calendar. Messing around with CSS for the first time was quite fun, and admittedly got in the way of a better ICS 33 grade.",
    ],
    technologies: ["HTML", "CSS", "JS"],
    featured: false,
  },
  {
    id: 4,
    name: "Cats",
    endDate: new Date(2024, 3),
    repository: "https://github.com/noahk004/cats",
    images: [
      "Screenshot2024-12-14003512.png",
      "Screenshot2024-12-14003801.png",
    ],
    description: [
      "Another old web project of mine. Inspired by the late placekitten website. R.I.P.",
    ],
    technologies: ["Express.js", "EJS", "HTML"],
    featured: false,
  },
  {
    id: 5,
    name: "Color Picker",
    endDate: new Date(2023, 7),
    repository: "https://github.com/noahk004/color-picker",
    images: ["Screenshot2024-12-14003208.png"],
    description: [
      "One of my first web projects. Made purely with HTML, CSS, and JS. A true relic.",
    ],
    technologies: ["HTML", "CSS", "JS"],
    featured: false,
  },
  {
    id: 6,
    name: "Breakaway",
    endDate: new Date(2024, 3),
    repository: "https://github.com/noahk004/breakaway",
    images: [
      "Screenshot2024-12-14003951.png",
      "Screenshot2024-12-14004009.png",
      "Screenshot2024-12-14004000.png",
    ],
    description: [
      "Frontend design for a productivity app. Primarily made to learn Bootstrap and React-Bootstrap. ",
    ],
    technologies: ["React", "Bootstrap"],
    featured: false,
  },
  {
    id: 7,
    name: "Irvine Hacks 2025 Website",
    startDate: new Date(2024, 11),
    endDate: new Date(2025, 1),
    repository: "https://github.com/HackAtUCI/irvinehacks-site",
    demo: "https://irvinehacks.com/",
    images: [
      "Screenshot2024-12-14175137.png",
      "Screenshot2024-12-14175309.png",
    ],
    description: [
      "Official Irvine Hacks 2025 website.",
      "As a tech organizer for Hack at UCI, I work to ship features using Next.js and FastAPI in a team of just under 10 developers. During this development period, I made PRs for 2-3 issues per week, including the FAQ section, performance optimizations, accessibility changes, and small changes needed in the frontend and backend."
    ],
    technologies: ["Typescript", "Next.js", "React", "Tailwind", "Python", "FastAPI"],
    featured: true,
  },
  {
    id: 8,
    name: "ZotHacks 2024 Website",
    startDate: new Date(2024, 10),
    endDate: new Date(2024, 11),
    repository: "https://github.com/HackAtUCI/zothacks-site",
    demo: "https://zothacks.com/",
    images: ["Screenshot2024-12-14175353.png"],
    description: [
      "Zot Hacks 2024 Website!",
      "I helped to build the landing page.",
    ],
    technologies: ["Next.js", "React", "Tailwind"],
    featured: false,
  },
  {
    id: 9,
    name: "IPC at UCI Website",
    startDate: new Date(2024, 7),
    endDate: new Date(2024, 9),
    repository: "https://github.com/IPC-at-UCI/ipc-uci-website",
    demo: "https://ipcatuci.netlify.app/",
    images: [
      "Screenshot2024-12-14005146.png",
      "Screenshot2024-12-14005206.png",
    ],
    description: ["Official website for IPC at UCI."],
    technologies: ["Next.js", "React", "Tailwind"],
    featured: false,
  },
  {
    id: 10,
    name: "Jaimes | HackSC",
    endDate: new Date(2024, 11),
    repository: "https://github.com/noahk004/hacksc",
    images: ["gallery.jpg", "IMG_7575.jpg"],
    description: [
      "In wanting to explore our understanding of the latest technologies in AI, a good friend of mine and I partnered up to compete in this year's HackSC. In 24 hours, the two of us built Jaimes, an AI-powered web accessibility tool.",
      "While looking at current accessibility configurations on our computers, we noticed the amount of time it takes to jump around to different parts of websites and wondered if this could be done quicker. By using a Chrome extension, we were able to access parts of the page by feeding the HTML into the LLM and identifying the desired component. Now, the visually impaired can speak directly to the computer and quickly read, write, and select parts of the page.",
      "(Side note: while we didn't have time to make a demo video, I'm personally very proud of this product in particular, especially since we were a 2 man team and only had 24 hours.)",
    ],
    technologies: [
      "Google Extensions",
      "HTML/CSS/JS",
      "Flask",
      "LangChain",
      "Nosana",
    ],
    featured: false,
  },
  {
    id: 11,
    name: "ZINA | Cal Hacks 11.0",
    endDate: new Date(2024, 10),
    repository: "https://github.com/noahk004/zina",
    images: ["calhacks.png", "20241020_143051.jpg"],
    description: [
      "As part of Cal Hacks 11.0, my team and I had the opportunity to fly up to San Francisco to build a project we are incredibly proud of.",
      "Leveraging LLMs with LangChain and ChromaDB's vector database, alongside Agora's low-latency calling API, we created a virtual learning platform where students can use AI to learn topics from an AI instructor. Students can generate their own lesson through text prompting, join real time video calls to learn in a classroom-based environment, and interrupt at any time to ask questions during the lesson.",
      "In particular, I implmented most of the frontend, video calling, and speech-to-text.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Agora",
      "LangChain",
      "ChromaDB",
    ],
    featured: false,
  },
  {
    id: 12,
    name: "Guitar Shop Frontend Design",
    endDate: new Date(2024, 6),
    repository: "https://github.com/noahk004/guitar-ecommerce",
    demo: "https://main.d2snk1g9ednhqc.amplifyapp.com/",
    images: [
      "Screenshot2024-12-14004133.png",
      "Screenshot2024-12-14004142.png",
    ],
    description: [
      "I love looking at expensive instruments but unfortunately cannot afford them. As such, I created a frontend design to showcase some of the best-looking Fender guitars and placed them in my own mock guitar shop website.",
    ],
    technologies: ["React", "Bootstrap"],
    featured: false,
  },
  {
    id: 13,
    name: "UICM",
    endDate: "current",
    repository: "https://github.com/noahk004/ui-component-manager",
    images: [
      "Screenshot 2025-01-18 212402.png",
      "Screenshot 2025-01-18 212339.png",
      "Screenshot 2025-01-18 212510.png",
      "Screenshot 2025-01-18 211602.png",
      "Screenshot 2025-01-18 212425.png",

    ],
    description: [
      "UI Component Manager, or UICM for short, is a platform for users to share and import UI components made by the community. While participating in hackathons, we felt it would be cool to have a place where users can store and find UI components to reuse, removing the need to have to make new ones for each project. Thus, we wanted to build an easy-to-use CLI tool along with an online web application that would help the management of these components.",
      "As part of this project, our team of three has put in extensive effort to writing quality code. We leveraged tools like automatic linting and formatting, automated integration testing, and GitHub rules to ensure that the main branch is clean and functional. We put in extensive planning involving the planning of the our vision, timeline, API routes, and low/high fidelity mockups. Each week, we held sprint meetings to keep each other accountable in pushing features and to give updates on progress."
    ],
    technologies: ["Typescript", "React.js", "Next.js", "Tailwind", "PostgreSQL", "Prisma ORM", "AWS SDK", "S3, Lambda, RDS, IAM", "Docker", "GitHub Actions", "Integration testing", "PNPM", "Turborepo", "Figma"],
    featured: false
  },
  {
    id: 14,
    name: "SnapQuiz",
    startDate: new Date(2025, 4),
    endDate: new Date(2025, 5),
    repository: "https://github.com/noahk004/snapquiz-api",
    demo: "https://www.snapquiz.xyz/",
    images: [
      "Screenshot 2025-05-22 123545.png",
      "Screenshot 2025-05-22 123605.png",
      "Screenshot 2025-05-22 123624.png"

    ],
    description: [
      "While studying for an AWS certification, I wanted a way to test my knowledge after having read documentation on services. So I created an platform that allows you to parse documents and generate exams.",
      "Behind the scenes, the backend application parses the text document and passes it into OpenAI's GPT 4.1 nano, which then generates a series of questions, answers, and explanations. The backend then takes the returned data and stores it into Postgres, allowing users to take and review their newly generated exams.",
    ],
    technologies: ["Typescript", "React.js", "Next.js", "Tailwind", "Express.js", "PostgreSQL", "AWS EC2", "OpenAI API"],
    featured: true
  },
  {
    id: 15,
    name: "SmartPhoto | AWS CloudHacks 2025",
    endDate: new Date(2024, 5),
    repository: "https://github.com/bqtquach/AWS-Cloudhacks-Team-12-UCI",
    demo: "https://devpost.com/software/smartphotos",
    images: ["Screenshot 2025-05-22 124639.png", "Screenshot 2025-05-22 124655.png"],
    description: [
      "As part of AWS CloudHacks 2025 run by AI @ UCI, Bryan Quach, Dylan Stauffer, and I built an image-processing app that allows users to get instant feedback on photos they've taken. Users can input a photo and get information regarding cues, poses, lighting, and camera specifications, allowing lay people to have the ability to improve their photo-taking skills.",
    ],
    technologies: [
      "React.js",
      "Typescript",
      "Python",
      "FastAPI",
      "AWS Amplify",
      "AWS EC2",
      "AWS Bedrock",
      "AWS Rekognition"
    ],
    featured: true,
  },
];

export default projects;
