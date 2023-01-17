import { HashRouter, Route, Routes } from 'react-router-dom';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>Hello World</h1>} />
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
