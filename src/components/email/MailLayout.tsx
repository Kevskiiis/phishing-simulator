import  type {ReactNode} from 'react'; // ReactNode represents anything that react can render, "tsx code". Only runs at compile time as a type, because it then is complied to JS for runtime.
import {useState} from 'react';
import {Sidebar} from './MailSidebar.tsx'; 

interface SidebarLayoutProps { // Why interface over type? We know what data types stricly, and no need for unions or intersections.
    children: ReactNode;
}

function SidebarLayout ({children} : SidebarLayoutProps) {
    const [isExpanded, setIsExpanded] = useState(true); 

    function handleClick (isExtended: boolean) {
        setIsExpanded(isExtended);
    }

    return (
        <div className={`transition-all duration-500 grid grid-rows-1 ${isExpanded ? 'grid-cols-[15rem_1fr]': 'grid-cols-[5.5rem_1fr]'} h-screen w-screen`}>
            {/* Column 1 */}
            <Sidebar manageExpand={handleClick} isExpanded={isExpanded} />
            {/* Column 2 */}
            {children}
        </div>
    )
}
export default SidebarLayout;