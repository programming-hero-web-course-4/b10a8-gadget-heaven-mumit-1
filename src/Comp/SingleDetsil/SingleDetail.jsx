import { useLoaderData, useParams } from "react-router-dom";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoCartOutline } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import Heart from "react-heart";
import { cartListNeed, wishlistNeed } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import { Helmet , HelmetProvider  } from "react-helmet-async";

// import Heart from "react-heart";
const SingleDetail = () => {
  useEffect(()=>{
    document.title ="Gadget "
  })
  const { product_id } = useParams();
  const data = useLoaderData();

  const newData = data.find((gadget) => gadget.product_id === product_id);
  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    specification,
    rating,
  } = newData;

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  const [disable, setDisable] = useState(false);
  const [active, setActive] = useState(false);
  const handleHeart = () => {
    if (!wishList.find((cart) => cart.product_id === newData.product_id)) {
      setWishList([...wishList, newData]);
      toast.success("Added to Wishlist.");
      setDisable(true);
      setActive(!active);
    }
  };
  const [cartList, setcartList] = useContext(cartListNeed);
  const [wishList, setWishList] = useContext(wishlistNeed);
  const handleAddtoCart = () => {
    !cartList.find((cart) => cart.product_id === newData.product_id) && newData.availability
      ? (setcartList([...cartList, newData]), toast.success("Added to Cart.")) 
      : newData.availability ?  toast.error("It is in the cart") :  toast.error("The Gadget is not availabale");
   ;
  };
  useEffect(() => {
    document.title = "Gadget";
  }, []);
  return (
    <HelmetProvider>
      <div className="relative lg:py-56 md:py-72 py-[420px]  bg-base-200">
         
             <Helmet>
        <title>Gadget </title>
      </Helmet>
      <div className="hero pt-20 px-2 absolute lg:-top-[335px] md:-top-[325px] -top-[300px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-8 bg-white lg:p-8 md:p-6 rounded-2xl drop-shadow-xl">
          <div className="lg:w-96">
            <img
              src={product_image}
              className="w-full object-contain rounded-lg "
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="py-6 font-semibold text-xl">Price: ${price}</p>
            <div>
              {availability ? (
                <button className=" border rounded-xl px-2 border-green-600 bg-green-200">
                  In stock
                </button>
              ) : (
                <button className="border rounded-xl px-2 border-red-600 bg-red-200">
                  Out of stock
                </button>
              )}
            </div>
            <div className="py-4">
              <p>{description}</p>
            </div>
            <div>
              <p className="font-bold pb-3 text-lg">Specification:</p>
              <ul className="list-decimal ml-5">
                {specification.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
            <p className="font-bold text-lg pt-4 pb-2">Rating:</p>
            <div className="flex gap-3 items-center pb-4">
              <Rating
                readOnly
                style={{ maxWidth: 150 }}
                value={parseInt(rating)}
                itemStyles={myStyles}
              />
              <button className="bg-gray-200 px-3 py-1 rounded-full text-lg ">
                {rating}
              </button>
            </div>
            <div className="flex gap-3 items-center lg:py-1 md:py-3 pb-3 pt-1.5">
              <button
                onClick={() => handleAddtoCart()}
                className="btn bg-[#9538E2] hover:bg-purple-700 text-white rounded-full"
              >
                Add to Card <IoCartOutline />
              </button>

              <div>
                <Heart
                  className="block w-[52px] p-3 btn border  rounded-full   "
                  isActive={active}
                  disabled={disable}
                  onClick={() => handleHeart()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
    
  );
};

export default SingleDetail;
