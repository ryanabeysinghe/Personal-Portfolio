import React, { useRef } from 'react';
import TextAnimation from './TextAnimation';
import { motion, useScroll } from 'framer-motion';
import ProgressIndicator from './ProgressIndicator';

const EducationDescription = ({ degreeType, institution, institutionURL, date, GPA, minor, description }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <ProgressIndicator reference={ref} />

            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}} className='md:-mt-2 xs:-mt-[0.5rem]' >
                <h3 className='font-bold text-2xl text-dark dark:text-light sm:text-xl xs:text-lg xxs:text-base xxxs:text-sm'><i>{degreeType}</i></h3>

                <span className='font-medium text-dark/75 dark:text-light/75 text-lg xs:text-base xxs:text-xs xxxs:text-[0.65rem]'>
                    <i>{minor}</i>
                </span>

                <div className='text-primary dark:text-primary uppercase font-semibold text-xl'>
                    <a href={institutionURL} target={'_blank'} className='text-primary dark:text-primary uppercase font-semibold text-xl sm:text-lg xs:text-lg xxs:text-base xxxs:text-sm'>{institution}</a>
                </div>

                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-lg xs:text-base xxs:text-xs xxxs:text-[0.65rem]'>
                    {date} | <i>{GPA}</i>
                </span>

                <ul className='font-medium w-full text-lg text-dark dark:text-light md:text-base sm:text-sm xxs:text-sm xxxs:text-xs'>
                    {description.map((bulletPoint, index) => (
                        <li key={index} className='my-2 ml-2'>
                            &bull; {bulletPoint}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Education = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    return (
        <>
            <div className='mt-64 mb-28 md:my-32'>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    {/* <h2 className='font-bold text-7xl mb-32 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg md:mb-16'>&lt;div className = 'education'&gt;</h2> */}
                    <h2 className='font-bold text-9xl mb-32 w-full text-center text-dark dark:text-light xl:text-8xl md:text-7xl sm:text-6xl xs:text-5xl xxxs:text-4xl sm:mb-24'>Education</h2>
                </motion.div>

                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-4 w-[4px] h-[95.4%] bg-dark dark:bg-light origin-top md:left-[20px] xs:w-[3px] xs:left-[18.5px] xxs:left-[16.5px] xxxs:left-[12.5px]' />

                    <ul className='w-full flex flex-col items-start justify-between ml-24 md:ml-8 xs:ml-8'>

                        <EducationDescription degreeType='B.S. in Computer Science' minor='Minor in Global Engineering Leadership'
                        institution='University of Maryland'
                        institutionURL='https://www.umd.edu/' date='august 2019 - dec 2023' GPA='GPA: 3.62'
                        description={[
                            'Relevant Courswork: Object-Oriented Programming, Introduction to Computer Systems & Data Science, Algorithms, Web Application Development with JavaScript, Data Structures, Programming Handheld Systems, Computer Vision, Artificial Intelligence',
                            'Awards/Scholarships: Dean’s List, Clifford & Camille Kendall CMNS Scholarship, CMNS Undergraduate Scholarship',
                        ]}/>

                        <EducationDescription degreeType='High School Diploma'
                        institution='Watkins Mill High School'
                        institutionURL='https://www2.montgomeryschoolsmd.org/schools/watkinsmillhs' date='august 2014 - june 2018' GPA='GPA: 3.40'
                        description={[
                            'Organizations: National Honor Society, Project Lead the Way, Computer Science Club, Chess Club Society',
                            "Extracurricular Activities: Varsity Men's Football & Lacrosse",
                        ]}/>

                    </ul>

                </div>

                {/* <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    <h2 className='font-bold text-7xl mt-32 mb-44 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg md:mt-16'>&lt;/div&gt;</h2>
                </motion.div> */}

            </div>
        </>
    );
};

export default Education;