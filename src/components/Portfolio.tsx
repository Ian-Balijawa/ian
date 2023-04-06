import '@css/portfolio.css';

import delv from '/images/delv.png';
import theme from '/images/theme.png';
import dissertation from '/images/dissertation.png';
import mysite from '/images/mysite.png';
import tinylabz from '/images/tinylabz.png';
import silverlight from '/images/silverlight.png';
import cefs from '/images/cefs.png';

interface IData {
    img: string;
    description: string;
    href: string;
    github: string;
}

const data: IData[] = [
    {
        img: tinylabz,
        description: 'Company Website',
        href: 'https://tinylabz.vercel.app',
        github: 'https://github.com/tinylabz/web.git',
    },
    {
        img: mysite,
        description: 'Personal Portfolio',
        href: 'https://iyn.vercel.app',
        github: 'https://github.com/Ian-Balijawa/my-site.git',
    },
    {
        img: delv,
        description: 'Delv Careers',
        href: 'https://delvcareers.com',
        github: '#',
    },
    {
        img: cefs,
        description: 'Complaint Evaluation Feedback System',
        href: 'https://cefs.vercel.app',
        github: 'https://github.com/tinylabz/cefs.git',
    },
    {
        img: theme,
        description: 'Dark Night Rises Vscode Extension(Theme)',
        href: 'https://marketplace.visualstudio.com/items?itemName=ianbalijawa.dark-night-rises',
        github: 'https://github.com/Ian-Balijawa/dark-night-rises.git',
    },
    {
        img: silverlight,
        description: 'Silver Light Vscode Extension(Theme)',
        href: 'https://marketplace.visualstudio.com/items?itemName=ianbalijawa.silver-light',
        github: 'https://github.com/Ian-Balijawa/silverlight.git',
    },
    {
        img: dissertation,
        description: 'Under Graduate Dissertation (Mobile App)',
        href: 'http://dissertations.mak.ac.ug/handle/20.500.12281/14935',
        github: 'https://github.com/qpey/backend.git',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ img, href, description, github }, index) => (
                    <article className="portfolio__item" key={index}>
                        <div className="portfolio__item-image">
                            <img src={img} alt="port-img" />
                        </div>
                        <div className="portfolio__item-image">
                            <h3>{description}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    target={'_blank'}
                                    className="btn"
                                >
                                    Github
                                </a>
                                <a
                                    href={href}
                                    className="btn btn-primary"
                                    target={'_blank'}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
export default Portfolio;
