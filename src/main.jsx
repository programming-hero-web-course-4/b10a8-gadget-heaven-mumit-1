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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
    },
    {
      path:"/gadget/:product_id",
      element:<SingleDetail></SingleDetail>,
      loader:()=>fetch('/public/Gadgets.json'),
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
)
