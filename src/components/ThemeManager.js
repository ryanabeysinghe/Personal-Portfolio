import React from 'react';
import { motion } from 'framer-motion';

import { MoonIcon, SunIcon } from '@/components/SocialMediaIcons'
import { useTheme } from '@/components/ThemeContext';

const ThemeManager = () => {

    const { mode, setMode } = useTheme();

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.button onClick={toggleMode} className={`ml-3 w-7 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} title='Navigation Bar'>
            {
                mode === 'dark' ?
                    <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
            }
        </motion.button>
    );
};

export default ThemeManager;