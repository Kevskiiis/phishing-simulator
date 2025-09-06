import {JSX} from 'react';

interface InstructionCardProps {
    instructionNumber: number; 
    image: string;
    description: string;
}

function InstructionCard ({instructionNumber, image, description}: InstructionCardProps):JSX.Element {
    return (
        <div>
            <h1 className='font-extrabold'>{instructionNumber}</h1>
            <img className='' src={image}></img>
            <p className=''>{description}</p>
        </div>
    )
}
export default InstructionCard