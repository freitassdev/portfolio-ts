import React from 'react';
import './hero.css';
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';
const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-[80vh] text-center p-4">
            <p className="text-xl font-light font-sans max-lg:text-lg">👋🏼 {t('sections.hero.hello')} <span className='font-medium'>Michel Freitas</span>!</p>
            <h1 className="text-6xl font-bold font-poppins max-lg:text-5xl max-sm:text-3xl">{t('sections.hero.title')}</h1>
            <p className="text-xl font-light font-sans max-w-[700px] max-lg:text-lg">{t('sections.hero.description')}</p>

            <div className="flex gap-5">
                <Button className='text-foreground'>{t('sections.hero.buttons.contact')}</Button>
                <Button variant="outline" className='text-foreground'>{t('sections.hero.buttons.linkedin')}</Button>
            </div>
        </div>
    );
};

export default HeroSection;