import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

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

export const About = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16 lg:px-0 sm:px-0 md:px-2'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 dark:text-colors-light sm:gap-0  '>
            <div className='col-span-3 flex flex-col items-start justify-start dark:text-colors-light xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 md:mt-10 text-lg font-bold uppercase text-colors-dark/50 dark:text-colors-primary'>
                Biography
              </h2>
              <p className='font-medium my-4'>
                Hi, I'm Denzel, a Full-Stack developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>

              <p className='font-medium my-4'>
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className='font-medium my-4'>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-colors-dark
          bg-colors-light p-8 sm:p-3 xl:col-span-4 md:order-1 md:col-span-8'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[104%] h-[104%] rounded-[1.5rem] bg-colors-dark' />
              <Image
                src={profilePic}
                alt='Denzel Udemba'
                className='w-full h-auto rounded-2xl'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
            md:order-3 '>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block  text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80
                xl-text-center md:text-lg sm:text-base xs:text-sm'>
                  satisfied clients
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block  text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80
                xl-text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block  text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-colors-dark/50 dark:text-colors-light/80
                xl-text-center md:text-lg sm:text-base xs:text-sm'>
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};


