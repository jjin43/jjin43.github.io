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
    <div className="my-10 w-full scroll-mt-28 px-5 sm:px-0 md:mb-20">
      <div className="grid w-full grid-cols-4 gap-5 md:grid-cols-8">
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
            className="flex flex-col items-center gap-1"
          >
            <div className="scale-50 sm:scale-75 md:scale-100">{icon}</div>
            <span className="text-muted-foreground line-clamp-2 text-center text-[10px] font-medium sm:text-xs md:text-sm">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
