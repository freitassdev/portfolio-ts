import React, { useRef, useEffect } from 'react';
import './loader.css'
import { CircleLoader } from 'react-spinners';

interface LoaderProps {
    loading?: boolean;
}
const Loader: React.FC<LoaderProps> = (props) => {
    const loaderDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (loaderDiv.current) {
            loaderDiv.current.style.opacity = '1';
            loaderDiv.current.style.display = 'flex'
        }
        setTimeout(() => {
            if (loaderDiv.current) {
                loaderDiv.current.style.opacity = '0';
                setTimeout(() => {
                    if (loaderDiv.current) {
                        loaderDiv.current.style.display = 'none';
                    }
                }, 150)
            }
        }, 700)
    }, []);

    return (
        <div>
            {props.loading && (
                <div className="h-[100vh] w-[100vw] left-0 top-0 fixed z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-opacity" ref={loaderDiv}>
                    <CircleLoader size={130} color='hsl(var(--secondary-foreground))' />
                </div>
            )}
        </div>

    );
};

export default Loader;