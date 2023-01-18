import './index.css';

import React, { Suspense } from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/components/Footer';
import ReactDOM from 'react-dom/client';
import VoxelDogLoader from '@/components/VoxelDogLoader';

const Loadable = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<VoxelDogLoader />}>
            <Component {...props} />
        </Suspense>
    );

const LazyVoxelDog = Loadable(
    React.lazy(() => import('@/components/VoxelDog'))
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <LazyVoxelDog />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
