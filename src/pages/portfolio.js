import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <>
      <article className=' w-full flex  items-center justify-between rounded-3xl 
      border-solid border-colors-dark bg-colors-light shadow-2xl '>
        <Link href={link} target="_blank"
        className=' w-1/2 cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className=' w-full h-auto' />
        </Link>

        <div className=' w-1/2 flex flex-col items-start justify-between pl-6'>
          <span className='text-colors-primary font-medium text-xl'>{type}</span>
          <Link href={link} target="_blank">
            <h2 className=''>{title}</h2>
          </Link>
          <p>{summary}</p>
          <div>
            <Link href={github} target='_blank'> <GithubIcon /> </Link>
            <Link href={link} target='_blank'>Visit Project</Link>

          </div>
        </div>
      </article>
    </>
  )
}


const portfolio = () => {
  return (
    <>
        <Head>
            <title>Denzel Udemba | Portfolio</title>
            <meta name="description" content="Portfolio page that displays my work and portfolio" />
        </Head>
        <main className=' w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="My Work"/>

                <div className='grid grid-cols-12 gap-24'>
                  <div className='col-span-12'>
                    <FeaturedProject
                    title='Crypto Screener Application'
                    img={project1}
                     summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.'
                    link='/' 
                    github='/'
                    type='Featured Project'/>
                  </div>

                  <div className='col-span-6'>
                    Project-1
                  </div>
                  <div className='col-span-6'>
                    Project-2
                  </div>
                  <div className='col-span-12'>
                    Featured Project
                  </div>
                  <div className='col-span-6'>
                    Project-3
                  </div>
                  <div className='col-span-6'>
                    Project-4
                  </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default portfolio
