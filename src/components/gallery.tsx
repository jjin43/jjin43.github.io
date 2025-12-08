'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { galleryImages } from '@/lib/data';

export const Gallery = () => {
  const { ref } = useSectionInView('Gallery');
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section ref={ref} id="gallery" className="mt-5 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Gallery"
          content="See me holding a classic comically large check!"
        />
        <div className="mx-auto mt-8 grid w-full max-w-4xl gap-4">
          {/* Main display image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              width={1470}
              height={480}
              className="h-auto w-full max-w-full rounded-lg object-cover object-center transition-all duration-300 md:h-[480px]"
              priority={activeImage === 0}
            />
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={80}
                  className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center transition-all duration-300 hover:opacity-80 ${
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
