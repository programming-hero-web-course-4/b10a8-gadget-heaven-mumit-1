import Nothing from"../../assets/out-of-stock.png"
const NoProduct = () => {
  return (
    <div className="">
        <div className="flex justify-center  items-center flex-col opacity-30 space-y-5 py-20">
            <div><img className="w-1/3 mx-auto" src={Nothing} alt="" /></div>
            <p className="text-xl ">Sorry, Nothing is Available</p>
        </div>
    </div>
  );
};

export default NoProduct;
