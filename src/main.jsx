import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Comp/Root/Root';
import Error from './Comp/Error/Error';
import Home from './Comp/Home/Home';
import SingleDetail from './Comp/SingleDetsil/SingleDetail';
import Dashboard from './Comp/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
    {
      path:"/gadget/:product_id",
      element:<SingleDetail></SingleDetail>,
      loader:()=>fetch('/Gadgets.json'),
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>
    },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
)
