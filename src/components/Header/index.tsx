import './header.css';

import CTA from '@/components/CTA';
import Social from '@/components/Header/Socials';
import me from '@assets/me.png';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ian Balijawa</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <Social />
                <div className="me">
                    <img src={me} alt="me" />
                </div>
            </div>

            <a href="#contact" className="scroll__down">
                Scroll Down
            </a>
        </header>
    );
};
export default Header;
