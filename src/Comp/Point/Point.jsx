import { useContext, useEffect } from "react";
import { discountNeed, pointNeed } from "../Root/Root";
import { toast } from "react-toastify";

const Point = () => {
  const [point, setPoint] = useContext(pointNeed);
  const [discount,setDiscount] = useContext(discountNeed);
  const pointMain = parseInt(point / 50);
  
    const handleDiscount5 = () =>{
        if(pointMain>=100){
            setPoint(((pointMain-100)*50));
            toast.success("You get 5% discount.");
            setDiscount(discount+5);
        }
        else{
            toast.error("Not enough point");
        }
    } 
    const handleDiscount10 = () =>{
        if(pointMain>=200){
            setPoint(((pointMain-200)*50));
            toast.success("You get 10% discount.");
            setDiscount(discount+10);
        }
        else{
            toast.error("Not enough point");
        }
    } 
    const handleDiscount20 = () =>{
        if(pointMain>=400){
            setPoint(((pointMain-400)*50));
            toast.success("You get 20% discount.");
            setDiscount(discount+20);
        }
        else{
            toast.error("Not enough point");
        }
    }
      useEffect(() => {
        document.title = "Gadget | Point";
      }, []); 
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-xl mx-auto px-2 py-10">
        <div>
          <div className=" text-center">
            <div>
                <h1 className="inline-block text-6xl font-bold border-2 p-6 px-8 rounded-full border-purple-600">  {pointMain}</h1>
            </div>
            <p className=" mt-2 ">Your points.</p>
            <p className="lg:w-2/3 w-4/5 text-sm mx-auto pt-10 opacity-65">Earn points by buying Gadgets from us and per 50 dollar you will get 1 point . The more you buy the more point you will get and after taking a offer package the package will active on your next purchase .</p>
            <div className="divider pt-10 px-10"></div>
            <p className="lg:text-4xl text-3xl font-bold pt-6">Exclusive Point Offers</p>
          

          </div>
          <div className="lg:grid grid-cols-3 justify-self-center gap-14">
            <div>
              <div className="card card-compact bg-base-100 w-64 shadow-lg my-10 hover:drop-shadow-2xl ">
                
                <figure className="bg-purple-600 ">
                  <h1 className="text-5xl text-center py-5 ">5%</h1>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Discount!!</h2>
                  <p>On <span className="font-bold">100</span> point you will get 5% discount .</p>
                  <div className="card-actions justify-center pt-3">
                   
                   <button
                         onClick={()=>handleDiscount5()}
                          className="btn rounded-full px-10 text-purple-600 bg-transparent border-purple-600 hover:border-purple-600  hover:text-white hover:bg-purple-600"
                        >
                         Get it!
                        </button>
          </div>
                </div>
              </div>
            </div>
            <div>
              
              <div className="card card-compact bg-base-100 w-64 shadow-lg my-10 hover:drop-shadow-xl">
                <figure className="bg-purple-600">
                  <h1 className="text-5xl text-center py-5">10%</h1>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Discount!!</h2>
                  <p>On <span className="font-bold">200</span> point you will get 10% discount .</p>
                  <div className="card-actions justify-center pt-3">
                   
                   <button
                         onClick={()=>handleDiscount10()}
                          className="btn rounded-full px-10 text-purple-600 bg-transparent border-purple-600 hover:border-purple-600  hover:text-white hover:bg-purple-600"
                        >
                         Get it!
                        </button>
          </div>
                </div>
              </div>
            </div>
            <div>
            <div className="card card-compact bg-base-100 w-64 shadow-lg my-10 hover:drop-shadow-xl">
                <figure className="bg-purple-600">
                  <h1 className="text-5xl text-center py-5">
                    20%
                  </h1>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Discount!!</h2>
                  <p>On <span className="font-bold">400</span> point you will get 20% discount .</p>
                  <div className="card-actions justify-center pt-3">
                   
                           <button
                                 onClick={()=>handleDiscount20()}
                                  className="btn rounded-full px-10 text-purple-600 bg-transparent border-purple-600 hover:border-purple-600  hover:text-white hover:bg-purple-600"
                                >
                                 Get it!
                                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
