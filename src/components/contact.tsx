'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 mb-64 w-full scroll-mt-28 md:mb-64"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Contact Me"
        content={<>Hire me today and reach me via the following socials!</>}
      />
      <div className="mt-8 flex justify-center">
        <div className="flex w-fit max-w-md flex-col items-start gap-4 text-left">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:justinjinaz@gmail.com" aria-label="Email">
                <Icons.mail className="size-5" />
              </Link>
            </Button>
            <span>justinjinaz@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/jjin43/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Icons.linkedin className="size-5" />
              </Link>
            </Button>
            <span>linkedin.com/in/jjin43</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/jjin43/"
                aria-label="GitHub"
                target="_blank"
              >
                <Icons.github className="size-5" />
              </Link>
            </Button>
            <span>github.com/jjin43</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
