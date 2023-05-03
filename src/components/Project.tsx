import { FC } from 'react';
import '@css/project.css';

export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    imgs: string[];
    dir: string;
}

export const Project: FC<ProjectProps> = ({
    description,
    dir,
    imgs,
    tags,
    title,
}) => {
    return (
        //@ts-ignore
        <div style={{ flexDirection: dir }} className="container project">
            <img src="/images/theme.png" alt="project" />
            <div className="info">
                <p className="featured">Featured project</p>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <p key={tag} className="tag">
                            VsCode
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
