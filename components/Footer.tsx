import "@/css/footer.css";
import React from "react";

import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

interface ILinks {
  name: string;
  href: string;
}

interface ISocials {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socials: ISocials[] = [
  {
    href: "#",
    name: "Github",
    icon: <FaGithub />,
  },
  {
    href: "#",
    name: "Twitter",
    icon: <IoLogoTwitter />,
  },
  {
    href: "#",
    name: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "#",
    name: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "#",
    name: "Instagram",
    icon: <FiInstagram />,
  },
];

const links: ILinks[] = [
  {
    href: "#",
    name: "Home",
  },
  {
    href: "#",
    name: "About",
  },
  {
    href: "#",
    name: "Experience",
  },
  {
    href: "#",
    name: "Services",
  },
  {
    href: "#",
    name: "Portfolio",
  },
  {
    href: "#",
    name: "Testimonials",
  },
  {
    href: "#",
    name: "Contact",
  },
];

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        IAN BALIJAWA
      </a>

      <ul className="permalinks">
        {links.map(({ href, name }, index) => {
          return (
            <li key={index.toString()}>
              <a href={href}>{name}</a>
            </li>
          );
        })}
      </ul>

      <div className="footer__socials">
        {socials.map(({ href, icon, name }) => {
          return <a key={name} href={href}>{icon}</a>;
        })}
      </div>

      <div className="footer__copyright">
        <small> &copy; IanBalijawa. All Rights Reserved </small>
      </div>
    </footer>
  );
};
