import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import CSSImg from '../../public/images/skills/CSS-transparent.png'
import NodeJSImg from '../../public/images/skills/nodeJS-transparent.png'
import ReactImg from '../../public/images/skills/react-transparent.png'
import TailwindCSSImg from '../../public/images/skills/tailwindCSS-transparent.png'
import JavaImg from '../../public/images/skills/java-transparent.png'
import GitImg from '../../public/images/skills/git-transparent.png'
import NextJSImg from '../../public/images/skills/nextJS-transparent.png'
import GoogleFirebaseImg from '../../public/images/skills/googleFirebase-transparent.png'
import SwiftImg from '../../public/images/skills/swift-transparent.png'
import PythonImg from '../../public/images/skills/python-transparent.png'

const imageArray = [
    { src: JavaImg, alt: 'Java Logo', text: 'Java' },
    { src: ReactImg, alt: 'React Logo', text: 'React' },
    { src: GitImg, alt: 'Git Logo', text: 'Git' },
    { src: NextJSImg, alt: 'Next.js Logo', text: 'Next.js' },
    { src: SwiftImg, alt: 'Swift Logo', text: 'Swift' },
    { src: CSSImg, alt: 'CSS Logo', text: 'CSS' },
    { src: NodeJSImg, alt: 'Node JS Logo', text: 'Node.js' },
    { src: TailwindCSSImg, alt: 'Tailwind CSS Logo', text: 'Tailwind' },
    { src: GoogleFirebaseImg, alt: 'Google Firebase Logo', text: 'Firebase' },
    { src: PythonImg, alt: 'Python Logo', text: 'Python' },
];

const Skills = () => {
    return (
        <>
            <div className="relative flex w-full overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex">
                    {imageArray.map((path, index) => (
                        <span key={index} className="mx-5 hover:scale-125 hover:delay-150">
                            <Image src={path.src} alt={path.alt} className="w-full" />
                            <p className="text-center text-lg font-medium">{path.text}</p>
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
                    {imageArray.map((path, index) => (
                        <span key={index} className="mx-5 hover:scale-125 hover:delay-150">
                            <Image src={path.src} alt={path.alt} className="w-full" />
                            <p className="text-center text-lg font-medium">{path.text}</p>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};


export default Skills;