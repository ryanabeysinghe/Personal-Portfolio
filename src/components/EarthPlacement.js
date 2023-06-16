import React from 'react'
import EarthCanvas from './Earth';

const EarthPlacement = () => {
  return (
    <div className='flex fixed right-2 bottom-16 items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative cursor-pointer md:hidden'>
            <EarthCanvas />
        </div>
    </div>
  );
};

export default EarthPlacement;