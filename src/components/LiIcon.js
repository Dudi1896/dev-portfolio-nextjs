import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    <figure className='absolute left-0 stroke-colors-dark '>
        <svg width='75' height='75' viewBox='0 0 100 100'>
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
