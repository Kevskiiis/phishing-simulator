import {JSX} from 'react';
import { Outlet } from 'react-router-dom';

// Components:
import NavigationBar from '../components/NavigationBar';

function LandingPageLayout():JSX.Element {
    return (
        <div className='flex flex-col h-screen gap-3 bg-gradient-to-b from-[#191919] to-[#464646]'>
            <NavigationBar/>
            <Outlet></Outlet>
        </div>
    )
}
export default LandingPageLayout;