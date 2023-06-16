import React from 'react'
import EarthCanvas from './Earth';
import { FullStackDeveloperAndSoftwareEngineerCircularText } from './SocialMediaIcons';
import { motion } from 'framer-motion'
import Link from 'next/link';


const EarthPlacement = () => {
  const MotionLink = motion(Link);

  return (
    <div className='flex fixed right-2 bottom-12 items-center justify-center overflow-hidden lg:right-2 lg:-bottom-4 md:hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative cursor-pointer'>
        <FullStackDeveloperAndSoftwareEngineerCircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

        {/* <div>
          <EarthCanvas />
        </div> */}
         <div className='flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36'>
               <EarthCanvas />
          </div>
      </div>
    </div>
  );
};

export default EarthPlacement;