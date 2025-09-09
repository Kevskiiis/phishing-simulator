import {JSX} from 'react';

interface InformationCardProps {
    title: string;
    description: string;
}

function InformationCard ({title, description}: InformationCardProps): JSX.Element {
    return (
        // Container:
        <div className="flex flex-col justify-center items-center w-10/12 h-fit pb-6 border-4 border-[#e3dddd] rounded-2xl hover:scale-103 transition-all ">
            {/* Title */}
            <h2 
                className="
                flex
                flex-row
                justify-center
                items-center
                w-full
                h-fit
                pt-4
                pb-4
                pr-3
                pl-3
                font-semibold
                text-4xl
                text-black
                "
            >{title}</h2>
            {/* Description of title. */}
            <p 
                className="
                flex
                flex-row
                w-full
                h-fit
                text-center
                pt-5 pb-5 pl-10 pr-10 
                font-medium
                text-xl
                text-gray-500
                "
            >{description}</p>
        </div>
    )
}
export default InformationCard; 