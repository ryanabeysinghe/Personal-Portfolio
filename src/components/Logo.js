import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-content mt-2'>
        <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold tracking-wider' whileHover = {{ /* ROYGBIV ~ Rainbow Color Spectrum */ backgroundColor: ["#121212", "#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee", "#121212"], transition: { duration: 1, repeat: Infinity }}}>RA</MotionLink>
    </div>
  )
}

export default Logo