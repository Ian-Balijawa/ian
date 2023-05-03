import { Project, ProjectProps } from '@/components/Project';
import About from '@components/About';
import Contact from '@components/Contact';
import Experience from '@components/Experience';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Portfolio from '@components/Portfolio';
import Services from '@components/Services';
import Testimonial from '@components/Testimonial';

const projects: ProjectProps[] = [
    {
        description:
            'Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.Suitable for programming in various languages, the theme provides a modern and sleek appearance for the code editor!',
        dir: 'row',
        imgs: ['/node.png', '/typescript.png', '/react.png'],
        tags: ['VsCode', 'theme', 'JSON', 'Dark', 'JS'],
        title: 'Dark Night Rises',
    },
    {
        description:
            'Custom visual theme for Microsoft Visual Studio Code. Its dark color scheme with shades of blue and purple is designed to reduce eye strain and enhance code readability.Suitable for programming in various languages, the theme provides a modern and sleek appearance for the code editor!',
        dir: 'row-reverse',
        imgs: ['/react.png', '/node.png', '/typescript.png'],
        tags: ['VsCode', 'theme', 'JSON', 'Dark', 'JS'],
        title: 'Dark Night Rises',
    },
];

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            {projects.map(({ description, dir, imgs, tags, title }, idx) => {
                return (
                    <Project
                        key={idx}
                        description={description}
                        dir={dir}
                        imgs={imgs}
                        title={title}
                        tags={tags}
                    />
                );
            })}
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
