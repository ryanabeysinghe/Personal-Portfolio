import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressIndicator = ({reference}) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

    return (
        <figure className='absolute left-0 stroke-dark'>
            <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='30' className='stroke-primary stroke-1 fill-none' />
                <motion.circle cx='50' cy='50' r='30' className='stroke-[5px] fill-light' style={{ pathLength: scrollYProgress }} />
                <circle cx='50' cy='50' r='15' className='animate-pulse stroke-1 fill-customRed' />
            </svg>
        </figure>
    );
};

export default ProgressIndicator;