import { Layout } from '@/components/Layout';
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadArrow, GithubIcon } from '@/components/Icons';
import { LinkedInIcon } from '@/components/Icons';
import { ResumeData } from '@/components/ResumeData';
import Head from 'next/head';
import Link from 'next/link';

const resume = () => {
  return (
 <> 
  <Head>
    <title>Denzel Udemba | Resume </title>
    <meta
      name='description'
      content='View Resume'
    />
  </Head>
  
    <Layout className=' text-colors-grayStandard bg-colors-whiteBg xs:p-2 ms:0 sm:p-2 md:p-3 lg:p-5 xl:p-5 px-30 py-12'>
      <div className='flex flex-wrap bg-colors-resumeBg px-3 '>
        <div className='flex w-full flex-row-reverse p-6  justify-items-end'>
          <nav className='flex items-center justify-center flex-wrap space-x-3'>
            <motion.a
              href='https://github.com/Dudi1896'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className='fill-colors-primary' />
            </motion.a>

            <motion.a
              href='https://www.linkedin.com/in/denzel-udemba-3500505b/'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href='/public/Resume_DenzelUdemba_2023.pdf'
              download={true}
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DownloadArrow />
            </motion.a>
            <a
              href='/public/Resume_DenzelUdemba_2023.pdf'
              target={'_blank'}
              download={true}
            >
              Download
            </a>
          </nav>
        </div>
        <div className=' grid grid-rows-3 grid-flow-col xl:grid-flow-row gap-5 '>
          <div className=' row-span-2 space-y-4 xl:grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1'>
            <div className='p-4 lg:text-base md:text-sm '>
              {ResumeData.contact.map((addr, index) => (
                <div key={index}>
                  <div>
                  <Link href='/' target='_self' className=' text-colors-primary underline'>
                    {addr.website}
                  </Link>
                  </div>
                  <div>
                  <Link href='mailto:denzelu181@gmail.com' target='_blank' className=' text-colors-primary underline'>
                    {addr.email}
                  </Link>
                  </div>
                  <div>{addr.address}</div>
                </div>
              ))}
            </div>

            <div className='p-4'>
              <h2 className=' text-colors-primary font-semibold'>
                Core technologies:
              </h2>
              {ResumeData.technologies.map((techs, index) => (
                <div className='lg:text-base md:text-sm' key={index}>▪ {techs}</div>
              ))}
            </div>

            <div className='p-4'>
              <h2 className=' text-colors-primary font-semibold'>
                Other Skills:
              </h2>
              {ResumeData.otherProficiencies.map((OthSkills, index) => (
                <div className='lg:text-base md:text-sm' key={index}>▪ {OthSkills}</div>
              ))}
            </div>

            {/* <div className='p-4'>
              <h2 className='text-colors-primary font-semibold'>Certifications:</h2>
              {ResumeData.certification.map((certification, index) => (
                <div
                className='lg:text-base md:text-sm'
                  key={index}
                >
                  <div className='  max-w-2xl flex justify-between'>
                    <p>▪ {certification.org1}</p>
                    <p>{certification.cert1}</p>
                  </div>

                  <div className='  max-w-2xl flex justify-between'>
                    <p>▪ {certification.org2}</p>
                    <p>{certification.cert2}</p>
                  </div>
                </div>
              ))}
            </div> */}

          </div>

          <div className='row-span-6 xl:row-span-full pb-14 font-bold space-y-10'>
            <div className=' text-colors-primary max-w-lg font-bold  text-7xl xl:text-5xl'>
              <Link  href='/' target={`_self`} >
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.name}</div>
                </div>
              ))}
              </Link>
            </div>

            <div className=' text-colors-dark font-medium text-xl xl:text-lg'>
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.occupation}</div>
                </div>
              ))}
            </div>

            <div className=' max-w-4xl  font-medium  text-lg lg:text-base md:text-sm'>
              {ResumeData.summary.map((summary, index) => (
                <div key={index}>
                  <div>{summary}</div>
                </div>
              ))}
            </div>

            <div className=' font-medium text-lg'>
              <h2 className=' text-colors-primary font-bold text-lg 
              border-b-2 border-solid border-colors-primaryDark'>Work Experience</h2>
              {ResumeData.companies.map((company, index) => (
                <div className='space-y-1' key={index}
                >
                  <div className='max-w-4xl pt-7 flex md:flex-col justify-between'>
                    <p className=' text-colors-dark lg:text-base md:text-sm'><span className=' text-colors-primary text-xl lg:text-base md:text-sm font-semibold'>{company.name}</span> — {company.role}</p>
                    <p className=' text-xs'>{company.period}</p>
                  </div>

                  <div className='max-w-3xl space-y-3'>
                    {company.points.map((point, index) => (
                      <div className='text-base lg:text-base md:text-sm' key={index}>▪ {point}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className=' font-medium text-lg'>
              <h2 className='text-colors-primary font-bold text-lg border-b-2 border-solid border-colors-primaryDark'>Education</h2>
              {ResumeData.education.map((education, index) => (
                <div
                  className=' mt-5 space-y-3'
                  key={index}
                >
                  <div className=' max-w-4xl flex 2xl:flex-col  justify-between'>
                    <p className=' text-base lg:text-sm'>▪ {education.major1}</p>
                    <p className=' text-base lg:text-sm'>{education.school1}</p>
                    <p className=' text-xs'>{education.date1}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Layout>
 </>
  );
};

resume.excludeLayout = true;

export default resume;
