import { Layout } from '@/components/Layout';
import profilePic from '../../public/images/profile/portrait.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { GitTree, Pipeline } from './Icons';

export const About = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16 px-16 lg:px-0 sm:px-0 md:px-2'>
            <div className=' flex flex-row xl:flex-col items-start justify-start dark:text-colors-light '>
              <div className='font-medium my-4 max-w-[70%] xl:max-w-full p-4 pr-44 md:pr-0'>
                <h2 className='mb-4 md:mt-10 text-3xl font-bold uppercase text-colors-dark/50 dark:text-colors-primary'>
                  Biography
                </h2>
                Hello, I‘m Denzel, an accomplished Software Engineer, with
                comprehensive skills in Full-Stack and DevOps Engineering.
                Thus far, my career has been defined by a relentless pursuit
                 of excellence in crafting software solutions that drive 
                 businesses forward. My track record is a testament to my passion
                  and unwavering commitment to delivering high-quality work.
              </div>

              <div
                className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-colors-dark
          bg-colors-light p-2 sm:p-3 xl:col-span-4 md:order-1 md:col-span-8'
              >
                <div className='absolute top-0 -right-3 -z-10 w-[104%] h-[104%] rounded-[1.5rem] bg-colors-dark' />
                <Image
                  src={profilePic}
                  alt='Denzel Udemba'
                  className='w-full xl:w-52 h-auto rounded-2xl'
                />
              </div>
            </div>

          <div className='my-14 flex flex-row xl:flex-col  items-start justify-start  dark:text-colors-light '>
          <div
                className='col-span-3 relative h-max p-2 sm:p-3 xl:col-span-4'
              >
                 <Pipeline className=" fill-colors-dark/30 dark:fill-colors-light/30"/>
              </div>

              <div className='font-medium my-4 max-w-[60%] xl:max-w-full p-4 pl-20 md:pl-0 '>
                    I‘m currently working as a Backend Engineer
                    at Nikkyzam Consulting Services mostly using
                    Spring Boot to build microservices. And occasionally,
                    I delve into build Pipelines with Jenkins and OpenShift.
              </div>
            </div>

        </Layout>
      </main>
    </>
  );
};
