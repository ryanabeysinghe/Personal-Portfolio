import React from 'react'
import { FullStackDeveloperAndSoftwareEngineerCircularText, CircularText } from './SocialMediaIcons';
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const RA = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-autp flex items-center justify-center relative'>
            <FullStackDeveloperAndSoftwareEngineerCircularText className={'fill-dark animate-spin-slow'} />

            <MotionLink href="/projects" 
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light text-2xl shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold tracking-wider'
            whileHover = {{ /* ROYGBIV ~ Rainbow Color Spectrum */ backgroundColor: ["#121212", "#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee", "#121212"], transition: { duration: 1, repeat: Infinity }}}>
                RA
            </MotionLink>
        </div>
    </div>
  );
};

export default RA;