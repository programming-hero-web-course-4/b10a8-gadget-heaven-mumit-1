import { useLoaderData, useParams } from "react-router-dom";

const SingleDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const newData = data.find((gadget) => gadget.product_id === product_id);
  const {product_title,product_image,price,availability,description,specification} = newData;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">
              {price}
            </p>
            <div>
              {availability?(<button className=" border rounded-xl px-1 border-green-600 bg-green-300">in stock</button>) : (<button className="border rounded-xl px-1 border-red-600 bg-red-300">Out of stock</button>)}
            </div>
            <div><p>{description}</p></div>
            <div>
              <p>Specification:</p>
              <ul className="list-decimal">
                {specification.map(info=><li>{info}</li>)}
              </ul>
            </div>
            <div>
              <p>Rating:</p>
              
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetail;
