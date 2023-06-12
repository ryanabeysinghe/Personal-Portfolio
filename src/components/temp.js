import React from 'react'

const temp = () => {
    return (
        <div>
            <div className='flex items-center justify-between w-full lg:flex-col'>

                {/* <div className='w-1/2 md:w-full'> 
  <Image src={tempPic} alt="Ryan Abeysinghe" className='w-full h-auto pointer-events-none lg:hidden md:inline-block md:w-full' priority 
  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
</div> */}

                <div className='w-[35%] md:w-full mt-28 ml-6'>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8 lg:hidden md:inline-block md:w-full'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light lg:hidden md:inline-block md:w-full' />
                        <Image src={portraitPicture} alt='Ryan Abeysinghe Profile Picture' className='w-full h-auto lg:hidden md:inline-block md:w-full rounded-2xl pointer-events-none' priority
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                    </div>
                </div>

                {/* <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>
  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
  <Image src={portraitPicture} alt='Ryan Abeysinghe Profile Picture' className='w-full h-auto rounded-2xl pointer-events-none' priority
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
</div> */}

                <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center lg:-mt-64'>
                    <TextAnimation text="Hello, I'm Ryan!" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xxxs:!text-left' />
                    <TextAnimation text="I'm a Software Engineer based in College Park, Maryland. As a full-stack developer, my unwavering focus is on transforming concepts into cutting-edge web applications. 
    Delve into my most recent experience, projects, and education, showcasing my knowledge in React using Next.js, JavaScript, HTML, CSS, and the field of software engineering. "
                        className='my-4 text-base font-medium !text-left capitalize md:text-sm sm:text-xs' />

                    {/* <p className='my-4 text-base font-medium'>
    I'm a Software Engineer based in College Park, Maryland. As a full-stack developer, my unwavering focus is on transforming concepts into cutting-edge web applications. 
    Delve into my most recent experience, projects, and education, showcasing my knowledge in React using Next.js, JavaScript, HTML, CSS, and the field of software engineering. 
  </p> */}

                    <div className='flex items-center self-start mt-2 lg:self-center'>
                        <Link href="/resume.pdf" target={'_blank'} className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' download={false}>
                            Resume <LinkArrow className='w-6 ml-1' />
                        </Link>
                        {/* <Link href="/projects" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>Projects</Link> */}
                        <Link href="/contact" className='ml-4 bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-700 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'>Contact</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default temp