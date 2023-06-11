import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { GithubIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '@/components/SocialMediaIcons'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark text-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>&copy; {new Date().getFullYear()} ~ All Rights Reserved</span>
                <div className='flex items-center lg:py-2 '>
                    Built With <span className='text-primary dark:text-primary text-2xl px-1'>&#10084;</span>by&nbsp;<Link href="/" className='underline underline-offset-4'>Ryan Abeysinghe</Link>
                </div>

                <div className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.linkedin.com/in/ryan-abeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mr-3'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/ryanabeysinghe" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 mx-3'>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/ryanabeysinghe/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.8 }} className='w-6 ml-3'>
                        <InstagramIcon />
                    </motion.a>
                </div>

                {/* <Link href="">Say Hello</Link> */}

            </Layout>
        </footer>
    );
};

export default Footer;