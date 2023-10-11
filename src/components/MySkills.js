import React from 'react';
import {Box, Container, Text, Marquee, Link} from '@/components/ui'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Stack = ({ src }) => {
  return (
    <Box className="px-6 transition duration-200 ease-linear transform hover:scale-125">
      <Image height={60} width={60} src={src} alt='' />
    </Box>
  );
};

const TechStack = () => {
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
    <Container full className="mb-10 md:mb-28">
      <Container>
        <Box className='flex items-center justify-between'>
          <Text as='h2' className='mb-4' fontSize='4xl'>
            <motion.span
              className='block'
              initial={{ x: -10 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0 }}
            >
              Tech Stack
            </motion.span>
          </Text>
          <Link
            href='https://docs.google.com/document/d/16-sqqDzL3SR1vomlTW6gKOKIqJ7xd_MgfJXrDLkqbnU/'
            target='_blank'
            className='font-heading mb-6 text-sm font-medium uppercase hover:text-rose-500 dark:hover:text-rose-500 md:mb-0'
          >
            <motion.span
              className='block tracking-wider'
              initial={{ x: 10 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0 }}
            >
              See my resume
            </motion.span>
          </Link>
        </Box>
        <Text className='max-w-lg'>
          <motion.span
            className='block'
            initial={{ x: -10 }}
            transition={{ duration: 0.6 }}
            whileInView={{ x: 0 }}
          >
            Over the last couple of years I have worked on a variety of projects
            and have also used a variety of technologies, below are some of the
            technologies I have used.
          </motion.span>
        </Text>
      </Container>

      <Box className='bg-colors-light dark:bg-[#0d1424] h-48 md:h-64 2xl:h-80 mt-10 flex items-center'>
        <Marquee className='py-4'>
          {techStack.map((icon) => (
            <Stack key={icon} src={icon} />
          ))}
        </Marquee>
      </Box>
    </Container>
  );
};

export default TechStack;



