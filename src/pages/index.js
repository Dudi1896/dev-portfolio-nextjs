import { Layout } from '@/components/Layout';
import Head from 'next/head';
import profilePic from "../../public/images/svgs/home-design-unscreen.gif";
import Image from 'next/image';
import { AnimatedText } from '@/components/AnimatedText';
import lightBulb from '../../public/images/svgs/tree-git.svg';
import { CustomLink } from '@/components/CustomLink';
import { About } from '@/components/About';
import { Button } from '@/components/Button';
import SignUp from '@/components/SignUp';
import { GitTree } from '@/components/Icons';

export default function Home() {

  return (
    <>
      <Head>
        <title>Software Engineer | Denzel Udemba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name='description'
          content='generated by create next app'
        />
      </Head>
      <main className=' text-colors-dark sm:w-full w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-0 md:p-16 sm:pt-8 '>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full -z-50'>  
              <Image
                src={profilePic}
                alt='Denzel Udemba'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Software Engineer and DevOps Enthusiast.'
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center
                lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium dark:text-colors-light/80'>
                Greetings and welcome to my tech sanctuary! Here, I dive deep
                 into the ever-evolving realm of software development and the 
                 intricate landscapes of cloud-native technologies. As a fellow
                  software engineer with a passion for DevOps, I‘m thrilled to have
                   you on board for this exciting journey. Together, we`ll embark on
                  a thrilling exploration of the digital frontier. 🚀
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Button
                 text="Resume"
                 download={false}
                 href='/resume'
                 target='_blank'
                />
                <CustomLink 
                   title='Contact' 
                  className='ml-4 text-lg font-medium text-colors-dark dark:text-colors-light left-0 -bottom-0.5'
                  href='mailto:denzelu181@gmail.com'
                  target={'_blank'}
                  >
                  Contact
                </CustomLink >
              </div>
            </div>
          </div>
          <About />
        <SignUp />
        </Layout>
        {/* <HireMe /> */}
        <div className='absolute right-8 bottom-8 block lg:hidden '>
          <GitTree className="w-64 fill-colors-dark/5  dark:fill-colors-light/20"/>
        </div>
      </main>
    </>
  );
}
