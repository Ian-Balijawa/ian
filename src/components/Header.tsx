import '@css/header.css';

import CTA from '@/components/CTA';
import Social from '@/components/Socials';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container header__container">
                    <h5>Hi, my name is</h5>
                    <h1>IAN BALIJAWA</h1>
                    <h2>I build Web and Mobile Applications</h2>
                    <h3>
                        I’m a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building accessible,
                        human-centered products at TLABS.
                    </h3>

                    <CTA />
                    <div className="social-container">
                        <Social />
                    </div>
                </div>
                <img src="/images/me.svg" alt="me" />
            </div>

            <a href="#contact" className="scroll__down">
                Scroll Down
            </a>
        </>
    );
};
export default Header;
