import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from '@/components/LiIcon';
import { ResumeData } from './ResumeData';

const Details = ({ position, company, address, work, ref }) => {
  // Split the 'work' string into an array of bullet points
  const bulletPoints = work.split('\n');

  return (
    <>
      <li
        className="text-colors-dark dark:text-colors-light my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      >
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
          <h3 className="text-colors-dark dark:text-colors-light capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;
            <a target={'_blank'} href={company.companyLink} className="text-colors-primary capitalize">
              @{company.name}
            </a>
          </h3>
          <span className="capitalize font-medium text-colors-dark/50 dark:text-colors-light/40 xs:text-sm">
            {company.period} | {company.address}
          </span>
          {/* Render bullet points as an unordered list */}
          <ul className="font-medium w-full md:text-sm">
            {bulletPoints.map((point, index) => (
              <li key={index}>▪ {point}</li>
            ))}
          </ul>
        </motion.div>
      </li>
    </>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-20">
      <h2 className="font-bold text-6xl mb-10 w-full text-center text-colors-dark dark:text-colors-light md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 md:left-[32px] xs:left-[20px] top-0 w-[4px] h-full bg-colors-dark dark:bg-colors-primary origin-top md:w-[2px]"
        />
        <ul className="w-full mx-auto flex flex-col items-start justify-between ml-4 xs:ml-2">
          {ResumeData.companies.map((company, index) => (
            <Details
              key={index}
              position={company.role}
              company={company}
              address={company.address}
              work={company.points.join('\n')} // Combine bullet points with line breaks
              ref={ref}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
