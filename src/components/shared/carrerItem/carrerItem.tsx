import React from 'react';
import './carrerItem.css'


export interface CarrerProps {
    date: string;
    location: string;
    role: string;
    company: string;
    description: string;
    techs: string[];
}

const CarrerItem: React.FC<CarrerProps> = ({ date, location, role, company, description, techs }) => {

    return (
        <div className='flex flex-col gap-5 mx-auto w-full bg-primary border border-border rounded-lg p-5 '>
            <div className='flex flex-row justify-between items-center gap-3'>
                <h2 className='font-poppins font-bold text-lg'>{company}</h2>
                <div className="header-line"></div>
                <p className='font-sans font-light text-md'>{date}</p>
            </div>
            <div className='flex flex-row justify-between items-center gap-3'>
                <h2 className='font-poppins font-bold text-lg'>{role}</h2>
                <div className="header-line"></div>
                <p className='font-sans font-light text-md'>{location}</p>
            </div>
            <div>
                <p className='font-sans font-light text-md'>
                    {description}
                </p>
            </div>
            <div>
                <div className='flex flex-row flex-wrap gap-2 font-light'>
                    {techs.map((tech, index) => (
                        <span key={index} className="skill !bg-secondary">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarrerItem;