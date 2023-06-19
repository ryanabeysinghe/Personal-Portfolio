import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, YouTubeIcon } from '@/components/SocialMediaIcons'
import { motion } from 'framer-motion'
import useSwitchTheme from './hooks/useSwitchTheme'
import ThemeManager from './ThemeManager';
import { useTheme } from '@/components/ThemeContext';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[2.5px] inline-block w-0 bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[2.5px] inline-block bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    );
};

const NavigationBar = () => {
    const { mode, setMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-9 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 border-b-2 border-solid border-dark dark:border-light lg:pb-[2.6rem]'>

            {/* border-b-2 border-solid border-dark dark:border-light */}

            {/* Responsive Mobile Nav Bar Icon */}

            <button className='flex-col justify-center items-center hidden mt-2 lg:flex' onClick={handleClick} title='Mobile Navigation Bar Button'>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </button>

            {/* Desktop Navigation Menu */}

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="home" className='mr-4' />
                    <CustomLink href="/about" title="about" className='mx-4' />
                    <CustomLink href="/projects" title="projects" className='mx-4' />
                    <CustomLink href="/contact" title="contact" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://github.com/ryanabeysinghe" target={"_blank"} rel="noopener noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-[1.83rem] mr-3 mb-[0.2rem]' aria-label='Github Icon'>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/ryan-abeysinghe/" target={"_blank"} rel="noopener noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-7 mx-3' aria-label='LinkedIn Icon'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/ryanabeysinghe/" target={"_blank"} rel="noopener noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-7 mx-3 mb-[0.01rem]' aria-label='Instagram Icon'>
                        <InstagramIcon />
                    </motion.a>

                    <ThemeManager />

                    {/* <motion.button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 w-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} `} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }}>
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
 
                </nav>
            </div>


            {/* Mobile Navigation Menu */}

            {
                isOpen ?
                    <motion.div initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-10'>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href="/" title="home" className='uppercase my-5' toggle={handleClick} />
                            <CustomMobileLink href="/about" title="about" className='uppercase my-5' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="projects" className='uppercase my-5' toggle={handleClick} />
                            <CustomMobileLink href="/contact" title="contact" className='uppercase my-5' toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap my-5'>
                            <motion.a href="https://github.com/ryanabeysinghe" target={"_blank"} rel="noopener noreferrer" whileTap={{ scale: 0.8 }} className='w-[1.83rem] mr-3 mb-[0.2rem] text-light dark:text-dark' aria-label='Github Icon'>
                                <GithubIcon />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/ryan-abeysinghe/" target={"_blank"} rel="noopener noreferrer" whileTap={{ scale: 0.8 }} className='w-7 mx-3' aria-label='LinkedIn Icon'>
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://www.instagram.com/ryanabeysinghe/" target={"_blank"} rel="noopener noreferrer" whileTap={{ scale: 0.8 }} className='w-7 mx-3 mb-[0.01rem]' aria-label='Instagram Icon'>
                                <InstagramIcon />
                            </motion.a>

                            <motion.button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} whileTap={{ scale: 0.8 }} className={`ml-3 w-7 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} `} title='Mobile Navigation Bar Sun/Moon Button'>
                                {
                                    mode === 'dark' ?
                                        <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
                                }

                            </motion.button>
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    );
};



export default NavigationBar;