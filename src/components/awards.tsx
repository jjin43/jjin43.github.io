'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { awardsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Awards: React.FC = () => {
  const { ref } = useSectionInView('Awards');
  return (
    <section ref={ref} id="awards" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Awards"
          content="Recognition and awards I've received."
        />
      </motion.div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {awardsData.map((award, idx) => (
          <motion.div
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}
            className="flex flex-col rounded border p-5 shadow-lg"
          >
            <h3 className="text-base font-medium">{award.title}</h3>
            <p className="text-muted-foreground mt-1 text-xs">{award.issuer}</p>
            <p className="text-muted-foreground text-xs">
              &mdash; {award.year}
            </p>
            {award.tech && (
              <div className="mt-2 flex flex-wrap gap-2">
                {award.tech.map((tech: string) => (
                  <span
                    className="rounded-full border px-2 py-1 text-xs sm:px-3 sm:text-sm"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
