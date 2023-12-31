export const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block  z-0 bg-colors-light  dark:bg-colors-dark
    p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  ${className}`}
    >
      {children}
    </div>
  );
};
