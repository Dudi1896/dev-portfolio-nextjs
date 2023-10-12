import { AnimatedText } from './AnimatedText';
import { Button } from './Button';

 const  SignUp = () => {
  return  (
        <div className="relative flex  lg:flex-col items-center">
          <div className="  w-full relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
            <div className=' w-2/3 mx-auto m-20 flex flex-col'>
              <AnimatedText
                text='I build & design stuff.'
                className='!text-5xl  xl:!text-2xl !text-start
                lg:!text-2xl md:!text-2xl sm:!text-xl'
              />
            <p className='my-4 text-xl font-medium md:text-sm dark:text-colors-light/80'>
                Open source
                projects, web apps
                and experimentals.
              </p>
              <div className=" flex items-center justify-start pt-14 text-md font-semibold text-gray-800 uppercase" >
              <Button
                text="See my work"
                download={false}
                href='/portfolio'
                target='_blank'
              />
            </div>
              </div>
          </div>


          <div className="  w-full relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
            <div className=' w-2/3 mx-auto m-20  flex flex-col'>
              <AnimatedText
                text='See my latest articles'
                className='!text-5xl  xl:!text-2xl !text-start
                lg:!text-2xl md:!text-2xl sm:!text-xl'
              />
            <p className='my-4 text-xl font-medium md:text-sm dark:text-colors-light/80'>
                About Dev Ops,
                frontend, and maybe some Spring stuff.
              </p>
              <div className=" flex items-center justify-start  pt-14 text-md font-semibold text-gray-800 uppercase" >
              <Button
                text="See my work"
                download={false}
                href='/portfolio'
                target='_blank'
              />
            </div>
              </div>
          </div>

        </div>
  );
}

export default SignUp;