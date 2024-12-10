import { useContext } from "react";
import { cartListNeed, wishlistNeed } from "../Root/Root";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Wish = ({ wish }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    availability,
    description,
    specification,
    rating,
  } = wish;
  const [cartList, setcartList] = useContext(cartListNeed);
  const [wishList,setWishList] = useContext(wishlistNeed);
  const handleCancel = () =>{
    setWishList(wishList.filter(wish => wish.product_id !== product_id));
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
          <div className="space-y-3.5 flex-1">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className="font-bold">Price ${price}</p>
            <button
              onClick={() =>
                !cartList.find(
                  (cart) =>
                    cart.product_id === wish.product_id &&
                    cart.availability === true
                )
                  ? setcartList([...cartList, wish])
                  : null
              }
              className="btn bg-[#9538E2] hover:bg-purple-700 text-white rounded-full"
            >
              Add to Card <IoCartOutline />
            </button>
          </div>
          <button className="btn lg:block md:block absolute lg:top-0 lg:right-0 right-2 bottom-0.5  self-baseline hover:rounded-full lg:h-14 md:h-14 lg:bg-transparent md:bg-transparent bg-base-200 rounded-full border-0 shadow-none -mr-2.5 -mt-2" onClick={()=>handleCancel()}>
              
              <RxCross1  className="text-red-700 lg:text-2xl md:text-2xl"/>
             
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wish;
