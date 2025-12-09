'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contacts = () => {
  const { ref } = useSectionInView('Contacts');

  return (
    <motion.section
      ref={ref}
      id="contacts"
      className="my-10 scroll-mt-28 md:mb-52"
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
                <Icons.mail className="size-4 sm:size-5" />
              </Link>
            </Button>
            <span className="text-sm sm:text-base">justinjinaz@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/jjin43/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Icons.linkedin className="size-4 sm:size-5" />
              </Link>
            </Button>
            <span className="text-sm sm:text-base">linkedin.com/in/jjin43</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/jjin43/"
                aria-label="GitHub"
                target="_blank"
              >
                <Icons.github className="size-4 sm:size-5" />
              </Link>
            </Button>
            <span className="text-sm sm:text-base">github.com/jjin43</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://x.com/jjin43" aria-label="X" target="_blank">
                <Icons.x className="size-4 sm:size-5" />
              </Link>
            </Button>
            <span className="text-sm sm:text-base">x.com/jjin43</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
