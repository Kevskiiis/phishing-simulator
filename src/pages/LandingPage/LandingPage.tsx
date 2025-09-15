import { JSX } from "react";
import { Link } from "react-router-dom";

// Components:
import NavigationBar from '../../components/NavigationBar';

// Style:
import './LandingPage.css';

function LandingPage ():JSX.Element {
    return (
        <div className="page-container">
            {/* Navigation Bar Component */}
            <NavigationBar/>

            {/* Body */}
            <div className="body-container">
                {/* Column 1: Unique catchy line w/ button*/}
                <div className="flex flex-col items-center w-full h-100 bg-amber-600">

                </div>
                {/* Column 2: Image */}
                <div>

                </div>
            </div>
        </div>
    )
}
export default LandingPage;