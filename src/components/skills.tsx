'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="my-10 flex w-full scroll-mt-28 flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 md:mb-20 lg:justify-between">
      {skillsData.map(({ icon, name }, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="flex flex-col items-center gap-2"
        >
          {icon}
          <span className="text-muted-foreground text-sm font-medium">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
