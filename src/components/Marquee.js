import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee = ({
  className = '',
  speed = 42,
  style = {},
  pauseOnHover = true,
  gradient = false,
  children,
  ...rest
}) => {
  const classes = `
  overflow-y-hidden 
 h-44 xl:h-40 lg:h-36 md:h-32 sm:h-24  ${className}`;

  return (
    <FastMarquee
      gradient={gradient}
      pauseOnHover={pauseOnHover}
      speed={speed}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </FastMarquee>
  );
};

export { Marquee };
