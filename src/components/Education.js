import React, { useRef } from 'react';
import TextAnimation from './TextAnimation';
import { motion, useScroll } from 'framer-motion';
import ProgressIndicator from './ProgressIndicator';

const EducationDescription = ({ degreeType, institution, institutionURL, date, GPA, minor, description }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between'>

            <ProgressIndicator reference={ref} />

            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}} >
                <h3 className='font-bold text-2xl text-dark dark:text-light'><i>{degreeType}</i></h3>

                <span className='font-medium text-dark/75 dark:text-light/75 text-lg'>
                    <i>{minor}</i>
                </span>

                <div className='text-primary dark:text-primary uppercase font-semibold text-xl'>
                    <a href={institutionURL} target={'_blank'} className='text-primary dark:text-primary uppercase font-semibold text-xl'>{institution}</a>
                </div>

                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-lg'>
                    {date} | <i>{GPA}</i>
                </span>

                <ul className='font-medium w-full text-lg text-dark dark:text-light'>
                    {description.map((bulletPoint, index) => (
                        <li key={index} className='ml-6'>
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
        offset: ["start end", "center start"]
    })

    return (
        <>
            <div className='mt-64 mb-24'>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    <h2 className='font-bold text-7xl mb-32 w-full text-left text-dark dark:text-light'>&lt;div className = 'education'&gt;</h2>
                </motion.div>

                <div ref={ref} className='w-[75%] mx-auto relative'>

                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-4 w-[4px] h-[98%] bg-dark dark:bg-light origin-top' />

                    <ul className='w-full flex flex-col items-start justify-between ml-24'>

                        <EducationDescription degreeType='Bachelor of Science in Computer Science' minor='Minor in Global Engineering Leadership'
                        institution='University of Maryland - College Park'
                        institutionURL='https://www.umd.edu/' date='august 2019 - december 2023' GPA='cumulative GPA: 3.62'
                        description={[
                            'Relevant Courswork: Object-Oriented Programming, Introduction to Computer Systems & Data Science, Algorithms, Web Application Development with JavaScript, Data Structures, Programming Handheld Systems, Computer Vision',
                            'Awards/Scholarships: Dean’s List, Clifford & Camille Kendall CMNS Scholarship, CMNS Undergraduate Scholarship',
                        ]}/>

                        <EducationDescription degreeType='High School Diploma'
                        institution='Watkins Mill High School'
                        institutionURL='https://www2.montgomeryschoolsmd.org/schools/watkinsmillhs' date='august 2015 - june 2019' GPA='cumulative GPA: 3.50'
                        description={[
                            'Organizations: National Honor Society, Project Lead the Way, Computer Science Club',
                            "Extracurricular Activities: Varsity Men's Football & Lacrosse",
                        ]}/>

                    </ul>

                </div>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    <h2 className='font-bold text-7xl mt-32 w-full text-left text-dark dark:text-light'>&lt;/div&gt;</h2>
                </motion.div>

            </div>
        </>
    );
};

export default Education;