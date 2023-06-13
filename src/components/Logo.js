import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" className='w-16 h-16 bg-dark uppercase text-light border border-solid border-transparent dark:border-light flex items-center justify-center rounded-2xl text-base font-bold tracking-wider' whileHover = {{ /* ROYGBIV ~ Rainbow Color Spectrum */ backgroundColor: ["#28282B", "#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee", "#28282B"], transition: { duration: 1, repeat: Infinity }}}>
          ABEY
        </MotionLink>
    </div>
  );
};

export default Logo;