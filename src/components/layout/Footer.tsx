import {JSX} from 'react';

function Footer(): JSX.Element {
    const date = new Date().getFullYear();

    return (
        <footer className='flex justify-center items-center w-full h-30 mb-5 rounded-4xl bg-[#2b2b28]'>
            <p className='font-medium text-xl gradient-text text-[#faf6e9]'>&copy; {date} Phishing Simulator</p>
        </footer>
    )
}
export default Footer;