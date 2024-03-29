import React, { useRef, useEffect } from 'react'
import Tilt from 'react-parallax-tilt';
import { motionValue, useInView, useMotionValue, useSpring, motion, useScroll } from 'framer-motion'
import aboutPortfolioPicture from '../../public/images/profile/aboutPortfolioPicture.png';

import Head from 'next/head'
import Image from 'next/image'

import TextAnimation from '@/components/TextAnimation'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import RA from '@/components/RA'
import PageTransition from '@/components/PageTransition'
import { useTheme } from '@/components/ThemeContext';

const NumAnimation = ({ num }) => {
    const ref = useRef(null);
    const motionVal = useMotionValue(0);

    const springVal = useSpring(motionVal, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionVal.set(num);
        }
    }, [isInView, num, motionValue])

    useEffect(() => {
        springVal.on("change", (upToDate) => {
            //console.log(upToDate)

            if (ref.current && upToDate.toFixed(0) <= num) {
                ref.current.textContent = upToDate.toFixed(0)
            }
        })
    }, [springVal, num])

    return (
        <span ref={ref}></span>
    );
};

const About = () => {

    const { mode } = useTheme();
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Head>
                <title>About | Ryan Abeysinghe</title>
                <meta name='description' content="About | Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
                <meta name="keywords" content="About | Ryan Abeysinghe, About, About Ryan Abeysinghe, About Ryan Abeysinghe Personal Portfolio" />
                <meta property="og:title" content="About | Ryan Abeysinghe" />
                <meta property="og:description" content="AAbout | Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
                <link rel="canonical" href="https://ryanabeysinghe.com/about" key="canonical" />
            </Head>

            <PageTransition />

            <motion.div className='fixed top-0 left-0 right-0 h-[0.5rem] bg-primary origin-[0%] z-40' style={{ scaleX: scrollYProgress }} />

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 xl:pt-16 mb-20'>
                    <TextAnimation text="Keep Moving Forward!" className='mb-16 2xl:!text-7xl xl:!text-6xl md:!text-5xl xs:!text-4xl xxxs:!text-3xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mt-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-2xl sm:text-xl xs:text-lg xxxs:text-base'>About Me</h2>
                            <p className='font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                                As a <strong>Full Stack Developer</strong>, I have a comprehensive understanding of both front-end and back-end development. I enjoy utilizing the entire technology stack required to build and deploy web applications. Therefore, I strive to be well-versed in all aspects of the development process. 
                            </p>

                            <p className='my-4 font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                                Technology is constantly evolving and changing, and as a full stack developer, I understand the significance of staying up to date with the latest technologies, trends, and tools. I&apos;m always eager to expand my knowledge and embrace new technologies that can enhance the development process.
                            </p>

                            <p className='font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                                Outside of my professional career, I find myself immersed in a world of thrilling physical and mental challenges as a dedicated gym rat, capturing fleeting moments and transforming them into visual stories as an aspiring photographer, and embracing the electrifying atmosphere of sports as an enthusiast.
                            </p>

                        </div>

                        <Tilt glareEnable={true} glareColor={`${mode === 'light' ? '#FFFFFF' : '#FFFFFF'}`} glareBorderRadius='1rem' className='col-span-3 xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className=' relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8'>
                                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
                                <Image src={aboutPortfolioPicture} alt='Ryan Abeysinghe About Section Profile Picture' className='w-full h-auto rounded-2xl pointer-events-none' priority
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                            </div>
                        </Tilt>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center xl:mt-3 md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 2xl:text-[1.04rem] xl:text-center xl:text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs'>years of F/E experience</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center lg:text-lg md:text-base xs:text-sm xxs:text-xs'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 2xl:text-[1.04rem] xl:text-center xl:text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs'>years of B/E experience</h2>
                            </div>

                        </div>

                    </div>

                    <Skills />
                    <Experience />
                    <Education />

                </Layout>

                <RA />
            </main>
        </>
    );
};

export default About;