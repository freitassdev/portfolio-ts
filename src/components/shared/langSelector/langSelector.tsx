import React, { useState, useEffect } from 'react';
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

const LangSelector: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState<string>();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    useEffect(() => {
        setSelectedLang(i18n.language);
    }, [i18n.language]);
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger >
                    <div className='flex flex-row gap-2 items-center '>
                        <img src={selectedLang === "en" ? usa : brazil} className='h-9' />
                        <ChevronDown size={18} strokeWidth={1.5} />
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