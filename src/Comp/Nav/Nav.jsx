import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation ,Link } from "react-router-dom";
import Point from './../Point/Point';

const Nav = () => {
  const location = useLocation();
  // console.log(location);
  const {pathname} = useLocation();

    const link =<>
        <li>
        <NavLink to="/" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4    " : " "
      }`}>Home</NavLink>
      </li>
      <li>
      <NavLink to="/stats" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Stats</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/point" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Point</NavLink>
      </li>
      </>
    const linkCopy =<>
        <li>
        <NavLink to="/" className={({isActive})=>` hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4    " : " "
      }`}>Home</NavLink>
      </li>
      <li>
      <NavLink to="/stats" className={({isActive})=>` hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Stats</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" className={({isActive})=>` hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/point" className={({isActive})=>` hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-black ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Point</NavLink>
      </li>
      </>
      
    const link2 = <>
    <li>
    <NavLink   className={({ isActive }) =>
      `btn rounded-full p-4 font-bold w-32 flex justify-center border-2 hover:text-[#9538E2] hover:bg-white ${
        isActive ? "bg-white text-[#9538E2] border-white" : "bg-[#9538E2] text-white border-white"
      }`}  to="/dashboard/cart">Cart</NavLink>
  </li>
    {/* <li>
    <NavLink className="rounded-full p-4 font-bold w-32 flex justify-center border-2 border-black" to="/dashboard/cart">Dashboard</NavLink>
  </li> */}

  <li>
    <NavLink className={({ isActive }) =>
      `btn rounded-full p-4 font-bold w-32 flex justify-center border-2 hover:text-[#9538E2] hover:bg-white ${
        isActive ? "bg-white text-[#9538E2] border-white" : "bg-[#9538E2] text-white border-white"
      }`}  to="/dashboard/wishlist">Wishlist</NavLink>
  </li>
  </>
    const mainNav = 
    <>
    <div className=" navbar max-w-screen-xl mx-auto lg:px-5 lg:pb-0 pb-5 pt-4">
                <div className="navbar-start w-96 lg:w-1/2 md:w-1/2">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
                    >
                      {linkCopy}
                    </ul>
                  </div>
                  <a className=" text-xl font-bold ">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 gap-5">
                   {link}
                  </ul>
                </div>
                <div className="navbar-end gap-4 mr-2.5">
                  <Link to="/dashboard/cart"><button className=" block hover:drop-shadow-xl rounded-full border border-gray-300 p-2 bg-white"> <IoCartOutline className="text-2xl" /></button></Link>
                  <Link to="/dashboard/wishlist"><button className=" block hover:drop-shadow-xl rounded-full border border-gray-300 p-2 bg-white"> <CiHeart className="text-2xl" /> </button></Link>
                  
                </div>
              </div>
    </>
    const homeNav =    <>
    <div className="bg-gray-100 lg:p-5 md:p-4 p-3 ">
      <div className="relative">
      <div className="bg-[#9538E2] rounded-xl lg:mb-72 md:mb-64 mb-20">
      <div className=" navbar max-w-screen-xl mx-auto lg:px-5 lg:pb-0 pb-5 pt-4">
                <div className="navbar-start w-96 lg:w-1/2 md:w-1/2">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
                    >
                      {linkCopy}
                    </ul>
                  </div>
                  <a className=" text-xl font-bold text-white">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 gap-5">
                   
                  <li>
        <NavLink to="/" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-white ${
        isActive ? "underline underline-offset-4    " : " "
      }`}>Home</NavLink>
      </li>
      <li>
      <NavLink to="/stats" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-white ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Stats</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-white ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/point" className={({isActive})=>`btn hover:bg-transparent hover:underline hover:underline-offset-4 bg-transparent border-0 text-white ${
        isActive ? "underline underline-offset-4  " : " "
      }`}>Point</NavLink>
      </li>
                  </ul>
                </div>
                <div className="navbar-end gap-4 mr-2.5">
                  <Link to="/dashboard/cart"><button className=" block hover:drop-shadow-xl rounded-full border border-gray-300 p-2 bg-white"> <IoCartOutline className="text-2xl" /></button></Link>
                  <Link to="/dashboard/wishlist"><button className=" block hover:drop-shadow-xl rounded-full border border-gray-300 p-2 bg-white"> <CiHeart className="text-2xl" /> </button></Link>
                  
                </div>
              </div>
         <div className="flex flex-col justify-center items-center gap-6 pt-12 lg:pb-72 md:pb-60 pb-36 text-white">
                <h1 className="lg:text-6xl md:text-3xl text-4xl font-bold lg:w-10/12 w-11/12  text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-center lg:w-2/3 w-4/5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to="/dashboard/cart"> <button className="btn block rounded-full px-6">Shop Now</button></Link>
              </div>
          <div className="px-5  mx-auto absolute lg:top-[700px] md:top-[600px] top-[620px] inset-0 flex items-center justify-center">
              <div className="lg:w-[70%] md:w-[80%] mx-auto lg:h-[570px] bg-opacity-30 border-2 lg:p-6 p-3 rounded-3xl bg-white border-white ">
                        <img className="w-full h-full rounded-2xl object-cover" src="https://img.freepik.com/free-photo/vr-glasses-gaming_23-2151138399.jpg" alt="" />
                  </div>
          </div>
          </div>
      </div>
    </div>
    </>
    const dashboardNav = <>
    <div className="lg:pb-2.5">{mainNav}</div>
    <div className="text-center bg-[#9538E2] py-8 text-white">
      <div className="">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="w-4/5 mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <ul className="menu menu-horizontal px-1 pt-7 gap-6">
                   {link2}
                  </ul>
      </div>

    </>
    const singleDetailNav = <>
    <div className="lg:pb-2.5">{mainNav}</div>
    <div className="text-center bg-[#9538E2] pb-52 text-white">
      <div className="py-8">
        <h1 className="text-3xl font-bold">Product details</h1>
        <p className="w-4/5 mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
      </div>
    </>
    const statsNav = <>
    <div className="lg:pb-2.5">{mainNav}</div>
    <div className="text-center bg-[#9538E2] text-white">
      <div className="py-8">
        <h1 className="text-3xl font-bold">Statistics</h1>
        <p className="w-4/5 mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
      </div>
    </>
      const pointNav = <>
      <div className="lg:pb-2.5">{mainNav}</div>
      <div className="text-center bg-[#9538E2] text-white ">
        <div className="py-8">
          <h1 className="text-3xl font-bold">Point Shop</h1>
          <p className="w-4/5 mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
              </div>
        </div>
      </>
  return (
  <>
    { pathname === "/" && homeNav }
    { pathname.startsWith("/dashboard") && dashboardNav}
    { pathname.startsWith("/gadget") && singleDetailNav}
    { pathname.startsWith("/stats") && statsNav}
    { pathname === "/point" && pointNav }
    </>
  );
};

export default Nav;
{/* <div className=" navbar max-w-screen-xl mx-auto lg:px-5 lg:pb-0 pb-5 pt-4">
<div className="navbar-start w-96 lg:w-1/2 md:w-1/2">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      {link}
    </ul>
  </div>
  <a className=" text-xl font-bold ">Gadget Heaven</a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
   {link}
  </ul>
</div>
<div className="navbar-end gap-4">
  <button className=" block rounded-full border border-gray-300 p-2 bg-white"> <IoCartOutline className="text-2xl" /></button>
  <button className=" block rounded-full border border-gray-300 p-2 bg-white"> <CiHeart className="text-2xl" /> </button>
</div>
</div> */}