import "@css/companies.css";
import { useEffect, useState } from "react";

type Company = "TLABS" | "DevAnalyst" | "Ataano";

interface IData {
  title: string;
  date: string;
  desc: string[];
}

export const Companies = () => {
  const [companyList] = useState<Company[]>(["TLABS", "DevAnalyst", "Ataano"]);
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
        "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
        "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
        "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
        "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
      ],
    });
  }, []);

  const handleSelectedLocation = (location: Company) => {
    setCompany(location);

    if (location == "Ataano") {
      setActive("Ataano");
      setData({
        date: "November - February 2022",
        title: "Frontend Engineer @ Ataano",
        desc: [
          "Developed and styled interactive web applications for Ataano using Ember and SCSS.",
          "Developed and styled interactive web applications for Ataano using Ember and SCSS.",
          "Developed and styled interactive web applications for Ataano using Ember and SCSS.",
          "Developed and styled interactive web applications for Ataano using Ember and SCSS.",
        ],
      });
    }

    if (location == "TLABS") {
      setActive("TLABS");
      setData({
        date: "October - Present",
        title: "Full Stack Engineer @ TLABS",
        desc: [
          "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
          "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
          "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
          "Developed and styled interactive web applications for TLABS using Ember and SCSS.",
        ],
      });
    }
    if (location == "DevAnalyst") {
      setActive("DevAnalyst");
      setData({
        date: "July - December 2017",
        title: "Frontend Engineer @ Ataano",
        desc: [
          "Developed and styled interactive web applications using Ember and SCSS.",
          "Developed and styled interactive web applications using Ember and SCSS.",
          "Developed and styled interactive web applications using Ember and SCSS.",
          "Developed and styled interactive web applications using Ember and SCSS.",
        ],
      });
    }
  };

  return (
    <div className="container wrapper">
      <p>Where I've Worked</p>
      <div className="company">
        <div className="tabs">
          {companyList.map((c) => (
            <div
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
