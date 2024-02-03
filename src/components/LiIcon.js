import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    <figure className='absolute left-0 md:right-48 xs:right-44 stroke-colors-dark '>
        <svg className=' md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width='75' height='75' viewBox='10 0 100 100'>
            <circle cx='55.5' cy="50" r="30" className=' stroke-1 stroke-colors-primary fill-none' />
            <motion.circle cx='55.5' cy="50" r="20" className=' stroke-[2px] fill-colors-light'
            style={{
                pathLength: scrollYProgress
            }}
            />
            <circle cx='55.5' cy="50" r="10" className=' animate-pulse stroke-1 fill-colors-primary' />
        </svg>
    </figure>
  )
}

export default LiIcon
