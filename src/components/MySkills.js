import React from 'react';
import {Box, Marquee} from '@/components/ui'
import Image from 'next/image';
import { Layout } from './Layout';

const Stack = ({ src, size }) => {
  const imageHeight = size === 'md' ? 60 : 120;
  const imageWidth = size === 'md' ? 60 : 120;
  return (
    <Box className="px-10 md:px-2 md:w-20  transition duration-200 ease-linear transform hover:scale-125">
      <Image height={imageHeight} width={imageWidth} src={src} alt="" />
    </Box>
  );
};

const MySkills = () => {
  const techStack = [
  '/images/svgs/CircularText.svg',
  '/images/svgs/dribbble-icon.svg',
  '/images/svgs/linkedin.svg',
  '/images/svgs/pinterest.svg',
  '/images/svgs/logo-github.svg',
  '/images/svgs/external-link.svg',
  '/images/svgs/CircularText.svg',
  '/images/svgs/dribbble-icon.svg',
  '/images/svgs/linkedin.svg',
  '/images/svgs/CircularText.svg',
  '/images/svgs/dribbble-icon.svg',
  '/images/svgs/linkedin.svg',
  '/images/svgs/pinterest.svg',
  '/images/svgs/logo-github.svg',
  '/images/svgs/external-link.svg',
  '/images/svgs/CircularText.svg',
  '/images/svgs/dribbble-icon.svg',
  '/images/svgs/linkedin.svg',
  ];

  return (
    <Layout className='px-0 md:px-0 sm:px-0 '>
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



