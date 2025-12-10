'use client';

import Marquee from 'react-fast-marquee';

import { skillsData } from '@/lib/data';

export const Skills = () => {
  return (
    <div className="my-10 w-full scroll-mt-28 px-5 sm:px-0 md:mb-20">
      <Marquee
        pauseOnHover
        speed={35}
        className="[--marquee-item-spacing:1.75rem]"
      >
        {skillsData.map(({ icon, name }) => (
          <div
            key={name}
            className="group mx-[var(--marquee-item-spacing)] flex flex-col items-center gap-1"
          >
            <div className="scale-75 sm:scale-90 md:scale-100">{icon}</div>
            <span className="text-muted-foreground line-clamp-2 text-center text-[10px] font-medium sm:text-xs md:text-sm">
              {name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
