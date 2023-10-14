import { motion ,useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'
import { ResumeData } from './ResumeData'

const Details = ({type, time, place}) => {
        const ref = useRef(null);
    return ( 
    <>
            <li ref={ref} className=' my-8 first:mt-0 last:mb-0 
            w-[80%] mx-auto flex flex-col
             items-start justify-between 
              text-colors-dark
               dark:text-colors-light md:w-[80%]'>
                <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className=' capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className=' capitalize font-medium text-colors-dark/50 dark:text-colors-light/40 xs:text-sm'>
                    {time} | {place}
                </span>
            </motion.div>
        </li>
        </>
    )
}

export const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    // Create an array of education data objects from ResumeData
  const educationData = [
    {
      type: ResumeData.education[0].major1,
      time: ResumeData.education[0].date1,
      place: ResumeData.education[0].school1,
    },
    {
      type: ResumeData.education[0].major2,
      time: ResumeData.education[0].date2, // Add the date for the second education here
      place: ResumeData.education[0].school2,
    },
    {
        type: ResumeData.education[0].major3,
        time: ResumeData.education[0].date3, // Add the date for the second education here
        place: ResumeData.education[0].school3,
      },
      {
        type: ResumeData.education[0].major4,
        time: ResumeData.education[0].date4, // Add the date for the second education here
        place: ResumeData.education[0].school4,
      },
  ];

  return (
    <div className=' my-5'> 
        <h2 className='font-bold text-6xl mb-10 w-full text-center text-colors-dark dark:text-colors-light
        md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>

        <div ref={ref} className=' w-[80%] mx-auto relative lg:w-[90] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress }} className='absolute left-8 md:left-[32px] xs:left-[20px] top-0 w-[4px] h-full
             bg-colors-dark dark:bg-colors-primary origin-top md:w-[2px]' />
            <ul className=' w-full mx-auto flex flex-col items-start justify-between ml-4 xs:ml-2'>
                
            {educationData.map((education, index) => (
            <Details
              key={index} // Make sure to provide a unique key for each Details component
              type={education.type}
              time={education.time}
              place={education.place}
            />
          ))}
            </ul>
        </div>
    </div>
  )
}
