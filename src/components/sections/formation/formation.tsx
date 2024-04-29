import React from 'react';
import './formation.css';
import { useTranslation } from 'react-i18next';
import Timeline from '@/components/shared/timeline/timeline';
const FormationSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-[90%] md:max-w-[75%] flex flex-col mx-auto mt-20 gap-10">
            <div className='sm:max-w-[90%] mx-auto section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                <div className="header-line"></div>
                <span className="underfont">{t('sections.formation.title')}</span>
                <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
            </div>
            <Timeline />
        </div>
    );
};

export default FormationSection;