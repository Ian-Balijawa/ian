import '@css/header.css';

import { Suspense, lazy } from 'react';

import CTA from '@/components/CTA';
import Social from '@/components/Socials';
import VoxelDogLoader from '@/components/VoxelDogLoader';
import me from '@assets/me.png';

const Loadable = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<VoxelDogLoader />}>
            <Component {...props} />
        </Suspense>
    );

const LazyVoxelDog = Loadable(lazy(() => import('@/components/VoxelDog')));

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                
                <LazyVoxelDog />

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
