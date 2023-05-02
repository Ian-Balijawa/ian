import CV from '@assets/IAN-BALIJAWA.pdf';

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Checkout Resume
            </a>
        </div>
    );
};
export default CTA;
