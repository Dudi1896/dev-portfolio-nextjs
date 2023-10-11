import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee = ({
  className = '',
  speed = 30,
  style = {},
  pauseOnHover = true,
  gradient = false,
  children,
  ...rest
}) => {
  const classes = `overflow-y-hidden ${className}`;

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
