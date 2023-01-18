import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Socials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/ian-balijawa-10369a181"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Ian-Balijawa" target="_blank">
                <FaGithub />
            </a>
            <a href="https://twitter.com/ianbalijawa" target="_blank">
                <IoLogoTwitter />
            </a>
        </div>
    );
};
export default Socials;
