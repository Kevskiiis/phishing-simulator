import { JSX } from "react";

// Components:
import SimulationCard from "../components/home/SimulationCard";
import InformationCard from "../components/home/InformationCard";

function Home (): JSX.Element {
    return (
        <div className="w-full h-full flex flex-col bg-gray-900">
            {/* Title */}
            <div className="w-full h-30 flex justify-center items-center relative top-0 font-extrabold text-6xl bg-amber-500">
                <h1>Phishing Simulator</h1>
            </div>

            {/* Content/Cards */}
            <div className="w-full h-80 flex items-center pl-5 pr-5 bg-amber-900">
                <SimulationCard title={'Email Simulator'} description={'Email simulation description.'} buttonText={'Start Simulation'}></SimulationCard>
            </div>
            {/* About / Information */}
            <div className="w-full h-fit flex flex-col pt-5 pl-5 pr-5 bg-amber-200">
                {/* Why Phishing Simulator section */}
                <div>
                    <InformationCard key={1} title="Why Phishing Simulator?" description="This is why."></InformationCard>
                    <InformationCard key={1} title="Why Phishing Simulator?" description="This is why."></InformationCard>
                    <InformationCard key={1} title="Why Phishing Simulator?" description="This is why."></InformationCard>
                </div>
            </div>
        </div>
    )

}
export default Home;