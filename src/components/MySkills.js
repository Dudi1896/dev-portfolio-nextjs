import React from 'react';
import { Marquee} from '@/components/Marquee'
import Image from 'next/image';
import { Layout } from './Layout';

const Stack = ({ src, size }) => {
  const imageHeight = size === 'md' ? 60 : 120;
  const imageWidth = size === 'md' ? 60 : 120;
  return (
    <div className="px-10 md:px-2 md:w-20  transition duration-200 ease-linear transform hover:scale-125">
      <Image height={imageHeight} width={imageWidth} src={src} alt="" />
    </div>
  );
};

const MySkills = () => {
  const techStack = [
  '/images/svgs/Docker.svg',
  '/images/svgs/next.svg',
  '/images/svgs/React.svg',
  '/images/svgs/Tailwindcss.svg',
  '/images/svgs/SpringBoot.svg',
  '/images/svgs/Jenkins.svg',
  '/images/svgs/Ansible.svg',
  '/images/svgs/ElasticSearch.svg',
  '/images/svgs/NodeJs.svg',
  '/images/svgs/Python.svg',


  ];

  return (
    <Layout className='px-0 md:px-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0 my-5 '>
      <h2 className='font-bold text-6xl mb-10 w-full text-center text-colors-dark dark:text-colors-light
        md:text-6xl xs:text-4xl md:mb-16'>
            Skills
        </h2>
        <Marquee>
          {techStack.map((icon, index) => (
            <Stack 
            key={icon} 
            src={icon}
            size={index < 9 ? 'lg' : 'sm'}
             />
          ))}
        </Marquee>
    </Layout>
  );
};

export default MySkills;



