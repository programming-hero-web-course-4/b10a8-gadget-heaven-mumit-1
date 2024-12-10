
import { useContext } from 'react';
import Wish from './Wish';

import { wishlistNeed } from "../Root/Root";


const WishList = () => {
    const [wishList,setWishList] = useContext(wishlistNeed);
    return (
        <div className=''>
            <h1 className="py-5 font-bold text-lg">
                Wishlist   
            </h1>
            <div className="pb-10">
          {wishList.map((wish, idx) => (
            <Wish key={idx} wish={wish}></Wish>
          ))}
        </div>
        </div>
    );
};

export default WishList;