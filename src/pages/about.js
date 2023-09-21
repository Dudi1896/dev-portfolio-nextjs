import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Skills from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return (
    <span
      className='dark:text-colors-primary'
      ref={ref}
    ></span>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>Denzel Udemba | About </title>
        <meta
          name='description'
          content='about me content here'
        />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16 '>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16'
          />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-colors-dark/50 dark:text-colors-primary'>
                Biography
              </h2>
              <p className='font-medium my-4 dark:text-colors-light/80'>
                Hi, I'm Denzel, a Full-Stack developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>

              <p className='font-medium my-4 dark:text-colors-light/80'>
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className='font-medium my-4 dark:text-colors-light/80'>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-colors-dark dark:border-colors-light
          bg-colors-light p-8 dark:bg-colors-dark'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-colors-dark dark:bg-colors-light' />
              <Image
                src={profilePic}
                alt='Denzel Udemba'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block  text-7xl font-bold dark:text-colors-primary'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80'>
                  satisfied clients
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block  text-7xl font-bold dark:text-colors-primary'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80'>
                  Projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block  text-7xl font-bold dark:text-colors-primary'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80'>
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
