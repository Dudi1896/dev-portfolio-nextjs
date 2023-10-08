import { motion ,useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null);
    return ( 
    <>
            <li ref={ref} className='  text-colors-dark
             dark:text-colors-light
             my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex
              flex-col items-center justify-between
            md:w-[80%]'>
                <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='  text-colors-dark dark:text-colors-light capitalize font-bold text-2xl
                sm:text-xl xs:text-lg'>{position}&nbsp;
                <a target={'_blank'}
                    href={companyLink}
                    className=' text-colors-primary capitalize'>@{company}
                </a>
                </h3>
                <span className=' capitalize font-medium text-colors-dark/50 dark:text-colors-light/40 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className=' font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
        </>
    )
}

export const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className=' my-20 '> 
        <h2 className='font-bold text-8xl mb-20 w-full text-center text-colors-dark dark:text-colors-light md:text-5xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className=' w-[80%] mx-auto relative lg:w-[90%] md:w-full '>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 md:left-[32px] xs:left-[20px] top-0 w-[4px] h-full 
            bg-colors-dark dark:bg-colors-primary origin-top md:w-[2px]' />
            <ul className='w-full mx-auto flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                position='BackEnd Engineer' company='Nikkyzam'
                companyLink='https://www.nikkyzam.com'
                time='Nov 2022-Present' address='Atlanta, GA'
                work="Developed RESTful APIs using Java and Spring Framework to enable efficient communication between client applications and server.  
                Utilized Hibernate ORM (Object-Relational Mapping) for seamless integration with relational databases like MySQL and PostgreSQL.  
                Collaborated with the team to design and develop microservices architecture using Spring Boot, allowing for modular and scalable application development.
                Optimized batch performance by tuning job configurations and utilizing parallel processing techniques.
                "/>

                <Details
                position='Wordpress Developer (Temp)' company='SW Nutrition & Weight Loss'
                companyLink='https://www.sherylwesterman.com'
                time='April 2022-July 2022' address='Atlanta, GA'
                work="Developed RESTful APIs using Java and Spring Framework to enable efficient communication between client applications and server.  
                Utilized Hibernate ORM (Object-Relational Mapping) for seamless integration with relational databases like MySQL and PostgreSQL.  
                Collaborated with the team to design and develop microservices architecture using Spring Boot, allowing for modular and scalable application development.
                Optimized batch performance by tuning job configurations and utilizing parallel processing techniques.
                "/>

                <Details
                position='DevOps Engineer' company='LTN Global'
                companyLink='https://www.ltnglobal.com'
                time='Jun 2019-Feb 2022' address='Atlanta, GA'
                work="Designed System Architecture to facilitate SCTE104,35 & 224 Profiles for high-level broadcast companies including but not limited to Fox, AMC, Sinclair Broadcast, Singtel, Encompass Digital Media, Sling, Comcast & Werner Media  
                Provisioned, orchestrated, and deployed  Software solutions in Vmware Vsphere Environment using Ansible  
                Spearheaded numerous  projects requiring the  migration of  On-premises Servers  to AWS EC2 Instances using Cloudformation Template 
                Wrote Bash script for LTNs Video Metadata Analyzer to optimize SCTE104 Logger processes, reducing  CPU Load by 60%
                "/>
            </ul>
        </div>
    </div>
  )
}
