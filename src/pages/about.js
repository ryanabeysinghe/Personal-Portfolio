import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import TextAnimation from '@/components/TextAnimation'
import Layout from '@/components/Layout'
import portraitPicture from '../../public/images/profile/portraitPicture.jpg'
import Image from 'next/image'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const NumAnimation = ({num}) => {
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
    
    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>About | Ryan Abeysinghe</title>
                <meta name='description' content='About Ryan Abeysinghe' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <TextAnimation text="Keep Moving Forward!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                            <p className='font-medium text-dark dark:text-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.
                            </p>

                            <p className='mt-4 font-medium text-dark dark:text-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Et tortor at risus viverra adipiscing at in.
                            </p>

                            <p className='mt-4 font-medium text-dark dark:text-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Blandit massa enim nec dui nunc mattis enim.
                            </p>

                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
                            <Image src={portraitPicture} alt='Ryan Abeysinghe Profile Picture' className='w-full h-auto rounded-2xl pointer-events-none' priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of F/E experience</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumAnimation num={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of B/E experience</h2>
                            </div>

                        </div>

                    </div>

                <Skills /> 
                <Experience />
                <Education />   

                </Layout>

            </main>
        </>
    );
};

export default About;