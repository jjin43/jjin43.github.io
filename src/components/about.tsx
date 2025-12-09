'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mt-5 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading
        heading="About Me"
        content={
          <Image
            src="/images/profile.png"
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full object-cover shadow-lg"
          />
        }
      />
      <div className="max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Justin Jin, I&apos;m a fullstack developer. I&apos;m always
          looking to learn new technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
        <p>
          M.S. & B.S. - Computer Science &nbsp; | &nbsp; Minor - Mathematics
          &nbsp;&nbsp;&nbsp; @ ASU
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
