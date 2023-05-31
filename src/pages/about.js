import React from 'react'
import Head from 'next/head'
import TextAnimation from '@/components/TextAnimation'
import Layout from '@/components/Layout';
import portraitPicture from '../../public/images/profile/portraitPicture.jpg'
import Image from 'next/image';

const About = () => {
    return (
        <>
            <Head>
                <title>About | Ryan Abeysinghe</title>
                <meta name='description' content='About Ryan Abeysinghe' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <TextAnimation text="Never Stop Dreaming!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-center justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                            <p className='font-medium '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam.
                            </p>

                            <p className='mt-4 font-medium'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Et tortor at risus viverra adipiscing at in.
                            </p>

                            <p className='mt-4 font-medium'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Blandit massa enim nec dui nunc mattis enim.
                            </p>

                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={portraitPicture} alt='Ryan Abeysinghe Profile Picture' className='w-full h-auto rounded-2xl pointer-events-none' />
                        </div>


                    </div>

                </Layout>

            </main>
        </>
    );
};

export default About