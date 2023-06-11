import React, { useRef } from 'react';
import TextAnimation from './TextAnimation';
import { motion, useScroll } from 'framer-motion';
import ProgressIndicator from './ProgressIndicator';

const ExperienceDescription = ({ occupation, company, companyURL, date, address, description }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <ProgressIndicator reference={ref} />

            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}} className='md:-mt-2 xs:-mt-[0.5rem]' >
                <h3 className='capitalize font-bold text-2xl text-dark dark:text-light sm:text-xl xs:text-base xxs:text-sm'>{occupation}</h3>

                <div>
                    <a href={companyURL} target={'_blank'} className='text-primary dark:text-primary uppercase font-semibold text-xl sm:text-xl xs:text-base xxs:text-sm'>{company}</a>
                </div>

                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-lg xs:text-sm xxs:text-xs'>
                    {date} | <i>{address}</i>
                </span>

                <ul className='font-medium w-full text-lg text-dark dark:text-light md:text-sm xxs:text-xs'>
                    {description.map((bulletPoint, index) => (
                        <li key={index} className='ml-6'>
                            &bull; {bulletPoint}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Experience = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <>
            <div className='my-64 md:my-32'>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    <h2 className='font-bold text-7xl mb-32 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg md:mb-16'>&lt;div className = 'experience'&gt;</h2>
                </motion.div>

                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />

                    <ul className='w-full flex flex-col items-start justify-between ml-24 md:ml-8 xs:ml-8'>

                        <ExperienceDescription
                            occupation='full stack developer intern' company='consumer technology association' companyURL='https://www.cta.tech/' date='June 2023 - Present' address='Arlington, VA'
                            description={[
                                'Develop and maintain codebase for CTA/CES websites and related web initiatives',
                                'Troubleshoot and debug web applications; leverage external experts for complex development needs',
                                'Supports maintenance of websites by actively operating in CMS',
                            ]} />

                        <ExperienceDescription
                            occupation='software developer intern' company='finra' companyURL='https://www.finra.org/#/' date='May 2022 - August 2022' address='Rockville, MD'
                            description={[
                                'Collaborated with FINRA CAT’s (consolidated audit trail) cutting-edge technical team, enhanced and maintained application code through requirement reviews, test cases, and utilizing AWS services, Java, SQL, and Python programming languages',
                                'Architected and integrated a scalable STRESS testing infrastructure for FINRA CAT’s application, utilizing AWS cloudbased resources to support high-volume integration and penetration testing; increased test coverage by 3%',
                                'Facilitated seamless integration and maintenance of code/scripts within CAT’s team repository, leveraging Jenkins pipelines for efficient continuous integration/delivery (CI/CD), enabling streamlined code deployment to production environments',
                            ]} />

                        <ExperienceDescription
                            occupation='freelance web developer' company='r & s constructions llc' companyURL='https://randsconstructions.com/' date='July 2022 - Present' address='Gaithersburg, MD'
                            description={[
                                'Developed fully responsive website using JavaScript, HTML, and CSS utilizing React JavaScript Framework to elevate user experience (UX) for general contracting purposes',
                                'Executed SEO best practices to optimize company’s web traffic by establishing sitemap, meta tags, robots.txt, images, internal links, semantic HTML, titles/headings, optimized keywords',
                                'Established Domain, Domain Nameservers, SSL certificate, Cloudflare CDN, and DNS Zone editor configuration utilizing web hosting provider Hostinger',
                            ]} />


                        <ExperienceDescription
                            occupation='help desk analyst' company='westat' companyURL='https://www.westat.com/' date='July 2021 - May 2022' address='Rockville, MD'
                            description={[
                                'Primary focus on PC/Laptop support, which includes new system preparation, system re-imaging, problem troubleshooting, repair, and shipping logistics',
                                'Established secure Wi-Fi, LAN, and VPN networks at remote locations, leading client/server configuration of crucial infrastructure to ensure seamless business operations',
                                'Identified system hardware, network infrastructure, and connectivity issues that prevented execution of user-initiated tasks',
                            ]} />

                    </ul>

                </div>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring'}}>
                    <h2 className='font-bold text-7xl mt-32 w-full text-left text-dark dark:text-light xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg md:mt-16'>&lt;/div&gt;</h2>
                </motion.div>

            </div>
        </>
    );
};

export default Experience;