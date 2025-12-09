'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

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

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, link } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex flex-col rounded border p-5 shadow-lg md:w-1/2"
    >
      <Link
        href={link}
        aria-label={title}
        target="_blank"
        className="overflow-hidden rounded"
      >
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="rounded transition-transform hover:scale-105"
        />
      </Link>
      <h3 className="mt-3 text-lg font-medium sm:text-xl">{title}</h3>
      <p className="text-muted-foreground mb-2 mt-1 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            className="rounded-full border px-2 py-1 text-xs sm:px-3 sm:text-sm"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
