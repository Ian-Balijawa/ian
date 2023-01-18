import About from '@components/About';
import Contact from '@components/Contact';
import Experience from '@components/Experience';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Portfolio from '@components/Portfolio';
import Services from '@components/Services';
import Testimonial from '@components/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
        </>
    );
};
export default Home;
