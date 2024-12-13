import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const cartListNeed = createContext();
export const wishlistNeed = createContext();
export const pointNeed = createContext();
export const discountNeed = createContext();


const Root = () => {
    const [cartlist,setcartList] = useState([]);
    const [wishList,setWishList] = useState([]);
    const [point,setPoint] = useState(0);
    const [discount,setDiscount] = useState(0);
  return (
<div>

      <Nav></Nav>

      <wishlistNeed.Provider value={[wishList,setWishList]}>

      
        <cartListNeed.Provider value={[cartlist,setcartList]}>
      <pointNeed.Provider value={[point,setPoint]}>
    <discountNeed.Provider value={[discount,setDiscount]}>
          <Outlet></Outlet>
    </discountNeed.Provider>
        </pointNeed.Provider>
        </cartListNeed.Provider>
      </wishlistNeed.Provider>
        <Footer></Footer>
       
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       
        />
    </div>
  );
};

export default Root;
