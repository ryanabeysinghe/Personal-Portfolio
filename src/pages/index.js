import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/Layout'
import TextAnimation from '@/components/TextAnimation'
import RA from '@/components/RA'
import { LinkArrow } from '@/components/SocialMediaIcons'
import PageTransition from '@/components/PageTransition'
import { useTheme } from '@/components/ThemeContext'

import mainPortfolioPicture from '../../public/images/profile/mainPortfolioPicture.png'
import rioPortfolioPicture from '../../public/images/profile/rioPortfolioPicture.png'
import mainPortfolioPicture_2 from '../../public/images/profile/mainPortfolioPicture_2.png'

import Tilt from 'react-parallax-tilt';
import { motion, useScroll } from 'framer-motion';

// import programmingSymbol from '../../public/images/svgs/programmingSymbol.png'

export default function Home() {

  const { mode } = useTheme();
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <Head>
        <title>Ryan Abeysinghe</title>
        <meta name="description" content="Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
        <meta name="keywords" content="Ryan Abeysinghe, Ryan Abeysinghe Personal Portfolio, Personal Portfolio, Ryan Abeysinghe Portfolio" />
        <meta property="og:title" content="Ryan Abeysinghe" />
        <meta property="og:description" content="Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
        <link rel="canonical" href="https://ryanabeysinghe.com/" key="canonical" />
      </Head>

      <PageTransition />
      
      <motion.div className='fixed top-0 left-0 right-0 h-[0.5rem] bg-primary origin-[0%] z-40' style={{ scaleX: scrollYProgress }} />

      <main className='flex w-full flex-col items-center justify-center text-dark dark:text-light' >
        <Layout className='pt-16 xl:pt-16 md:pt-16 sm:pt-8'>

          <TextAnimation text="Hello, I'm Ryan!" className='mb-16 !text-7xl lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl xxs:!text-3xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mt-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-2xl sm:text-xl xs:text-lg xxxs:text-base'>Welcome</h2>

              <div className='font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                {/* <TextAnimation text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.' className='!text-base !font-medium !text-left' /> */}
                I&apos;m a <strong>Software Engineer</strong> based in College Park, Maryland. I find great satisfaction in the process of transforming concepts into cutting-edge web applications.   
              </div>

              <div className='my-4 font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                {/* <TextAnimation text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.' className='!text-base !font-medium !text-left' /> */}
                Delve into my most recent experience, projects, and education, showcasing my knowledge in full stack development within the field of software engineering. 
              </div>

              {/* <div className='font-medium text-dark dark:text-light md:text-lg xs:text-base xxxs:text-sm'>
                <TextAnimation text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.' className='!text-base !font-medium !text-left' />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.
              </div> */}

            </div>

            <Tilt glareEnable={true} glareColor={`${mode === 'light' ? '#FFFFFF' : '#FFFFFF'}`} glareBorderRadius='1rem' className='col-span-3 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
                <Image src={rioPortfolioPicture} alt='Ryan Abeysinghe Home Section Profile Picture' className='w-full h-auto rounded-2xl pointer-events-none' priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>

            </Tilt>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center xl:mt-8 md:order-3 md:pb-16 xs:flex-col md:-mb-8 xs:-mb-[4.5rem] xs:mr-3'>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                {/* <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                  +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of F/E experience</h2> */}
                <Link href="/resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-3 sm:text-sm xs:mb-12 xs:ml-4 xs:text-lg xs:px-8' download={false}>
                  Resume <LinkArrow className='!w-6 ml-1 sm:w-5' />
                </Link>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                {/* <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                  +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2> */}
                <Link href="/projects" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-[2.4rem] rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-[1.5rem] sm:text-sm xs:mb-12 xs:text-lg xs:px-11'>Projects</Link>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                {/* <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                  +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of B/E experience</h2> */}
                <Link href="/contact" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-[2.45rem] rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-[1.5rem] sm:text-sm xs:mb-12 xs:text-lg xs:px-[2.82rem]'>Contact</Link>
              </div>

            </div>

          </div>

        </Layout>

        <RA />

        {/* <div className='absolute right-8 bottom-8 inline-block w-32 pointer-events-none md:hidden'>
          <Image src={programmingSymbol} alt="Programming Picture Symbol" className='w-full h-auto fill-dark dark:fill-light' priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
        </div> */}
      </main>
    </>
  );
};