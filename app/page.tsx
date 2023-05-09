import { Project, ProjectProps } from "@/components/Project";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { Suspense, lazy } from "react";
import { Loader } from "@/components/Loader";
import { Companies } from "@/components/Companies";
import Hero from "@/components/Hero";

const Loadable = (Component: React.FC) => () => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

const projects: ProjectProps[] = [
  {
    description:
      "Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.!",
    dir: "row",
    imgs: ["/node.png", "/typescript.png", "/react.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Dark Night Rises",
    img: "/images/theme.png",
  },
  {
    description:
      "Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.!",
    dir: "row-reverse",
    imgs: ["/react.png", "/node.png", "/typescript.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Silver Light",
    img: "/images/silverlight.png",
  },
  {
    description:
      "Showcasing my professional achievements and skillset, including my biography, resume, portfolio of past projects, and contact information.!",
    dir: "row",
    imgs: ["/react.png", "/node.png", "/typescript.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Website PortFolio",
    img: "/images/mysite.png",
  },
];

export default function Index() {
  return (
    <>
      <Hero />
      <Navbar />
      {projects.map(({ img, description, dir, imgs, tags, title }, idx) => {
        return (
          <Project
            key={idx}
            img={img}
            description={description}
            dir={dir}
            imgs={imgs}
            title={title}
            tags={tags}
          />
        );
      })}
      <About />
      <Experience />
      <Companies />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}
