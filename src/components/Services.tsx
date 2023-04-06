import '@css/services.css';

import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Backend</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB */}
                <article className="service">
                    <div className="service__head">
                        <h3>Quality Assurance</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};
export default Services;
