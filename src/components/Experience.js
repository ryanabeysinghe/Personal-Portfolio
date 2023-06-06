import React from 'react';
import TextAnimation from './TextAnimation';

const ExperienceDescription = ({ occupation, company, companyURL, date, address, description }) => {

    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{occupation}</h3>

            <div>
                <a href={companyURL} target={'_blank'} className='text-customRed uppercase font-semibold text-2xl'>{company}</a>
            </div>

            <span className='capitalize font-medium text-dark/75'>
                {date} | <i>{address}</i>
            </span>

            <ul className='font-medium w-full'>
                {description.map((bulletPoint, index) => (
                    <li key={index} className='ml-6'>
                        &bull; {bulletPoint}
                    </li>
                ))}
            </ul>
        </div>
    </li>
}

const Experience = () => {
    return (
        <>
            <div className='my-64'>
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

                <div className='w-[75%] mx-auto relative'>

                    <ul>
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

            </div>
        </>
    );
};

export default Experience;