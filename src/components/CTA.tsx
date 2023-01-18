import CV from '@assets/IAN-BALIJAWA.pdf';

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Download RESUME
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};
export default CTA;
