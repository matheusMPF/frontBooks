import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./Styles/Global.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminBook from './pages/AdminBook';
import AdminAuthor from './pages/AdminAuthor';
import ErrorPage from './pages/ErrorPage';
import Admin from './pages/Admin';
import Home from './pages/clientPage/Home';
import Cart from './pages/clientPage/Cart';

const router = createBrowserRouter([

{
  path: "/",
  errorElement: <ErrorPage/>,
  element: <App/>,
  children:[

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/cart",
      element: <Cart/>
    },

    {
      path: "/admin",
      element: <Admin/>
    },
    
    {
      path: "/adminBook",
      element: <AdminBook/>
    },
    
    {
      path: "/adminAuthor",
      element: <AdminAuthor/>
    },
  ]
}




//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>,
//     children:
//     [
//       {
//         path: "/adminBook",
//         element: <AdminBook />
//       },
//       {
//         path: "/adminAuthor",
//         element: <AdminAuthor />
//       }
//     ]
//   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

