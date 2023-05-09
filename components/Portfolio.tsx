import "@/css/portfolio.css";

import { FC } from "react";

interface IData {
  img: string;
  about: string;
  name: string;
  href: string;
  github: string;
  tags: string[];
}

const data: IData[] = [
  {
    img: "/images/tinylabz.png",
    about:
      "Company Website for Building Software for Clients showcases the services of a software development company. Features portfolio of past projects, teams, and a contact page for potential clients torequest quotes and consultations!",
    name: "Company Website",
    href: "https://tinylabz.vercel.app",
    github: "https://github.com/tinylabz/web.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/mysite.png",
    about:
      "Showcasing my professional achievements and skillset and typically including my biography, resume, portfolio of past projects, and contact information. The purpose is to showcase my work and attract potential clients or employers!",
    name: "Personal Portfolio",
    href: "https://iyn.vercel.app",
    github: "https://github.com/Ian-Balijawa/my-site.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/delv.png",
    about:
      "Platform that connects job seekers with employers, provides job searching, application tracking, and job alerts. The platform aims to simplify the job search process for candidates while providing employers with a pool of qualified candidates!",
    name: "Delv Careers",
    href: "https://delvcareers.com",
    github: "#",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/cefs.png",
    about:
      "The Complaint Evaluation Feedback System is a web application designed to help students learn about managing customer complaints more effectively. The system allows students to submit complaints online, which are then evaluated and assigned to the appropriate team members for resolution.  Students can track the progress of their complaints and provide feedback on the resolution process!",
    name: "Complaint Evaluation System",
    href: "https://cefs.vercel.app",
    github: "https://github.com/tinylabz/cefs.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/dissertation.png",
    about:
      "Developing strategies and tools to protect QR code payment systems from phishing attacks, which are attempts by malicious actors to obtain sensitive information from users. This project involved researching existing security measures, identifying vulnerabilities, and proposing new methods to enhance security and prevent attacks.",
    name: "Under Graduate Dissertation",
    href: "http://dissertations.mak.ac.ug/handle/20.500.12281/14935",
    github: "https://github.com/qpey/backend.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/jlib.png",
    about:
      "JLib is a job search platform that connects job seekers with their dream jobs. With its user-friendly interface and advanced search features, JLib helps job seekers find relevant job openings and apply for them easily. Employers can also post job listings and search for qualified candidates on the platform!",
    name: "JLib | Job Search Platform",
    href: "https://joblib.vercel.app/",
    github: "https://github.com/Ian-Balijawa/j-lib.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/gol.png",
    about:
      "Cellular automaton simulation that showcases how simple rules can result in complex patterns. The game consists of a grid of cells that can either be alive or dead. The cells evolve over time based on their neighboring cells, creating intricate patterns and behaviors",
    name: "John Conway's Game of Life",
    href: "https://gol-game.vercel.app/",
    github: "https://github.com/Ian-Balijawa/game-of-life.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
  {
    img: "/images/dijkstra.png",
    about:
      "Demonstration of Dijkstra's  pathfinding algorithm. The program allows users to input a start and end point on a grid and visualizes the algorithm finding the shortest path between them and visualises the algorithm's progress in real-time, showing the explored nodes and the path found",
    name: "Dijkstra's Path Finding Visualisation",
    href: "https://dijkstras.vercel.app",
    github: "https://github.com/Ian-Balijawa/dijkstra.git",
    tags: ["/react.png", "/typescript.png", "/node.png"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ img, href, name, github, about, tags }, idx) => (
          <Card
            key={idx}
            about={about}
            href={href}
            img={img}
            name={name}
            github={github}
            tags={tags}
          />
        ))}
      </div>
    </section>
  );
};
export default Portfolio;

const Card: FC<IData> = ({ about, name, github, href, img, tags }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt="port-img" />
      </div>
      <div className="portfolio__item-image">
        <h3>{name}</h3>
        <div className="tags">
          {tags.map((tag) => (
            <img key={tag.toString()} src={tag} alt={tag} />
          ))}
        </div>
        <p>{about}</p>
        <div className="portfolio__item-cta">
          <a href={github} target={"_blank"} className="btn">
            Github
          </a>
          <a href={href} className="btn btn-primary" target={"_blank"}>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};
