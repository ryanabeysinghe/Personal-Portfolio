import React from 'react';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/Layout';
import TextAnimation from '@/components/TextAnimation'
import { GithubIcon } from '@/components/SocialMediaIcons'
import RA from '@/components/RA';
import PageTransition from '@/components/PageTransition'

import RandSConstructionsWebsiteProj from '../../public/images/projects/RandSConstructionsWebsiteProj.png';
import PersonalPortfolioWebsiteProj from '../../public/images/projects/PersonalPortfolioWebsiteProj.png';
import COVID19DataScienceProj from '../../public/images/projects/COVID19DataScienceProj.png';
import TerpExchangeProj from '../../public/images/projects/TerpExchangeProj.png';

import Tilt from 'react-parallax-tilt';
import { useTheme } from '@/components/ThemeContext';

const MotionLink = motion(Link);

const FramerImage = motion(Image);

const LargeScaleProject = ({ projectImg, projectType, projectTitle, projectDescription, gitHubURL, projectURL }) => {

  const { mode } = useTheme();

  return (
    <Tilt glareEnable={true} glareColor={`${mode === 'light' ? '#FFFFFF' : '#FFFFFF'}`} glareBorderRadius='1.5rem'>
      <article className='w-full flex relative items-center justify-between rounded-br-3xl rounded-3xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 xl:flex-col xl:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

        <Link href={projectURL} target={"_blank"} className='w-1/2 cursor-pointer overflow-hidden rounded-lg xl:w-full'>
          <FramerImage src={projectImg} alt={projectTitle} className='w-full h-auto border-2 border-solid border-dark dark:border-light rounded-[0.5rem]' whileHover={{ scale: 1.10 }} transition={{ duration: 0.5 }} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full xl:pl-0 xl:pt-6'>
          <span className='text-primary dark:text-primary font-semibold text-xl md:text-lg sm:text-base xs:text-sm'>{projectType}</span>
          <Link href={projectURL} target={"_blank"} className='hover:underline underline-offset-4 text-dark dark:text-light'>
            <h2 className='mt-2 w-full text-left text-3xl font-bold text-dark dark:text-light md:text-2xl sm:text-xl xs:text-lg xxxs:text-base'>{projectTitle}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm xs:text-xs xxxs:text-[0.65rem]'>{projectDescription}</p>

          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={projectURL} target={"_blank"}
              className='rounded-lg p-2 px-6 bg-dark text-light dark:bg-light dark:text-dark text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light duration-700 sm:px-4 sm:text-base xs:text-sm xxs:px-3 xxxs:px-2 xxxs:text-xs'>Visit Project</Link>
            <MotionLink href={gitHubURL} target={"_blank"} whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-10 ml-4 text-dark dark:text-light md:w-8'> <GithubIcon /> </MotionLink>
          </div>

        </div>

      </article>
    </Tilt>
  );
};

const SmallScaleProject = ({ projectImg, projectType, projectTitle, projectDescription, gitHubURL, projectURL }) => {

  const { mode } = useTheme();

  return (
    <Tilt glareEnable={true} glareColor={`${mode === 'light' ? '#FFFFFF' : '#FFFFFF'}`} glareBorderRadius='1rem'>
      <article className='w-full h-auto flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

        <Link href={projectURL} target={"_blank"} className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={projectImg} alt={projectTitle} className='w-full h-auto border-2 border-solid border-dark dark:border-light rounded-[0.5rem] bg-light dark:bg-dark' whileHover={{ scale: 1.10 }} transition={{ duration: 0.5 }} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-primary dark:text-primary font-semibold text-xl md:text-lg sm:text-base xs:text-sm'>{projectType}</span>
          <Link href={projectURL} target={"_blank"} className='hover:underline underline-offset-4 text-dark dark:text-light'>
            <h2 className='mt-2 w-full text-left text-3xl font-bold md:text-2xl sm:text-xl xs:text-lg xxxs:text-base'>{projectTitle}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm xs:text-xs xxxs:text-[0.65rem]'>{projectDescription}</p>

          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={projectURL} target={"_blank"}
              className='rounded-lg p-2 px-6 bg-dark text-light dark:bg-light dark:text-dark text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light duration-700 sm:px-4 sm:text-base xs:text-sm xxs:px-3 xxxs:px-2 xxxs:text-xs'>Visit Project</Link>
            <MotionLink href={gitHubURL} target={"_blank"} whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-10 text-dark dark:text-light md:w-8'> <GithubIcon /> </MotionLink>
          </div>

        </div>

      </article>
    </Tilt>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Ryan Abeysinghe</title>
        <meta name='description' content='' />
      </Head>

      <PageTransition />

      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16 xl:pt-16'>
          <TextAnimation text="Inspire Change Through Design!" className='!text-7xl mb-16 2xl:!text-6xl xl:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl xxxs:!text-2xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-0 md:gap-y-24 sm:gap-x-0'>

            <div className='col-span-12'>
              <LargeScaleProject projectImg={RandSConstructionsWebsiteProj} projectType='Featured Project' projectTitle='R & S Constructions LLC Website'
                projectDescription='Fully Responsive Website using JavaScript, HTML, and CSS utilizing React JavaScript Framework. R & S Constructions LLC is a full-service residential design and build remodeling firm. Specializing in new construction, custom home building and residential renovations in the Maryland area.'
                gitHubURL='https://github.com/ryanabeysinghe/RandSConstructionsLLC-Website' projectURL='https://randsconstructions.com/' />
            </div>

            <div className='col-span-6 lg:col-span-12'>
              <SmallScaleProject projectImg={PersonalPortfolioWebsiteProj} projectType='Website' projectTitle='Personal Portfolio'
                projectDescription='Responsive Personal Portfolio Website using Next.js, JavaScript, Tailwind CSS, HTML, and Vercel utilizing React JavaScript Framework.'
                gitHubURL='https://github.com/ryanabeysinghe/Personal-Portfolio' projectURL='http://ryanabeysinghe.com/' />
            </div>

            <div className='col-span-6 lg:col-span-12'>
              <SmallScaleProject projectImg={COVID19DataScienceProj} projectType='Website' projectTitle='COVID-19 Data Science Analysis'
                projectDescription='Data Science analysis leveraging Python, HTML, and Markdown within a Jupyter Notebook to assess the impact of maintaining a healthier diet on individuals’ ability to combat COVID-19.'
                gitHubURL='https://github.com/ryanabeysinghe/ryanabeysinghe.github.io' projectURL='https://ryanabeysinghe.github.io/Final_Tutorial' />
            </div>

            <div className='col-span-12'>
              <LargeScaleProject projectImg={TerpExchangeProj} projectType='iOS App' projectTitle='TerpExchange'
                projectDescription='Developed iOS app in Swift, enabling students to buy and sell products seamlessly within the UMD campus community. Leveraged Google Firebase Authentication to establish a robust student-affiliated authentication system among UMD students, mitigating scam risks and ensuring secure access. '
                gitHubURL='/' projectURL='/' />
            </div>

            {/* <div className='col-span-6'>
              Project-3
            </div>

            <div className='col-span-6'>
              Project-4
            </div>

            <div className='col-span-12'>
              Featured Project
            </div> */}

          </div>

        </Layout>
        <RA />
      </main>
    </>
  );
};

export default projects;