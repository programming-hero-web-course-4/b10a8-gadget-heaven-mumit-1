
import { useContext } from 'react';
import Wish from './Wish';

import { wishlistNeed } from "../Root/Root";


const WishList = () => {
    const [wishList,setWishList] = useContext(wishlistNeed);
    return (
        <div className=''>
            <div className='py-6'>
              <h1 className=" font-bold text-2xl ml-4">
                  Wishlist
              </h1>
            </div>
            <div className="pb-10">
          {wishList.map((wish, idx) => (
            <Wish key={idx} wish={wish}></Wish>
          ))}
        </div>
        </div>
    );
};

export default WishList;