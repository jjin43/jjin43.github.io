'use client';
import React from 'react';
import { motion } from 'framer-motion';

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
        <h2 className="mb-6 text-center text-xl font-bold sm:mb-8 sm:text-2xl md:text-3xl">
          Awards
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {awardsData.map((award, idx) => (
          <motion.div
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}
            className="rounded-lg bg-white p-4 shadow sm:p-6 dark:bg-gray-800"
          >
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
              {award.title}
            </h3>
            <p className="mb-1 text-sm text-gray-600 sm:text-base dark:text-gray-300">
              {award.issuer} &mdash; {award.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
