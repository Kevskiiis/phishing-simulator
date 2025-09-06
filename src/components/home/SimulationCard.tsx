import { JSX } from "react";
import { Link } from "react-router-dom";

interface SimulationCardProps {
    link: string;
    title: string;
    description: string;
    buttonText: string;
}

function SimulationCard ({link, title, description, buttonText}: SimulationCardProps): JSX.Element {

    return (
        <li className="flex flex-col justify-between items-center h-11/12 w-85 border-8 border-black rounded-xl bg-black hover:scale-102 transition-all">
            <h1 className="flex justify-center items-center h-2/12 w-full rounded-4xl font-extrabold text-2xl text-[#faf6e9] bg-[#2b2b28]">{title}</h1>
            <span className="flex justify-center pt-1.5 pl-1.5 pr-1.5 h-7/12 w-full font-medium text-md text-black bg-[#ece8d9]">{description}</span>
            <div className="flex h-3/12 w-full justify-center items-center bg-[#ece8d9]">
                <Link 
                    to={link}
                    className="
                        flex flex-row justify-center items-center 
                        w-40 h-10
                        font-bold
                        text-white
                        bg-green-700
                        rounded-md
                        hover:bg-black
                        hover:scale-110
                        active:scale-90
                        transition-all
                    "
                >
                    {buttonText}
                </Link>
            </div>
        </li>
    )
}
export default SimulationCard;