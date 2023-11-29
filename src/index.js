import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./Styles/Global.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminBook from './pages/AdminBook';
import AdminAuthor from './pages/AdminAuthor';
import ErrorPage from './pages/ErrorPage';
import AdminBookPublisher from './pages/AdminBookPublisher';
import Admin from './pages/Admin';

const router = createBrowserRouter([

{
  path: "/",
  errorElement: <ErrorPage/>,
  element: <App/>
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
{
  path: "/adminBookPublisher",
  element: <AdminBookPublisher/>
},

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

