import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { CustomLink } from '@/components/CustomLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article
        className=' w-full flex  items-center justify-between  relative rounded-br-2xl
      rounded-3xl border border-solid border-colors-dark bg-colors-light dark:bg-colors-dark dark:border-colors-light shadow-2xl p-12'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[101%] h-[103.2%] rounded-[2.5rem] bg-colors-dark dark:bg-colors-light
        rounded-br-3xl'
        />

        <Link
          href={link}
          target='_blank'
          className=' w-1/2 cursor-pointer overflow-hidden rounded-lg'
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

        <div className=' w-1/2 flex flex-col items-start justify-between pl-6'>
          <span className='text-colors-primary font-medium text-xl'>
            {type}
          </span>
          <CustomLink
            href={link}
            target='_blank'
            title={title}
            className=' my-2 text-left text-3xl font-bold dark:text-colors-light/80'
          ></CustomLink>
          <p className='my-2 font-medium text-colors-dark dark:text-colors-light/80'>
            {summary}
          </p>
          <div className='flex items-center self-start mt-2'>
            <div className=' flex items-center px-5 '>
              <Link
                href={github}
                target='_blank'
                className='w-10'
              >
                <GithubIcon className='dark:fill-colors-primary' />
              </Link>
            </div>
            <Button
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
      rounded-2xl border border-solid dark:border-colors-light border-colors-dark dark:bg-colors-dark bg-colors-light p-6'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-colors-dark dark:bg-colors-light
        rounded-br-3xl'
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
          <span className='text-colors-primary font-medium text-xl'>
            {type}
          </span>
          <CustomLink
            href={link}
            target='_blank'
            title={title}
            className=' my-2 text-left text-3xl font-bold dark:text-colors-light/80'
          ></CustomLink>
          <div className=' w-full mt-2 flex items-center justify-between'>
            <Button
              text='Visit Project'
              download={false}
              href={github}
              target='_blank'
            />
            <Link
              href={github}
              target='_blank'
              className='w-8'
            >
              <GithubIcon className='dark:fill-colors-primary'/>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Denzel Udemba | Portfolio</title>
        <meta
          name='description'
          content='Portfolio page that displays my work and portfolio'
        />
      </Head>
      <main className=' w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='My Work'
            className=' mb-16'
          />

          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                link='/'
                github='/'
                type='Featured Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default portfolio;
