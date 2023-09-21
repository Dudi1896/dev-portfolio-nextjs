import Link from 'next/link';
import { useRouter } from 'next/router';

export const CustomLink = ({ href, title, className = '', target = '_self'  }) => {
    const router = useRouter();

    // Define a variable to hold the 'target' attribute value
    const linkTarget = target === '_blank' ? '_blank' : '_self';

    return (
      <Link
        href={href}
        className={`${className} relative group`}
        target={linkTarget}
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
      </Link>
    );
  };