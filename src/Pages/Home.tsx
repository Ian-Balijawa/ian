import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Experience />
            <Services />
            <Testimonial />
            <About />
        </>
    );
};
export default Home;
