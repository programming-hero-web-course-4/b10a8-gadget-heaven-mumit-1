const Footer = () => {
  return (
    <div className="py-16 px-2">
        <div className=" max-w-screen-xl mx-auto border-b py-7">
            <h1 className="text-center text-3xl font-bold ">Gadget Heaven</h1>
            <p className="text-center mt-4 lg:w-full md:w-full w-2/3 mx-auto">Leading the way in cutting-edge technology and innovation.</p>
        </div>
      <footer className=" p-10">
        <div className=" footer max-w-screen-xl mx-auto justify-around">
            <nav className="place-items-center">
              <h6 className="font-bold text-lg">Services</h6>
              <a className="link link-hover">Product Support</a>
              <a className="link link-hover">Order Tracking</a>
              <a className="link link-hover">Shipping & Delivery</a>
              <a className="link link-hover">Returns</a>
            </nav>
            <nav className="place-items-center">
              <h6 className="font-bold text-lg">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Career</a>
              <a className="link link-hover">Contact</a>
            
            </nav>
            <nav className="place-items-center">
              <h6 className="font-bold text-lg">Legal</h6>
              <a className="link link-hover">Terms of Service</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
