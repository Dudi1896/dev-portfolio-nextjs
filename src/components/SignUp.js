import { AnimatedText } from './AnimatedText';
import { Button } from './Button';

 const  SignUp = () => {
  return  (
        <div className="relative flex  lg:flex-col items-center">
          <div className="  w-full relative z-1  rounded-l-2xl glassmorphism shadow-2xl overflow-hidden ">
            <div className='w-2/3 mx-auto m-20  sm:w-full flex flex-col'>
              <AnimatedText
                text='I build & design stuff.'
                className='!text-6xl  xl:!text-5xl !text-start
                lg:!text-4xl md:!text-3xl sm:!text-2xl'
              />
            <p className='my-4 text-xl font-medium md:text-base dark:text-colors-primary'>
                Open source
                projects, web apps
                and experimentals.
              </p>
              <div className=" flex items-center justify-start pt-14 text-md font-semibold uppercase" >
              <Button
                className='lg:text-base'
                text="See my work"
                download={false}
                href='/mywork'
                target='_self'
              />
            </div>
              </div>
          </div>


          <div className="  w-full relative z-1  rounded-r-2xl  glassmorphism shadow-2xl overflow-hidden">
            <div className=' w-2/3 mx-auto m-20 sm:w-full flex flex-col'>
              <AnimatedText
                text='See my latest blog'
                className='!text-6xl  xl:!text-5xl !text-start
                lg:!text-4xl md:!text-3xl sm:!text-2xl'
              />
            <p className='my-4 text-xl font-medium md:text-base dark:text-colors-primary'>
                About Dev Ops,
                frontend, Spring Boot and maybe some AI stuff.
              </p>
              <div className=" flex items-center justify-start  pt-14 text-md font-semibold  uppercase" >
              <Button
                className='lg:text-base'
                text="Read Blog"
                download={false}
                href='/articles'
                target='_self'
              />
            </div>
              </div>
          </div>

        </div>
  );
}

export default SignUp;