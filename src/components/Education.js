import { motion ,useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'

const Details = ({type, time, place, info}) => {
        const ref = useRef(null);
    return ( 
    <>
            <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
                <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className=' capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className=' capitalize font-medium text-colors-dark/50'>
                    {time} | {place}
                </span>
                <p className=' font-medium w-full'>
                    {info}
                </p>
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

  return (
    <div className=' my-20'> 
        <h2 className='font-bold text-8xl mb-20 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className=' w-[80%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-colors-dark origin-top' />
            <ul className=' w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type='A.S Computer Programming'
                time='June 2022-Present'
                 place='Chattahoochee Technical College'
                 info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                 Intelligence."
                />

                <Details
                type='B.S Electrical Engineering'
                time='Jan 2015-Dec 2018' place='Mercer University'
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
                />

            </ul>
        </div>
    </div>
  )
}
