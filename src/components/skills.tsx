'use client';

import Marquee from 'react-fast-marquee';

import { langData, techData } from '@/lib/data';

export const Skills = () => {
  return (
    <div className="my-10 w-full scroll-mt-28 px-5 sm:px-0 md:mb-20">
      <div className="mb-8 space-y-6">
        <div className="mb-8">
          <h3 className="mb-4 text-center text-lg font-semibold">Languages</h3>
          <Marquee
            pauseOnHover
            speed={35}
            className="[--marquee-item-spacing:1.75rem]"
          >
            {langData.map(({ icon, name }) => (
              <div
                key={name}
                className="group mx-[var(--marquee-item-spacing)] flex select-none flex-col items-center gap-1"
              >
                <div className="scale-75 sm:scale-90 md:scale-100">{icon}</div>
                <span className="text-muted-foreground line-clamp-2 text-center text-[10px] font-medium sm:text-xs md:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        <div>
          <h3 className="mb-4 text-center text-lg font-semibold">
            Technologies
          </h3>
          <Marquee
            pauseOnHover
            speed={35}
            className="[--marquee-item-spacing:1.75rem]"
          >
            {techData.map(({ icon, name }) => (
              <div
                key={name}
                className="group mx-[var(--marquee-item-spacing)] flex select-none flex-col items-center gap-1"
              >
                <div className="scale-75 sm:scale-90 md:scale-100">{icon}</div>
                <span className="text-muted-foreground line-clamp-2 text-center text-[10px] font-medium sm:text-xs md:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
