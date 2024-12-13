
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider  } from "react-helmet-async";


const Dashboard = () => {

  useEffect(() => {
    document.title = "Gadget | Dashboard";
  }, []);
  return (
    <HelmetProvider>
             <Helmet>
        <title>Gadget | Dashboard</title>
      </Helmet>
      <div className=" bg-base-200">
             
                  <div className="max-w-screen-xl mx-auto px-2">
                     <Outlet></Outlet>
                     </div>
                  
                 
       
    </div>
    </HelmetProvider>
    


  );
};

export default Dashboard;
