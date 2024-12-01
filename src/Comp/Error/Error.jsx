import { Link } from 'react-router-dom';
import Moon from './../../assets/moon.png';
import './Error.css'
import { IoMdArrowBack } from "react-icons/io";
const Error = () => {
    return (
        <div >
            <div className='flex items-center justify-center text-6xl mt-32 font'>
                <p>4</p>
                <div>
                <img className='w-20' src={Moon} alt="" />
                </div>
                <p>4</p>
            </div>
            <p className='text-center mt-2'>Page not found</p>
            <Link to="/">
           <div className='flex items-center justify-center text-2xl mt-20'>
           <IoMdArrowBack className='mt-0.5 relative right-1.5'/>
               <p>  Home </p>
           </div>
           </Link>
        </div>
    );
};

export default Error;