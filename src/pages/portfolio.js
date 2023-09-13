import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { CustomLink } from '@/components/CustomLink';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article
        className=' w-full flex  items-center justify-between  relative rounded-br-2xl
      rounded-3xl border border-solid border-colors-dark bg-colors-light shadow-2xl p-12'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[101%] h-[103.2%] rounded-[2.5rem] bg-colors-dark
        rounded-br-3xl'
        />

        <Link
          href={link}
          target='_blank'
          className=' w-1/2 cursor-pointer overflow-hidden rounded-lg'
        >
          <Image
            src={img}
            alt={title}
            className=' w-full h-auto'
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
            className=' my-2 text-left text-3xl font-bold '
          >
          </CustomLink>
          <p className='my-2 font-medium text-colors-dark'>{summary}</p>
          <div className='mt-2 flex items-center'>
            <Link
              href={github}
              target='_blank'
              className='w-10'
            >
              {' '}
              <GithubIcon />{' '}
            </Link>
            <Link
              href={link}
              target='_blank'
              className=' ml-4 rounded-lg bg-colors-dark text-colors-light p-2 px-6 text-lg font-semibold'
            >
              Visit Project
            </Link>
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
      rounded-2xl border border-solid border-colors-dark bg-colors-light p-6'
      >
        <div
          className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-colors-dark
        rounded-br-3xl'
        />
        <Link
          href={link}
          target='_blank'
          className=' w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <Image
            src={img}
            alt={title}
            className=' w-full h-auto'
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
            className=' my-2 text-left text-3xl font-bold'
          >
            {/* <h2 className=' my-2 w-full text-left text-3xl font-bold'>
              {title}
            </h2> */}
          </CustomLink>
          <div className=' w-full mt-2 flex items-center justify-between'>
            <Link
              href={link}
              target='_blank'
              className=' text-lg font-semibold underline'
            >
              Visit
            </Link>
            <Link
              href={github}
              target='_blank'
              className='w-8'
            >
              <GithubIcon />
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
