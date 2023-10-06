import Link from 'next/link';
import { CircularText } from './Icons';

export const HireMe = ({text='HireMe'}) => {
  return (
    <div className=' fixed left-4 bottom-4 z-50
    flex items-center justify-center lg:items-start overflow-hidden
     lg:right-30 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute ms:hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative lg:w-24'>
        <CircularText className={'fill-colors-dark dark:fill-colors-primary animate-spin-slow'} />
        <Link
          href='mailto:denzelu181@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-colors-dark 
          shadow-md border border-solid border-colors-dark w-20 h-20  rounded-full font-semibold hover:bg-colors-light hover:text-colors-dark
          dark:bg-colors-light dark: text-colors-primary lg:w-12 lg:h-12 lg:text-xs'
        >
          {text}
        </Link>
      </div>
    </div>
  );
};
