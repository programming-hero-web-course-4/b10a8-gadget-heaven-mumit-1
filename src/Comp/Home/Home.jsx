import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import NoProduct from "../NoProduct/NoProduct";
import { Helmet, HelmetProvider  } from "react-helmet-async";

const Home = () => {

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/Gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const [activeButton, setActiveButton] = useState("All Products");

  const [newData,setNewData] = useState([])
  const handleBtn = (data) => {
    setActiveButton(data);
    setNewData(gadgets.filter(gadget=> gadget.category===data))
    
  };
  const arrayNeed = [];
  gadgets.forEach((gadget) => {
    if (!arrayNeed.includes(gadget.category)) {
      arrayNeed.push(gadget.category);
    }
  });
  useEffect(() => {
    document.title = "Gadget Heaven";
  }, []);
  return (
    <HelmetProvider>
      <div className=" bg-gray-100 py-24">
         <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <h1 className="text-center lg:text-4xl text-3xl font-bold mb-10 ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="lg:flex md:flex  gap-5 max-w-screen-xl mx-auto px-2">
        <div className="px-2">
          <div className="bg-white p-6 rounded-2xl space-y-5 lg:block flex flex-wrap gap-x-4 justify-center">
          <button
              className={`block btn hover:bg-purple-700 hover:text-white rounded-full lg:w-40 md:w-36 text-sm py-3 pl-4 text-left relative top-[20px] lg:top-0 md:top-0 ${
                activeButton === "All Products"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("All Products")}
            >
              All Products
            </button>
            {
            arrayNeed.map((category ,idx)=>  
                <button key={idx}
            className={`block btn hover:bg-purple-700 hover:text-white rounded-full lg:w-40 md:w-36 text-sm py-3 pl-4 text-left ${
              activeButton === category
                ? "bg-[#9538E2] text-white font-bold"
                : "bg-gray-200"
            }`}
            onClick={() => handleBtn(category)} >
            {category}
          </button> 
            )
            }

            
            
            <button
              className={`block btn hover:bg-purple-700 hover:text-white rounded-full lg:w-40 md:w-36 text-sm py-3 pl-4 text-left ${
                activeButton === "Accessories"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("Accessories")}
            >
              Accessories
            </button>
          </div>
        </div>
        <div className="w-full px-2">
            
          {activeButton === "All Products" ? 
          (<div  className="lg:grid grid-cols-3 gap-5">{gadgets.map((gadget, index) => <Gadget key={index} gadget={gadget}></Gadget>)}</div>) :
          (
            newData.length !== 0 ? 
            (<div  className="lg:grid grid-cols-3 gap-5">{newData.map((gadget, index) => (<Gadget key={index} gadget={gadget}></Gadget>))}</div>) : 
            (<NoProduct ></NoProduct>)
          )}

        </div>
      </div>
    </div>
    </HelmetProvider>
    
  );
};

export default Home;
