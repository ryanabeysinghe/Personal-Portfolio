import React from 'react'
import { FullStackDeveloperAndSoftwareEngineerCircularText, CircularText } from './SocialMediaIcons';
import Link from 'next/link'
import { motion } from 'framer-motion'
import useSwitchTheme from './hooks/useSwitchTheme';

const MotionLink = motion(Link);

const RA = () => {

  const [mode] = useSwitchTheme();
  
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='w-48 h-autp flex items-center justify-center relative md:w-24'>
            <FullStackDeveloperAndSoftwareEngineerCircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

            <MotionLink href="/about" 
            className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-dark dark:bg-primary dark:text-light text-2xl shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold tracking-wider md:w-12 md:h-12 md:text-[10px]`}
            whileHover = {{ /* ROYGBIV ~ Rainbow Color Spectrum */ backgroundColor: ['#FF2400', '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee', '#FF2400'], transition: { duration: 1, repeat: Infinity }}}>
                RA
            </MotionLink>
        </div>
    </div>
  );
};

export default RA;