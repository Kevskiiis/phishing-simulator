import {JSX, ReactNode} from 'react';

interface HeaderProps {
    title: string;
}

function Header({title}: HeaderProps): JSX.Element {
    return (
        <header className="w-full h-30 flex justify-around items-center relative top-0 bg-[#2b2b28]">
            {/* Left side: Title */}
            <h1 className="font-extrabold font-mono text-6xl text-shadow-md text-[#faf6e9]">{title}</h1>
            {/* Right side: Buttons */}
            <div className='flex space-x-4'>
                <button className='p-3 rounded-3xl bg-[#faf6e9] font-medium transition-all hover:bg-gray-300 hover:scale-105 active:scale-90'>Request a feature</button>
                <button className='p-3 rounded-3xl bg-[#faf6e9] font-medium transition-all hover:bg-gray-300 hover:scale-105 active:scale-90'>Learn more</button>
            </div>
        </header>
    )
}
export default Header;