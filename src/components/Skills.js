import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import CSSImg from '../../public/images/skills/CSS-transparent.svg'
import NodeJSImg from '../../public/images/skills/nodeJS-transparent.png'
import ReactImg from '../../public/images/skills/react-transparent.png'
import TailwindCSSImg from '../../public/images/skills/tailwindCSS-transparent.png'
import JavaImg from '../../public/images/skills/java-transparent.png'
import GitImg from '../../public/images/skills/git-transparent.png'
import NextJSImg from '../../public/images/skills/nextJS-transparent.png'
import GoogleFirebaseImg from '../../public/images/skills/googleFirebase-transparent.png'
import SwiftImg from '../../public/images/skills/swift-transparent.png'

const Skills = () => {
    return (
        <>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <span className="text-4xl mx-4">Marquee Item 1</span>
                    <span className="text-4xl mx-4">Marquee Item 2</span>
                    <span className="text-4xl mx-4">Marquee Item 3</span>
                    <span className="text-4xl mx-4">Marquee Item 4</span>
                    <span className="text-4xl mx-4">Marquee Item 5</span>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    <span className="text-4xl mx-4">Marquee Item 1</span>
                    <span className="text-4xl mx-4">Marquee Item 2</span>
                    <span className="text-4xl mx-4">Marquee Item 3</span>
                    <span className="text-4xl mx-4">Marquee Item 4</span>
                    <span className="text-4xl mx-4">Marquee Item 5</span>
                </div>
            </div>
        </>
    );
    /*
    const [currentImage, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((previousImage) => (previousImage + 1) % 9); // Adjust the number based on the total number of unique skills
        }, 1000); // Adjust the duration for each slide transition

        return () => {
            clearInterval(interval);
        };
    }, []);

    const images = [
        { src: CSSImg, alt: 'CSS Logo' },
        { src: NodeJSImg, alt: 'Node JS Logo' },
        { src: ReactImg, alt: 'React Logo' },
        { src: TailwindCSSImg, alt: 'Tailwind CSS Logo' },
        { src: JavaImg, alt: 'Java Logo' },
        { src: GitImg, alt: 'Git Logo' },
        { src: NextJSImg, alt: 'Next JS Logo' },
        { src: GoogleFirebaseImg, alt: 'Google Firebase Logo' },
        { src: SwiftImg, alt: 'Swift Logo' },
    ];

    const repeatedImages = [...images, ...images]; // Double the images array to repeat the images

    return (
        <>
            <div className='m-auto relative w-full grid place-items-center overflow-hidden'>
                <div
                    className='flex w-[calc(250px*18)] animate-marquee'
                    style={{ transform: `translateX(-${currentImage * 250}px)` }}
                >
                    {repeatedImages.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[200px] w-[250px] flex items-center p-[15px]'
                        >
                            <Image src={skill.src} alt={skill.alt} className='w-full' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    */
};

export default Skills;