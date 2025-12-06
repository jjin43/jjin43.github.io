'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
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
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href="mailto:justinjinaz@gmail.com">
                justinjinaz@gmail.com
              </Link>
            </Button>
          </>
        }
      />
    </motion.section>
  );
};
