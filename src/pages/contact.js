import React from 'react';

import Head from 'next/head';

import PageTransition from '@/components/PageTransition'

const contact = () => {
  return (
    <>
    <Head>
      <title>Contact | Ryan Abeysinghe</title>
      <meta name='description' content='' />
    </Head>

    <PageTransition />

    <main>
      <h2 className='text-dark dark:bg-light'>Give me some time ~ I am still coding!!</h2>
    </main>
    </>
  );
};

export default contact;