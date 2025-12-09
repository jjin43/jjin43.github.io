'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Experiences = () => {
  const { ref: sectionRef } = useSectionInView('Experiences');

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Experience"
        content="Professional experiences that I have accumulated."
      />
      <div className="relative max-w-screen-md">
        {experiencesData.map(
          ({
            title,
            description,
            company,
            period,
            location,
            tech,
            bulletPoints,
          }) => (
            <div
              key={company}
              className="not-last:pb-6 relative pl-5 sm:pl-8 [&:not(:last-child)]:pb-6 sm:[&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-1.5 h-full w-[1.5px] group-first:top-4 group-first:h-[calc(100%-16px)]">
                <div className="border-primary bg-border border-1.5 absolute left-[-4px] top-0 size-2 rounded-full" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.175,
                }}
                viewport={{
                  once: true,
                }}
                className={cn('space-y-2 opacity-0 sm:space-y-3')}
              >
                <div>
                  <h3 className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
                    {title}
                  </h3>
                </div>
                <div className="flex items-end justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border sm:size-9">
                      <Icons.building className="size-3 sm:size-5" />
                    </div>
                    <span className="text-xs font-semibold sm:text-base sm:font-semibold md:text-lg">
                      {company}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-[10px] sm:gap-1 sm:text-xs md:text-sm">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Icons.calendar className="size-3 sm:size-4" />
                      <span>{period}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Icons.mapPin className="size-3 sm:size-4" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {description}
                </p>
                {bulletPoints && (
                  <ul className="text-muted-foreground list-inside list-disc space-y-0.5 text-xs sm:space-y-1 sm:text-sm">
                    {bulletPoints.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {tech.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-1.5 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs md:px-3 md:text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
