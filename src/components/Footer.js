import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from '@/components/SocialMediaIcons'
import { motion } from 'framer-motion'
import ThemeManager from './ThemeManager';

const Footer = () => {

    return (
        <footer className='w-full border-t-2 border-solid font-medium text-lg border-dark text-dark dark:border-light dark:text-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between xl:py-8 lg:flex-col lg:py-6 md:py-6 sm:py-6'>
                <span>&copy; {new Date().getFullYear()} ~ All Rights Reserved</span>
                <div className='flex items-center lg:py-2 xxxs:text-sm'>
                    Built With <span className='text-primary dark:text-primary text-2xl px-1'>&#10084;</span>by&nbsp;<Link href="/" className='underline underline-offset-[6px]'>Ryan Abeysinghe</Link>
                </div>

                <div className='flex items-center justify-between flex-wrap lg:py-2'>
                    <motion.a href="https://github.com/ryanabeysinghe" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-[1.6rem] mr-3 mb-[0.1rem] lg:mr-5'>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/ryan-abeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mx-3 lg:mx-5'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/ryanabeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mx-3 mb-[0.01rem] lg:mx-5'>
                        <InstagramIcon />
                    </motion.a>

                    <ThemeManager />

                    {/* <motion.button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 w-6 lg:ml-5 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} `} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }}>
                        {
                            mode === 'dark' ?
                                <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
                        }

                    </motion.button> */}

                    {/* <ThemeManager>
                        {({ mode, toggleMode }) => (
                            <motion.button onClick={toggleMode} className={`ml-3 w-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }}>
                                {
                                    mode === 'dark' ?
                                        <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
                                }
                            </motion.button>
                        )}
                    </ThemeManager> */}

                </div>

            </Layout>
        </footer>
    );
};

export default Footer;