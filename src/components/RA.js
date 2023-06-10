import React from 'react'
import { FullStackDeveloperAndSoftwareEngineerCircularText, CircularText } from './SocialMediaIcons';
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const RA = () => {
  const isDarkMode = 'dark';

  const getRABackgroundColor = () => {
    if (isDarkMode === 'dark') {
      return ['#FFF1E6', '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee', '#FFF1E6'];
    } else if (isDarkMode !== 'dark') {
      return ['#28282B', '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee', '#28282B'];
      //return ['#FFF1E6', '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee', '#FFF1E6'];
    }
  };

  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-autp flex items-center justify-center relative'>
            <FullStackDeveloperAndSoftwareEngineerCircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

            <MotionLink href="/about" 
            className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark text-2xl shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold tracking-wider`}
            whileHover = {{ /* ROYGBIV ~ Rainbow Color Spectrum */ backgroundColor: getRABackgroundColor(), transition: { duration: 1, repeat: Infinity }}}>
                RA
            </MotionLink>
        </div>
    </div>
  );
};

export default RA;