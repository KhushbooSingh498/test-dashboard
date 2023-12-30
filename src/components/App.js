import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './Sidebar';
import Body from './Body';
import Header from './Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Transactions from './Transactions';
import Support from './Support';
import '../css/App.scss';

const AppLayout = () => {
    return (
        <div className='main'>
            <Sidebar />
            <div className='body'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/transaction',
                element: <Transactions />
            },
            {
                path: '/support',
                element: <Support />
            },
            
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
