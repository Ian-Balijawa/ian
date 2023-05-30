import {
  Project,
  ProjectProps,
  About,
  Companies,
  Contact,
  Experience,
  Hero,
  Navbar,
  Portfolio,
  Services,
  Testimonial,
} from "@/components";

const projects: ProjectProps[] = [
  {
    description:
      "Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.!",
    dir: "row",
    imgs: ["/node.png", "/typescript.png", "/react.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Dark Night Rises",
    img: "/images/theme.png",
    href: "https://marketplace.visualstudio.com/items?itemName=ianbalijawa.dark-night-rises",
  },
  {
    description:
      "Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.!",
    dir: "row-reverse",
    imgs: ["/react.png", "/node.png", "/typescript.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Silver Light",
    img: "/images/silverlight.png",
    href: "https://marketplace.visualstudio.com/items?itemName=ianbalijawa.silver-light",
  },
  {
    description:
      "Showcasing my professional achievements and skillset, including my biography, resume, portfolio of past projects, and contact information.!",
    dir: "row",
    imgs: ["/react.png", "/node.png", "/typescript.png"],
    tags: ["VsCode", "theme", "JSON", "Dark", "JS"],
    title: "Website PortFolio",
    img: "/images/mysite.png",
    href: "https://iyn.vercel.app",
  },
];

export default function Index() {
  return (
    <>
      <Hero />
      <Navbar />
      {projects.map(
        ({ href, img, description, dir, imgs, tags, title }, idx) => {
          return (
            <Project
              key={idx}
              img={img}
              description={description}
              dir={dir}
              imgs={imgs}
              title={title}
              tags={tags}
              href={href}
            />
          );
        }
      )}
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
