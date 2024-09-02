import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import { Layout } from '../template';

const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

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
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
