import { motion } from 'framer-motion';

const Tech =({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-colors-dark dark:bg-colors-primary
       text-colors-light py-3 px-6 shadow-colors-dark cursor-pointer absolute
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
       xs:text-dark xs:dark:text-light xs:font-bold'
     whileHover={{ scale: 1.05 }}
     initial={{x:0,y:0}}
     whileInView={{x:x, y:y, transition: {duration: 1.5} }}
    //  transition={{duration: 1.5}}
     viewport={{once: true}}
   >
    {name}
   </motion.div>
  )

}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-20 w-full text-center dark:text-colors-light md:text-6xl md:10'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark dark:bg-colors-light
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-colors-dark dark:bg-colors-primary
         text-colors-light p-8 shadow-colors-dark cursor-pointer
         lg:p-6 md-p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Tech name='TailWindCSS' x='-32vw' y='-12vw'/>
        <Tech name='NodeJs' x='-8vw' y='18vw'/>
        <Tech name='Python' x='-29vw' y='17vw'/>
        <Tech name='Spring Boot' x='7vw' y='23vw'/>
        <Tech name='ElasticSearch' x='25vw' y='-20vw'/>
        <Tech name='Docker' x='32vw' y='5vw'/>
        <Tech name='Angular' x='0vw' y='-20vw'/>
        <Tech name='Ansible' x='35vw' y='-6vw'/>
        <Tech name='NextJs' x='-23vw' y='-4vw'/>
        <Tech name='AWS' x='32vw' y='18vw'/>
        <Tech name='MySQL' x='18vw' y='16vw'/>
        <Tech name='Wordpress' x='19vw' y='-9vw'/>
        <Tech name='Contentful' x='-18vw' y='-20vw'/>
        <Tech name='GraphQL' x='-36vw' y='3vw'/>


      </div>
    </>
  );
};

export default Skills;
