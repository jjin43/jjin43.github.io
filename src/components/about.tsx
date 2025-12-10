'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mt-5 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading
        heading="About Me"
        content={
          <span className="relative inline-flex">
            <Image
              src="/images/profile.png"
              alt="Profile picture"
              width={150}
              height={150}
              className="aspect-square rounded-full object-cover shadow-lg"
            />
            <Image
              src="/images/avatar.png"
              alt="Secondary profile icon"
              width={50}
              height={50}
              className="border-background absolute -bottom-1 -right-1 aspect-square rounded-full border-2 object-cover shadow-lg"
            />
          </span>
        }
      />
      <div className="max-w-2xl text-center leading-7">
        <p className="mb-4 font-bold">
          M.S. & B.S. - Computer Science &nbsp; | &nbsp; Minor - Mathematics
          &nbsp;&nbsp;&nbsp; @ ASU
        </p>
        <p className="mb-4">
          I&apos;m Justin Jin, a fullstack developer and AI Engineer. I&apos;m
          always looking to learn new technologies and work on innovative
          projects. Skilled with cloud infra., microservices architecture, and
          DevOps pipelines &mdash; I deliver quality code and solutions.
        </p>
        <p className="mb-8">
          Seeking job opportunities where I can contribute, learn, and grow.
          I&apos;m the guy you&apos;d call at 2 AM for an emergency turbo patch.
          If you have opportunity where I seem like a good match, don&apos;t
          hesitate to contact me!
        </p>
        <p className="mb-4">
          Big fan of ASCII animations. Caffine Demon. S-Tier Vibe Coder. Nano
          Enjoyer.
        </p>
        <Button asChild size="lg" className="mb-4">
          <Link href="/ascii">
            <span className="font-mono text-sm">I ❤️ ASCII</span>
          </Link>
        </Button>
      </div>
    </motion.section>
  );
};
