import { JSX } from "react";

// Components:
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'; 
import SimulationCard from "../components/home/SimulationCard";
import InformationCard from "../components/home/InformationCard";

// Decide on a better data structure.
let contents: string[] = ['']

function Home (): JSX.Element {

    return (
        <div className="w-full h-full flex flex-col items-center">
            {/* Title */}
            <Header title="Phishing Simulator"/>
            {/* What is Phishing Info Card */}
            <div className="flex justify-center items-center bg-[#4a4a48]">
                <InformationCard
                    key={1}
                    title="What is Phishing?"
                    description="Phishing is when someone tries to trick you into giving away personal information—like passwords, credit card numbers, or login details—by pretending to be someone you trust.
                     These scams often come through emails, texts, or fake websites that look real. The goal is to steal your data or money without you realizing it."
                />            
            </div>
            {/* Main Content: Simulations Available */}
            <div className="w-full h-fit flex flex-col items-center border-b-10 border-t-10 border-[#2b2b28] bg-[#ece8d9]">
                <div className="w-120 h-20 flex justify-center items-center rounded-b-3xl bg-[#2b2b28]">
                    <h1 className="font-extrabold font-mono text-3xl text-[#faf6e9]">Simulations Available</h1>
                </div>
                {/* Content/Cards */}
                <ul className="w-full h-80 flex space-x-5 justify-center items-center pl-5 pr-5 ">
                    <SimulationCard
                        link="/email-phishing-instructions"
                        title={'Email Simulator'}
                        description={
                            'Simulates a realistic phishing email scenario. Designed to test awareness and response to suspicious emails in a controlled environment.'
                        }
                        buttonText={'Start Simulation'}
                    />

                    <SimulationCard
                        link="/message-phishing-instructions"
                        title={'Message Simulator'}
                        description={
                            'Emulates phishing attempts via SMS or messaging apps, using tactics like fake delivery alerts, account verifications, or impersonation.'
                        }
                        buttonText={'Start Simulation'}
                    />
                </ul>
            </div>
            {/* About / Information */}
            <div className="w-full h-fit flex flex-col items-center bg-[#4a4a48]">
                <InformationCard
                    key={2}
                    title="Why a Phishing Simulator?"
                    description="Learn how phishing attacks work in a safe environment. Understand the tricks scammers use and recognize them before it's too late."
                    />

                    <InformationCard
                    key={3}
                    title="Protect Your Personal Information"
                    description="Discover the importance of strong passwords, careful clicking, and spotting suspicious emails. Improve your online safety step by step."
                    />

                    <InformationCard
                    key={4}
                    title="Practice Makes Perfect"
                    description="The more you practice identifying phishing attempts, the safer you become. Our simulator gives you hands-on experience to boost your confidence."
                    />
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}
export default Home;