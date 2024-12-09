import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";

export const cartListNeed = createContext();
export const wishlistNeed = createContext();

const Root = () => {
    const [cartlist,setcartList] = useState([]);
    const [wishList,setWishList] = useState([]);
    console.log(cartlist);
  return (
    <div>
      <Nav></Nav>

      <wishlistNeed.Provider value={[wishList,setWishList]}>
        <cartListNeed.Provider value={[cartlist,setcartList]}>
          <Outlet></Outlet>
        </cartListNeed.Provider>
      </wishlistNeed.Provider>
        <Footer></Footer>
    </div>
  );
};

export default Root;
