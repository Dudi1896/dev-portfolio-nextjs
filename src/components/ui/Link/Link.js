import NextLink from 'next/link';
import { FC } from 'react';

const Link = ({
  className = '',
  href,
  onClick,
  children,
  ...rest
}) => {
  const rootClasses = ` ${className}`;
  const linkClasses = `transition duration-200 ease-in-out${rootClasses}`;

  return (
    <NextLink href={href} className={linkClasses} {...rest} onClick={onClick}>
        {children}
    </NextLink>
  );
};

export { Link };
