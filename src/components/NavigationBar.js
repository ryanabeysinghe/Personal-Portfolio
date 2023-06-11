import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, YouTubeIcon } from '@/components/SocialMediaIcons'
import { motion } from 'framer-motion'
import { useTheme } from 'styled-components'
import useSwitchTheme from './hooks/useSwitchTheme'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

const NavigationBar = () => {

    const [mode, setMode] = useSwitchTheme();

    return (
        <header className='w-full px-32 py-9 font-medium flex items-center justify-between border-b-2 border-solid border-dark dark:text-light dark:border-light'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4 uppercase' />
                <CustomLink href="/about" title="About" className='mx-4 uppercase' />
                <CustomLink href="/projects" title="Projects" className='mx-4 uppercase' />
                <CustomLink href="/contact" title="Contact" className='ml-4 uppercase' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://www.linkedin.com/in/ryan-abeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mr-3'>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/ryanabeysinghe" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mx-3'>
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.instagram.com/ryanabeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 ml-3'>
                    <InstagramIcon />
                </motion.a>

                <button onClick={ () => setMode(mode === 'light' ? 'dark' : 'light') } className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} `}>
                    {
                        mode === 'dark' ?
                        <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
                    }

                </button>

            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    );
};

export default NavigationBar;