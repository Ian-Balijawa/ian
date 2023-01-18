import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/components/Footer';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
