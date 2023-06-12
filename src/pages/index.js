import Layout from '@/components/Layout'
import TextAnimation from '@/components/TextAnimation'
import RA from '@/components/RA'

import Head from 'next/head'
import Image from 'next/image'
import profilePicture from '../../public/images/profile/portfolioPFP.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/SocialMediaIcons'
import programmingSymbol from '../../public/images/svgs/programmingSymbol.png'

import portraitPicture from '../../public/images/profile/portraitPicture.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Abeysinghe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center text-dark dark:text-light'>
        <Layout className='pt-16 xl:pt-16 md:pt-16 sm:pt-8'>

          <TextAnimation text="Hello, I'm Ryan!" className='mb-16 !text-7xl lg:!text-7xl md:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            
            <div className='col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mt-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Welcome</h2>
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

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center xl:mt-8 md:order-3 md:pb-16 xs:flex-col xs:-mb-14'>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                {/* <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                  +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of F/E experience</h2> */}
                <Link href="/resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-3 sm:text-sm xs:mb-12 xs:ml-4 xs:text-lg xs:px-8' download={false}>
                  Resume <LinkArrow className='w-6 ml-1 sm:w-5' />
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