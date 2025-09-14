import { JSX, useState } from "react";

// Components:
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'; 
import SimulationCard from "../components/home/SimulationCard";
import InformationCard from "../components/home/InformationCard";

//SVG Background:
// import background from '../assets/bg-main.svg';

// Decide on a better data structure.
let contents: string[] = ['']

function Home (): JSX.Element {

    return (
        <div className={`w-full h-full flex flex-col items-center gap-12`}>
            {/* NavBar */}
            <Header title="Phishing Simulator"/>

            {/* What is Phishing Info Card */}
            <div className="flex flex-col w-10/12 h-fit justify-center items-center">
                <InformationCard
                    key={1}
                    title="What is Phishing?"
                    description="Phishing is when someone tries to trick you into giving away personal information—like passwords, credit card numbers, or login details—by pretending to be someone you trust.
                     These scams often come through emails, texts, or fake websites that look real. The goal is to steal your data or money without you realizing it."
                />            
            </div>
            {/* Main Content: Simulations Available */}
            <div className="flex flex-col items-center w-10/12 h-fit gap-5">
                <div className="w-full h-20 flex justify-center items-center rounded-4xl bg-[#2b2b28]">
                    <h1 className="font-extrabold font-mono text-3xl gradient-text">Simulations Available</h1>
                </div>
                {/* Content/Cards */}
                <ul className="flex flex-wrap justify-center items-center w-full h-fit gap-5 pl-5 pr-5 pb-5 pt-5">
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
            <div className="w-10/12 h-fit flex flex-col justify-center items-center gap-12">
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