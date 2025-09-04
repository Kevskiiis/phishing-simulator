import { JSX } from "react";

interface SimulationCardProps {
    title: string;
    description: string;
    buttonText: string;
}

function SimulationCard ({title, description, buttonText}: SimulationCardProps): JSX.Element {

    function handleClick () {

    }

    return (
        <div className="h-11/12 w-80 flex flex-col justify-around border-3 rounded-xl bg-green-400 hover:scale-102 transition-all">
            <h1 className="pl-3 transition-all">{title}</h1>
            <p className="pl-6 transition-all">{description}</p>
            <div className="flex flex-row justify-center items-center">
                <button 
                    type="button" onClick={handleClick} 
                    className="
                        flex flex-row justify-center items-center 
                        w-40 h-10 bg-amber-300 
                        border-3 rounded-md
                        hover:bg-amber-700
                        hover:scale-110
                        active:scale-90
                        transition-all
                    "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}
export default SimulationCard;