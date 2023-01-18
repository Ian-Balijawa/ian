import '@css/portfolio.css';

import IMG from '@assets/me.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {Array.from({ length: 6 }).map((e, index) => (
                    <article className="portfolio__item" key={index}>
                        <div className="portfolio__item-image">
                            <img src={IMG} alt="port-img" />
                        </div>
                        <div className="portfolio__item-image">
                            <h3>This is a portfolio item title</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href="https://github.com/Ian-Balijawa"
                                    target={'_blank'}
                                    className="btn"
                                >
                                    Github
                                </a>
                                <a
                                    href="https://dribble.com/Alien_pixels"
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
