import { JSX } from "react";
import SimulationCard from "../components/home/SimulationCard";

function Home (): JSX.Element {
    return (
        <div className="w-screen h-screen flex flex-col overflow-y-scroll bg-gray-900">
            {/* Title */}
            <div className="w-full h-30 flex justify-center items-center relative top-0 font-extrabold text-6xl bg-amber-500">
                <h1>Phishing Simulator</h1>
            </div>

            {/* Content/Cards */}
            <div className="w-full h-80 flex items-center pl-5 pr-5 bg-amber-900">
                <SimulationCard title={'Email Simulator'} description={'Email simulation description.'} buttonText={'Start Simulation'}></SimulationCard>
            </div>
            {/* About / Information */}
            <div className="w-full h-80 flex flex-col bg-amber-200">
                {/* Why Phishing Simulator section */}
                <div>
                    <h1>What is the purpose of a Phishing simulator?</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )

}
export default Home;