import {JSX} from 'react';
import { Link } from "react-router-dom";

// Styles:

function NavigationBar ():JSX.Element {
    return (
        // Container:
        <div className='flex flex-row items-center gap-35 w-full h-20 mt-2'>
            {/* Title */}
            <div className='flex flex-row w-2/12 h-15 justify-center items-center ml-5 hover:-translate-y-1.5 transition-all duration-375'>
                <Link to={'/'} className='font-bold text-3xl text-white tracking-widest'>FORT</Link>
            </div>
            {/* Buttons */}
            <div className='flex flex-row h-15 w-10/12 justify-center-safe gap-20 items-center mr-5'>
                <Link to={'/'} className='flex flex-row justify-center items-center h-15 font-medium text-xl text-white tracking-wider hover:-translate-y-1.5 transition-all duration-375'>Services</Link>
                <Link to={'/'} className='flex flex-row justify-center items-center h-15 font-medium text-xl text-white tracking-wider hover:-translate-y-1.5 transition-all duration-375'>Learn more</Link>
                <Link to={'/'} className='flex flex-row justify-center items-center h-15 font-medium text-xl text-white tracking-wider hover:-translate-y-1.5 transition-all duration-375'>News</Link>
                <Link to={'/'} className='flex flex-row justify-center items-center h-15 font-medium text-xl text-white tracking-wider hover:-translate-y-1.5 transition-all duration-375'>Login</Link>
            </div>
        </div>
    )
}
export default NavigationBar;