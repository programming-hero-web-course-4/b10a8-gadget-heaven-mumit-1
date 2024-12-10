import { useContext } from "react";
import { cartListNeed } from "../Root/Root";
import { IoCartOutline } from "react-icons/io5";

const Wish = ({wish}) => {
    const {
        product_title,
        product_image,
        price,
        availability,
        description,
        specification,
        rating,
      } = wish;
      const [cartList,setcartList] = useContext(cartListNeed);
    return (
        <div className="">
                 <div className="flex justify-center items-center gap-4">
                  <div className="w-40 border-2"><img className="object-contain w-full" src={product_image} alt="" /></div>
                  <div className="space-y-2">
                    <h1 className="text-lg font-bold">{product_title}</h1>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <p className="font-bold">Price ${price}</p>
                    <button
               onClick={()=>
                !cartList.find(cart=>cart.product_id===wish.product_id) ? setcartList([...cartList,wish]) : null
              }
                className="btn bg-[#9538E2] hover:bg-purple-700 text-white rounded-full">
                Add to Card <IoCartOutline />
              </button>
                  </div>
                 </div>
        </div>
    );
};

export default Wish;