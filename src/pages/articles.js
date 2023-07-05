import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'

const articles = () => {
  return (
    <>
        <Head>
            <title>Denzel Udemba | Articles</title>
            <meta name="description" content="Articles page that displays my articles/blogs" />
        </Head>
        <main className=' w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="My Blog"/>
            </Layout>
        </main>
    </>
  )
}

export default articles