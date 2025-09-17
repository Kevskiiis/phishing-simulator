// Dependencies:
import { JSX } from "react";
import { Link } from "react-router-dom";

// Style:
import './LandingPage.css';


function LandingPage ():JSX.Element {

    return (
        <div className="page-container">
            {/* Main Body */}
            <div className="body-container">
                {/* Column 1: Unique catchy line w/ button*/}
                <div className="flex flex-col items-center gap-10 w-full h-full">
                    <div className="flex flex-col items-center w-8/12 gap-10 mt-5 p-5">
                        <h2 className="font-extrabold text-center text-white text-5xl tracking-widest">Make every click a safe one.</h2>
                        <p className="font-medium text-center text-white text-2xl tracking-widest">Teach your team to spot scams safely, with phishing training that guides instead of punishes.</p>
                    </div>
                    <div className="flex flex-row justify-center items-center w-50 h-15 rounded-3xl bg-white hover:-translate-y-1.5 transition-all duration-375">
                        <Link to={'/'} className="flex w-full h-full justify-center items-center font-black text-2xl tracking-wider">Start now</Link>
                    </div>
                </div>
                {/* Column 2: Image */}
                <div>

                </div>
            </div>            
        </div>
    )
}
export default LandingPage;