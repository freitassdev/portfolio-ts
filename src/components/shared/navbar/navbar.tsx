import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react'
import LangSelector from '@/components/shared/langSelector/langSelector';
import { useTranslation } from 'react-i18next';
const Navbar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <nav className='top-0 z-10 fixed h-[4.5rem] px-16 flex flex-row items-center w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 select-none'>
            <div className="nav-content flex flex-row items-center justify-between w-full">
                <div className="nav-logo">
                    <h1 className='font-bold text-3xl'>michelfreitas</h1>
                </div>
                <div className="nav-items flex flex-row items-center justify-center gap-10">
                    <div className="nav-item">
                        <a href="#" className="text-foreground/100 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">{t('components.navbar.items.home')}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">{t('components.navbar.items.about')}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">{t('components.navbar.items.projects')}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">{t('components.navbar.items.formation')}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">{t('components.navbar.items.carrer')}</a>
                    </div>
                </div>
                <div className="nav-icons flex flex-row items-center justify-center gap-6">
                    <div className="nav-icon">
                        <a href=""><Linkedin size={28} strokeWidth={1.5} /></a>
                    </div>
                    <div className="nav-icon">
                        <a href=""><Twitter size={28} strokeWidth={1.6}/></a>
                    </div>
                    <div className="nav-icon">
                        <a href=""><Github size={28} strokeWidth={1.6}/></a>
                    </div>
                    <div>
                        <LangSelector />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;