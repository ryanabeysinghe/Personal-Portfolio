import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import TextAnimation from '@/components/TextAnimation'
import Link from 'next/link';
import { GithubIcon } from '@/components/SocialMediaIcons'
import Image from 'next/image';
import RandSConstructionsWebsiteProj from '../../public/images/projects/RandSConstructionsWebsiteProj.png';
import PersonalPortfolioWebsiteProj from '../../public/images/projects/PersonalPortfolioWebsiteProj.png';
import COVID19DataScienceProj from '../../public/images/projects/COVID19DataScienceProj.png';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const LargeScaleProject = ({ projectImg, projectType, projectTitle, projectDescription, gitHubURL, projectURL }) => {

  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
      <Link href={projectURL} target={"_blank"} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={projectImg} alt={projectTitle} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{projectType}</span>
        <Link href={projectURL} target={"_blank"} className='hover:underline underline-offset-2'>
          <h2 className='mt-2 w-full text-left text-3xl font-bold'>{projectTitle}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{projectDescription}</p>

        <div className='mt-2 flex items-center'>
          <Link href={projectURL} target={"_blank"} 
          className='rounded-lg p-2 px-6 bg-dark text-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700'>Visit Project</Link>
          <MotionLink href={gitHubURL} target={"_blank"} whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-10 ml-4'> <GithubIcon /> </MotionLink>
        </div>

      </div>

    </article>
  );
};

const SmallScaleProject = ({projectImg, projectType, projectTitle, projectDescription, gitHubURL, projectURL}) => {

  return (
   <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <Link href={projectURL} target={"_blank"} className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={projectImg} alt={projectTitle} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{projectType}</span>
        <Link href={projectURL} target={"_blank"} className='hover:underline underline-offset-2'>
          <h2 className='mt-2 w-full text-left text-3xl font-bold'>{projectTitle}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{projectDescription}</p>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={projectURL} target={"_blank"} 
          className='rounded-lg p-2 px-6 bg-dark text-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700'>Visit Project</Link>
          <MotionLink href={gitHubURL} target={"_blank"} whileHover={{y: -4}} whileTap={{scale: 0.8}} className='w-10'> <GithubIcon /> </MotionLink>
        </div>

      </div>

   </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Ryan Abeysinghe</title>
        <meta name='description' content='About Ryan Abeysinghe' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <TextAnimation text="Inspire Change Through Design!" className='!text-7xl mb-16' />

          <div className='grid grid-cols-12 gap-24'>

            <div className='col-span-12'>
              <LargeScaleProject projectImg={RandSConstructionsWebsiteProj} projectType='Featured Project' projectTitle='R & S Constructions LLC Website'
                projectDescription='Fully Responsive Website using JavaScript, HTML, and CSS utilizing React JavaScript Framework. R & S Constructions LLC is a full-service residential design and build remodeling firm. Specializing in new construction, custom home building and residential renovations in the Maryland area.'
                gitHubURL='https://github.com/ryanabeysinghe/RandSConstructionsLLC-Website' projectURL='https://randsconstructions.com/' />
            </div>

            <div className='col-span-6'>
              <SmallScaleProject projectImg={PersonalPortfolioWebsiteProj} projectType='Website' projectTitle='Personal Portfolio'
                projectDescription='Responsive Personal Portfolio Website using Next.js, JavaScript, Tailwind CSS, HTML, and Vercel utilizing React JavaScript Framework.'
                gitHubURL='https://github.com/ryanabeysinghe/Personal-Portfolio' projectURL='http://ryanabeysinghe.com/' />
            </div>

            <div className='col-span-6'>
              <SmallScaleProject projectImg={COVID19DataScienceProj} projectType='Website' projectTitle='COVID-19 Data Science Analysis'
                projectDescription='Data Science analysis leveraging Python, HTML, and Markdown within a Jupyter Notebook to assess the impact of maintaining a healthier diet on individuals’ ability to combat COVID-19.'
                gitHubURL='https://github.com/ryanabeysinghe/ryanabeysinghe.github.io' projectURL='https://ryanabeysinghe.github.io/Final_Tutorial' />
            </div>

            <div className='col-span-12'>
              <LargeScaleProject projectImg={RandSConstructionsWebsiteProj} projectType='iOS App' projectTitle='TerpExchange'
                projectDescription='Developed iOS app in Swift, enabling students to buy and sell products seamlessly within the UMD campus community. Leveraged Google Firebase Authentication to establish a robust student-affiliated authentication system among UMD students, mitigating scam risks and ensuring secure access. '
                gitHubURL='/' projectURL='/' />
            </div>

            {/* <div className='col-span-6'>
              Project-3
            </div>

            <div className='col-span-6'>
              Project-4
            </div> */}

          </div>


        </Layout>
      </main>
    </>
  );
};

export default projects;