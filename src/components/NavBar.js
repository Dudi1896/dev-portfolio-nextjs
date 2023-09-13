import Link from 'next/link';
import React from 'react';
import { Logo } from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon,  GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, MoonIcon }  from './Icons';
import { motion } from 'framer-motion';
import { CustomLink } from './CustomLink';

export const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4'/>
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/portfolio' title='Portfolio' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap space-x-3'>
        <motion.a  href='https://twitter.com'  target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <TwitterIcon />
        </motion.a>

        <motion.a href='https://github.com' target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
           <GithubIcon />
        </motion.a>

          <motion.a href='https://linkedin.com' target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>

        <motion.a href='https://pinterest.com' target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <PinterestIcon />
        </motion.a>

        <motion.a href='https://dribble.com' target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <DribbbleIcon />
        </motion.a>

        <motion.a href='https://dribble.com' target={'_blank'}
        className='w-6'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <MoonIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  );
};
