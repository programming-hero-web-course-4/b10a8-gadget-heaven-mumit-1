import { Link, useParams } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const {product_id,product_title,product_image,price} = gadget;
  

  return (
    <Link to={`/gadget/${product_id}`}>
      <div>
        <div className="card card-compact bg-base-100 p-2 rounded-3xl shadow-xl lg:my-0 md:my-0 my-5">
          <div>
            <img
              className="h-80 w-full  object-contain"
              src={product_image}
              alt="Shoes"
            />
          </div>
          <div className="card-body ">
            <h2 className="card-title">{product_title}</h2>
            <p className="font-bold opacity-50 text-base">Price: ${price}</p>
            <div className="card-actions justify-start">
              <button className="btn mt-4 rounded-full text-purple-600 bg-white border-purple-600 hover:border-purple-600  hover:text-white hover:bg-purple-600">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gadget;
