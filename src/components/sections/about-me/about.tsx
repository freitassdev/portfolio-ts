import React from 'react';
import './about.css';

const AboutSection: React.FC = () => {
    return (
        <div>
            <div className='section-header text-5xl font-extrabold font-poppins max-lg:text-4xl'>
                <div className="header-line"></div>
                <span className="underfont">Sobre Mim</span>
                <span className="font-extrabold text-5xl max-lg:text-4xl dark:text-[#a7a7a7]">#</span>
            </div>
            <div className='flex flex-row justify-between max-lg:flex-col max-lg:items-start mt-6 gap-10 text-[17px] max-md:text-base'>
                <div className='flex flex-col font-sans font-light text-justify'>
                    <p style={{
                        marginBlockStart: '0',
                    }}>Olá! Me chamo Michel, sou um estudante e desenvolvedor apaixonado por programação desde os 12 anos. Atualmente tenho 16 anos e moro em São Paulo, Pirituba. Estou cursando Desenvolvimento de Sistemas na Etec Jaraguá e também faço estágio como Desenvolvedor Web na empresa Focus Têxtil. Atuo no front-end e no back-end, utilizando as principais tecnologias do Node.js (como React, Express, Nest e um pouquinho de Angular) e também na programação mobile, utilizando React Native com TypeScript. Por enquanto ando estudando um pouco de C# (ou CSharp para os mais íntimos) e MySQL.</p>
                    <br />
                    <p>Saindo um pouco dessa rotina de estágio e estudos, costumo jogar videogame e vôlei, ouvir música e assistir filmes e séries (quem não gosta de um cineminha, não é mesmo? rsrs). Além disso gosto de viajar, desenvolver alguns projetos, e passear pela cidade. Estou empolgado em continuar explorando o mundo da tecnologia e ansioso para colaborar em projetos inovadores. Vamos construir algo incrível juntos!</p>
                </div>
                <div className='flex flex-col max-lg:max-w-full max-w-[35%] gap-3'>
                    <h2 style={{
                        marginBlockStart: '0',
                    }}
                    className='font-poppins font-bold text-2xl max-md:text-[21px    ]'>Minhas Habilidades</h2>
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