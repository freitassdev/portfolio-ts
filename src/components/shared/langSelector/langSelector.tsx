import React, { useState, useEffect, useRef } from 'react';
import './langSelector.css'
import usa from '@/assets/images/usa.svg';
import brazil from '@/assets/images/brazil.svg';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LangSelectorProps {
    className?: string
}

const LangSelector: React.FC<LangSelectorProps> = ({ className }) => {
    const [selectedLang, setSelectedLang] = useState<string>();
    const chevronRef = useRef<SVGSVGElement>(null); 
    const { t, i18n } = useTranslation();

    const openChange = (open: boolean) => {
        if (open && chevronRef.current) {
            chevronRef.current.style.transform = 'rotate(180deg)';
        } else if(chevronRef.current) {
            chevronRef.current.style.transform = 'rotate(0deg)';
        }
    }
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    useEffect(() => {
        setSelectedLang(i18n.language);
    }, [i18n.language]);
    return (
        <div className={`flex flex-row items-center ${className}`}>
            <DropdownMenu onOpenChange={(open) => openChange(open)}>
                <DropdownMenuTrigger>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={selectedLang === "en" ? usa : brazil} className='h-9' />
                        <ChevronDown className="ml-[-5px] transition-all" size={18} strokeWidth={1.5} ref={chevronRef} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='flex flex-row gap-2 cursor-pointer' onClick={() => changeLanguage('pt')}><img src={brazil} className='h-5' />{t('components.langSelector.pt')}</DropdownMenuItem>
                    <DropdownMenuItem className='flex flex-row gap-2 cursor-pointer' onClick={() => changeLanguage('en')}><img src={usa} className='h-5' />{t('components.langSelector.en')}</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
};

export default LangSelector;