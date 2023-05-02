import { StrictMode } from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/components/Footer';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <Footer />
        </BrowserRouter>
    </StrictMode>
);
