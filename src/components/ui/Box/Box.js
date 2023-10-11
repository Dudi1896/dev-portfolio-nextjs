import React from 'react';

export const Box = ({
  className = '',
  style = {},
  as: Tag = 'div',
  children,
  html,
  ...rest
}) => {
  const htmlProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Tag className={className} style={style} {...rest} {...htmlProps}>
      {children}
    </Tag>
  );
};
