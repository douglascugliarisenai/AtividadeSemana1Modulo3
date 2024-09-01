import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import { Layout } from '../template'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <LoginPage />,
            },
            {
                path: '/home',
                element: <HomePage />,
            }

        ]
    }
])