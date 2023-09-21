
export const Layout = ({children, className}) => {
  return (
    <div className={`w-full h-full inline-block  z-0 bg-colors-light p-32 dark:bg-colors-dark ${className}`}>
      {children}
    </div>
  )
}

