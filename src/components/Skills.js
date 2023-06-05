import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import skillsCSS from '../styles/Skills.module.css'
import TextAnimation from './TextAnimation';

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
    { src: JavaImg, alt: 'Java Logo', text: 'Java' },
    { src: ReactImg, alt: 'React Logo', text: 'React' },
    { src: GitImg, alt: 'Git Logo', text: 'Git' },
    { src: HTMLImg, alt: 'HTML Logo', text: 'HTML' },
    { src: CSSImg, alt: 'CSS Logo', text: 'CSS' },
    { src: NextJSImg, alt: 'Next.js Logo', text: 'Next.js' },
    { src: SwiftImg, alt: 'Swift Logo', text: 'Swift' },
    { src: NodeJSImg, alt: 'Node JS Logo', text: 'Node.js' },
    { src: DockerImg, alt: 'Docker Logo', text: 'Docker' },
    { src: PythonImg, alt: 'Python Logo', text: 'Python' },

    { src: GoogleFirebaseImg, alt: 'Google Firebase Logo', text: 'Google Firebase' },
    { src: ExpressJSImg, alt: 'Express JS Logo', text: 'Express.js' },
    { src: TailwindCSSImg, alt: 'Tailwind CSS Logo', text: 'Tailwind CSS' },
    { src: MongoDBImg, alt: 'Mongo DB Logo', text: 'Mongo DB' },
];

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <>
            <TextAnimation text="&lt;div className = 'skills'&gt;" className='font-bold text-6xl mt-64 w-full text-left' />
            {/* <h2 className='font-bold text-6xl mt-64 w-full text-left'>&lt;div className = 'skills'&gt;</h2> */}

            <div className={`mt-10 flex w-full relative overflow-x-hidden ${skillsCSS.shadow}`}>
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
                                <Image src={path.src} alt={path.alt} className="w-full" />
                            </div>
                            <p className="mt-2 text-center text-lg font-medium">{path.text}</p>
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
                                <Image src={path.src} alt={path.alt} className="w-full" />
                            </div>
                            <p className="mt-2 text-center text-lg font-medium">{path.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <TextAnimation text="&lt;/div&gt;" className='font-bold text-6xl mt-10 w-full text-left' />

            {/* <h2 className='font-bold text-6xl mt-10 w-full text-left'>&lt;/div&gt;</h2> */}
        </>
    );
};

export default Skills;