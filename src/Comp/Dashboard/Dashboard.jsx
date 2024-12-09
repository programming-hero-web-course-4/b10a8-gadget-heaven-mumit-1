
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


  return (
    <div className="max-w-screen-xl mx-auto px-2">
             
         
                  
                  
                  <Outlet></Outlet>
       
    </div>


  );
};

export default Dashboard;
