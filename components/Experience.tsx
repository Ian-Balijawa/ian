import "@/css/experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const backend = [
  "NodeJS",
  "Postgres",
  "Golang",
  "Python",
  "MongoDB",
  "Redis",
  "NestJS",
  "Ruby",
];
const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "NextJS",
  "Vue",
  "TypeScript",
  "Tailwind",
  "React",
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            {frontend.map((skill, idx) => (
              <article key={idx.toString()} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            {backend.map((skill, idx) => (
              <article key={idx.toString()} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
