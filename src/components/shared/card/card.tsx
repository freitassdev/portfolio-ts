import React from 'react';
import './card.css'
import { Github, Link2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import CardDrawer from './CardDrawer';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export interface CardProps {
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
                {/* image and drawer */}
                <CardDrawer title={props.title} description={props.description} tech={props.tech} />
            </div>
            <div className='flex flex-col gap-1 max-w-[370px]'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className='font-poppins font-bold text-2xl'>{props.title ?? "Em Breve."}</h2>
                    <div className="header-line" style={{ marginLeft: 0 }}></div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a aria-label="Github Link" href={props.github ?? ""} rel="noreferrer" target="_blank"><Github /></a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Código Fonte</p>
                            </TooltipContent>
                        </Tooltip>
                        <Separator orientation='vertical' />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a aria-label="Website Link" href={props.url ?? ""} rel="noreferrer" target="_blank"><Link2 /></a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Acessar Website</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <h2 className='font-poppins font-bold text-md'>{props.tech ?? "HTML - CSS - JS"}</h2>
                <p className='font-sans font-light text-base'>{props.description ?? "em breve"}</p>
            </div>

        </div>
    );
};

export default Card;