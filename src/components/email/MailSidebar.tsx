import React, {createContext, useContext, useState} from 'react'; 
import { Home, Settings, Folder, ArrowRightFromLine, ArrowLeftFromLine} from "lucide-react";

const SidebarContext = createContext<boolean>(true);

interface SidebarProps {
    manageExpand: (isExtended: boolean) => void;
    isExpanded: boolean;
}

export function Sidebar ({manageExpand, isExpanded} : SidebarProps) {
    const [activePage, setActivePage] = useState('Home'); 

    // Functions:
    function handleToggle () {
        manageExpand(!isExpanded);
    }

    function handleClick (page: string) {
        setActivePage(page);
    }

    return (
        <aside className='h-screen w-full'>
            <nav className='h-full transition-all duration-500 flex flex-col bg-gray-900 border-r shadow-sm'>
                {/* Logo and Closing Button */}
                <div className='p-4 flex justify-between items-center bg-red-100 h-20'>
                    <img src="" className={`transition-all duration-500 ${isExpanded ? 'w-15': 'w-0'}`} alt=''/>
                    <button onClick={handleToggle} className='transition-all duration-500 p-1.5 rounded-lg bg-red-500 text-white hover:bg-gray-100 hover:text-black'>
                        {isExpanded ? <ArrowLeftFromLine size={25}/> : <ArrowRightFromLine size={25}/>}
                    </button>
                </div>

                {/* Buttons */}
                <ul className='flex-1 px-3 overflow-y-auto'>
                    <SidebarContext.Provider value={isExpanded}>
                        <SidebarItem onClick={handleClick} icon={<Home size={25}/>} text='Home' active={activePage === 'Home'}/>
                        <SidebarItem onClick={handleClick} icon={<Settings size={25}/>} text='Settings' active={activePage === 'Settings'}/>
                        <SidebarItem onClick={handleClick} icon={<Folder size={25}/>} text='Folders' active={activePage === 'Folders'}/>
                    </SidebarContext.Provider>
                </ul>

                {/* Profile */}
                <div className='bg-red-50 border-t border-amber-50 p-4 pb-2 h-20 flex items-center relative object-bottom'>
                    <div className='flex p-3 bg-gray-200 rounded-2xl'>
                        <h3>BS</h3>
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'w-25 ml-3' : 'w-0 ml-0'}`}>
                        <h4 className='font-semibold'>Bob Smith</h4>
                        <span className='text-xs text-gray-300'>email@gmail.com</span>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

type SidebarItemProps = {
    onClick: (page: string) => void; 
    icon: React.ReactNode; // Anything that react can render (HTML elements, or Components)
    text: string;
    active: boolean;
}

export function SidebarItem ({onClick, icon, text, active} : SidebarItemProps) {
    const isExpanded = useContext(SidebarContext);

    return (
        <li 
            onClick={() => onClick(text)}
            className={
            `transition-all duration-300 relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer h-15
            ${active ? "bg-white" : "hover:bg-red-200"} 
            ${isExpanded ? 'justify-around w-full' : 'justify-center min-w-15 px-0'}`}
        >       
            <span className='transition-all duration-500'>{icon}</span>
            <span className={`transition-all duration-500 overflow-hidden whitespace-nowrap text-black ${isExpanded ? 'w-auto ml-2': 'w-0 ml-0'}`}>{text}</span>
        </li>
    );
}