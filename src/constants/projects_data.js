import around_us from "../assets/images/around_us.png";
import coffee_shop from "../assets/images/coffee_shop.jpg";
import desktop_wtwr from "../assets/images/desktop_wtwr.jpg";
import issue_tracker from "../assets/images/issue_tracker.png";
import plantly_icon from "../assets/images/plantly_icon.png";
import pardy from "../assets/images/pardy.png";

export const projectsData = [
  {
    id: 1,
    name: "Issue Tracker - Issue Tracking System",
    description:
      "Modern full-stack Issue Tracking System built with Next.js 15, TypeScript, Drizzle ORM, and Neon PostgreSQL. Features secure JWT auth, Google SSO, full CRUD for issues, status & priority tracking, responsive UI with dark mode, and real-time toast notifications.",
    techStack:
      "Next.js 15, TypeScript, Drizzle ORM, Neon PostgreSQL, JWT, Google SSO",
    link: "https://github.com/oleg-lzn/issue_tracker",
    image: issue_tracker,
    liveDemo: "https://issue-tracker-one-chi.vercel.app/",
  },
  {
    id: 2,
    name: "Plantly - Plant Care App",
    description:
      "A beautiful and intuitive React Native + Zustand mobile app to help you keep your plants healthy and hydrated. Never forget to water your plants again!",
    techStack:
      "React Native, Zustand, Expo, React Native Paper, React Native Maps, React Native SVG",
    link: "https://github.com/oleg-lzn/react_native_plantly_app",
    image: plantly_icon,
  },
  {
    id: 3,
    name: "Pardy - Event Manager",
    description:
      "A Event Manager - Full-stack event management app with Next.js 14, Turso database, and modern UI. Features authentication, RSVP tracking, and guest management. and intuitive React Native + Zustand mobile app to help you keep your plants healthy and hydrated. Never forget to water your plants again!",
    techStack: "Next.js 14, Turso database, Tailwind CSS, Next UI,",
    link: "https://github.com/oleg-lzn/pardy_app",
    image: pardy,
    liveDemo: "https://pardy-app.vercel.app/",
  },
  {
    id: 4,
    name: "WTWR ( What to Wear ) - Weather App",
    description:
      "Built a What to Wear, a responsive fullstack React and Node.js app that helps users choose clothing based on real-time weather in their selected city and time.",
    techStack: "React, Node.js, MongoDB, OpenWeather API",
    link: "https://github.com/oleg-lzn/se_project_react",
    image: desktop_wtwr,
    liveDemo: "https://www.wtwr.euronatura.pt/",
  },
  {
    id: 5,
    name: "Around The US - Travel Guide App",
    description:
      "Built with JavaScript, HTML, and CSS, the app allows users to view and interact with cards displaying images and descriptions of various places in the US.",
    techStack: "JavaScript, HTML, CSS",
    link: "https://github.com/oleg-lzn/se_project_aroundtheus",
    image: around_us,
    liveDemo: "https://oleg-lzn.github.io/se_project_aroundtheus/",
  },
  {
    id: 6,
    name: "Oleg's Coffee-Shop - Coffee Shop Landing Page",
    description:
      "Oleg's Coffee Shop is a simple, elegant HTML / CSS  website designed to showcase a coffee shop's offerings and provide an easy way for customers to book a table.",
    techStack: "HTML / CSS",
    link: "https://github.com/oleg-lzn/se_project_coffeeshop",
    image: coffee_shop,
    liveDemo: "https://oleg-lzn.github.io/se_project_coffeeshop/",
  },
];
