import React from 'react';
import { Box, Container, Link, Marquee, Text } from 'tailwindcss-ui';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

const Stack = ({ src }) => {
  return (
    <Box className='bg-white p-4 rounded-lg m-2'>
      <Image height={60} width={60} src={src} alt='' /> {/* Use the Image component */}
    </Box>
  );
};

const TechStack = () => {
  const techStack = [
    '../../public/images/svgs/twitter.svg',
    '../../public/images/svgs/CircularText.svg',
    '../../public/images/svgs/dribbble-icon.svg',
    '../../public/images/svgs/linkedin.svg',
    '../../public/images/svgs/pinterest.svg',
    '../../public/images/svgs/logo-github.svg',
    '../../public/images/svgs/external-link.svg',
  ];

  return (
    <Container className='bg-gray-100 p-4'>
      <Container>
        <div className='flex items-center justify-between'>
          <Text as='h2' className='mb-4 text-4xl'>
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
        </div>
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

      <Box className='stackContainer p-4'>
        <Marquee className='py-4 overflow-x-auto'>
          {techStack.map((icon) => (
            <Stack key={icon} src={icon} />
          ))}
        </Marquee>
      </Box>
    </Container>
  );
};

export default TechStack;