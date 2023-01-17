import { HashRouter, Route, Routes } from 'react-router-dom';

export function App() {
    return (
        <Routes>
            <Route path="/" element={null} />
            <Route path="*" element={null} />
        </Routes>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
