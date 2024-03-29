import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import { useRouter } from 'next/router';

import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeContext';
import { ChakraProvider } from '@chakra-ui/react';


const montserratFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='author' content='Ryan Abeysinghe' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      {/* <main className={`${montserratFont.variable} max-w-[1920px] mx-auto font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <ThemeProvider>
          <NavigationBar />
          <AnimatePresence initial={false} mode='wait'>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </main> */}

      <main className={`${montserratFont.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <ChakraProvider>
          <ThemeProvider>
            <div className='max-w-[1920px] mx-auto'>
              <NavigationBar />
              <AnimatePresence initial={false} mode='wait'>
                <Component key={router.asPath} {...pageProps} />
              </AnimatePresence>
              <Footer />
            </div>
          </ThemeProvider>
        </ChakraProvider>
      </main>
    </>
  );
};