import around_us from "../assets/images/around_us.png";
import coffee_shop from "../assets/images/coffee_shop.jpg";
import desktop_wtwr from "../assets/images/desktop_wtwr.jpg";

export const projectsData = [
  {
    id: 1,
    name: "WTWR ( What to Wear )",
    description:
      "Built a What to Wear, a responsive React app that helps users choose clothing based on real-time weather in their selected city and time.",
    feature:
      "Used React for dynamic components, JSON server for data storage, and integrated the OpenWeather API for weather data and personalized recommendations, ensuring a seamless user experience.",
    link: "https://github.com/oleg-lzn/se_project_react",
    image: desktop_wtwr,
  },
  {
    id: 2,
    name: "Around The US",
    description:
      "Built with JavaScript, HTML, and CSS, the app allows users to view and interact with cards displaying images and descriptions of various places in the US.",
    feature: "Application uses mobile-friendly responsive design.",
    link: "https://github.com/oleg-lzn/se_project_aroundtheus",
    image: around_us,
  },
  {
    id: 3,
    name: "Oleg's Coffee-Shop",
    description:
      "Oleg's Coffee Shop is a simple, elegant HTML / CSS  website designed to showcase a coffee shop's offerings and provide an easy way for customers to book a table.",
    feature: "Simple and nice design.",
    link: "https://github.com/oleg-lzn/se_project_coffeeshop",
    image: coffee_shop,
  },
];
