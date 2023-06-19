import React from 'react';

import Head from 'next/head';

import PageTransition from '@/components/PageTransition'

import { motion, useScroll } from 'framer-motion';
import Layout from '@/components/Layout';
import TextAnimation from '@/components/TextAnimation';

import { FormControl, FormLabel } from '@chakra-ui/react';

const Contact = () => {

  const { scrollYProgress } = useScroll();

  return (
    <>
    <Head>
      <title>Contact | Ryan Abeysinghe</title>
      <meta name='description' content="Contact | Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
      <meta name="keywords" content="Contact | Ryan Abeysinghe, Contact, Contact Ryan Abeysinghe, Contact Ryan Abeysinghe Personal Portfolio, Contact Ryan Abeysinghe Portfolio" />
      <meta property="og:title" content="Contact | Ryan Abeysinghe" />
      <meta property="og:description" content="Contact | Ryan Abeysinghe's Personal Portfolio using Next.js, JavaScript, Tailwind CSS, HTML, Nodemailer and Vercel utilizing JavaScript React Framework" />
      <link rel="canonical" href="https://ryanabeysinghe.com/contact" key="canonical" />
    </Head>

    <PageTransition />

    <motion.div className='fixed top-0 left-0 right-0 h-[0.5rem] bg-primary origin-[0%] z-40' style={{ scaleX: scrollYProgress }} />

    <main>
      <Layout className='pt-16'>
        
        <TextAnimation text="Get In Touch!" className='mb-16 2xl:!text-7xl xl:!text-6xl md:!text-5xl xs:!text-4xl xxxs:!text-3xl sm:mb-8' />

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
        </FormControl>

      </Layout>
    </main>
    </>
  );
};

export default Contact;