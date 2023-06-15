import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressIndicator = ({reference}) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "start center"]
    })

    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light -mt-[0.4rem] md:-mt-[0.8rem] md:-ml-2 xs:-mt-[0.6rem] xs:ml-0 xxs:-mt-[0.75rem] xxs:-ml-0.5 xxxs:-ml-1.5'>
            <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width='75' height='75' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='30' className='stroke-primary dark:stroke-primary stroke-1 fill-none' />
                <motion.circle cx='50' cy='50' r='30' className='stroke-[5px] fill-light dark:fill-dark' style={{ pathLength: scrollYProgress }} />
                <circle cx='50' cy='50' r='15' className='animate-pulse stroke-1 fill-primary dark:fill-primary' />
            </svg>
        </figure>
    );
};

export default ProgressIndicator;