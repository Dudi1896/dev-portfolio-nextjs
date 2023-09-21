import React from 'react';
import { Logo } from './Logo';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from './Icons';
import { motion } from 'framer-motion';
import { CustomLink } from './CustomLink';
import useThemeSwitcher from './Hooks/useThemeSwitcher';

export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
    text-colors-dark dark:text-colors-light'
    >
      <nav>
        <CustomLink
          href='/'
          title='Home'
          className='mr-4'
        />
        <CustomLink
          href='/about'
          title='About'
          className='mx-4'
        />
        <CustomLink
          href='/portfolio'
          title='Portfolio'
          className='mx-4'
        />
        <CustomLink
          href='/articles'
          title='Articles'
          className='ml-4'
        />
      </nav>

      <nav className='flex items-center justify-center flex-wrap space-x-3'>

        <motion.a
          href='https://github.com'
          target={'_blank'}
          className='w-6'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon className='dark:fill-colors-light' />

        </motion.a>

        <motion.a
          href='https://linkedin.com'
          target={'_blank'}
          className='w-6'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-colors-dark text-colors-light" : "bg-colors-light text-colors-dark" }
          `}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-colors-dark'} />
          ) : (
            <MoonIcon className={'fill-colors-dark'} />
          )}
        </button>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  );
};
