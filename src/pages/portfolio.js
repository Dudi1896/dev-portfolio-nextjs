import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import MySkills from '@/components/MySkills';

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

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Denzel Udemba | Portfolio </title>
        <meta
          name='description'
          content='About my portfolio and credentials, experience, education '
        />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-6 pb-0 '>
          <Experience />
          <Education />
        </Layout>
        <MySkills />
      </main>
    </>
  );
};

export default portfolio;
