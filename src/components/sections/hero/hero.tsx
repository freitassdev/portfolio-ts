import React from 'react';
import './hero.css';
import { Button } from "@/components/ui/button"

const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-[80vh] text-center p-4">
            <p className="text-xl font-light font-sans max-lg:text-lg">👋🏼 Olá, me chamo <span className='font-medium'>Michel Freitas</span>!</p>
            <h1 className="text-6xl font-bold font-poppins max-lg:text-5xl max-sm:text-3xl">Arquitetando o Futuro com Tecnologia e Criatividade</h1>
            <p className="text-xl font-light font-sans max-w-[700px] max-lg:text-lg">Apresentando meu próprio portfólio como um reflexo da minha paixão por esta área. Um desenvolvedor comprometido com a arte de criar experiências únicas, tanto no Front-End quanto no Back-End. Seja bem-vindo!</p>

            <div className="flex gap-5">
                <Button className='text-foreground'>Contate-me</Button>
                <Button variant="outline" className='text-foreground'>Linkedin</Button>
            </div>
        </div>
    );
};

export default HeroSection;