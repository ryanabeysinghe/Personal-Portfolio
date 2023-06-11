import Layout from '@/components/Layout'
import TextAnimation from '@/components/TextAnimation'
import RA from '@/components/RA'

import Head from 'next/head'
import Image from 'next/image'
import profilePicture from '../../public/images/profile/portfolioPFP.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/SocialMediaIcons'
import programmingSymbol from '../../public/images/svgs/programmingSymbol.svg'

import tempPic from '../../public/images/profile/tempPic.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Abeysinghe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'> 
              <Image src={tempPic} alt="Ryan Abeysinghe" className='w-full h-auto pointer-events-none lg:hidden md:inline-block md:w-full' priority 
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <TextAnimation text="Hello, I'm Ryan!" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <TextAnimation text="I'm a Software Engineer based in College Park, Maryland. As a full-stack developer, my unwavering focus is on transforming concepts into cutting-edge web applications. 
                Delve into my most recent experience, projects, and education, showcasing my knowledge in React using Next.js, JavaScript, HTML, CSS, and the field of software engineering. " 
                className='my-4 text-base font-medium !text-left capitalize md:text-sm sm:text-xs'/>

              {/* <p className='my-4 text-base font-medium'>
                I'm a Software Engineer based in College Park, Maryland. As a full-stack developer, my unwavering focus is on transforming concepts into cutting-edge web applications. 
                Delve into my most recent experience, projects, and education, showcasing my knowledge in React using Next.js, JavaScript, HTML, CSS, and the field of software engineering. 
              </p> */}

              <div className='flex items-center self-start mt-2 lg:self-center'> 
                <Link href="/resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' download={false}>
                  Resume <LinkArrow className='w-6 ml-1'/>
                </Link>
                {/* <Link href="/projects" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>Projects</Link> */}
                <Link href="/contact" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'>Contact</Link>
              </div>

            </div>
          </div>
        </Layout>

        <RA />
        <div className='absolute right-8 bottom-8 inline-block w-32 pointer-events-none md:hidden'>
          <Image src={programmingSymbol} alt="Programming Picture Symbol" className='w-full h-auto fill-dark dark:fill-light' priority 
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
        </div>
      </main>
    </>
  )
}
