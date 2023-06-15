import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import skillsCSS from '../styles/Skills.module.css'
import { useTheme } from '@/components/ThemeContext';
import { motion } from 'framer-motion';

import ReactImg from '../../public/images/skills/react-transparent.png';
import JavaImg from '../../public/images/skills/java-transparent.png';
import GitImg from '../../public/images/skills/git-transparent.png';
import CSSImg from '../../public/images/skills/CSS-transparent.png';
import NodeJSImg from '../../public/images/skills/nodeJS-transparent.png';
import NextJSImg from '../../public/images/skills/nextJS-transparent.png';
import SwiftImg from '../../public/images/skills/swift-transparent.png';
import PythonImg from '../../public/images/skills/python-transparent.png';
import DockerImg from '../../public/images/skills/docker-transparent.png';
import HTMLImg from '../../public/images/skills/html-transparent.png';
import ExpressJSImg from '../../public/images/skills/expressJS-transparent.png';
import MongoDBImg from '../../public/images/skills/mongodb-transparent.png';
import GoogleFirebaseImg from '../../public/images/skills/googleFirebase-transparent.png';
import TailwindCSSImg from '../../public/images/skills/tailwindCSS-transparent.png';

const imageArray = [
    { src: JavaImg, alt: 'Java Logo', text: 'Java', source: 'https://www.java.com/en/' },
    { src: ReactImg, alt: 'React Logo', text: 'React', source: 'https://react.dev/' },
    { src: GitImg, alt: 'Git Logo', text: 'Git', source: 'https://git-scm.com/' },
    { src: HTMLImg, alt: 'HTML Logo', text: 'HTML', source: 'https://html.com/' },
    { src: CSSImg, alt: 'CSS Logo', text: 'CSS', source: 'https://www.w3.org/' },
    { src: NextJSImg, alt: 'Next.js Logo', text: 'Next.js', source: 'https://nextjs.org/' },
    { src: SwiftImg, alt: 'Swift Logo', text: 'Swift', source: 'https://www.swift.org/' },
    { src: NodeJSImg, alt: 'Node JS Logo', text: 'Node.js', source: 'https://nodejs.org/en' },
    { src: DockerImg, alt: 'Docker Logo', text: 'Docker', source: 'https://www.docker.com/' },
    { src: PythonImg, alt: 'Python Logo', text: 'Python', source: 'https://www.python.org/' },
    { src: GoogleFirebaseImg, alt: 'Google Firebase Logo', text: 'Google Firebase', source: 'https://firebase.google.com/' },
    { src: ExpressJSImg, alt: 'Express JS Logo', text: 'Express.js', source: 'https://expressjs.com/' },
    { src: TailwindCSSImg, alt: 'Tailwind CSS Logo', text: 'Tailwind CSS', source: 'https://tailwindcss.com/' },
    { src: MongoDBImg, alt: 'Mongo DB Logo', text: 'Mongo DB', source: 'https://www.mongodb.com/' },
];

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const { mode } = useTheme();

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                {/* <h2 className='font-bold text-7xl mt-64 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl md:mt-32'>&lt;div className = 'skills'&gt;</h2> */}
                <h2 className='font-bold text-9xl mt-64 w-full text-center text-dark dark:text-light xl:text-8xl md:text-7xl xxxs:text-5xl md:mt-32'>Skills</h2>
            </motion.div>

            {/* <TextAnimation text="&lt;div className = 'skills'&gt;" className='font-bold !text-7xl mt-64 w-full text-left' /> */}

            <div className={`mt-10 flex w-full relative overflow-x-hidden ${mode === 'light' ? skillsCSS.shadow : skillsCSS.darkShadow}`}>
                <div className={`flex py-12 ${hoveredIndex !== -1 ? skillsCSS['animate-paused'] : ''} whitespace-nowrap animate-marquee`}>
                    {imageArray.map((path, index) => (
                        <div
                            key={index}
                            className={`mx-6 hover:scale-150 transition-transform duration-1000 ${hoveredIndex === index ? skillsCSS['animate-paused'] : ''
                                }`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={skillsCSS.imageContainer}>
                                <Link href={`${path.source}`} target='_blank' rel="noopener noreferrer">
                                    <Image src={path.src} alt={path.alt} className="w-full" />
                                </Link>
                            </div>
                            <p className="mt-2 text-center text-lg font-medium text-dark dark:text-light">{path.text}</p>
                        </div>
                    ))}
                </div>

                <div className={`flex absolute top-0 py-12 ${hoveredIndex !== -1 ? skillsCSS['animate-paused'] : ''} whitespace-nowrap animate-marquee2`}>
                    {imageArray.map((path, index) => (
                        <div
                            key={index}
                            className={`mx-6 hover:scale-150 transition-transform duration-1000 ${hoveredIndex === index ? skillsCSS['animate-paused'] : ''}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={skillsCSS.imageContainer}>
                                <Link href={`${path.source}`} target='_blank' rel="noopener noreferrer">
                                    <Image src={path.src} alt={path.alt} className="w-full" />
                                </Link>
                            </div>
                            <p className="mt-2 text-center text-lg font-medium text-dark dark:text-light">{path.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h2 className='font-bold text-7xl mt-10 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl md:mb-32'>&lt;/div&gt;</h2>
            </motion.div> */}

            {/* <TextAnimation text="&lt;/div&gt;" className='font-bold !text-7xl mt-10 w-full text-left' /> */}
        </>
    );
};

export default Skills;