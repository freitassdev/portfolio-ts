import React from 'react';
import './projects.css';
import Card from '@/components/shared/card/card';
const ProjectsSection: React.FC = () => {
    return (
        <div>
            <div className='section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
                <span className="underfont">Projetos</span>
                <div className="header-line"></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <Card
                    title='Chat App'
                    tech='React - TypeScript - Express - MongoDB'
                    description='Desenvolvido como uma plataforma de comunicação instantânea, semelhante ao WhatsApp, este site possibilita a troca de mensagens em tempo real de maneira eficiente e intuitiva.'
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
                <Card
                    title='Chat App'
                    tech='React - TypeScript - Express - MongoDB'
                    description='Desenvolvido como uma plataforma de comunicação instantânea, semelhante ao WhatsApp, este site possibilita a troca de mensagens em tempo real de maneira eficiente e intuitiva.'
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
                <Card
                    title='Chat App'
                    tech='React - TypeScript - Express - MongoDB'
                    description='Desenvolvido como uma plataforma de comunicação instantânea, semelhante ao WhatsApp, este site possibilita a troca de mensagens em tempo real de maneira eficiente e intuitiva.'
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
                <Card
                    title='Chat App'
                    tech='React - TypeScript - Express - MongoDB'
                    description='Desenvolvido como uma plataforma de comunicação instantânea, semelhante ao WhatsApp, este site possibilita a troca de mensagens em tempo real de maneira eficiente e intuitiva.'
                    url='https://chat.michelfreitas.com/'
                    github='https://github.com/freitassdev/chat-frontend'
                />
            </div>
        </div>
    );
};

export default ProjectsSection;