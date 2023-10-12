import Link from 'next/link';
import { LinkArrow } from './Icons';
import React from 'react';

export const Button = ({ download = true, text = 'Button Text', href, target = '_self' }) => {

  const linkTarget = target === '_blank' ? '_blank' : '_self';

  return (
    <div>
      <Link
        href={href}
        target={linkTarget}
        className='flex items-center bg-colors-dark py-2.5 px-3 text-colors-light rounded-lg text-lg
        font-semibold hover:bg-colors-light hover:text-colors-dark border-2 border-solid md:p-2 md:px-4
        md:text-base
        border-transparent max-w-[250px] hover:border-colors-dark hover:dark:border-colors-primary dark:bg-colors-light dark:text-colors-dark'
        download={download}
      >
        {text}
        <div className='flex items-center '>
            <LinkArrow className='ml-3' />
        </div>
      </Link>
    </div>
  );
};
