


import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { cartListNeed } from "../Root/Root";

const cart = ({cart}) => {
   
    const {
      product_id,
        product_title,
        product_image,
        price,
        availability,
        description,
        specification,
        rating,
        category
      } = cart;
      const [cartlist,setCartList] = useContext(cartListNeed);
     
      const handleCancel = () =>{
        setCartList(cartlist.filter(cart => cart.product_id !== product_id));
      }
    return (
      <div className="mb-5">
      <div className="w-full bg-white p-5 rounded-xl">
        <div className="flex items-center gap-8 relative">
          <div className="lg:w-40 lg:h-40 md:w-40 md:h-40 w-28 h-28">
            <img
              className="object-cover h-full w-full"
              src={product_image}
              alt=""
            />
          </div>
          <div className="space-y-4 flex-1">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p>
               <span className="font-bold">Gadget : </span> {category}   <span className="bg-gray-200 px-2.5 py-1 rounded-full  ">{rating}</span>
            </p>
            <p className="font-bold lg:py-0 md:py-0 py-4">Price ${price}</p>
        
          </div>
          <button className="btn lg:block md:block absolute lg:top-0 lg:right-0 right-2 -bottom-0.5  self-baseline hover:rounded-full lg:h-14 md:h-14  lg:bg-transparent md:bg-transparent bg-base-200 rounded-full border-0 shadow-none -mr-2.5 -mt-2" onClick={()=>handleCancel()}>
              
              <RxCross1  className="text-red-700 lg:text-2xl md:text-2xl "/>
             
          </button>
        </div>
      </div>
    </div>
    );
};

export default cart;