import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  unity,
  csharp,
  angular,
  pythonlogo,
  blender,
  threejs,
  research, 
  python,
  c,
  french,
  ielts,
  designthinking,
  linux,
  unityessentials,
  unityjunior,
  trustinav,
  trustinavpic,
  socialgame,
  socialgamepic,
  avatarepic,
  avatar,
  ARforRealEstate,

} from "../assets";
import Crossing from "../assets/company/CrossingL.png";
import Mercure from "../assets/company/Mercure.jpeg";
import Um6p from "../assets/company/um6p.png";
import ensam from "../assets/ensam.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "blog",
    title: "Blogg",
    link: "#/blog",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "python",
    icon: pythonlogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "VR & AR Researcher and Developer",
    company_name: "IRL CROSSING",
    icon: Crossing,
    iconBg: "#383E56",
    date: "March 2024 - September 2024",
    points: [
      "Investigating methods to enhance trust in autonomous vehicles through customization features integrated into AR interfaces.",
      "Prototyping and designing a MR solution that allow users to personalize their customized weather conditions displays.",
      "Building upon an existing Unity VR project examining the impact of extended reality on trust with autonomous vehicles.",
      "Conducting user studies on 30 participants to evaluate the impact of personalized weather conditions on people’s trust on autonomous driving technologies",
      "Collecting quantitative and qualitative data and analyzing it using R and python. ",
      "Documenting research methodologies, experimental results, and findings to contribute insights to academic publications and project reports.",
      "Technologies : Unity 3D / Virtual Reality (VR)/ Mixed Reality (MR) /  Experiment Design and Execution / Data Collection / Statistical Data Analysis / R \& Python"
    ],
  },
  {
    title: "AI & VR Developer Intern",
    company_name: "The UM6P Vanguard Center",
    icon: Um6p,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
    "I contributed to the gamification of educational scenarios through developing a 3D Virtual Game in WebGL. I created avatars capable of mirroring real-time movements using gesture tracking and facial animation techniques. I implemented systems for capturing user gestures and facial expressions, translating them into avatar actions using blendshapes and bones for a smooth, responsive user experience within the virtual environment.",
    "Technologies : • Unity 3D / Virtual Reality / Blender / C# / Python / Flask / Mediapipe / OpenCV"
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Mercure IT",
    icon: Mercure,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "I developed a Full Stack Web Application to manage service providers internally, leading the project’s planning, execution, and resource allocation based on team members’ skills. I actively contributed to the design and development, managed project risks, and ensured the application exceeded company standards.",
      "Technologies :  Angular / SpringBoot / Spring Security / Node.js / JasperSoft / MySQL",
    ],
  },
  
];

const educations = [
  {
    title: "Computer Science and Artificial Intelligence Engineer",
    company_name: "— University Hassan II (ENSAM) Casablanca",
    icon: ensam,
    iconBg: "#383E56",
    date: "September 2021 - September 2024",
    points: [

    ],
  },
  {
    title: "Integrated Preparatory Classes",
    company_name: "— University Hassan II (ENSAM) Casablanca",
    icon: Um6p,
    iconBg: "#E6DEDD",
    date: "September 2019 - June 2021",
    points: [
  
    ],
  },
  {
    title: "High School diploma in Mathematical Sciences",
    company_name: "— Maria School",
    icon: Mercure,
    iconBg: "#383E56",
    date: "June 2019",
    points: [

    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Taha",
    designation: "15/11/2024",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Autonomous Car Simulator with Dynamic Weather Conditions",
    description:
      "This project is a VR simulation of an autonomous car navigating through a dynamic city environment. Users can change weather conditions (sunny, rainy, snowy and cloudy), affecting the overall driving experience. ",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
      {
        name: "virtual reality",
        color: "pink-text-gradient",
      },
      {
        name: "Weather Simulation",
        color: "yellow-text-gradient",
      },
      {
        name: "Tobii XR",
        color: "pink-text-gradient",
      },
      {
        name: "XR Interaction Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Vive Pro 2",
        color: "blue-text-gradient",
      },

    ],
    image: trustinavpic,
    source_code_link: "https://github.com/",
    video_link: trustinav,
  },
  {
    name: "Social Game : immersive 3D gaming with real-time AI interactions",
    description:
      "Social Game is a competitive 3D multiplayer game that offers an engaging and interactive social experience. The NPC (Game Master) generates real-time questions, challenges, and responses, adapting dynamically to player inputs and keeping the gameplay engaging.",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Photon Networking",
        color: "pink-text-gradient",
      },
      {
        name: "ChatGBT API",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "ReadyPlayerMe",
        color: "green-text-gradient",
      },
      {
        name: "Oculus",
        color: "blue-text-gradient",
      },
      {
        name: "TTS",
        color: "yellow-text-gradient",
      },
      {
        name: "STT",
        color: "pink-text-gradient",
      },
    ],
    image: socialgamepic,
    source_code_link: "https://github.com/",
    video_link: socialgame,
  },
  {
    name: "Real-Time Avatar's Movement Mirroring",
    description:
      "The project features customizable avatars capable of mirroring users' real-time movements and expressions for use cases in virtual meetings, gaming, and educational simulations.  the system captures user gestures, facial movements, and body posture via a webcam and turn it into avatar movements providing an immersive and engaging experience.",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "Python & Flask ",
        color: "pink-text-gradient",
      },
      {
        name: "Blender",
        color: "yellow-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },

    ],
    image: avatarepic,
    source_code_link: "https://github.com/",
    video_link: avatar,
  },
];



