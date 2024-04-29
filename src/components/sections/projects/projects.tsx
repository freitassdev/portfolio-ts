import React from 'react';
import './projects.css';
import Card from '@/components/shared/card/card';
import { useTranslation } from 'react-i18next';

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
                <span className="underfont">{t('sections.projects.title')}</span>
                <div className="header-line"></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <Card
                    title={t('components.projectsCard.chatApp.title')}
                    tech='React - TypeScript - Express - MongoDB'
                    description={t('components.projectsCard.chatApp.description')}
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                    inDevelopment
                />
                <Card
                    title={t('components.projectsCard.chatApp.title')}
                    tech='React - TypeScript - Express - MongoDB'
                    description={t('components.projectsCard.chatApp.description')}
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
                <Card
                    title={t('components.projectsCard.chatApp.title')}
                    tech='React - TypeScript - Express - MongoDB'
                    description={t('components.projectsCard.chatApp.description')}
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
                <Card
                    title={t('components.projectsCard.chatApp.title')}
                    tech='React - TypeScript - Express - MongoDB'
                    description={t('components.projectsCard.chatApp.description')}
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
            </div>
        </div>
    );
};

export default ProjectsSection;