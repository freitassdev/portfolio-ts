import React from 'react';
import './hero.css';
const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-[80vh]">
            <h1 className="text-4xl font-bold font-poppins">Hello, I'm John Doe</h1>
            <p className="text-lg font-light font-sans">I'm a web developer based in New York. I have rich experience in web site design and building, also I am good at wordpress.</p>
            <div className="flex gap-5">
                <button className="btn btn-primary">Hire Me</button>
                <button className="btn btn-secondary">Contact Me</button>
            </div>
        </div>
    );
};

export default HeroSection;