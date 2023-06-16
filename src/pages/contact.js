import React from 'react';

import Head from 'next/head';

import PageTransition from '@/components/PageTransition'

import { motion, useScroll } from 'framer-motion';

const Contact = () => {

  const { scrollYProgress } = useScroll();

  return (
    <>
    <Head>
      <title>Contact | Ryan Abeysinghe</title>
      <meta name='description' content='Contact | Ryan Abeysinghe' />
      <meta name="keywords" content="Contact | Ryan Abeysinghe, Contact, Contact Ryan Abeysinghe, Contact Ryan Abeysinghe Personal Portfolio, Contact Ryan Abeysinghe Portfolio" />
      <meta property="og:title" content="Contact | Ryan Abeysinghe" />
      <meta property="og:description" content="Contact Page for Ryan Abeysinghe" />
      <link rel="canonical" href="https://ryanabeysinghe.com/contact" key="canonical" />
    </Head>

    <PageTransition />

    <motion.div className='fixed top-0 left-0 right-0 h-[0.5rem] bg-primary origin-[0%] z-40' style={{ scaleX: scrollYProgress }} />

    <main>
      <h2 className='text-dark dark:bg-light'>Give me some time ~ I am still coding!!</h2>
    </main>
    </>
  );
};

export default Contact;