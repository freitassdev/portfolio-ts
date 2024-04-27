import React from 'react';
import './card.css'
import { Github, Link2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator"

interface CardProps {
    github?: string,
    url?: string,
    inDevelopment?: boolean,
    title?: string,
    description?: string,
    tech?: string,
    imageUrl?: string
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className='flex flex-col gap-3 max-w-[370px]'>
            <div className="h-[230px] bg-primary-foreground max-w-[370px] rounded-xl relative overflow-hidden">
                <img className="h-auto w-auto absolute bottom-0 left-[50%] translate-x-[-50%] rounded-t-lg transition duration-200 hover:translate-x-[-50%] hover:scale-110 hover:rotate-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&amp;usqp=CAU" alt="image" />
            </div>
            <div className='flex flex-col gap-1 max-w-[370px]'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className='font-poppins font-bold text-2xl'>{props.title ?? "Em Breve."}</h2>
                    <div className="header-line" style={{ marginLeft: 0 }}></div>
                    <a aria-label="Github Link" href={props.github ?? ""} rel="noreferrer" target="_blank"><Github /></a>
                    <Separator orientation='vertical' />
                    <a aria-label="Website Link" href={props.url ?? ""} rel="noreferrer" target="_blank"><Link2 /></a>
                </div>
                <h2 className='font-poppins font-bold text-md'>{props.tech ?? "HTML - CSS - JS"}</h2>
                <p className='font-sans font-light text-base'>{props.description ?? "em breve"}</p>
            </div>

        </div>
    );
};

export default Card;