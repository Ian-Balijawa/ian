import "@css/companies.css";
import { useEffect, useState } from "react";

type Company = "Google" | "Facebook" | "Twitter";

interface IData {
  title: string;
  date: string;
  desc: string[];
}

export const Companies = () => {
  const [companyList] = useState<Company[]>(["Facebook", "Google", "Twitter"]);
  const [company, setCompany] = useState<Company>("Google");

  const [data, setData] = useState<IData>({
    date: "",
    desc: [],
    title: "",
  });

  useEffect(() => {
    setCompany("Facebook");
    setData({
      date: "July - December 2017",
      title: "UI Engineer Co-op @ Facebook",
      desc: [
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
      ],
    });
  }, []);

  const handleSelectedLocation = (location: Company) => {
    setCompany(location);

    if (location == "Facebook") {
      setData({
        date: "July - December 2017",
        title: "UI Engineer Co-op @ Facebook",
        desc: [
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        ],
      });
    }

    if (location == "Google") {
      setData({
        date: "July - December 2017",
        title: "UI Engineer Co-op @ Google",
        desc: [
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
        ],
      });
    }
    if (location == "Twitter") {
      setData({
        date: "July - December 2017",
        title: "UI Engineer Co-op @ Twitter",
        desc: [
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS.",
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
            <div onClick={() => handleSelectedLocation(c)} className={"tab"}>
              {c}
            </div>
          ))}
        </div>
        <div className="detail">
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
