/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Github, Twitter, Linkedin, Copyright, Dot } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <div className='w-full bg-primary mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 md:gap-28 p-5 md:p-7 lg:p-10'>
                <div className=''>
                    <h1 className='font-poppins font-bold text-2xl'>Michel de Freitas</h1>
                    <p className='font-sans font-light'>{t("sections.hero.description")}</p>
                    <div className="flex flex-row items-center gap-2 mt-3">
                        <Github className='h-6 w-6' />
                        <Separator orientation="vertical" />
                        <Twitter className='h-6 w-6' />
                        <Separator orientation="vertical" />
                        <Linkedin strokeWidth={1.7} className='h-6 w-6' />
                    </div>
                </div>
                <div>
                    <h1 className='font-poppins font-bold text-xl'>Neste Website</h1>
                    <div className='flex flex-col'>
                        <p className='font-sans font-light flex flex-row capitalize'>
                            <Dot />{t("components.navbar.items.home").toLowerCase()}
                        </p>
                        <p className='font-sans font-light flex flex-row capitalize'>
                            <Dot />{t("components.navbar.items.about").toLowerCase()}
                        </p>
                        <p className='font-sans font-light flex flex-row capitalize'>
                            <Dot />{t("components.navbar.items.projects").toLowerCase()}
                        </p>
                        <p className='font-sans font-light flex flex-row capitalize'>
                            <Dot />{t("components.navbar.items.formation").toLowerCase()}
                        </p>
                        <p className='font-sans font-light flex flex-row capitalize'>
                            <Dot />{t("components.navbar.items.carrer").toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-10 bg-secondary/70 px-4 flex flex-row items-center gap-2 justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <Copyright strokeWidth={1.3} className='h-4 w-4' />
                    <p className='font-sans font-light max-sm:text-sm'>2024 - Michel de Freitas | All Rights Reserved.</p>
                </div>
                <div className='flex flex-row items-center gap-2 max-sm:hidden'>
                    <p className='font-sans font-light'>Source Code</p>
                    <Github strokeWidth={1.3} className='h-5 w-5' />
                </div>
            </div>
        </div>

    );
};

export default Footer;