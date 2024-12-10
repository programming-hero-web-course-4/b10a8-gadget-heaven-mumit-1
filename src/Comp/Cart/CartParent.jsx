import { useContext, useState } from "react";
import { cartListNeed } from "../Root/Root";
import Cart from "../Cart/Cart";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Correct from "../../assets/icons8-correct-ezgif.com-loop-count.gif";
import {  ToastContainer,toast } from 'react-toastify';
const CartParent = () => {
  const [cartlist, setcartList] = useContext(cartListNeed);
  let sum = 0;
  for (const cart of cartlist) {
    sum += cart.price;
  }
  const notify = () => toast("Wow so easy!");
  const handleSort = () => {
    if(cartlist.length>0){
    const sortedCart = [...cartlist].sort((a, b) => b.price - a.price);
    setcartList(sortedCart);
    }
    else{
    
    }
  };
  const handlePurchase = () =>{
    if(cartlist.length>0){
    document.getElementById("my_modal_5").showModal();
    setcartList([]);
    }
    else{
   
    }
   
  }
  const navigate = useNavigate();
  return (
    <div className=" ">
     
      <div className="">
        <div className=" flex   items-center flex-wrap lg:gap-5 md:gap-5 gap-4 py-6">
          <div className="flex-1">
            <h1 className=" font-bold text-2xl ml-4 ">Cart</h1>
          </div>
          <div className="font-bold text-lg lg:px-0 px-10">Total Cost: ${sum}</div>
          <div className="pr-7 lg:pl-0 pl-4">
            <button
              onClick={() => handleSort()}
              className="btn rounded-full text-purple-600 bg-transparent border-purple-600 hover:border-purple-600  hover:text-white hover:bg-purple-600"
            >
              Sort by Price
              <BsSortNumericDownAlt className="text-lg" />
            </button>
          </div>
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-[#9538E2] hover:bg-purple-700 text-white rounded-full px-7"
              onClick={() => handlePurchase()}
            >
              Purchase
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle "
            >
              <div className="bg-white rounded-3xl pb-5 w-96 mx-auto px-5 mb-4">
                    <div className="text-center  pb-4">
                      <div className="w-16 mx-auto py-5"><img className="w-full" src={Correct} alt="" /></div>
                      <h1 className="text-xl font-bold pb-5">Payment Successfully</h1>
                      <p>Thanks for purchasing</p>
                      <p>Total: ${sum}</p>
                    </div>
                    
                    <button onClick={()=>{navigate("/")}} className="btn w-full rounded-full font-bold">Close</button>
                
              </div>
            </dialog>
          </div>
        </div>
        <div className="pb-10">
          {cartlist.map((cart, idx) => (
            <Cart key={idx} cart={cart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartParent;
