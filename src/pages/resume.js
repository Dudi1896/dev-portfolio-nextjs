import { Layout } from '@/components/Layout';
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadArrow, GithubIcon } from '@/components/Icons';
import { LinkedInIcon } from '@/components/Icons';
import { ResumeData } from '@/components/ResumeData';

const resume = () => {
  return (
    <Layout className='border border-solid border-colors-primary px-30 py-12'>
      <div className='flex flex-wrap bg-colors-light border border-solid border-colors-indigoBlue pl-6 '>
        <div className='flex w-full flex-row-reverse border border-solid border-colors-primaryDark p-6  justify-items-end'>
          <nav className='flex items-center justify-center flex-wrap space-x-3 border border-solid border-colors-indigoBlue'>
            <motion.a
              href='https://github.com'
              target={'_blank'}
              className='w-5'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
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
              <DownloadArrow className='fill-colors-primary' />
            </motion.a>
            <a
              href='https://linkedin.com'
              target={'_blank'}
            >
              Download
            </a>
          </nav>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-8 '>
          <div className=' row-span-3 space-y-4 border border-solid border-colors-primary'>
            <div className='border border-solid border-colors-primaryDark  p-4'>
              {ResumeData.contact.map((addr, index) => (
                <div key={index}>
                  <div>{addr.website}</div>
                  <div>{addr.email}</div>
                  <div>{addr.address}</div>
                </div>
              ))}
            </div>

            <div className='border border-solid border-colors-primaryDark p-4'>
              <h2 className=' font-semibold'>Core technologies:</h2>
              {ResumeData.technologies.map((techs, index) => (
                <div key={index}>◆{techs}</div>
              ))}
            </div>

            <div className='border border-solid border-colors-primaryDark p-4'>
              <h2 className=' font-semibold'>Other Skills:</h2>
              {ResumeData.otherProficiencies.map((OthSkills, index) => (
                <div key={index}>◆{OthSkills}</div>
              ))}
            </div>
          </div>

          <div className='row-span-6 border pb-14 font-bold space-y-10 border-solid border-colors-primary '>
            <div className='  border max-w-lg font-bold  text-7xl border-solid border-colors-indigoBlue '>
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.name}</div>
                </div>
              ))}
            </div>

            <div className=' max-w-lg border font-semibold text-xl border-solid border-colors-primary ...'>
              {ResumeData.header.map((header, index) => (
                <div key={index}>
                  <div>{header.occupation}</div>
                </div>
              ))}
            </div>

            <div className=' max-w-3xl  font-medium  text-lg border border-solid border-colors-primary'>
              {ResumeData.summary.map((summary, index) => (
                <div key={index}>
                  <div>{summary}</div>
                </div>
              ))}
            </div>

            <div className=' max-w-3xl  font-medium  text-lg border border-solid border-colors-primary'>
              <h2 className='font-bold text-lg'>Work Experience</h2>
              {ResumeData.companies.map((company, index) => (
                <div key={index}>
                  <div>{company.name}</div>
                  <div>{company.period}</div>

                  {company.points.map((point, index) => (
                    <div key={index}>◆ {point}</div>
                  ))}
                </div>
              ))}
            </div>

            <div className=' max-w-3xl  font-medium  text-lg border border-solid border-colors-primary'>
              <h2 className='font-bold text-lg'>Work Experience</h2>
              {ResumeData.companies.map((company, index) => (
                <div key={index}>
                  <div>{company.name}</div>
                  <div>{company.period}</div>

                  {company.points.map((point, index) => (
                    <div key={index}>◆ {point}</div>
                  ))}
                </div>
              ))}
            </div>

            <div className=' max-w-3xl  font-medium  text-lg border border-solid border-colors-primary'>
              <h2 className='font-bold text-lg'>Education</h2>
              {ResumeData.education.map((education, index) => (
                <div key={index}>
                  <div>
                    <div>{education.major1}</div>
                    <div>{education.major2}</div>
                  </div>

                  <div>
                    <div>{education.grade1}</div>
                    <div>{education.grade2}</div>
                  </div>

                  <div>
                    <div>{education.school1}</div>
                    <div>{education.school2}</div>
                  </div>

                  <div>
                    <div>{education.date1}</div>
                    <div>{education.date2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

resume.excludeLayout = true;

export default resume;
