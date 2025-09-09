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
        <li className="flex flex-col justify-between items-center h-70 w-10/12 border-8 border-[#2b2b28] rounded-xl bg-[#2b2b28] hover:scale-102 transition-all">
            <h1 className="flex justify-center items-center h-2/12 w-full rounded-4xl font-extrabold text-2xl gradient-text">{title}</h1>
            <span className="flex justify-center items-center pt-1.5 pl-1.5 pr-1.5 h-7/12 w-full font-medium text-xl text-center text-black bg-gradient-to-br from-[#fbfbfb] to-[#f4adad]">{description}</span>
            <div className="flex h-2/12 w-full justify-center items-center bg-[#2b2b28]">
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