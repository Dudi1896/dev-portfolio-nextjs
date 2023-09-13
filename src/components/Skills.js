import { motion } from 'framer-motion';

const Tech =({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-colors-dark
       text-colors-light py-3 px-6 shadow-colors-dark cursor-pointer absolute '
     whileHover={{ scale: 1.05 }}
     initial={{x:0,y:0}}
     whileInView={{x:x, y:y }}
     transition={{duration: 1.5}}
     viewport={{once: true}}
   >
    {name}
   </motion.div>
  )

}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-20 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-colors-dark
         text-colors-light p-8 shadow-colors-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          Web Technologies
        </motion.div>

        <Tech name='TailWind CSS' x='-25vw' y='-12vw'/>
        <Tech name='React' x='-5vw' y='-10vw'/>
        <Tech name='NodeJs' x='-8vw' y='9vw'/>
        <Tech name='Python' x='-29vw' y='10vw'/>
        <Tech name='Spring Framework' x='-3vw' y='16vw'/>
        <Tech name='ElasticSearch' x='15vw' y='-15vw'/>
        <Tech name='Docker' x='32vw' y='5vw'/>
        <Tech name='Angular' x='0vw' y='-17vw'/>
        <Tech name='Ansible' x='25vw' y='-6vw'/>
        <Tech name='NextJs' x='-23vw' y='-4vw'/>
        <Tech name='AWS (EC2, S3)' x='-5vw' y='-10vw'/>
        <Tech name='PostgreSQL' x='13vw' y='7vw'/>
        <Tech name='MySQL' x='18vw' y='16vw'/>
        <Tech name='Wordpress' x='14vw' y='-3vw'/>
        <Tech name='Contentful' x='-18vw' y='-16vw'/>
        <Tech name='GraphQL' x='-21vw' y='3vw'/>


      </div>
    </>
  );
};

export default Skills;
