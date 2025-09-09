import {JSX, ReactNode} from 'react';
import {Link} from 'react-router'; 

interface HeaderProps {
    title: string;
}

function Header({title}: HeaderProps): JSX.Element {
    return (
        <header className="w-11/12 h-fit flex justify-around items-center mt-5 pt-4 pb-4 rounded-4xl relative gradient-background">
            {/* Left side: Title */}
            <h1 className="font-extrabold font-mono text-5xl text-shadow-md text-black">{title}</h1>
            {/* Right side: Buttons */}
            <div className='flex space-x-4'>
                <button className='p-2 w-35 rounded-3xl gradient-button font-medium transition-all hover:bg-gray-300 hover:scale-105 active:scale-90'>Login</button>
                <button className='p-2 w-35 rounded-3xl gradient-button font-medium transition-all hover:bg-gray-300 hover:scale-105 active:scale-90'>Create Account</button>
                <button className='p-2 w-35 rounded-3xl gradient-button font-medium transition-all hover:bg-gray-300 hover:scale-105 active:scale-90'>Learn more</button>
            </div>
        </header>
    )
}
export default Header;