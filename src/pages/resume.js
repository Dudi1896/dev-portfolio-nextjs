import { Layout } from '@/components/Layout';
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadArrow, GithubIcon } from '@/components/Icons';
import { LinkedInIcon } from '@/components/Icons';
import { ResumeData } from '@/components/ResumeData';
import Head from 'next/head';

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
  
    <Layout className=' text-colors-grayStandard bg-colors-whiteBg px-30 py-12'>
      <div className='flex flex-wrap bg-colors-resumeBg px-3 '>
        <div className='flex w-full flex-row-reverse p-6  justify-items-end'>
          <nav className='flex items-center justify-center flex-wrap space-x-3'>
            <motion.a
              href='https://github.com'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className='fill-colors-primary' />
            </motion.a>

            <motion.a
              href='https://linkedin.com'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href='https://linkedin.com'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DownloadArrow />
            </motion.a>
            <a
              href='https://linkedin.com'
              target={'_blank'}
            >
              Download
            </a>
          </nav>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-5 '>
          <div className=' row-span-2 space-y-4      '>
            <div className='p-4'>
              {ResumeData.contact.map((addr, index) => (
                <div key={index}>
                  <div className=' text-colors-primary underline'>
                    {addr.website}
                  </div>
                  <div className=' text-colors-primary underline'>
                    {addr.email}
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
                <div key={index}>▪ {techs}</div>
              ))}
            </div>

            <div className='p-4'>
              <h2 className=' text-colors-primary font-semibold'>
                Other Skills:
              </h2>
              {ResumeData.otherProficiencies.map((OthSkills, index) => (
                <div key={index}>▪ {OthSkills}</div>
              ))}
            </div>

            <div className='p-4'>
              <h2 className='text-colors-primary font-semibold'>Certifications:</h2>
              {ResumeData.certification.map((certification, index) => (
                <div
                  className=' text-base'
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

                  <div className='  max-w-2xl flex justify-between'>
                    <p>▪ {certification.org3}</p>
                    <p>{certification.cert3}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className='row-span-6  pb-14 font-bold space-y-10  '>
            <div className=' text-colors-primary  max-w-lg font-bold  text-7xl'>
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.name}</div>
                </div>
              ))}
            </div>

            <div className=' text-colors-dark   font-medium text-xl'>
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.occupation}</div>
                </div>
              ))}
            </div>

            <div className=' max-w-4xl  font-medium  text-lg'>
              {ResumeData.summary.map((summary, index) => (
                <div key={index}>
                  <div>{summary}</div>
                </div>
              ))}
            </div>

            <div className=' font-medium text-lg'>
              <h2 className=' text-colors-primary font-bold text-lg border-b-2 border-solid border-colors-primaryDark'>Work Experience</h2>
              {ResumeData.companies.map((company, index) => (
                <div className='space-y-1' key={index}
                >
                  <div className='max-w-4xl pt-7 flex justify-between'>
                    <p className=' text-colors-dark'><span className=' text-colors-primary text-xl font-semibold'>{company.name}</span> — {company.role}</p>
                    <p className=' text-xs'>{company.period}</p>
                  </div>

                  <div className='max-w-3xl space-y-3'>
                    {company.points.map((point, index) => (
                      <div className='text-base' key={index}>▪ {point}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className=' font-medium text-lg'>
              <h2 className='text-colors-primary font-bold text-lg border-b-2 border-solid border-colors-primaryDark'>Education</h2>
              {ResumeData.education.map((education, index) => (
                <div
                  className=' space-y-3'
                  key={index}
                >
                  <div className='  max-w-4xl flex justify-between'>
                    <p className=' text-base' >▪ {education.major1}</p>
                    <p className=' text-base'>{education.school1}</p>
                    <p className=' text-xs'>{education.date1}</p>
                  </div>

                  <div className='  max-w-4xl flex justify-between'>
                    <p className=' text-base'>▪ {education.major2}</p>
                    <p className=' text-base'>{education.school2}</p>
                    <p className=' text-xs'>{education.date2}</p>
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
