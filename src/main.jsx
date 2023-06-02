import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Layout/Main.jsx';
import BookedShow from './Pages/BookedShow/BookedShow';
import BookingForm from './Pages/BookingForm/BookingForm';
import Home from './Pages/Home/Home';
import ShowDetails from './Pages/ShowDetails/ShowDetails';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/show/:id',
                element: <ShowDetails />,
                loader: () => fetch(`https://api.tvmaze.com/search/shows?q=all`),
            },
            {
                path: '/booking/:id',
                element: <BookingForm />,
                loader: () => fetch(`https://api.tvmaze.com/search/shows?q=all`),
            },
            {
                path: '/booked',
                element: <BookedShow />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
