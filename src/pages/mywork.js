import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import ums from '../../public/images/svgs/ums-photo.png';
import letterScript from '../../public/images/projects/LetterConstructor.jpg'
import project2 from '../../public/images/projects/sds.png';
import roboFriends from '../../public/images/projects/robofriends.png'
import { CustomLink } from '@/components/CustomLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article
        className=' w-full flex  items-center justify-between  relative rounded-br-2xl
      rounded-3xl border border-solid border-colors-dark bg-colors-light
       dark:bg-colors-dark dark:border-colors-light shadow-2xl p-12
       lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[101%] h-[103.2%] rounded-[2.5rem] bg-colors-dark dark:bg-colors-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w[100%] xs:w-full xs:rounded-[1.5rem]' 
        />

        <Link
          href={link}
          target='_blank'
          className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
          <FramerImage
            src={img}
            alt={title}
            className=' w-full h-auto'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw'
          />
        </Link>

        <div className=' w-1/2 flex flex-col items-start justify-between pl-6
        lg:w-full lg:pl-0 lg:pt-6'>
          <span className='text-colors-primary font-medium text-xl xs:text-base'>
            {type}
          </span>
          <CustomLink
            href={link}
            target='_blank'
            title={title}
            className=' my-2 text-left text-3xl font-bold dark:text-colors-light/80
            sm:text-sm'
          ></CustomLink>
          <p className='my-2 font-medium sm:text-sm text-colors-dark dark:text-colors-light/80'>
            {summary}
          </p>
          <div className='flex items-center self-start mt-2'>
            <div className=' flex items-center px-5 md:px-1 '>
              <Link
                href={github}
                target='_blank'
                className='w-10 md:text-base'
              >
                <GithubIcon className='dark:fill-colors-primary md:w-6' />
              </Link>
            </div>
            <Button
              className='sm:text-sm'
              text='Visit Project'
              download={false}
              href={github}
              target='_blank'
            />
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <>
      <article
        className=' w-full flex-col flex  items-center justify-center  relative
      rounded-2xl border border-solid dark:border-colors-light
       border-colors-dark dark:bg-colors-dark bg-colors-light p-6 xs:p-4'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] 
          rounded-[2rem] bg-colors-dark dark:bg-colors-light rounded-br-3xl
          md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'
        />
        <Link
          href={link}
          target='_blank'
          className=' w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage
            src={img}
            alt={title}
            className=' w-full h-auto'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className=' w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-colors-primary font-medium text-xl lg:text-lg 
          md:text-base'>
            {type}
          </span>
          <CustomLink
            href={link}
            target='_blank'
            title={title}
            className='lg:text-2xl my-2 text-left text-3xl font-bold dark:text-colors-light/80'
          ></CustomLink>
          <div className=' w-full mt-2 flex items-center justify-between'>
            <Button
              text='Visit Project'
              download={false}
              href={github}
              target='_blank'
              className='md:text-base'
            />
            <Link
              href={github}
              target='_blank'
              className='w-8 md:w-6'
            >
              <GithubIcon className='dark:fill-colors-primary'/>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const mywork = () => {
  return (
    <>
      <Head>
        <title>Denzel Udemba | Project Page</title>
        <meta
          name='description'
          content='mywork page that displays projects worked on'
        />
      </Head>
      <main className=' w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16 sm:px-5'>
          <AnimatedText
            text='My Work'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl
            xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16
          lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='NextJs-Spring Boot Auth'
                img={ums}
                summary='A Robust FullStack React and Spring Boot Application utilizing modern design and 
                efficent coding practices. Authentication provided throught Facebook and other 3rd part providers'
                link='https://github.com/Dudi1896/user-mngt-system'
                github='https://github.com/Dudi1896/user-mngt-system'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 lg:col-span-12'>
              <Project
                title='SDS Consultancy Website'
                img={project2}
                summary='Mock Software Consulting Website using HTML, CSS and JavaScript'
                link='https://dudi1896.github.io/sds.github.io'
                github='https://dudi1896.github.io/sds.github.io'
                type='Project'
              />
            </div>
            <div className='col-span-6 lg:col-span-12'>
              <Project
                title='Robo Friends'
                img={roboFriends}
                summary='RoboFriends Web App made with Creat-React-App'
                link='https://dudi1896.github.io/robofriends/'
                github='https://github.com/Dudi1896/robofriends/'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Python Letter Generator'
                img={letterScript}
                summary='Basic Python script that sources variables from an excel sheet to automate letter generation
                 of a standard word document template into multiple unique letters which are then converted to PDF.'
                link='https://github.com/Dudi1896/PyLetterUpdater'
                github='https://github.com/Dudi1896/PyLetterUpdater'
                type='Featured Project'
              />
            </div>

            {/* <div className='col-span-6 lg:col-span-12'>
              <Project
                title='Crypto Screener Application'
                img={ums}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 lg:col-span-12'>
              <Project
                title='Crypto Screener Application'
                img={ums}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default mywork;
