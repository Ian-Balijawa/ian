import "@/css/services.css";

import { BiCheck } from "react-icons/bi";

interface ISrv {
  name: string;
  srvs: string[];
}

const data: ISrv[] = [
  {
    name: "Frontend",
    srvs: [
      "Web design",
      "HTML/CSS coding",
      "Responsive design",
      "JavaScript development",
      "Cross-browser compatibility",
      "Accessibility testing",
      "Performance optimization",
      "Search engine optimization",
    ],
  },
  {
    name: "Backend",
    srvs: [
      "Server-side scripting",
      "Database design",
      "API development",
      "Web App development",
      "Cloud computing",
      "DevOps",
      "Scalability planning",
      "Security management",
      "E-commerce development",
    ],
  },
  {
    name: "Quality  Assurance",
    srvs: [
      "Test planning and strategy",
      "Manual testing",
      "Automated testing",
      "Performance testing",
      "Regression testing",
      "User acceptance testing",
      "Defect tracking",
      "Quality metrics and reporting",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">
        {data.map(({ name, srvs }) => {
          return (
            <article className="service" key={name.toString()}>
              <div className="service__head">
                <h3>{name}</h3>
              </div>

              <ul className="service__list">
                {srvs.map((srv) => {
                  return (
                    <li key={srv.toString()}>
                      <BiCheck className="service__list-icon" />
                      <p>{srv}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};
