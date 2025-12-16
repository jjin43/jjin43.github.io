'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { galleryData } from '@/lib/data';

export const Gallery = () => {
  const { ref } = useSectionInView('Gallery');
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section ref={ref} id="gallery" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Gallery"
          content="Don't mind the hair, just going through some phases 😅"
        />
        <div className="mx-auto mt-6 grid w-full max-w-3xl gap-2 sm:gap-4">
          {/* Main display image */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image
              src={galleryData[activeImage].src}
              alt={galleryData[activeImage].alt}
              width={1470}
              height={480}
              className="size-full rounded-lg object-cover object-center transition-all duration-300"
              priority={activeImage === 0}
            />
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {galleryData.map((image, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className={`size-full cursor-pointer rounded-lg object-cover object-center transition-all duration-300 hover:opacity-80 ${
                    activeImage === index
                      ? 'ring-primary ring-offset-background ring-2 ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
