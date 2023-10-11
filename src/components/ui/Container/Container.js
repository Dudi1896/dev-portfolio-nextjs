import { CSSProperties, ReactNode, createElement } from 'react';

const Container = ({
  className = '',
  style = {},
  as: Tag = 'div',
  id,
  children,
  full,
  ...rest
}) => {
  let classes = '';

  if (!full) {
    classes = 'mx-auto max-w-8xl px-5 md:px-10 2xl:px-12';
  }

  classes = `${classes} ${className}`;

  return createElement(Tag, { className: classes, id, ...rest }, children);
};

export { Container };
