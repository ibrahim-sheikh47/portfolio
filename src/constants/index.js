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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bitforce,
  hashtag,
  qrAttendance,
  Reports,
  staffManagement,
  mobHome,
  PayrollDetail,
  qick1,
  qick2,
  qick3,
  qick4,
  qick5,
  qick6,
  salsivo1,
  salsivo,
  salsivo2,
  salsivo3,
  salsivo4,
  salsivo5,
  salsivo6,
  salsivo7,
  Edufe1,
  Edufe2,
  Edufe3,
  Edufe4,
  Edufe5,
  sendti,
  realty,
  settle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Firebase Integrator",
    icon: backend,
  },
  {
    title: "Pixel Perfect Coder",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Senior Frontend Developer",
    company_name: "BitForce Solutions, Lahore (Remote)",
    icon: bitforce, // replace with your own company logo if available
    iconBg: "#E6DEDD",
    date: "May 2024 - May 2025",
    points: [
      "Developed fully functional frontends for both web and mobile applications using React and React Native.",
      "Integrated Firebase services such as Authentication, Firestore, and Cloud Storage for seamless full-stack functionality.",
      "Delivered polished, responsive UIs ensuring consistent performance across Android, iOS, and web platforms.",
      "Collaborated with cross-functional teams to design and optimize user interfaces, implementing app logic directly with Firebase Cloud Functions and Firestore rules.",
      "Built responsive and interactive landing pages using React, Tailwind CSS, and Firebase/Netlify Hosting with fast load times and smooth navigation.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Hashtag Web, Multan",
    icon: hashtag, // replace with your own company logo if available
    iconBg: "#383E56",
    date: "July 2023 - Jan 2024",
    points: [
      "Assisted in developing frontends for  web applications using React.",
      "Contributed to responsive design implementation and UI optimization across different devices and browsers.",
      "Supported the development of landing pages hosted on Vercel/Netlify, ensuring smooth navigation and fast performance.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Hashtag Web, Multan",
    icon: hashtag, // replace with your own company logo if available
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Built responsive web pages using HTML, CSS, and Bootstrap.",
      "Implemented simple animations and transitions to make the interface more interactive.",
      "Carefully followed design mockups to match layouts, colors, and styles accurately.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
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
    name: "Smart QR Attendance Tracking System",
    description:
      "Web and mobile system for staff attendance with QR Code check-in/out, Firebase storage, automated work hours, and an admin dashboard for reports.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: qrAttendance,
    screenshots: [
      qrAttendance,
      staffManagement,
      PayrollDetail,
      mobHome,
      Reports,
    ],
    source_code_link: "https://github.com/",
    live_demo: "https://your-demo-link.com", // Optional
    detailedDescription:
      "The SmartTrack Attendance System is a dual-platform solution that automates and secures staff attendance tracking through QR Code-based check-in and check-out. Built with a Firebase backend, it ensures real-time data storage, synchronization, and authentication, eliminating manual errors and providing scalability. Staff members use a mobile app to scan their unique QR codes for clocking in and out, while the system records exact timestamps and automatically calculates total working hours. Administrators access a web-based dashboard to manage staff profiles, monitor real-time attendance, generate analytics, and export or print detailed reports in daily, weekly, or monthly formats. With QR authentication for accuracy, Firebase security for data integrity, and reporting features for streamlined management, SmartTrack delivers a reliable, user-friendly, and efficient solution for both employees and administrators.",
  },
  {
    name: "Qick Web App",
    description:
      "qick is the all-in-one platform built exclusively for soccer facilities — automate operations, cut workload by 50%, boost revenue, and engage more players through a seamless mobile and web solution",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "react-chartjs-2",
        color: "blue-text-gradient",
      },
    ],
    image: qick1,
    screenshots: [qick1, qick2, qick3, qick4, qick5, qick6], // Add more screenshots here
    source_code_link: "https://github.com/",
    detailedDescription:
      "I developed the complex user interface using a combination of Material UI, Ant Design, TailwindCSS, and React-ChartJS-2, integrating powerful pre-built components with modern design and interactive data visualizations to create a clean, responsive, and scalable experience. With its dual-platform design, real-time analytics, and automation features, Qick enhances efficiency for facility managers while delivering a smooth and engaging experience for players.",
  },
  {
    name: "Salsivo",
    description:
      "The app is for Salsa Dancers to let them create choreographies quickly by selecting individual moves and stitching them together. At the end they can save the choreography for later reference.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "react-native-paper",
        color: "pink-text-gradient",
      },
    ],
    image: salsivo1,
    screenshots: [salsivo2, salsivo3, salsivo4, salsivo5, salsivo6, salsivo7], // Add more screenshots here
    source_code_link: "https://github.com/",
    detailedDescription:
      "I developed the beautiful interface of this app using Expo and React Native to ensure a consistent and intuitive user experience. The design emphasizes simplicity and fluidity, enabling dancers to focus on creativity rather than technical barriers. With smooth navigation, responsive layouts, and a clean visual style, the app makes building and saving choreographies both engaging and effortless across iOS and Android devices.",
  },
  {
    name: "Edufe",
    description:
      "Edufe is the first app in Honduras that helps you beat inflation and grow your wealth with monthly returns between 12% and 18%, allthrough a fast, secure, and 100% mobile experience.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "react-native-paper",
        color: "pink-text-gradient",
      },
    ],
    image: Edufe1,
    screenshots: [Edufe1, Edufe2, Edufe3, Edufe4, Edufe5], // Add more screenshots here
    source_code_link: "https://github.com/",
    detailedDescription:
      "I developed the beautiful interface of this app using Expo and React Native to ensure a consistent and intuitive user experience. The design focuses on simplicity and accessibility, making financial tools easy to use for everyone. By leveraging React Native’s cross-platform capabilities, the app delivers smooth navigation, responsive layouts, and reliable performance on both iOS and Android devices. Every UI element was crafted to enhance trust and engagement, creating a seamless journey from signup to managing investments",
  },
  // {
  //   name: "Salsivo",
  //   description:
  //     "I developed the beautiful interface of this app using Expo and React Native to ensure a consistent and intuitive user experience. ",
  //   tags: [
  //     {
  //       name: "expo",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react-native",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-native-paper",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: salsivo1,
  //   screenshots: [salsivo], // Add more screenshots here
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Salsivo",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. The platform includes user reviews, interactive maps, price comparison, and personalized travel itineraries to enhance the travel planning experience.",
  //   tags: [
  //     {
  //       name: "expo",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react-native",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-native-paper",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: salsivo1,
  //   screenshots: [salsivo], // Add more screenshots here
  //   source_code_link: "https://github.com/",
  // },
];
const landingPages = [
  {
    name: "Qick",
    description:
      "Created this beautiful landing page for Qick app using React, Tailwind CSS, and GSAP to ensure a responsive, engaging, and visually appealing experience that effectively communicates the app's value proposition.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "mui", color: "blue-text-gradient" },
    ],
    image: qick2, // replace with your imported image
    live_link: "https://edufe.netlify.app", // ✅ direct live link
  },
  {
    name: "Edufe",
    description:
      "Created this beautiful landing page for Edufe app using React, Tailwind CSS, and GSAP to ensure a responsive, engaging, and visually appealing experience that effectively communicates the app's value proposition.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "mui", color: "blue-text-gradient" },
    ],
    image: Edufe1, // replace with your imported image
    live_link: "https://edufe.netlify.app", // ✅ direct live link
  },

  {
    name: "Settle",
    description:
      "Created this beautiful landing page for local client's digital marketing field using React, Tailwind CSS, Framer Motion and GSAP to ensure a responsive, engaging, and visually appealing experience that effectively communicates the app's value proposition.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "mui", color: "blue-text-gradient" },
    ],
    image: settle, // replace with your imported image
    live_link: "https://settlepk.netlify.app/", // ✅ direct live link
  },
  {
    name: "MySendtiments",
    description:
      "Created this beautiful multi pages landing site for MySendtiments app using React, Tailwind CSS, and GSAP to ensure a responsive, engaging, and visually appealing experience that effectively communicates the app's value proposition.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "mui", color: "blue-text-gradient" },
    ],
    image: sendti, // replace with your imported image
    live_link: "https://mysendtiments.com", // ✅ direct live link
  },
  {
    name: "Realty Genie",
    description:
      "Created this beautiful landing page for realty genie app using React, Tailwind CSS to ensure a responsive, engaging, and visually appealing experience that effectively communicates the app's value proposition.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "mui", color: "blue-text-gradient" },
    ],
    image: realty, // replace with your imported image
    live_link: "https://realtygenie.netlify.app/", // ✅ direct live link
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  landingPages,
};
