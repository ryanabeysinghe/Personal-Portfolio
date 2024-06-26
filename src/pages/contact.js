import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

import PageTransition from '@/components/PageTransition'
import Layout from '@/components/Layout';
import TextAnimation from '@/components/TextAnimation';
import { useTheme } from '@/components/ThemeContext';
import { sendContactForm } from '@/lib/api';
import RA from '@/components/RA';


const initValues = { name: "", email: "", subject: "", message: "" };

const initialState = { isLoading: false, error: "", values: initValues };

const Contact = () => {

  const { scrollYProgress } = useScroll();

  const toast = useToast();

  const [state, setState] = useState(initialState);

  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }));

  // const [resize, setResize] = React.useState('vertical');

  const { mode } = useTheme();

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setTouched({});
      setState(initialState);
      toast({
        title: "Message Sent.",
        status: "success",
        duration: 3000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }

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

      <main className='w-full flex flex-col items-center justify-center mb-16'>
        <Layout className='pt-16'>

          <TextAnimation text="Get In Touch!" className='mb-16 !text-7xl lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl xxs:!text-3xl sm:mb-8' />

          {/* <Container> */}
          <div className='w-full max-w-[650px] mx-auto flex flex-col h-auto relative items-center justify-between border-2 border-solid rounded-br-3xl rounded-3xl shadow-2xl p-12 border-dark bg-light dark:border-light dark:bg-dark md:max-w-[550px] sm:max-w-[450px] xs:max-w-[350px] xs:p-8 xxs:max-w-[300px] xxs:p-6'>

          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]' />

            <FormControl isRequired isInvalid={touched.name && !values.name} mb={8}>
              {/* <FormLabel>Name</FormLabel> */}
              <Input type='text' name='name' placeholder='Name *' _placeholder={{ color: `${mode === 'light' ? '#808080' : '#808080'}` }} style={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} fontWeight='medium' fontSize={["xs", "sm", "md", "lg"]} borderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} focusBorderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} _hover={{ borderColor: `${mode === 'light' ? '#FA8072' : '#FA8072'}` }} borderWidth='2px' value={values.name} onChange={handleChange} onBlur={onBlur} />

              <FormErrorMessage style={{ color: "#FA8072" }}  fontWeight='semibold' fontSize={["xs", "sm", "md", "lg"]} alignItems='center' mt={5} className='animate-pulse'>Name field is required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email} mb={8}>
              {/* <FormLabel>Email</FormLabel> */}
              <Input type='email' name='email' placeholder='Email *' _placeholder={{ color: `${mode === 'light' ? '#808080' : '#808080'}` }} style={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} fontWeight='medium' fontSize={["xs", "sm", "md", "lg"]} borderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} focusBorderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} _hover={{ borderColor: `${mode === 'light' ? '#FA8072' : '#FA8072'}` }} borderWidth='2px' value={values.email} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage style={{ color: "#FA8072" }} fontWeight='semibold' fontSize={["xs", "sm", "md", "lg"]} mt={5} className='animate-pulse'>Email field is required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={8}>
              {/* <FormLabel>Subject</FormLabel> */}
              <Input type='text' name='subject' placeholder='Subject *' _placeholder={{ color: `${mode === 'light' ? '#808080' : '#808080'}` }} style={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} fontWeight='medium' fontSize={["xs", "sm", "md", "lg"]} borderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} focusBorderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} _hover={{ borderColor: `${mode === 'light' ? '#FA8072' : '#FA8072'}` }} borderWidth='2px' value={values.subject} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage style={{ color: "#FA8072" }} fontWeight='semibold' fontSize={["xs", "sm", "md", "lg"]} mt={5} className='animate-pulse'>Subject field is required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.message && !values.message} mb={8}>
              {/* <FormLabel>Message</FormLabel> */}
              <Textarea type='text' name='message' placeholder='Message *' _placeholder={{ color: `${mode === 'light' ? '#808080' : '#808080'}` }} style={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} fontWeight='medium' fontSize={["xs", "sm", "md", "lg"]} borderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} focusBorderColor={{ color: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} _hover={{ borderColor: `${mode === 'light' ? '#FA8072' : '#FA8072'}` }} borderWidth='2px' rows={8} value={values.message} onChange={handleChange} onBlur={onBlur} />
              <FormErrorMessage style={{ color: "#FA8072" }} fontWeight='semibold' fontSize={["xs", "sm", "md", "lg"]} mt={5} className='animate-pulse'>Message field is required</FormErrorMessage>
            </FormControl>

            <Button variant='outline' style={{ color: "#FA8072" }} fontWeight='bold' fontSize={["xs", "sm", "md", "lg"]} width={["80px", "140px", "200px", "200px"]} height={["30px", "40px", "50px", "50px"]} borderColor={{ color: "#FA8072" }} borderWidth='2px' _hover={{ backgroundColor: `${mode === 'light' ? '#28282B' : '#FFF1E6'}` }} transition='all 0.7s' isLoading={isLoading} disabled={!values.name || !values.email || !values.subject || !values.message} onClick={onSubmit}>SUBMIT</Button>

            {error && (
              <Text style={{color: "#FA8072"}} mt={8} mb={0} fontSize={["xs", "sm", "md", "lg"]} fontWeight='semibold' className='animate-pulse'>
                {error}
              </Text>
            )}
          </div>
        
        </Layout>

        <RA />
      </main>
    </>
  );
};

export default Contact;