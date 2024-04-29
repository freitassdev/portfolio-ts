import React, { useState } from 'react';
import './theme.css'
import { Button } from '@/components/ui/button';
import { Moon, Sun } from "lucide-react"
const ThemeChanger: React.FC = () => {
    const [theme, setTheme] = useState('dark');
    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.add('white');
            document.body.classList.remove('dark')
        } else {
            setTheme('dark');
            document.documentElement.classList.remove('white');
            document.body.classList.add('dark')
        }
    }
    return (
        <div>
            <Button variant="outline" size="icon" onClick={() => changeTheme()}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    );
};

export default ThemeChanger;