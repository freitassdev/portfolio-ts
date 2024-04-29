import React from 'react';
import './card.css'
import { Github, Link2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-3 w-full'>
            {props.inDevelopment && (
                <div className='flex flex-row items-center justify-center text-sm font-poppins absolute bg-secondary p-2 mt-[-30px] ml-4 rounded-t-sm max-h-8 '>
                    <p>{t("components.projectsCard.component.inDevelopment")}</p>
                </div>
            )}
            <div className="w-full aspect-video bg-primary-foreground rounded-xl relative overflow-hidden">
                {/* image and drawer */}
                <CardDrawer title={props.title} description={props.description} tech={props.tech} />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className='font-poppins font-bold text-2xl'>{props.title ?? "Em Breve."}</h2>
                    <div className="header-line" style={{ marginLeft: 0 }}></div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a aria-label="Github Link" href={props.github ?? ""} rel="noreferrer" target="_blank"><Github /></a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t("components.projectsCard.component.sourceCode")}</p>
                            </TooltipContent>
                        </Tooltip>
                        <Separator orientation='vertical' />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a aria-label="Website Link" href={props.url ?? ""} rel="noreferrer" target="_blank"><Link2 /></a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t("components.projectsCard.component.visitSite")}</p>
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