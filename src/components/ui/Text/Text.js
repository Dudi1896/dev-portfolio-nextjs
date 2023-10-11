import React from 'react';

const Text = ({
  as: Tag = 'p',
  fontSize = 'lg',
  fontWeight = 'normal',
  className = '',
  casing = 'none',
  align,
  style = {},
  children,
  html,
  ...rest
}) => {
  const classes = `leading-tight dark:text-white ${
    fontSize === 'xs' ? 'text-xs md:text-sm' :
    fontSize === 'sm' ? 'text-sm md:text-base' :
    fontSize === 'md' ? 'text-base' :
    fontSize === 'lg' ? 'text-lg 2xl:text-xl' :
    fontSize === 'xl' ? 'text-xl' :
    fontSize === '2xl' ? 'text-2xl' :
    fontSize === '3xl' ? 'text-3xl' :
    fontSize === '4xl' ? 'text-3xl md:text-4xl' :
    fontSize === '5xl' ? 'text-[2.6rem] leading-6 md:text-5xl' :
    fontSize === '6xl' ? 'text-6xl' : ''
  } ${
    casing === 'none' ? 'transform-none' :
    casing === 'uppercase' ? 'uppercase' :
    casing === 'lowercase' ? 'lowercase' :
    casing === 'capitalize' ? 'capitalize' : ''
  } ${
    align === 'left' ? 'text-left' :
    align === 'center' ? 'text-center' :
    align === 'right' ? 'text-right' : ''
  } ${
    fontWeight === 'light' ? 'font-light' :
    fontWeight === 'normal' ? 'font-normal' :
    fontWeight === 'medium' ? 'font-medium' :
    fontWeight === 'bold' ? 'font-semibold' : ''
  } ${className}`;

  const htmlProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Tag className={classes} {...rest} {...htmlProps}>
      {children}
    </Tag>
  );
};

export { Text };
