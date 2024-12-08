import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";

export const cartListNeed = createContext();

const Root = () => {
    const [cartlist,setcartList] = useState([]);
    console.log(cartlist);
  return (
    <div>
      <Nav></Nav>
      <cartListNeed.Provider value={[cartlist,setcartList]}>
        <Outlet></Outlet>
      </cartListNeed.Provider>
        <Footer></Footer>
    </div>
  );
};

export default Root;
