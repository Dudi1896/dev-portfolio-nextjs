import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>Denzel Udemba | About </title>
        <meta
          name='description'
          content='anout me content here'
        />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div>
              <h2 className='mb-4 text-lg font-bold uppercase text-colors-dark/75'>
                Biography
              </h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
