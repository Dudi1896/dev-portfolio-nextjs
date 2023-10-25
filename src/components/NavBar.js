import React, { useState } from 'react';
import { Logo } from './Logo';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';
import { CustomLink } from './CustomLink';
import useThemeSwitcher from './Hooks/useThemeSwitcher';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MobileLink = ({
  href,
  title,
  className = '',
  toggle,
  target = '_self',
}) => {
  const router = useRouter();

  const linkTarget = target === '_blank' ? '_blank' : '_self';

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <a
      href={href}
      className={`${className} relative group my-4`}
      onClick={handleClick}
      target={linkTarget}
      // Include the recommended attributes for security
      rel={linkTarget === '_blank' ? 'noopener noreferrer' : null}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-colors-dark 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-colors-light dark:text-colors-light`}
      >
        &nbsp;
      </span>
    </a>
  );
};

export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className='w-full px-32 py-2 font-medium flex items-center justify-between
    text-colors-dark dark:text-colors-light relative lg:px-16 md:px-12 sm:px-8 ms:px-4 z-10'
    >
      <Logo />

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className=' min-w-[70vw] hidden lg:flex flex-col z-30 items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-colors-dark/90 dark:bg-colors-light/75 text-colors-light dark:text-colors-dark rounded-lg backdrop-blur-md py-20'
        >
          <nav className='flex items-center flex-col justify-center'>
            <MobileLink
              href='/'
              title='Home'
              toggle={handleClick}
            />
            <MobileLink
              href='/portfolio'
              title='Portfolio'
              toggle={handleClick}
            />
            <MobileLink
              href='/mywork'
              title='MyWork'
              toggle={handleClick}
            />
            <MobileLink
              href='/resume'
              title='Resume'
              toggle={handleClick}
            />
            <MobileLink
              href='/articles'
              title='Articles'
              toggle={handleClick}
            />
          </nav>

          <nav className=' flex items-center justify-center space-x-3 mt-4'>
            <motion.a
              href='https://github.com/Dudi1896/'
              target={'_blank'}
              className='w-6'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className='fill-colors-light dark:fill-colors-dark' />
            </motion.a>

            <motion.a
              href='https://www.linkedin.com/in/denzeludemba/'
              target={'_blank'}
              className='w-6'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center md:w-6 sm:w-6 xs:w-6 rounded-full p-1
        ${
          mode === 'light'
            ? 'bg-colors-dark text-colors-light'
            : 'bg-colors-light text-colors-dark'
        }
        `}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-colors-dark'} />
              ) : (
                <MoonIcon className={'fill-colors-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className=' space-x-5 flex justify-between items-center lg:hidden '>
        <nav>
          <CustomLink
            href='/'
            title='Home'
            className='mr-4'
          />
          <CustomLink
            href='/portfolio'
            title='Portfolio'
            className='mx-4'
          />
          <CustomLink
            href='/mywork'
            title='MyWork'
            className='mx-4'
          />
          <CustomLink
            href='/resume'
            title='Resume'
            target={'_blank'}
            className='mx-4'
          />
          <CustomLink
            href='/articles'
            title='Articles'
            className='ml-4'
          />
        </nav>

        <nav className=' flex items-center justify-center space-x-3 '>
          <motion.a
            href='https://github.com/Dudi1896'
            target={'_blank'}
            className='w-6'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className='dark:fill-colors-light' />
          </motion.a>

          <motion.a
            href='https://www.linkedin.com/in/denzeludemba/'
            target={'_blank'}
            className='w-6'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center  rounded-full p-1
          ${
            mode === 'light'
              ? 'bg-colors-dark text-colors-light'
              : 'bg-colors-light text-colors-dark'
          }
          `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-colors-dark'} />
            ) : (
              <MoonIcon className={'fill-colors-dark'} />
            )}
          </button>
        </nav>
      </div>

      <button
        className='hidden lg:flex flex-col justify-center items-center'
        onClick={handleClick}
      >
        <span
          className={`bg-colors-dark dark:bg-colors-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
          } `}
        ></span>
        <span
          className={`bg-colors-dark dark:bg-colors-light block duration-300 ease-out h-0.5 w-8 rounded-sm  my-1.5 ${
            isOpen ? 'opacity-0' : 'opacity-1'
          }`}
        ></span>
        <span
          className={`bg-colors-dark dark:bg-colors-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
    </header>
  );
};
