import React from 'react';
import { Marquee } from '@/components/Marquee';
import { Layout } from './Layout';
import {
  Ansible,
  Docker,
  ElasticSearch,
  Jenkins,
  NextJs,
  NodeJs,
  Python,
  ReactIcon,
  SpringBoot,
} from './Icons';

const MySkills = () => {
  const techStack = [
    <Docker
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='Docker'
    />,
    <NextJs
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='nextjs'
    />,
    <Ansible
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='ansible'
    />,
    <ElasticSearch
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='elasticsearch'
    />,
    <Jenkins
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='Jenkins'
    />,
    <NodeJs
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='NodeJs'
    />,
    <Python
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='Python'
    />,
    <ReactIcon
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='React'
    />,
    <SpringBoot
      className='mx-16  md:mx-8 sm:mx-6 w-28 md:w-24 sm:w-20'
      key='SpringBoot'
    />,
  ];

  return (
    <Layout className='px-0 md:px-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0 my-5 '>
      <h2
        className='font-bold text-6xl mb-10 w-full text-center text-colors-dark dark:text-colors-light
        md:text-6xl xs:text-4xl md:mb-16 '
      >
        Skills
      </h2>
      <Marquee className=''>
        {techStack.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </Marquee>
    </Layout>
  );
};

export default MySkills;
