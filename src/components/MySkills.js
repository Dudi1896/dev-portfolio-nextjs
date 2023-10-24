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
      className='px-16 md:px-8'
      key='Docker'
    />,
    <NextJs
      className='px-16 md:px-8 dark:fill-colors-whiteBg'
      key='nextjs'
    />,
    <Ansible
      className='px-16 md:px-8'
      key='ansible'
    />,
    <ElasticSearch
      className='px-16 md:px-8'
      key='elasticsearch'
    />,
    <Jenkins
      className='px-16 md:px-8'
      key='Jenkins'
    />,
    <NodeJs
      className='px-16 md:px-8'
      key='NodeJs'
    />,
    <Python
      className='px-16 md:px-8'
      key='Python'
    />,
    <ReactIcon
      className='px-16 md:px-8'
      key='React'
    />,
    <SpringBoot
      className='px-16 md:px-8'
      key='SpringBoot'
    />,
  ];

  return (
    <Layout className='px-0 md:px-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0 my-5 '>
      <h2
        className='font-bold text-6xl mb-10 w-full text-center text-colors-dark dark:text-colors-light
        md:text-6xl xs:text-4xl md:mb-16'
      >
        Skills
      </h2>
      <Marquee>
        {techStack.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </Marquee>
    </Layout>
  );
};

export default MySkills;
