
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


  return (
    <div className=" bg-base-200">
             

                  <div className="max-w-screen-xl mx-auto px-2">
                     <Outlet></Outlet>
                     </div>
                  
                 
       
    </div>


  );
};

export default Dashboard;
