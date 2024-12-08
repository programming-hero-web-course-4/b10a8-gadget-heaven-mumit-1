import React, { useContext } from "react";
import { cartListNeed } from "../Root/Root";
import DashboardMore from "./DashboardMore";

const Dashboard = () => {
    const [cartlist] = useContext(cartListNeed);

  return (
    <div>
     
        <div>
            {
                cartlist.map((cart,idx)=><DashboardMore key={idx} cart={cart}></DashboardMore>)
            }
        </div>

    </div>


  );
};

export default Dashboard;
