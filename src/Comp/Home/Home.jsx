import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import NoProduct from "../NoProduct/NoProduct";

const Home = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/Gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const [activeButton, setActiveButton] = useState("All products");

  const [newData,setNewData] = useState([])
  const handleBtn = (data) => {
    setActiveButton(data);
    setNewData(gadgets.filter(gadget=> gadget.category===data))
    
  };

  return (
    <div className=" bg-gray-100 py-24">
      <h1 className="text-center text-4xl font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="lg:flex md:flex  gap-5 max-w-screen-xl mx-auto">
        <div >
          <div className="bg-white p-6 rounded-2xl space-y-5 ">
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
                activeButton === "All products"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("All products")}
            >
              All products
            </button>
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
                activeButton === "Mobile"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("Mobile")}
            >
              Mobile
            </button>
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
                activeButton === "Laptop"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("Laptop")}
            >
              Laptop
            </button>
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
                activeButton === "Airbuds"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("Airbuds")}
            >
              Airbuds
            </button>
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
                activeButton === "Smart Watches"
                  ? "bg-[#9538E2] text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handleBtn("Smart Watches")}
            >
              Smart Watches
            </button>
            <button
              className={`block rounded-full w-40 text-sm py-3 pl-4 text-left ${
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
            
          {activeButton === "All products" ? 
          (<div  className="lg:grid grid-cols-3 gap-5">{gadgets.map((gadget, index) => <Gadget key={index} gadget={gadget}></Gadget>)}</div>) :
          (
            newData.length !== 0 ? 
            (<div  className="lg:grid grid-cols-3 gap-5">{newData.map((gadget, index) => (<Gadget key={index} gadget={gadget}></Gadget>))}</div>) : 
            (<NoProduct ></NoProduct>)
          )}

        </div>
      </div>
    </div>
  );
};

export default Home;
