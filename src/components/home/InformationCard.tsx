import {JSX} from 'react';

interface InformationCardProps {
    title: string;
    description: string;
}

function InformationCard ({title, description}: InformationCardProps): JSX.Element {
    return (
        // Container:
        <div className="w-11/12 h-fit mt-4 mb-4 bg-[#4a4a48] border-4 border-[#faf6e9] rounded-md">
            {/* Title */}
            <h1 
                className="
                pt-4
                pb-4
                pr-3
                pl-3
                bg-[#faf6e9]
                font-semibold
                text-3xl
                text-black
                "
            >{title}</h1>
            {/* Description of title. */}
            <p 
                className="
                pt-5 pb-5 pl-10 pr-10 
                font-medium
                text-lg
                text-white
                bg-[#4a4a48]
                "
            >{description}</p>
        </div>
    )
}
export default InformationCard; 