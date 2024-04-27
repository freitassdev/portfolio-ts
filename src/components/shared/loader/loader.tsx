import React, { useRef, useEffect } from 'react';
import './loader.css'
const Loader: React.FC = () => {
    const loaderDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (loaderDiv.current) {
                loaderDiv.current.remove();
            }
        }, 1700)
    }, []);
    
    return (
        <div className="loader" ref={loaderDiv}>
            <div className="open-container">
                <div className="open-one">
                </div>
                <div className="open-two">
                </div>
            </div>
        </div>
    );
};

export default Loader;