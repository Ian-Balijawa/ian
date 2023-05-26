"use client";
import "@/css/companies.css";
import { useEffect, useState } from "react";

type Company = "TLABS" | "INGRESS" | "ATAANO";

interface IData {
  title: string;
  date: string;
  desc: string[];
}

export const Companies = () => {
  const [companyList] = useState<Company[]>(["TLABS", "INGRESS", "ATAANO"]);
  const [_, setCompany] = useState<Company>("TLABS");
  const [active, setActive] = useState<Company>("TLABS");

  const [data, setData] = useState<IData>({
    date: "",
    desc: [],
    title: "",
  });

  useEffect(() => {
    setCompany("TLABS");
    setActive("TLABS");
    setData({
      date: "October - Present",
      title: "Full Stack Engineer @ TLABS",
      desc: [
        "Led a team of 5 software engineers in the successful delivery of a new product feature that increased revenue by 15%",
        "Mentored and coached team members to improve their technical skills, resulting in a 25% increase in code quality and a 40% reduction in code review time.",
        "Worked closely with cross-functional teams, including product management and UX design, to ensure the development of high-quality products that meet customer needs and expectations.",
        "Scripted unique test plans, test scripts and processes to remove previously known redundancy by 40% and ensured predictable outcomes",
        "Conducted regular performance reviews and provided feedback to team members, resulting in increased employee engagement and job satisfaction.",
      ],
    });
  }, []);

  const handleSelectedLocation = (location: Company) => {
    setCompany(location);

    if (location == "ATAANO") {
      setActive("ATAANO");
      setData({
        date: "November - February 2022",
        title: "Frontend Engineer @ ATAANO",
        desc: [
          "Delivered conﬁguration management tools to track server settings for performance testing which saved 25% of initial machine setup",
          "Authored code ﬁxes and enhancements for inclusion in future code releases and patches.",
          "Reviewed code, debugged problems, and corrected issues.",
          "Optimized customer resources and reduce turnaround time by 20%",
          "Performed root cause analysis for more than 10 issues to identify bugs and rolled out ﬁxes to production within 24 hours",
        ],
      });
    }

    if (location == "TLABS") {
      setActive("TLABS");
      setData({
        date: "October - Present",
        title: "Full Stack Engineer @ TLABS",
        desc: [
          "Led a team of 5 software engineers in the successful delivery of a new product feature that increased revenue by 15%",
          "Mentored and coached team members to improve their technical skills, resulting in a 25% increase in code quality and a 40% reduction in code review time.",
          "Worked closely with cross-functional teams, including product management and UX design, to ensure the development of high-quality products that meet customer needs and expectations.",
          "Scripted unique test plans, test scripts and processes to remove previously known redundancy by 40% and ensured predictable outcomes",
          "Conducted regular performance reviews and provided feedback to team members, resulting in increased employee engagement and job satisfaction.",
        ],
      });
    }
    if (location == "INGRESS") {
      setActive("INGRESS");
      setData({
        date: "July - December 2017",
        title: "Frontend Engineer @ INGRESS",
        desc: [
          "Led a team of 5 software engineers in the successful delivery of a new product feature that increased revenue by 15%",
          "Mentored and coached team members to improve their technical skills, resulting in a 25% increase in code quality and a 40% reduction in code review time.",
          "Worked closely with cross-functional teams, including product management and UX design, to ensure the development of high-quality products that meet customer needs and expectations.",
          "Scripted unique test plans, test scripts and processes to remove previously known redundancy by 40% and ensured predictable outcomes",
          "Conducted regular performance reviews and provided feedback to team members, resulting in increased employee engagement and job satisfaction.",
        ],
      });
    }
  };

  return (
    <div className="container wrapper">
      <p>{"Where I've Worked"}</p>
      <div className="company">
        <div className="tabs">
          {companyList.map((c) => (
            <div
              key={c.toString()}
              onClick={() => handleSelectedLocation(c)}
              className={c === active ? "active" : "tab"}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="details">
          <div className="title">{data.title}</div>
          <div className="date">{data.date}</div>
          {data.desc.map((d, idx) => (
            <div key={idx} className="role">
              <div className="icon"></div>
              <div className="desc">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
