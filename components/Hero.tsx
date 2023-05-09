import "@/css/header.css";

import { CTA } from "@/components/CTA";
import { Socials } from "@/components/Socials";

const Hero = () => {
  return (
    <>
      <div className="header">
        <div className="container header__container">
          <h5>Hi, my name is</h5>
          <h1>IAN BALIJAWA</h1>
          <h2>I build Web and Mobile Applications</h2>
          <h3>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at TLABS.
          </h3>

          <CTA />
          <div className="social-container">
            <Socials />
          </div>
        </div>

        <img src="/images/me.png" alt="me" />
      </div>

      <a href="mailto:ianbalijawa16@gmail.com" className="scroll__down">
        ianbalijawa16@gmail.com
      </a>
    </>
  );
};

export default Hero;
