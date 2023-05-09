//@ts-nocheck
"use client";

import { FC } from "react";
import "@/css/project.css";
import { useScreenWidth } from "@/hooks/useScreenWidth";

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
      }}
      className="container project"
    >
      <img
        src={img}
        alt={title}
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
            <img alt="icon" src={img} />
          ))}
        </div>
      </div>
    </div>
  );
};
