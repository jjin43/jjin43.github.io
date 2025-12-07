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
    <section ref={ref} id="awards" className="scroll-mt-28 py-12">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-center text-3xl font-bold">Awards</h2>
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
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-800"
          >
            <h3 className="mb-2 text-xl font-semibold">{award.title}</h3>
            <p className="mb-1 text-gray-600 dark:text-gray-300">
              {award.issuer} &mdash; {award.year}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
