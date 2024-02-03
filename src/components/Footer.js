import React from 'react';
import { Layout } from './Layout';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-colors-dark dark:border-colors-light font-medium text-lg xs:text-sm sm:text-base'>
      <Layout className='py-8 flex items-center xs:items-start justify-between dark:text-colors-light lg:flex-col lg:py-6 '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-start lg:py-2'>
          Built with{' '}
          <span className='text-colors-primary text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link
            href='/'
            className='underline underline-offset-2'
            target={'_self'}
          >
            Denzel Udemba
          </Link>
        </div>
        <Link
          href='mailto:denzeludemba@gmail.com'
          target={'_blank'}
          className='underline underline-offset-2'
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};
