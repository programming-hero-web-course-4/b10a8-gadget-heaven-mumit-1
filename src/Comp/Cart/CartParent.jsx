import { useContext } from "react";
import { cartListNeed } from "../Root/Root";
import Cart from "../Cart/Cart";

const CartParent = () => {
  const [cartlist, setcartList] = useContext(cartListNeed);
  return (
    <div className=" ">
      <div className="">
        <h1 className="py-5 font-bold text-lg">Cart</h1>
        <div className="">
          {cartlist.map((cart, idx) => (
            <Cart key={idx} cart={cart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartParent;
