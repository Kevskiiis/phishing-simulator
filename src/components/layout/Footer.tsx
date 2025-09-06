import {JSX} from 'react';

function Footer(): JSX.Element {
    const date = new Date().getFullYear();

    return (
        <footer className='w-full h-30 flex justify-center items-center relative bottom-0 bg-[#2b2b28]'>
            <p className='font-medium text-xl text-[#faf6e9]'>&copy; {date} Phishing Simulator</p>
        </footer>
    )
}
export default Footer;