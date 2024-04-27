import React, { useRef, useEffect } from 'react';
import './loader.css'
import { CircleLoader } from 'react-spinners';
const Loader: React.FC = () => {
    const loaderDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (loaderDiv.current) {
                loaderDiv.current.style.opacity = '0';
                setTimeout(() => {
                    if (loaderDiv.current) {
                        loaderDiv.current.remove();
                    }
                }, 400)
            }
        }, 1500)
    }, []);

    return (
        <div className="h-full w-full top-0 fixed z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-opacity" ref={loaderDiv}>
            <CircleLoader size={130} color='hsl(var(--secondary-foreground))' />
        </div>
    );
};

export default Loader;