const certificates = [
  {
    name: "Unity Junior Programmer",
    description:
      " Unity Technologies", 
    tags: [
      {
        name: "test",
        color: "blue-text-gradient",
      },
      {
        name: "test",
        color: "green-text-gradient",
      },
      {
        name: "test ",
        color: "pink-text-gradient",
      },
      {
        name: "test",
        color: "yellow-text-gradient",
      },
    ],
    image: unityjunior,
    source_code_link: "https://github.com/",
  },
  {
    name: "Unity Essentials",
    description:
      " Unity Technologies", 
    tags: [
      {
        name: "test",
        color: "blue-text-gradient",
      },
      {
        name: "test",
        color: "green-text-gradient",
      },
      {
        name: "test",
        color: "pink-text-gradient",
      },
      {
        name: "test",
        color: "yellow-text-gradient",
      },
    ],
    image: unityessentials,
    source_code_link: "https://github.com/",
  },
  {
    name: "Research Integrity",
    description:
      " University of South Australia", 
    tags: [
      {
        name: "Ethical Research Practices",
        color: "blue-text-gradient",
      },
      {
        name: "Transparency",
        color: "green-text-gradient",
      },
      {
        name: "Data Management",
        color: "pink-text-gradient",
      },
      {
        name: "Human Research",
        color: "yellow-text-gradient",
      },
    ],
    image: research,
    source_code_link: "https://github.com/",
  },
  {
    name: "Python",
    description:
      " Cisco Networking Academy",
    tags: [
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithms",
        color: "green-text-gradient",
      },
      {
        name: "Structures",
        color: "pink-text-gradient",
      },
      {
        name: "Variables",
        color: "yellow-text-gradient",
      },
      {
        name: "Operations",
        color: "green-text-gradient",
      },
      {
        name: "Computer Programming",
        color: "blue-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/",
  },
  {
    name: "Programming Essentials in C",
    description:
      " Cisco Networking Academy",
    tags: [
      {
        name: "Data types",
        color: "blue-text-gradient",
      },
      {
        name: "Structures",
        color: "green-text-gradient",
      },
      {
        name: "Functions",
        color: "pink-text-gradient",
      },
      {
        name: "Pointers",
        color: "yellow-text-gradient",
      },
      {
        name: "Variables",
        color: "pink-text-gradient",
      },
      {
        name: "Memory",
        color: "blue-text-gradient",
      },
    ],
    image: c,
    source_code_link: "https://github.com/",
  },
  {
    name: "Linux",
    description:
      " Cisco Networking Academy",
    tags: [
      {
        name: "Command-line",
        color: "blue-text-gradient",
      },
      {
        name: "System Administration",
        color: "green-text-gradient",
      },
      {
        name: "User Permissions",
        color: "pink-text-gradient",
      },
      {
        name: "Process Management",
        color: "yellow-text-gradient",
      },

    ],
    image: linux,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design Thinking for Innovation",
    description:
      " Coursera",
    tags: [
      {
        name: "Problem-Solving",
        color: "blue-text-gradient",
      },
      {
        name: "Creativity",
        color: "green-text-gradient",
      },
      {
        name: "Prototyping",
        color: "pink-text-gradient",
      },
    ],
    image: designthinking,
    source_code_link: "https://github.com/",
  },
  {
    name: "French Language Assessment : C1",
    description:
      " University Hassan ll Casablanca",
    tags: [
      {
        name: "Grammar",
        color: "blue-text-gradient",
      },
      {
        name: "Vocabulary",
        color: "green-text-gradient",
      },
      {
        name: "Reading",
        color: "pink-text-gradient",
      },
      {
        name: "Listening",
        color: "yellow-text-gradient",
      },
    ],
    image: french,
    source_code_link: "https://github.com/",
  },
  {
    name: "IELTS Academic : C1",
    description:
      "British Council",
    tags: [
      {
        name: "Reading",
        color: "blue-text-gradient",
      },
      {
        name: "Writing",
        color: "green-text-gradient",
      },
      {
        name: "Listening",
        color: "pink-text-gradient",
      },
      {
        name: "Speaking",
        color: "yellow-text-gradient",
      },
    ],
    image: ielts,
    source_code_link: "https://github.com/",
  },
];


const blogPosts = [
  {
    id: 1,
    title: "Exploring Augmented Reality in Real Estate",
    author: "Taha",
    date: "November 15, 2024",
    image:ARforRealEstate,
    readingtime:"10 min read",
    content:
      "Augmented Reality (AR) is revolutionizing the real estate industry by allowing potential buyers to visualize properties in a new and immersive way. In this post, we explore how AR is changing the landscape of real estate...",
  },
  {
    id: 2,
    title: "Improving Trust in Autonomous Vehicles with Customization",
    author: "Taha",
    date: "October 10, 2024",
    image:"",
    content:
      "Trust is a critical factor for the adoption of autonomous vehicles. This article dives into how customization features in AR can enhance user trust during autonomous driving experiences...",
  },
  {
    id: 3,
    title: "Building a SaaS Platform for the Moroccan Market",
    author: "Taha",
    date: "September 5, 2024",
    image:"",
    content:
      "In this post, we discuss the challenges and opportunities of developing a SaaS platform tailored to the needs of the Moroccan market, including strategies for product development and marketing...",
  },
  {
    id: 4,
    title: "Exploring Augmented Reality in Real Estate",
    author: "Taha",
    date: "November 15, 2024",
    image:"",
    readingtime:"10 min read",
    content:
      "Augmented Reality (AR) is revolutionizing the real estate industry by allowing potential buyers to visualize properties in a new and immersive way. In this post, we explore how AR is changing the landscape of real estate...",
  },
];



export { services, technologies, experiences, testimonials, projects, certificates, educations, blogPosts };
