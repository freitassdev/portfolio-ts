import React, { useState } from 'react';
import { Github, Twitter, Linkedin, BarChart } from 'lucide-react'
import LangSelector from '@/components/shared/langSelector/langSelector';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
const Navbar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className={`top-0 z-10 fixed h-[4.5rem] px-16 flex flex-row items-center w-full border-b border-border/40 select-none sm:px-8 max-sm:px-4 ${toggleMenu ? 'bg-background' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'}`}>
            <div className="nav-content flex flex-row items-center justify-between w-full">
                <div className="nav-logo">
                    <h1 className='font-bold text-3xl'>michelfreitas</h1>
                </div>
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
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
                <div className="flex flex-row items-center justify-center gap-6">
                    <div className="max-sm:hidden flex flex-row justify-center items-center">
                        <a href=""><Linkedin size={28} strokeWidth={1.5} /></a>
                    </div>
                    <div className="max-sm:hidden flex flex-row justify-center items-center">
                        <a href=""><Twitter size={28} strokeWidth={1.6} /></a>
                    </div>
                    <div className="max-sm:hidden flex flex-row justify-center items-center">
                        <a href=""><Github size={28} strokeWidth={1.6} /></a>
                    </div>
                    <div className='max-sm:hidden flex flex-row justify-center items-center'>
                        <LangSelector />
                    </div>

                    <div className='lg:hidden flex flex-row justify-center items-center' onClick={() => setToggleMenu(!toggleMenu)}>
                        <BarChart size={35} strokeWidth={1.6} style={{
                            rotate: '270deg'
                        }} />
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed z-40 w-[100vw] sm:w-[75vw] left-0 top-[4.5rem] sm:border-r sm:rounded-br-xl border-b border-border bg-background overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-[345px]"}`}>
                    <div className="py-4 px-4 sm:px-10">
                        <div className="flex flex-col gap-4 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-secondary text-foreground/100 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                <span className='ml-2'>{t('components.navbar.items.home').toLowerCase()}</span>
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                {t('components.navbar.items.about').toLowerCase()}
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                {t('components.navbar.items.projects').toLowerCase()}
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                {t('components.navbar.items.formation').toLowerCase()}
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                {t('components.navbar.items.carrer').toLowerCase()}
                            </a>
                            <Separator />

                            <div className="flex flex-row items-center justify-center gap-6">
                                <div className='left-4 absolute flex flex-row gap-4'>
                                    <LangSelector className="sm:hidden" />
                                </div>
                                <a href=""><Linkedin size={28} strokeWidth={1.5} /></a>
                                <a href=""><Twitter size={28} strokeWidth={1.6} /></a>
                                <a href=""><Github size={28} strokeWidth={1.6} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;