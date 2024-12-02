const Gadget = ({ gadget }) => {
    const {product_id,product_title,product_image,price} = gadget;
  
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <div>
          <img
            className="h-80 w-full  object-contain"
            src={product_image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
