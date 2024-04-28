import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';
const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                <div className="header-line"></div>
                <span className="underfont">{t('sections.about.title')}</span>
                <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
            </div>
            <div className='flex flex-row justify-between max-lg:flex-col max-lg:items-start mt-6 gap-10 text-[17px] max-md:text-base'>
                <div className='flex flex-col font-sans font-light text-justify'>
                    <p style={{
                        marginBlockStart: '0',
                    }}>{t('sections.about.description.part1')}</p>
                    <br />
                    <p>{t('sections.about.description.part2')}</p>
                </div>
                <div className='flex flex-col max-lg:max-w-full max-w-[35%] gap-3'>
                    <h2 style={{
                        marginBlockStart: '0',
                    }}
                    className='font-poppins font-bold text-2xl max-md:text-[21px]'>{t('sections.about.skillsTitle')}</h2>
                    <div className='flex flex-row flex-wrap gap-2 font-light'>
                        <span className="skill">JavaScript</span>
                        <span className="skill">TypeScript</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">React</span>
                        <span className="skill">React Native</span>
                        <span className="skill">Shadcn/ui</span>
                        <span className="skill">TailWind CSS</span>
                        <span className="skill">PrimeReact</span>
                        <span className="skill">Express</span>
                        <span className="skill">MongoDB</span>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">Git</span>
                        <span className="skill">Github</span>
                        <span className="skill">Bitbucket</span>
                        <span className="skill">Vercel</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;