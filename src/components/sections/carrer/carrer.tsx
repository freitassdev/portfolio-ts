import React from 'react';
import './carrer.css';
import { useTranslation } from 'react-i18next';
import CarrerItem from '@/components/shared/carrerItem/carrerItem';
const CarrerSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className='max-w-[90%] md:max-w-[75%] mx-auto'>
            <div className="max-w-[90%] md:max-w-[75%] flex flex-col mx-auto mt-20 gap-10">
                <div className='mx-auto section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                    <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
                    <span className="underfont">{t('sections.carrer.title')}</span>
                    <div className="header-line"></div>
                </div>
                <CarrerItem company='Focus Têxtil'
                    date='2023/06 - Atualmente'
                    role='Desenvolvedor FullStack'
                    location='São Paulo'
                    description='Estagiário na Focus Têxtil, onde atuo no desenvolvimento de sistemas web utilizando diversas tecnologias web, como React.js, TypeScript, e Express.js. Tenho experiência em desenvolvimento FullStack e estou sempre em busca de novos desafios e aprendizados.'
                    techs={['React.js', 'TypeScript', 'JS Vanilla', 'JQuery', 'Angular', 'Express.js', 'Nest.js', 'MongoDB']} />
            </div>
        </div>
    );
};

export default CarrerSection;