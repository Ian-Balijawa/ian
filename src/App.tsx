import { Navigate, useRoutes } from 'react-router-dom';

import Home from '@/Pages/Home';

export default () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '404',
            element: <h1>NOT FOUND</h1>,
        },
        {
            path: '*',
            element: <Navigate to="404" />,
        },
    ]);
};
