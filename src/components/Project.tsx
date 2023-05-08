//@ts-nocheck
import { FC } from "react";
import "@css/project.css";
import { useScreenWidth } from "@/hooks/useScreen";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imgs: string[];
  dir: string;
  img: string;
}

export const Project: FC<ProjectProps> = ({
  description,
  dir,
  imgs,
  tags,
  title,
  img,
}) => {
  const size = useScreenWidth();

  return (
    <div
      style={{
        flexDirection: size === "small" ? "column" : dir,
        // margin: "5rem auto",
      }}
      className="container project"
    >
      <img
        src={img}
        alt="project"
        style={{ width: size === "small" && "100%" }}
      />
      <div className="info">
        <p className="featured">Featured project</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag} className="tag">
              {tag}
            </p>
          ))}
        </div>
        <div className="icons">
          {imgs.map((img) => (
            <img key={img} src={img} alt="typescript" />
          ))}
        </div>
      </div>
    </div>
  );
};
