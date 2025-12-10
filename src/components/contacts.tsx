'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { contacts } from '@/lib/data';

export const Contacts = () => {
  const { ref } = useSectionInView('Contacts');

  return (
    <motion.section
      ref={ref}
      id="contacts"
      className="my-10 mb-36 scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Contact Me"
        content={<>Hire me today and reach me via the following socials!</>}
      />
      <div className="mt-8 flex justify-center">
        <div className="flex w-fit max-w-md flex-col items-start gap-4 text-left">
          {contacts.map((contact) => (
            <div className="flex items-center gap-4" key={contact.type}>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href={contact.href}
                  aria-label={contact.ariaLabel}
                  target={contact.type !== 'email' ? '_blank' : undefined}
                >
                  <contact.icon className="size-4 sm:size-5" />
                </Link>
              </Button>
              <span className="text-sm sm:text-base">{contact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
