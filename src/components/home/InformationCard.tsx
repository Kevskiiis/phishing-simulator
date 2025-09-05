import {JSX} from 'react';

interface InformationCardProps {
    title: string;
    description: string;
}

function InformationCard ({title, description}: InformationCardProps): JSX.Element {
    return (
        // Container:
        <div className="w-full h-fit mt-4 mb-4 bg-gray-900 border-4 border-amber-100 rounded-md">
            {/* Title */}
            <h1 
                className="
                pt-4
                pb-4
                pr-3
                pl-3
                bg-red-500
                font-extrabold
                text-3xl
                text-white
                hover:scale-101
                hover:border-2
                hover:border-black
                hover:shadow-2xs
                transition-all
                "
            >{title}</h1>
            {/* Description of title. */}
            <p 
                className="
                pt-5 pb-5 pl-10 pr-10 
                text-lg
                text-white"
            >{description}</p>
        </div>
    )
}
export default InformationCard; 