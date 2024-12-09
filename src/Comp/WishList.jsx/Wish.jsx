

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
    return (
        <div>
                  <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">${price}</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Wish;